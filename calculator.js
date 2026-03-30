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
   * Get current Zero Time hours for a given date and location.
   * Works entirely in UTC — no timezone offset needed.
   * @param {Date} date
   * @param {number} lat - latitude
   * @param {number} lng - longitude
   * @param {number} k - offset in minutes from sunrise (default 0)
   */
  function getZT(date, lat, lng, k = 0) {
    const sunriseUTC = calcSunriseUTC(date, lat, lng);
    if (sunriseUTC === null) return null;
    const zeroPointUTC = sunriseUTC + k;
    const nowUTCMin = date.getUTCHours() * 60 + date.getUTCMinutes() + date.getUTCSeconds() / 60;
    let zt = (nowUTCMin - zeroPointUTC) / 60;
    zt = ((zt % 24) + 24) % 24;
    return zt;
  }

  /**
   * Calculate sunset UTC minutes for a given date and location.
   */
  function calcSunsetUTC(date, lat, lng) {
    const N = dayOfYear(date);
    const h = 18; // approximate hour for sunset
    const gamma = (2 * Math.PI / 365) * (N - 1 + (h - 12) / 24);

    const E = 229.18 * (
      0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma)
    );

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

    if (cosH > 1 || cosH < -1) return null;

    const H_deg = Math.acos(cosH) * RAD;
    const sunsetUTC = 720 - 4 * (lng - H_deg) - E;

    return sunsetUTC;
  }

  /**
   * Get sunrise in local minutes after midnight (for display).
   */
  function getSunriseLocal(date, lat, lng) {
    const sunriseUTC = calcSunriseUTC(date, lat, lng);
    if (sunriseUTC === null) return null;
    const tzOffsetMin = -date.getTimezoneOffset();
    return sunriseUTC + tzOffsetMin;
  }

  /**
   * Get sunset in local minutes after midnight (for display).
   */
  function getSunsetLocal(date, lat, lng) {
    const sunsetUTC = calcSunsetUTC(date, lat, lng);
    if (sunsetUTC === null) return null;
    const tzOffsetMin = -date.getTimezoneOffset();
    return sunsetUTC + tzOffsetMin;
  }

  /**
   * Generate a table of local time → Zero Time for each hour of the day.
   * @param {Date} date
   * @param {number} lat
   * @param {number} lng
   * @param {number} k - offset in minutes from sunrise (default 0)
   * @returns {Array<{localHour: number, localLabel: string, zt: number, ztLabel: string}>|null}
   */
  function generateDayTable(date, lat, lng, k = 0) {
    const sunriseUTC = calcSunriseUTC(date, lat, lng);
    if (sunriseUTC === null) return null;
    const zeroPointUTC = sunriseUTC + k;
    const tzOffsetMin = -date.getTimezoneOffset(); // browser's UTC offset in minutes

    const rows = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 30) {
        const localMin = h * 60 + m;
        const utcMin = localMin - tzOffsetMin;
        let zt = (utcMin - zeroPointUTC) / 60;
        zt = ((zt % 24) + 24) % 24;
        rows.push({
          localHour: h,
          localMin: m,
          localLabel: formatCivil(localMin),
          zt,
          ztLabel: formatZT(zt),
        });
      }
    }
    return rows;
  }

  /**
   * Format ZT hours as ZT HH:MM
   */
  function formatZT(ztHours, withSeconds = false) {
    const h = Math.floor(ztHours);
    const remainder = (ztHours - h) * 60;
    const m = Math.floor(remainder);
    const s = Math.floor((remainder - m) * 60);
    if (withSeconds) {
      return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    return `ZHT ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
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

  return { calcSunriseUTC, calcSunsetUTC, getZT, getSunriseLocal, getSunsetLocal, generateDayTable, formatZT, formatCivil, dayOfYear };
})();


// ── UI Controller ──

document.addEventListener('DOMContentLoaded', () => {
  const heroZt = document.getElementById('hero-zt');
  const heroCivil = document.getElementById('hero-civil');
  const heroZtSun = document.getElementById('hero-zt-sun');
  const heroCivilSun = document.getElementById('hero-civil-sun');
  const navZt = document.getElementById('nav-zt');

  let currentLat = null;
  let currentLng = null;

  function format24(date) {
    return String(date.getHours()).padStart(2, '0') + ':' +
           String(date.getMinutes()).padStart(2, '0') + ':' +
           String(date.getSeconds()).padStart(2, '0');
  }

  function update() {
    const now = new Date();

    // Always update local 24h clock in hero
    heroCivil.textContent = format24(now);

    const lat = currentLat;
    const lng = currentLng;

    if (lat === null || lng === null) {
      heroZt.textContent = 'ZHT --:--';
      heroZtSun.textContent = 'Detecting location...';
      heroCivilSun.textContent = '';
      if (navZt) navZt.textContent = 'ZHT --:--';
      return;
    }

    const ztHours = ZeroHour.getZT(now, lat, lng, 0);

    if (ztHours === null) {
      heroZt.textContent = 'ZHT --:--';
      heroZtSun.textContent = 'No sunrise at this latitude today';
      heroCivilSun.textContent = '';
      if (navZt) navZt.textContent = 'ZHT --:--';
      return;
    }

    const ztFormatted = ZeroHour.formatZT(ztHours);
    const sunriseLocal = ZeroHour.getSunriseLocal(now, lat, lng);
    const sunsetLocal = ZeroHour.getSunsetLocal(now, lat, lng);
    const sunriseFormatted = ZeroHour.formatCivil(sunriseLocal);
    const sunsetFormatted = sunsetLocal !== null ? ZeroHour.formatCivil(sunsetLocal) : '--';

    // Compute sunset in ZT
    const sunsetZTHours = sunsetLocal !== null ? (sunsetLocal - sunriseLocal) / 60 : null;
    const sunsetZTFormatted = sunsetZTHours !== null ? ZeroHour.formatZT(((sunsetZTHours % 24) + 24) % 24) : '--';

    // Hero clocks
    heroZt.textContent = ZeroHour.formatZT(ztHours, true);
    heroZtSun.textContent = `Sunrise: ZHT 00:00 · Sunset: ${sunsetZTFormatted}`;
    heroCivilSun.textContent = `Sunrise: ${sunriseFormatted} · Sunset: ${sunsetFormatted}`;

    // Show timezone abbreviation
    const tzLabel = document.getElementById('hero-tz-label');
    if (tzLabel) {
      const tzAbbr = now.toLocaleTimeString([], { timeZoneName: 'short' }).split(' ').pop();
      tzLabel.textContent = `Current GMT System (${tzAbbr})`;
    }

    if (navZt) navZt.textContent = ztFormatted;

    // Update the day/night map
    if (typeof DayNightMap !== 'undefined') DayNightMap.render();
  }

  // Init day/night map
  const mapCanvas = document.getElementById('daynight-canvas');
  if (mapCanvas && typeof DayNightMap !== 'undefined') {
    DayNightMap.init(mapCanvas);
  }

  function setLocation(lat, lng) {
    currentLat = lat;
    currentLng = lng;
    if (typeof DayNightMap !== 'undefined') DayNightMap.setUserLocation(lat, lng);
    update();
  }

  function fallbackToIP() {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => {
        if (data.latitude && data.longitude) {
          setLocation(data.latitude, data.longitude);
        } else {
          setLocation(40.7128, -74.006); // Last resort: NYC
        }
      })
      .catch(() => setLocation(40.7128, -74.006));
  }

  function requestGeo() {
    if (!navigator.geolocation) {
      fallbackToIP();
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation(pos.coords.latitude, pos.coords.longitude),
      () => fallbackToIP() // Denied — try IP geolocation
    );
  }

  // Auto-detect location on load
  requestGeo();

  // Live update every second
  update();
  setInterval(update, 1000);
});
