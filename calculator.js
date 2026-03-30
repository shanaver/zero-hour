/**
 * Zero Hour Calculator
 * Computes local sunrise and Zero Time using the solar equations
 * from the Zero Hour proposal.
 */

const ZeroHour = (() => {
  const DEG = Math.PI / 180;
  const RAD = 180 / Math.PI;

  /**
   * Calculate sunrise UTC minutes for a given date and location.
   * Uses the standard NOAA-style solar calculator approximation.
   */
  function calcSunriseUTC(date, lat, lng) {
    const N = dayOfYear(date);
    const h = 6; // approximate hour for sunrise
    const gamma = (2 * Math.PI / 365) * (N - 1 + (h - 12) / 24);

    // Equation of time (minutes)
    const E = 229.18 * (
      0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma)
    );

    // Solar declination (radians)
    const delta =
      0.006918 -
      0.399912 * Math.cos(gamma) +
      0.070257 * Math.sin(gamma) -
      0.006758 * Math.cos(2 * gamma) +
      0.000907 * Math.sin(2 * gamma) -
      0.002697 * Math.cos(3 * gamma) +
      0.00148 * Math.sin(3 * gamma);

    const phi = lat * DEG;
    const zenith = 90.833 * DEG;

    const cosH = (Math.cos(zenith) / (Math.cos(phi) * Math.cos(delta))) -
                 (Math.tan(phi) * Math.tan(delta));

    // No sunrise/sunset at extreme latitudes
    if (cosH > 1) return null;  // no sunrise (polar night)
    if (cosH < -1) return null; // no sunset (midnight sun)

    const H_deg = Math.acos(cosH) * RAD;
    const sunriseUTC = 720 - 4 * (lng + H_deg) - E;

    return sunriseUTC;
  }

  function dayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    return Math.floor(diff / 86400000);
  }

  /**
   * Get Zero Hour in local minutes after midnight.
   * @param {Date} date
   * @param {number} lat - latitude
   * @param {number} lng - longitude
   * @param {number} tzOffset - timezone offset in hours from UTC (e.g., -5 for EST)
   * @param {number} k - offset in minutes from sunrise (default 0)
   */
  function getZeroHourLocal(date, lat, lng, tzOffset, k = 0) {
    const sunriseUTC = calcSunriseUTC(date, lat, lng);
    if (sunriseUTC === null) return null;
    const zeroHourLocal = sunriseUTC + 60 * tzOffset + k;
    return zeroHourLocal;
  }

  /**
   * Convert civil time (minutes after midnight) to Zero Time hours.
   */
  function civilToZT(civilMinutes, zeroHourLocal) {
    let zt = (civilMinutes - zeroHourLocal) / 60;
    zt = ((zt % 24) + 24) % 24; // wrap to 0-24
    return zt;
  }

  /**
   * Format ZT hours as ZT HH:MM
   */
  function formatZT(ztHours) {
    const h = Math.floor(ztHours);
    const m = Math.floor((ztHours - h) * 60);
    return `ZT ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  /**
   * Format minutes after midnight as HH:MM AM/PM
   */
  function formatCivil(minutes) {
    let totalMin = ((minutes % 1440) + 1440) % 1440;
    let h = Math.floor(totalMin / 60);
    let m = Math.floor(totalMin % 60);
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${String(m).padStart(2, '0')} ${ampm}`;
  }

  return { calcSunriseUTC, getZeroHourLocal, civilToZT, formatZT, formatCivil, dayOfYear };
})();


// ── UI Controller ──

document.addEventListener('DOMContentLoaded', () => {
  const ztBig = document.getElementById('zt-big');
  const ztLabel = document.getElementById('zt-label');
  const civilTimeEl = document.getElementById('civil-time');
  const sunriseInfoEl = document.getElementById('sunrise-info');
  const latInput = document.getElementById('calc-lat');
  const lngInput = document.getElementById('calc-lng');
  const offsetInput = document.getElementById('calc-offset');
  const kInput = document.getElementById('calc-k');
  const geoBtn = document.getElementById('geo-btn');
  const navZt = document.getElementById('nav-zt');

  let currentLat = 40.7128;
  let currentLng = -74.006;
  let currentTz = -new Date().getTimezoneOffset() / 60;
  let currentK = 0;

  function update() {
    const now = new Date();
    const lat = parseFloat(latInput.value) || currentLat;
    const lng = parseFloat(lngInput.value) || currentLng;
    const tz = parseFloat(offsetInput.value);
    const k = parseFloat(kInput.value) || 0;

    currentLat = lat;
    currentLng = lng;
    currentTz = tz;
    currentK = k;

    const zeroHourLocal = ZeroHour.getZeroHourLocal(now, lat, lng, tz, k);

    if (zeroHourLocal === null) {
      ztBig.textContent = 'ZT --:--';
      ztLabel.textContent = 'No sunrise at this latitude today';
      civilTimeEl.textContent = '';
      sunriseInfoEl.textContent = '';
      navZt.textContent = 'ZT --:--';
      return;
    }

    const civilMinutes = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
    const ztHours = ZeroHour.civilToZT(civilMinutes, zeroHourLocal);
    const ztFormatted = ZeroHour.formatZT(ztHours);
    const sunriseFormatted = ZeroHour.formatCivil(zeroHourLocal);
    const civilFormatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    ztBig.textContent = ztFormatted;
    ztLabel.textContent = 'Current Zero Time';
    civilTimeEl.textContent = `Civil time: ${civilFormatted}`;
    sunriseInfoEl.textContent = `Today's sunrise: ${sunriseFormatted} | Zero Hour: ${ZeroHour.formatCivil(zeroHourLocal)}`;
    navZt.textContent = ztFormatted;
  }

  // Geolocation
  geoBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
      alert('Geolocation not supported by your browser.');
      return;
    }
    geoBtn.textContent = 'Locating...';
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        latInput.value = pos.coords.latitude.toFixed(4);
        lngInput.value = pos.coords.longitude.toFixed(4);
        offsetInput.value = -new Date().getTimezoneOffset() / 60;
        geoBtn.textContent = 'Use My Location';
        update();
      },
      () => {
        geoBtn.textContent = 'Use My Location';
        alert('Could not get your location.');
      }
    );
  });

  // Set defaults
  offsetInput.value = currentTz;
  latInput.value = currentLat;
  lngInput.value = currentLng;
  kInput.value = 0;

  // Live update every second
  update();
  setInterval(update, 1000);

  // Update on input change
  [latInput, lngInput, offsetInput, kInput].forEach(el => {
    el.addEventListener('input', update);
  });
});
