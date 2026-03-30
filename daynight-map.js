/**
 * Day/Night World Map Visualization
 * Shows real-time terminator (day/night boundary) with user location.
 */
const DayNightMap = (() => {
  const DEG = Math.PI / 180;

  // Simplified world coastline polygons: arrays of [lng, lat] pairs
  const LAND = [
    // North America
    [[-168,66],[-162,60],[-152,58],[-148,60],[-140,60],[-133,56],[-128,51],[-124,46],[-122,37],[-117,33],[-113,31],[-108,31],[-103,29],[-98,26],[-96,22],[-95,19],[-93,17],[-90,15],[-87,14],[-83,10],[-80,9],[-78,8],[-76,8],[-82,10],[-84,12],[-86,16],[-89,19],[-90,29],[-84,30],[-82,25],[-80,25],[-81,32],[-76,36],[-74,40],[-71,42],[-69,44],[-66,44],[-61,46],[-59,47],[-55,47],[-53,52],[-56,49],[-60,47],[-66,44],[-67,50],[-65,55],[-62,58],[-68,63],[-77,62],[-84,64],[-92,68],[-105,71],[-120,74],[-135,70],[-142,70],[-148,63],[-156,62],[-163,64],[-168,66]],
    // Greenland
    [[-55,60],[-52,65],[-48,69],[-42,72],[-35,73],[-22,76],[-18,76],[-18,72],[-24,68],[-33,64],[-44,60],[-55,60]],
    // South America
    [[-77,8],[-75,11],[-70,12],[-65,10],[-58,6],[-52,4],[-50,1],[-46,-2],[-40,-3],[-36,-5],[-35,-9],[-35,-13],[-38,-16],[-41,-22],[-45,-24],[-49,-29],[-53,-33],[-58,-38],[-65,-43],[-68,-50],[-74,-52],[-75,-52],[-74,-46],[-73,-40],[-72,-35],[-71,-30],[-70,-25],[-70,-20],[-75,-15],[-78,-5],[-80,0],[-78,3],[-77,8]],
    // Europe
    [[-10,36],[-9,39],[-9,43],[-4,44],[-2,43],[-5,48],[-1,49],[2,51],[5,52],[4,54],[8,55],[12,56],[13,58],[10,58],[5,58],[7,62],[14,66],[17,69],[25,71],[30,70],[40,68],[44,64],[40,56],[40,47],[42,42],[40,40],[36,36],[30,36],[28,41],[26,40],[24,38],[22,37],[22,40],[18,40],[15,38],[12,38],[12,42],[14,44],[12,46],[8,44],[3,43],[0,43],[0,38],[3,37],[0,36],[-5,36],[-10,36]],
    // UK
    [[-6,50],[-5,52],[-4,54],[-5,56],[-6,58],[-3,59],[-1,57],[0,53],[2,52],[0,51],[-4,50],[-6,50]],
    // Iceland
    [[-24,64],[-22,66],[-18,66],[-14,65],[-14,64],[-19,63],[-24,64]],
    // Africa
    [[-5,36],[-2,35],[0,36],[3,37],[8,37],[10,37],[11,33],[15,32],[20,33],[25,32],[30,31],[33,30],[34,27],[36,30],[38,26],[42,18],[43,12],[45,12],[51,11],[49,8],[44,2],[42,-1],[41,-5],[40,-11],[36,-19],[35,-26],[33,-30],[28,-33],[26,-34],[18,-35],[15,-28],[12,-18],[12,-7],[10,0],[7,4],[5,5],[1,6],[-3,5],[-8,5],[-13,5],[-15,11],[-17,15],[-17,21],[-13,28],[-8,32],[-5,36]],
    // Madagascar
    [[44,-12],[47,-12],[50,-17],[50,-24],[47,-26],[44,-24],[43,-18],[44,-12]],
    // Arabia
    [[34,28],[36,30],[38,26],[43,17],[45,14],[50,16],[55,22],[56,26],[52,24],[50,28],[48,30],[43,30],[40,32],[36,36],[34,32],[34,28]],
    // India
    [[68,24],[72,20],[73,16],[77,8],[80,13],[80,16],[85,20],[88,22],[92,21],[90,24],[85,26],[80,28],[76,30],[72,34],[68,37],[65,36],[68,28],[68,24]],
    // Southeast Asia (mainland)
    [[100,22],[102,15],[103,7],[104,2],[103,-1],[105,-5],[106,-7],[104,-7],[100,0],[100,5],[99,8],[100,12],[100,22]],
    // Russia / Siberia / Central Asia / East Asia
    [[30,70],[40,68],[44,64],[42,60],[42,55],[45,52],[50,46],[52,42],[55,40],[60,38],[65,37],[70,37],[72,34],[76,30],[80,28],[85,25],[90,22],[95,18],[100,22],[108,16],[115,22],[122,30],[128,38],[133,43],[140,52],[135,55],[130,62],[132,67],[140,60],[145,55],[150,60],[155,57],[162,60],[170,63],[175,67],[180,67],[180,72],[170,70],[160,70],[150,72],[140,73],[130,73],[120,73],[110,72],[100,73],[90,73],[80,72],[70,72],[60,72],[50,70],[40,68],[30,70]],
    // China coast / Korea
    [[110,20],[115,22],[118,24],[122,30],[125,35],[128,38],[130,42],[133,43],[128,38],[125,35],[122,30],[118,24],[115,22],[110,20]],
    // Japan
    [[130,31],[132,34],[135,36],[137,38],[140,42],[142,44],[145,44],[144,41],[141,38],[139,35],[136,34],[134,34],[132,33],[130,31]],
    // Borneo
    [[109,0],[112,2],[115,5],[118,5],[118,2],[117,-1],[116,-4],[114,-4],[111,-2],[109,0]],
    // Indonesia (Sumatra + Java simplified)
    [[95,5],[98,4],[101,1],[104,-2],[106,-6],[108,-7],[111,-8],[114,-8],[116,-8],[114,-8],[111,-8],[108,-7],[106,-6],[103,-2],[100,0],[97,2],[95,5]],
    // Australia
    [[115,-35],[115,-30],[118,-22],[121,-18],[127,-14],[131,-12],[136,-12],[138,-16],[141,-18],[145,-15],[148,-18],[150,-23],[153,-27],[153,-30],[150,-35],[146,-39],[141,-39],[137,-36],[132,-33],[125,-33],[117,-35],[115,-35]],
    // New Zealand
    [[166,-35],[168,-37],[172,-40],[174,-42],[172,-46],[170,-46],[167,-44],[168,-40],[166,-35]],
    // Papua New Guinea
    [[141,-3],[143,-4],[146,-6],[148,-7],[150,-6],[152,-5],[155,-5],[152,-3],[149,-2],[145,-2],[141,-3]],
  ];

  function dayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    return Math.floor((date - start) / 86400000);
  }

  function subSolarPoint(date) {
    const N = dayOfYear(date);
    const h = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
    const gamma = (2 * Math.PI / 365) * (N - 1 + (h - 12) / 24);

    const E = 229.18 * (
      0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma)
    );

    const delta = 0.006918 -
      0.399912 * Math.cos(gamma) +
      0.070257 * Math.sin(gamma) -
      0.006758 * Math.cos(2 * gamma) +
      0.000907 * Math.sin(2 * gamma) -
      0.002697 * Math.cos(3 * gamma) +
      0.00148 * Math.sin(3 * gamma);

    const solarLat = delta * 180 / Math.PI;
    const solarLng = -(h * 15 - 180) - E / 4;

    return {
      lat: solarLat,
      lng: ((solarLng % 360) + 540) % 360 - 180,
    };
  }

  function lngToX(lng, w) { return ((lng + 180) / 360) * w; }
  function latToY(lat, h) { return ((90 - lat) / 180) * h; }

  let canvas, ctx, W, H;
  let userLat = null, userLng = null;

  // City markers for pills
  // Ordered west to east by longitude
  const CITIES = [
    { name: 'Reykjavik', lat: 64.1466, lng: -21.9426 },
    { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
    { name: 'New York', lat: 40.7128, lng: -74.006 },
    { name: 'Ushuaia', lat: -54.8019, lng: -68.3030 },
    { name: 'S\u00E3o Paulo', lat: -23.5505, lng: -46.6333 },
    { name: 'Lisbon', lat: 38.7223, lng: -9.1393 },
    { name: 'Madrid', lat: 40.4168, lng: -3.7038 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'My Location', lat: null, lng: null, isUser: true },
    { name: 'Berlin', lat: 52.52, lng: 13.405 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Nairobi', lat: -1.2921, lng: 36.8219 },
    { name: 'Kyiv', lat: 50.4504, lng: 30.5234 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'New Delhi', lat: 28.6139, lng: 77.209 },
    { name: 'Beijing', lat: 39.9042, lng: 116.4074 },
    { name: 'Seoul', lat: 37.5665, lng: 126.978 },
    { name: 'Tokyo', lat: 35.6762, lng: 139.6503 },
    { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
  ];

  let activeCity = 9; // index into CITIES, 9 = My Location

  function init(canvasEl) {
    canvas = canvasEl;
    ctx = canvas.getContext('2d');
    resize();
    buildCityTable();
    window.addEventListener('resize', () => { resize(); render(); });
    if (typeof I18n !== 'undefined') {
      I18n.onLanguageChange(() => buildCityTable());
    }

    // Click on map dot to select city
    canvas.style.cursor = 'default';
    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;
      const hitRadius = 16;

      for (let i = 0; i < CITIES.length; i++) {
        const city = CITIES[i];
        const cLat = city.isUser ? userLat : city.lat;
        const cLng = city.isUser ? userLng : city.lng;
        if (cLat === null || cLng === null) continue;
        const cx = lngToX(cLng, W);
        const cy = latToY(cLat, H);
        const dx = mx - cx;
        const dy = my - cy;
        if (dx * dx + dy * dy <= hitRadius * hitRadius) {
          setActiveCity(i);
          return;
        }
      }
    });

    // Show pointer cursor when hovering over a dot
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;
      const hitRadius = 16;
      let overDot = false;

      for (let i = 0; i < CITIES.length; i++) {
        const city = CITIES[i];
        const cLat = city.isUser ? userLat : city.lat;
        const cLng = city.isUser ? userLng : city.lng;
        if (cLat === null || cLng === null) continue;
        const cx = lngToX(cLng, W);
        const cy = latToY(cLat, H);
        const dx = mx - cx;
        const dy = my - cy;
        if (dx * dx + dy * dy <= hitRadius * hitRadius) {
          overDot = true;
          break;
        }
      }
      canvas.style.cursor = overDot ? 'pointer' : 'default';
    });
  }

  function resize() {
    const container = canvas.parentElement;
    W = container.clientWidth;
    H = Math.round(W / 2);
    canvas.width = W;
    canvas.height = H;
  }

  function setUserLocation(lat, lng) {
    userLat = lat;
    userLng = lng;
    const userCity = CITIES.find(c => c.isUser);
    if (userCity) { userCity.lat = lat; userCity.lng = lng; }
  }

  function setActiveCity(index) {
    activeCity = index;
    updateCityTable();
    render();
  }

  /**
   * Determine day/night class for a city based on solar elevation.
   * Returns 'city-day', 'city-twilight', or 'city-night'.
   */
  function getDayNightClass(date, lat, lng) {
    const sub = subSolarPoint(date);
    const sinSubLat = Math.sin(sub.lat * DEG);
    const cosSubLat = Math.cos(sub.lat * DEG);
    const sinLat = Math.sin(lat * DEG);
    const cosLat = Math.cos(lat * DEG);
    const dLng = (lng - sub.lng) * DEG;
    const cosAngle = sinLat * sinSubLat + cosLat * cosSubLat * Math.cos(dLng);

    if (cosAngle > 0.01) return 'city-day';
    if (cosAngle > -0.01) return 'city-twilight';
    return 'city-night';
  }

  /**
   * Get civil time string for a city using its UTC offset approximation.
   * We use longitude to approximate the local time (lng/15 = UTC offset hours).
   */
  function getCivilTimeForCity(date, lng) {
    const utcH = date.getUTCHours();
    const utcM = date.getUTCMinutes();
    const utcS = date.getUTCSeconds();
    const totalMin = utcH * 60 + utcM + utcS / 60 + (lng / 15) * 60;
    const normalized = ((totalMin % 1440) + 1440) % 1440;
    let h = Math.floor(normalized / 60);
    const m = Math.floor(normalized % 60);
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${String(m).padStart(2, '0')} ${ampm}`;
  }

  function buildCityTable() {
    const table = document.getElementById('city-table');
    if (!table) return;
    table.innerHTML = '';

    const nameRow = document.createElement('tr');
    nameRow.className = 'city-name-row';
    const civilRow = document.createElement('tr');
    civilRow.className = 'city-civil-row';
    const zhtRow = document.createElement('tr');
    zhtRow.className = 'city-zht-row';

    CITIES.forEach((city, i) => {
      // Name cell
      const nameTd = document.createElement('td');
      nameTd.dataset.cityIndex = i;
      const displayName = city.isUser ? (typeof I18n !== 'undefined' ? I18n.t('my_location') : city.name) : city.name;
      if (city.isUser) {
        nameTd.textContent = displayName;
      } else {
        const link = document.createElement('a');
        link.href = `https://www.google.com/maps/@${city.lat},${city.lng},10z`;
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = displayName;
        nameTd.appendChild(link);
      }
      nameTd.style.cursor = 'pointer';
      nameTd.addEventListener('click', () => setActiveCity(i));
      nameRow.appendChild(nameTd);

      // Civil time cell
      const civilTd = document.createElement('td');
      civilTd.dataset.cityIndex = i;
      civilTd.textContent = '--:--';
      civilRow.appendChild(civilTd);

      // ZHT cell
      const zhtTd = document.createElement('td');
      zhtTd.dataset.cityIndex = i;
      zhtTd.textContent = 'ZHT --:--';
      zhtRow.appendChild(zhtTd);
    });

    table.appendChild(nameRow);
    table.appendChild(civilRow);
    table.appendChild(zhtRow);

    updateCityTable();
  }

  function updateCityTable() {
    const table = document.getElementById('city-table');
    if (!table) return;

    const now = new Date();
    const rows = table.querySelectorAll('tr');
    if (rows.length < 3) return;

    const nameCells = rows[0].querySelectorAll('td');
    const civilCells = rows[1].querySelectorAll('td');
    const zhtCells = rows[2].querySelectorAll('td');

    CITIES.forEach((city, i) => {
      const cLat = city.isUser ? userLat : city.lat;
      const cLng = city.isUser ? userLng : city.lng;
      const isActive = (i === activeCity);

      // Day/night class
      const dayClass = (cLat !== null && cLng !== null) ? getDayNightClass(now, cLat, cLng) : 'city-night';
      const activeClass = isActive ? ' city-active' : '';

      [nameCells[i], civilCells[i], zhtCells[i]].forEach(td => {
        td.className = dayClass + activeClass;
      });

      // Civil time
      if (cLat !== null && cLng !== null) {
        civilCells[i].textContent = getCivilTimeForCity(now, cLng);
      } else {
        civilCells[i].textContent = '--:--';
      }

      // ZHT time
      if (cLat !== null && cLng !== null) {
        const zt = calcZTForLocation(now, cLat, cLng);
        zhtCells[i].textContent = zt !== null ? formatZTShort(zt) : 'N/A';
      } else {
        zhtCells[i].textContent = 'ZHT --:--';
      }

      // Update "My Location" link if coords are now available
      if (city.isUser && cLat !== null && cLng !== null && !nameCells[i].querySelector('a')) {
        const displayName = typeof I18n !== 'undefined' ? I18n.t('my_location') : city.name;
        nameCells[i].textContent = '';
        const link = document.createElement('a');
        link.href = `https://www.google.com/maps/@${cLat},${cLng},10z`;
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = displayName;
        nameCells[i].appendChild(link);
      }
    });
  }

  /**
   * Calculate ZT for any lat/lng using the same NOAA sunrise formula.
   */
  function calcZTForLocation(date, lat, lng) {
    const N = dayOfYear(date);
    const h = 6;
    const gamma = (2 * Math.PI / 365) * (N - 1 + (h - 12) / 24);
    const E = 229.18 * (
      0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma)
    );
    const delta = 0.006918 -
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
    const H_deg = Math.acos(cosH) * 180 / Math.PI;
    const sunriseUTC = 720 - 4 * (lng + H_deg) - E;
    const nowUTCMin = date.getUTCHours() * 60 + date.getUTCMinutes() + date.getUTCSeconds() / 60;
    let zt = (nowUTCMin - sunriseUTC) / 60;
    zt = ((zt % 24) + 24) % 24;
    return zt;
  }

  function formatZTShort(ztHours) {
    const h = Math.floor(ztHours);
    const m = Math.floor((ztHours - h) * 60);
    return `ZHT ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  function render() {
    if (!ctx) return;
    updateCityTable();
    const now = new Date();
    const sub = subSolarPoint(now);
    const sinSubLat = Math.sin(sub.lat * DEG);
    const cosSubLat = Math.cos(sub.lat * DEG);

    // 1. Ocean background
    ctx.fillStyle = '#0f1729';
    ctx.fillRect(0, 0, W, H);

    // 2. Grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 0.5;
    for (let lng = -150; lng <= 180; lng += 30) {
      const x = lngToX(lng, W);
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const y = latToY(lat, H);
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // 3. Draw land masses
    ctx.fillStyle = '#6b7280';
    LAND.forEach(polygon => {
      ctx.beginPath();
      polygon.forEach(([lng, lat], i) => {
        const x = lngToX(lng, W);
        const y = latToY(lat, H);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fill();
    });

    // 4. Night overlay via pixel manipulation
    const imgData = ctx.getImageData(0, 0, W, H);
    const data = imgData.data;

    // Precompute cos(deltaLng) per column
    const cosDLng = new Float32Array(W);
    for (let px = 0; px < W; px++) {
      const lng = (px / W) * 360 - 180;
      cosDLng[px] = Math.cos((lng - sub.lng) * DEG);
    }

    for (let py = 0; py < H; py++) {
      const lat = 90 - (py / H) * 180;
      const sinLat = Math.sin(lat * DEG);
      const cosLat = Math.cos(lat * DEG);
      const a = sinLat * sinSubLat;
      const b = cosLat * cosSubLat;

      for (let px = 0; px < W; px++) {
        const cosAngle = a + b * cosDLng[px];
        if (cosAngle < -0.01) {
          // Full night
          const idx = (py * W + px) * 4;
          data[idx]     = Math.floor(data[idx] * 0.22);
          data[idx + 1] = Math.floor(data[idx + 1] * 0.22);
          data[idx + 2] = Math.floor(data[idx + 2] * 0.28);
        } else if (cosAngle < 0.01) {
          // Twilight band
          const t = (cosAngle + 0.01) / 0.02; // 0 to 1
          const dim = 0.22 + t * 0.78;
          const idx = (py * W + px) * 4;
          data[idx]     = Math.floor(data[idx] * dim);
          data[idx + 1] = Math.floor(data[idx + 1] * dim);
          data[idx + 2] = Math.floor(data[idx + 2] * (0.28 + t * 0.72));
        }
      }
    }
    ctx.putImageData(imgData, 0, 0);

    // 5. Terminator line
    ctx.lineWidth = 1.5;
    drawTerminatorEdge(sub, -1); // dawn
    drawTerminatorEdge(sub, 1);  // dusk

    // 6. City markers
    const fontSize = Math.max(11, Math.round(W / 80));
    CITIES.forEach((city, i) => {
      const cLat = city.isUser ? userLat : city.lat;
      const cLng = city.isUser ? userLng : city.lng;
      if (cLat === null || cLng === null) return;

      const cx = lngToX(cLng, W);
      const cy = latToY(cLat, H);
      const isActive = (i === activeCity);
      const dotColor = isActive ? '#f59e0b' : '#94a3b8';
      const glowColor = isActive ? 'rgba(245,158,11,0.5)' : 'rgba(148,163,184,0.3)';

      // Glow
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, isActive ? 16 : 10);
      gradient.addColorStop(0, glowColor);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, isActive ? 16 : 10, 0, Math.PI * 2);
      ctx.fill();

      // Dot
      ctx.beginPath();
      ctx.arc(cx, cy, isActive ? 4 : 3, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();
      ctx.strokeStyle = isActive ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Label for active city: show ZT time
      if (isActive) {
        const zt = calcZTForLocation(now, cLat, cLng);
        const label = zt !== null ? formatZTShort(zt) : 'No sunrise';
        ctx.fillStyle = '#fff';
        ctx.font = `bold ${fontSize}px Inter, sans-serif`;
        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 4;
        ctx.fillText(label, cx + 10, cy + 5);
        ctx.shadowBlur = 0;
      }
    });
  }

  function drawTerminatorEdge(sub, sign) {
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.beginPath();
    let started = false;
    let prevX = 0;

    for (let py = 0; py < H; py++) {
      const lat = 90 - (py / H) * 180;
      const tanLat = Math.tan(lat * DEG);
      const tanDec = Math.tan(sub.lat * DEG);
      const cosH = -tanLat * tanDec;

      if (Math.abs(cosH) <= 1) {
        const Hdeg = Math.acos(cosH) * 180 / Math.PI;
        let lng = sub.lng + sign * Hdeg;
        lng = ((lng % 360) + 540) % 360 - 180;
        const x = lngToX(lng, W);

        if (!started) {
          ctx.moveTo(x, py);
          started = true;
        } else if (Math.abs(x - prevX) > W / 3) {
          // Wrapping — break the line
          ctx.moveTo(x, py);
        } else {
          ctx.lineTo(x, py);
        }
        prevX = x;
      }
    }
    ctx.stroke();
  }

  return { init, render, setUserLocation, setActiveCity, updateCityTable };
})();
