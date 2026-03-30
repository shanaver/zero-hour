# Zero Hour

A sunrise-anchored parallel time system. Live at [shanaver-zerohour.netlify.app](https://shanaver-zerohour.netlify.app/) (deployed via Netlify).

## What Is Zero Hour?

Most animals on Earth sleep at night and wake up naturally at dawn. Human society forces a different system — it's not natural, healthy, or necessary.

Zero Hour is a proposed parallel time system whose daily starting point tracks sunrise rather than the conventional midnight boundary. Ordinary clock time stays unchanged for transport, software, law, aviation, and finance. Zero Hour exists alongside it as a human-centered schedule layer for waking, work, school, and daily routines.

**The pitch:**
- What if you could wake up without an alarm clock every day of the year?
- What if work or school started exactly 2 hours after the sun came up?
- Wake up naturally with the sun — not artificially with an alarm.

## Site Features

### Live Dual Clocks
The hero section displays two real-time clocks side by side:
- **Zero Hour Time (ZHT)** — current time in the sunrise-anchored system
- **Civil Time** — standard clock time with timezone abbreviation

Both show sunrise and sunset times in their respective systems.

### Interactive Day/Night Map
A canvas-rendered world map showing the current day/night terminator. Includes selectable city pills (Tokyo, Delhi, London, New York, São Paulo, Sydney, and your detected location) that update the clocks to show Zero Hour Time for any city.

### Geolocation
Automatically detects the visitor's location via browser geolocation API, with an IP-based fallback (ipapi.co) when permission is denied. Falls back to New York as a last resort.

### Internationalization (i18n)
Full multi-language support with a dropdown language switcher. Supported languages:
- English
- Deutsch (German)
- Fran&ccedil;ais (French)
- Espa&ntilde;ol (Spanish)
- Italiano (Italian)
- Chinese (Mandarin)

All visible text uses `data-i18n` attributes for automatic translation, including the map city pills.

### Concept Section
Six concept cards explaining the system:
- **Sunrise-Aligned** — ZHT 0 is dawn-adjacent
- **Parallel System** — civil time stays unchanged
- **Smooth Seasonal Drift** — continuous adjustment instead of DST's abrupt jumps
- **Natural Scheduling** — "school starts at ZHT 1.5" means 1.5 hours after sunrise
- **Zero Disruption** — additive, not a replacement
- **Fully Predictable** — deterministic from date, latitude, longitude, and offset

### Zero Hour vs Daylight Saving
A side-by-side comparison showing why continuous seasonal drift beats abrupt legislative clock changes. DST disrupts sleep, causes accident spikes, and is politically contentious. Zero Hour follows the Sun's natural motion with no shocks to biological rhythms.

### How It Works

#### Core Definition
```
ZeroHourLocal(date, lat, lng) = LocalSunrise(date, lat, lng) + k
```
Where `k` is a chosen offset in minutes. `k = 0` means zero hour is sunrise exactly. `k = +20` means zero hour occurs 20 minutes after sunrise.

#### Solar Calculation (NOAA Model)
```
gamma = (2pi / 365) * (N - 1 + (h - 12) / 24)       with h ~ 6 for sunrise

E = 229.18 * (0.000075 + 0.001868*cos(gamma) - 0.032077*sin(gamma)
               - 0.014615*cos(2*gamma) - 0.040849*sin(2*gamma))

delta = 0.006918 - 0.399912*cos(gamma) + 0.070257*sin(gamma)
        - 0.006758*cos(2*gamma) + 0.000907*sin(2*gamma)
        - 0.002697*cos(3*gamma) + 0.00148*sin(3*gamma)

cos(H) = cos(90.833 deg) / (cos(phi) * cos(delta)) - tan(phi) * tan(delta)

Sunrise (UTC min) = 720 - 4 * (lambda + H) - E
```
N = day of year, h = approximate sunrise hour (6), phi = latitude, delta = solar declination, lambda = longitude (degrees east), E = equation of time (minutes), H = hour angle (degrees).

#### Converting Civil Time to Zero Hour Time
```
ZHT(t) = (t - ZeroHourLocal) / 60

ZHT_24(t) = ((t - ZeroHourLocal) / 60) mod 24
```
Where `t` is current UTC time in minutes after midnight and `ZeroHourLocal` is sunrise UTC minutes + offset `k`. The result is hours in Zero Hour Time.

### The Bottom Line
- Zero Hour is mathematically feasible as a companion clock.
- It fixes the problem of waking up in the dark in winter and needing alarm clocks.
- It preserves the precision of modern timekeeping while reintroducing a natural sense of when the day begins.

## Project Structure

```
index.html        Main page
style.css         Styles (dark theme, responsive)
calculator.js     Solar math + live clock UI controller
daynight-map.js   Canvas day/night world map with city pills
i18n.js           Internationalization (6 languages)
netlify.toml      Netlify deploy config
docker-compose.yml / Dockerfile   Local dev server
```

## Local Development

Run the site locally with Docker:

```bash
docker compose --profile dev up
```

The site will be available at [http://localhost:8080](http://localhost:8080).
