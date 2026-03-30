# Zero Hour

A proposal for a sunrise-anchored parallel time system.

## 1. Concept

Zero Hour is a proposed parallel time system whose daily starting point tracks the natural day rather than the conventional midnight boundary. The core intuition is simple: for most people and most animals, the felt beginning of the day happens around sunrise, not in the middle of the night.

Under this proposal, ordinary clock time remains unchanged for transport, software, law, aviation, finance, and global coordination. Zero Hour would exist alongside it as a human-centered schedule layer for waking, work, school, retail opening hours, and daily routines.

## 2. Why Someone Might Want It

- It aligns the named start of the day with visible daylight rather than with an abstract midnight boundary.
- It removes the abrupt psychological jump of daylight saving time by replacing step changes with continuous seasonal drift.
- It makes sunrise intuitively meaningful: when the Sun comes up, the day is starting in the parallel clock as well.
- It could support more natural schedules such as school beginning at Zero Hour 1 or shops opening at Zero Hour 2.
- It preserves the existing civil-time system, so societies would not need to rewrite every technical system around a new base clock.

**Working principle:** daily life can be expressed in either standard civil time or Zero Time. Example: "school starts at ZT 1.5" means one and a half hours after that day's zero hour.

## 3. Formal Definition

A mathematically clean definition is to anchor Zero Hour to local sunrise, or to a fixed offset from local sunrise. The offset lets the system be sunrise-like rather than sunrise-exact.

```
ZeroHourLocal(date, latitude, longitude) = LocalSunrise(date, latitude, longitude) + k
```

Here `k` is a chosen offset in minutes. Examples: `k = 0` means zero hour is sunrise exactly; `k = +20` means zero hour occurs 20 minutes after sunrise.

## 4. Solar Calculation

One practical approximation is the standard sunrise model used in solar calculators. Let N be the day of year, φ the latitude in radians, and λ the longitude in degrees east of Greenwich.

```
γ = (2π/365) × (N - 1 + (h - 12)/24)       with h ≈ 6 for sunrise

E = 229.18 × (0.000075 + 0.001868·cos(γ) - 0.032077·sin(γ)
               - 0.014615·cos(2γ) - 0.040849·sin(2γ))

δ = 0.006918 - 0.399912·cos(γ) + 0.070257·sin(γ)
    - 0.006758·cos(2γ) + 0.000907·sin(2γ)
    - 0.002697·cos(3γ) + 0.00148·sin(3γ)

H = arccos(cos(90.833°) / (cos(φ)·cos(δ)) - tan(φ)·tan(δ))

Sunrise (UTC minutes) = 720 - 4×(λ + H°) - E

ZeroHourLocal = Sunrise_UTC_minutes + 60 × timezone_offset + k
```

This means Zero Hour is fully predictable for any date and location. The change is not a fixed number of seconds per day; it follows the seasonal motion of the Sun and therefore drifts smoothly but non-uniformly across the year.

## 5. Converting Ordinary Time into Zero Time

If local civil time `t` is measured in minutes after local midnight, the parallel Zero Time can be written as:

```
ZT(t) = (t - ZeroHourLocal) / 60
```

To wrap it into a repeating 24-hour dial:

```
ZT_24(t) = ((t - ZeroHourLocal) / 60) mod 24
```

## 6. Advantages over Daylight Saving Time

- No abrupt spring or autumn one-hour shock to sleep schedules.
- Seasonal adjustment becomes continuous and expected rather than legislative and disruptive.
- The public language of time can become more connected to the lived day: ZT 0 is dawn-adjacent, ZT 12 is roughly halfway through the natural waking cycle, and evening arrives gradually rather than via a clock-policy jump.

## 7. Design Choices

- **Exact sunrise mode:** elegant, but sensitive to atmospheric and astronomical details.
- **Sunrise-plus-offset mode:** more practical and more stable for social use.
- **Regional normalization mode:** use the same formula everywhere, but round to the nearest 5 or 10 minutes for readability.
- **Dual-display mode:** phones, calendars, watches, and public signs could show both civil time and Zero Time.

## 8. Limitations and Edge Cases

- Very high latitudes create hard cases because some dates have no sunrise or no sunset.
- Cloud cover does not change the mathematical sunrise, but lived experience may differ from the calculated day start.
- If the system became operational rather than conceptual, software and calendars would need a standard rule for time zones, leap years, and rounding behavior.
- People who work nights may still prefer ordinary civil time as their primary frame of reference.

## 9. Bottom Line

Zero Hour is mathematically feasible as a companion clock. The strongest version of the idea is not "move time a few seconds every day by hand," but "define a second public time scale whose zero point is a smooth function of date, latitude, longitude, and a chosen dawn offset." That preserves the precision of modern timekeeping while reintroducing a more natural sense of when the day begins.

## Local Development

Run the site locally with Docker:

```bash
docker compose --profile dev up
```

The site will be available at [http://localhost:8080](http://localhost:8080).
