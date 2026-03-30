/**
 * Internationalization module for Zero Hour
 * Supports: English, German, French, Spanish, Italian, Chinese (Mandarin)
 */
const I18n = (() => {
  const translations = {
    en: {
      page_title: 'Zero Hour \u2014 A Sunrise-Anchored Time System',
      nav_map: 'Global Map',
      nav_concept: 'Concept',
      nav_how: 'How It Works',
      nav_dst: 'vs DST',
      hero_title: 'The Zero Hour Proposal',
      hero_q1: 'What if you could wake up without an alarm clock every day of the year?',
      hero_imagine1: 'Imagine how much more refreshed you would be at work or school.',
      hero_q2: 'What if work or school started exactly 2 hours after the sun came up every day of the year?',
      hero_imagine2: 'Imagine how much less stressful the mornings would be.',
      hero_cta: 'Zero Hour is the solution.',
      hero_zht_label: 'Current Zero Hour Time',
      hero_civil_label: 'Current GMT System',
      map_heading: 'Current <span class="accent">Zero Hour</span> Map',
      concept_heading: 'The <span class="accent">Concept</span>',
      concept_subtitle: "Most of the animals on Planet Earth sleep at night and wake up naturally at dawn. Human society has been forcing a different system on itself and it\u2019s not natural, healthy, or necessary.",
      concept_sunrise_title: 'Sunrise-Aligned',
      concept_sunrise_desc: 'Zero Hour tracks the natural day. When the Sun comes up, the parallel clock starts. ZHT 0 is dawn-adjacent, making the named start of the day match visible daylight.',
      concept_parallel_title: 'Parallel System',
      concept_parallel_desc: 'Ordinary clock time remains unchanged for transport, software, law, aviation, and finance. Zero Hour exists alongside it as a human-centered schedule layer.',
      concept_drift_title: 'Smooth Seasonal Drift',
      concept_drift_desc: "Instead of the abrupt one-hour shock of daylight saving time, Zero Hour drifts continuously with the seasons, following the Sun\u2019s natural motion.",
      concept_schedule_title: 'Natural Scheduling',
      concept_schedule_desc: 'Daily life can be expressed in Zero Time. \u201CSchool starts at ZHT 1.5\u201D means one and a half hours after sunrise. Shops open at ZHT 2. Intuitive and universal.',
      concept_disruption_title: 'Zero Disruption',
      concept_disruption_desc: "No technical system needs rewriting. Zero Hour preserves civil time completely. It\u2019s additive, not a replacement \u2014 a second time scale for human routines.",
      concept_predictable_title: 'Fully Predictable',
      concept_predictable_desc: 'Zero Hour is computed from date, latitude, longitude, and a chosen dawn offset. It\u2019s deterministic for any location on Earth, for any date, past or future.',
      how_heading: 'How It <span class="accent">Works</span>',
      how_subtitle: 'A mathematically clean definition anchored to local sunrise, with an optional offset for practical use.',
      how_core_title: 'Core Definition',
      how_core_desc: 'Where <strong>k</strong> is a chosen offset in minutes. k\u00A0=\u00A00 means zero hour is sunrise exactly. k\u00A0=\u00A0+20 means zero hour occurs 20 minutes after sunrise.',
      how_solar_title: 'Solar Calculation',
      how_solar_desc: 'N\u00A0= day of year, h\u00A0= approximate sunrise hour (6), \u03C6\u00A0= latitude, \u03B4\u00A0= solar declination, \u03BB\u00A0= longitude (degrees east), E\u00A0= equation of time (minutes), H\u00A0= hour angle (degrees). This is the standard NOAA solar position model.',
      how_convert_title: 'Converting Civil Time to Zero Hour Time',
      how_convert_desc: 'Where t is current UTC time in minutes after midnight and ZeroHourLocal is sunrise UTC minutes + offset k. The result is hours in Zero Hour Time.',
      dst_heading: 'Zero Hour <span class="accent">vs Daylight Saving</span>',
      dst_subtitle: 'Why continuous seasonal drift beats abrupt legislative clock changes.',
      dst_dst_title: 'Daylight Saving Time',
      dst_dst_1: 'Abrupt one-hour jump twice a year',
      dst_dst_2: 'Disrupts sleep schedules and circadian rhythms',
      dst_dst_3: 'Causes measurable spikes in accidents and health events',
      dst_dst_4: 'Legislative and politically contentious',
      dst_dst_5: 'Disconnected from actual solar position',
      dst_zh_title: 'Zero Hour',
      dst_zh_1: 'Continuous, smooth seasonal adjustment',
      dst_zh_2: "Follows the Sun\u2019s natural motion",
      dst_zh_3: 'No sudden shocks to biological rhythms',
      dst_zh_4: 'Deterministic formula, not legislative policy',
      dst_zh_5: 'Dawn-adjacent by definition',
      bottom_title: 'The Bottom Line',
      bottom_1: 'Zero Hour is mathematically feasible as a companion clock.',
      bottom_2: 'Zero Hour fixes the problem of waking up in the dark in the winter and needing alarm clocks.',
      bottom_3: 'Zero Hour preserves the precision of modern timekeeping while reintroducing a more natural sense of when the day begins.',
      bottom_4: 'Wake up naturally with the sun \u2014 not artificially with an alarm.',
      footer: 'Zero Hour Proposal \u00A9 2026. A sunrise-anchored parallel time system.',
      sunrise: 'Sunrise',
      sunset: 'Sunset',
      detecting: 'Detecting location\u2026',
      no_sunrise: 'No sunrise at this latitude today',
      my_location: 'My Location',
    },

    de: {
      page_title: 'Zero Hour \u2014 Ein sonnenaufgangsverankertes Zeitsystem',
      nav_map: 'Weltkarte',
      nav_concept: 'Konzept',
      nav_how: 'Funktionsweise',
      nav_dst: 'vs Sommerzeit',
      hero_title: 'Der Zero-Hour-Vorschlag',
      hero_q1: 'Was w\u00E4re, wenn Sie jeden Tag im Jahr ohne Wecker aufwachen k\u00F6nnten?',
      hero_imagine1: 'Stellen Sie sich vor, wie viel ausgeruhter Sie bei der Arbeit oder in der Schule w\u00E4ren.',
      hero_q2: 'Was w\u00E4re, wenn Arbeit oder Schule jeden Tag im Jahr genau 2 Stunden nach Sonnenaufgang beginnen w\u00FCrde?',
      hero_imagine2: 'Stellen Sie sich vor, wie viel weniger stressig die Morgen w\u00E4ren.',
      hero_cta: 'Zero Hour ist die L\u00F6sung.',
      hero_zht_label: 'Aktuelle Zero-Hour-Zeit',
      hero_civil_label: 'Aktuelles GMT-System',
      map_heading: 'Aktuelle <span class="accent">Zero-Hour</span>-Karte',
      concept_heading: 'Das <span class="accent">Konzept</span>',
      concept_subtitle: 'Die meisten Tiere auf der Erde schlafen nachts und wachen bei Tagesanbruch nat\u00FCrlich auf. Die menschliche Gesellschaft zwingt sich ein anderes System auf \u2014 und das ist weder nat\u00FCrlich noch gesund oder notwendig.',
      concept_sunrise_title: 'Am Sonnenaufgang ausgerichtet',
      concept_sunrise_desc: 'Zero Hour folgt dem nat\u00FCrlichen Tag. Wenn die Sonne aufgeht, beginnt die Paralleluhr. ZHT 0 liegt nahe der Morgend\u00E4mmerung, sodass der benannte Tagesbeginn mit dem sichtbaren Tageslicht \u00FCbereinstimmt.',
      concept_parallel_title: 'Parallelsystem',
      concept_parallel_desc: 'Die gew\u00F6hnliche Uhrzeit bleibt f\u00FCr Transport, Software, Recht, Luftfahrt und Finanzen unver\u00E4ndert. Zero Hour existiert daneben als menschenzentrierte Planungsebene.',
      concept_drift_title: 'Sanfte saisonale Verschiebung',
      concept_drift_desc: 'Anstatt des abrupten Einstundenschocks der Sommerzeit gleitet Zero Hour kontinuierlich mit den Jahreszeiten und folgt der nat\u00FCrlichen Sonnenbewegung.',
      concept_schedule_title: 'Nat\u00FCrliche Planung',
      concept_schedule_desc: 'Der Alltag kann in Zero Time ausgedr\u00FCckt werden. \u201ESchule beginnt um ZHT 1,5\u201C bedeutet anderthalb Stunden nach Sonnenaufgang. Gesch\u00E4fte \u00F6ffnen um ZHT 2. Intuitiv und universell.',
      concept_disruption_title: 'Null St\u00F6rung',
      concept_disruption_desc: 'Kein technisches System muss umgeschrieben werden. Zero Hour bewahrt die b\u00FCrgerliche Zeit vollst\u00E4ndig. Es ist additiv, kein Ersatz \u2014 eine zweite Zeitskala f\u00FCr menschliche Routinen.',
      concept_predictable_title: 'Vollst\u00E4ndig vorhersagbar',
      concept_predictable_desc: 'Zero Hour wird aus Datum, Breitengrad, L\u00E4ngengrad und einem gew\u00E4hlten D\u00E4mmerungsversatz berechnet. Es ist deterministisch f\u00FCr jeden Ort der Erde, f\u00FCr jedes Datum, vergangen oder zuk\u00FCnftig.',
      how_heading: 'So <span class="accent">funktioniert</span> es',
      how_subtitle: 'Eine mathematisch saubere Definition, verankert am lokalen Sonnenaufgang, mit einem optionalen Versatz f\u00FCr die praktische Anwendung.',
      how_core_title: 'Kerndefinition',
      how_core_desc: 'Wobei <strong>k</strong> ein gew\u00E4hlter Versatz in Minuten ist. k\u00A0=\u00A00 bedeutet, dass Zero Hour exakt dem Sonnenaufgang entspricht. k\u00A0=\u00A0+20 bedeutet, dass Zero Hour 20 Minuten nach Sonnenaufgang eintritt.',
      how_solar_title: 'Sonnenberechnung',
      how_solar_desc: 'N\u00A0= Tag des Jahres, h\u00A0= ungen\u00E4hre Sonnenaufgangsstunde (6), \u03C6\u00A0= Breitengrad, \u03B4\u00A0= Sonnendeklination, \u03BB\u00A0= L\u00E4ngengrad (Grad Ost), E\u00A0= Zeitgleichung (Minuten), H\u00A0= Stundenwinkel (Grad). Dies ist das Standard-NOAA-Sonnenpositionsmodell.',
      how_convert_title: 'Umrechnung von b\u00FCrgerlicher Zeit in Zero-Hour-Zeit',
      how_convert_desc: 'Wobei t die aktuelle UTC-Zeit in Minuten nach Mitternacht ist und ZeroHourLocal die UTC-Sonnenaufgangsminuten + Versatz k ist. Das Ergebnis sind Stunden in Zero-Hour-Zeit.',
      dst_heading: 'Zero Hour <span class="accent">vs Sommerzeit</span>',
      dst_subtitle: 'Warum kontinuierliche saisonale Verschiebung abrupte gesetzliche Uhrzeitwechsel \u00FCbertrifft.',
      dst_dst_title: 'Sommerzeit',
      dst_dst_1: 'Abrupter Einstundensprung zweimal im Jahr',
      dst_dst_2: 'St\u00F6rt Schlafrhythmen und zirkadiane Rhythmen',
      dst_dst_3: 'Verursacht messbare Spitzen bei Unf\u00E4llen und Gesundheitsproblemen',
      dst_dst_4: 'Gesetzgeberisch und politisch umstritten',
      dst_dst_5: 'Losgel\u00F6st von der tats\u00E4chlichen Sonnenposition',
      dst_zh_title: 'Zero Hour',
      dst_zh_1: 'Kontinuierliche, sanfte saisonale Anpassung',
      dst_zh_2: 'Folgt der nat\u00FCrlichen Sonnenbewegung',
      dst_zh_3: 'Keine pl\u00F6tzlichen Schocks f\u00FCr biologische Rhythmen',
      dst_zh_4: 'Deterministische Formel, keine gesetzliche Regelung',
      dst_zh_5: 'Per Definition nahe der Morgend\u00E4mmerung',
      bottom_title: 'Das Fazit',
      bottom_1: 'Zero Hour ist als Begleituhr mathematisch machbar.',
      bottom_2: 'Zero Hour l\u00F6st das Problem des Aufwachens im Dunkeln im Winter und der Notwendigkeit von Weckern.',
      bottom_3: 'Zero Hour bewahrt die Pr\u00E4zision der modernen Zeitmessung und f\u00FChrt gleichzeitig ein nat\u00FCrlicheres Gef\u00FChl daf\u00FCr ein, wann der Tag beginnt.',
      bottom_4: 'Wachen Sie nat\u00FCrlich mit der Sonne auf \u2014 nicht k\u00FCnstlich mit einem Wecker.',
      footer: 'Zero Hour Proposal \u00A9 2026. Ein sonnenaufgangsverankertes Parallelzeitsystem.',
      sunrise: 'Sonnenaufgang',
      sunset: 'Sonnenuntergang',
      detecting: 'Standort wird erkannt\u2026',
      no_sunrise: 'Kein Sonnenaufgang an diesem Breitengrad heute',
      my_location: 'Mein Standort',
    },

    fr: {
      page_title: 'Zero Hour \u2014 Un syst\u00E8me horaire ancr\u00E9 au lever du soleil',
      nav_map: 'Carte mondiale',
      nav_concept: 'Concept',
      nav_how: 'Fonctionnement',
      nav_dst: "vs heure d'\u00E9t\u00E9",
      hero_title: 'La proposition Zero Hour',
      hero_q1: "Et si vous pouviez vous r\u00E9veiller sans r\u00E9veil chaque jour de l\u2019ann\u00E9e\u00A0?",
      hero_imagine1: "Imaginez \u00E0 quel point vous seriez plus repos\u00E9 au travail ou \u00E0 l\u2019\u00E9cole.",
      hero_q2: "Et si le travail ou l\u2019\u00E9cole commen\u00E7ait exactement 2 heures apr\u00E8s le lever du soleil chaque jour de l\u2019ann\u00E9e\u00A0?",
      hero_imagine2: "Imaginez \u00E0 quel point les matin\u00E9es seraient moins stressantes.",
      hero_cta: 'Zero Hour est la solution.',
      hero_zht_label: 'Heure Zero Hour actuelle',
      hero_civil_label: 'Syst\u00E8me GMT actuel',
      map_heading: 'Carte <span class="accent">Zero Hour</span> actuelle',
      concept_heading: 'Le <span class="accent">Concept</span>',
      concept_subtitle: "La plupart des animaux de la plan\u00E8te Terre dorment la nuit et se r\u00E9veillent naturellement \u00E0 l\u2019aube. La soci\u00E9t\u00E9 humaine s\u2019impose un syst\u00E8me diff\u00E9rent qui n\u2019est ni naturel, ni sain, ni n\u00E9cessaire.",
      concept_sunrise_title: "Align\u00E9 sur le lever du soleil",
      concept_sunrise_desc: "Zero Hour suit le jour naturel. Quand le soleil se l\u00E8ve, l\u2019horloge parall\u00E8le d\u00E9marre. ZHT 0 est adjacent \u00E0 l\u2019aube, faisant co\u00EFncider le d\u00E9but nomm\u00E9 de la journ\u00E9e avec la lumi\u00E8re visible.",
      concept_parallel_title: 'Syst\u00E8me parall\u00E8le',
      concept_parallel_desc: "L\u2019heure civile ordinaire reste inchang\u00E9e pour les transports, les logiciels, le droit, l\u2019aviation et la finance. Zero Hour existe \u00E0 c\u00F4t\u00E9 comme une couche de planification centr\u00E9e sur l\u2019humain.",
      concept_drift_title: 'D\u00E9rive saisonni\u00E8re douce',
      concept_drift_desc: "Au lieu du choc abrupt d\u2019une heure du changement d\u2019heure, Zero Hour d\u00E9rive continuellement avec les saisons, suivant le mouvement naturel du soleil.",
      concept_schedule_title: 'Planification naturelle',
      concept_schedule_desc: "La vie quotidienne peut s\u2019exprimer en Zero Time. \u00AB\u00A0L\u2019\u00E9cole commence \u00E0 ZHT 1,5\u00A0\u00BB signifie une heure et demie apr\u00E8s le lever du soleil. Les magasins ouvrent \u00E0 ZHT 2. Intuitif et universel.",
      concept_disruption_title: 'Z\u00E9ro perturbation',
      concept_disruption_desc: "Aucun syst\u00E8me technique n\u2019a besoin d\u2019\u00EAtre r\u00E9\u00E9crit. Zero Hour pr\u00E9serve enti\u00E8rement l\u2019heure civile. C\u2019est un ajout, pas un remplacement \u2014 une seconde \u00E9chelle de temps pour les routines humaines.",
      concept_predictable_title: 'Enti\u00E8rement pr\u00E9visible',
      concept_predictable_desc: "Zero Hour est calcul\u00E9 \u00E0 partir de la date, de la latitude, de la longitude et d\u2019un d\u00E9calage d\u2019aube choisi. C\u2019est d\u00E9terministe pour n\u2019importe quel lieu sur Terre, pour n\u2019importe quelle date, pass\u00E9e ou future.",
      how_heading: 'Comment \u00E7a <span class="accent">fonctionne</span>',
      how_subtitle: "Une d\u00E9finition math\u00E9matiquement propre ancr\u00E9e au lever du soleil local, avec un d\u00E9calage optionnel pour l\u2019usage pratique.",
      how_core_title: 'D\u00E9finition principale',
      how_core_desc: "O\u00F9 <strong>k</strong> est un d\u00E9calage choisi en minutes. k\u00A0=\u00A00 signifie que l\u2019heure z\u00E9ro correspond exactement au lever du soleil. k\u00A0=\u00A0+20 signifie que l\u2019heure z\u00E9ro survient 20 minutes apr\u00E8s le lever du soleil.",
      how_solar_title: 'Calcul solaire',
      how_solar_desc: "N\u00A0= jour de l\u2019ann\u00E9e, h\u00A0= heure approximative du lever du soleil (6), \u03C6\u00A0= latitude, \u03B4\u00A0= d\u00E9clinaison solaire, \u03BB\u00A0= longitude (degr\u00E9s est), E\u00A0= \u00E9quation du temps (minutes), H\u00A0= angle horaire (degr\u00E9s). Mod\u00E8le standard NOAA de position solaire.",
      how_convert_title: "Conversion de l\u2019heure civile en heure Zero Hour",
      how_convert_desc: "O\u00F9 t est l\u2019heure UTC actuelle en minutes apr\u00E8s minuit et ZeroHourLocal est les minutes UTC du lever du soleil + d\u00E9calage k. Le r\u00E9sultat est en heures Zero Hour.",
      dst_heading: "Zero Hour <span class=\"accent\">vs heure d\u2019\u00E9t\u00E9</span>",
      dst_subtitle: "Pourquoi la d\u00E9rive saisonni\u00E8re continue surpasse les changements d\u2019heure l\u00E9gislatifs abrupts.",
      dst_dst_title: "Heure d\u2019\u00E9t\u00E9",
      dst_dst_1: "Saut abrupt d\u2019une heure deux fois par an",
      dst_dst_2: 'Perturbe les rythmes de sommeil et circadiens',
      dst_dst_3: "Provoque des pics mesurables d\u2019accidents et de probl\u00E8mes de sant\u00E9",
      dst_dst_4: 'L\u00E9gislativement et politiquement controvers\u00E9',
      dst_dst_5: 'D\u00E9connect\u00E9 de la position solaire r\u00E9elle',
      dst_zh_title: 'Zero Hour',
      dst_zh_1: 'Ajustement saisonnier continu et doux',
      dst_zh_2: 'Suit le mouvement naturel du soleil',
      dst_zh_3: 'Aucun choc soudain pour les rythmes biologiques',
      dst_zh_4: 'Formule d\u00E9terministe, pas de politique l\u00E9gislative',
      dst_zh_5: "Adjacent \u00E0 l\u2019aube par d\u00E9finition",
      bottom_title: "L\u2019essentiel",
      bottom_1: 'Zero Hour est math\u00E9matiquement faisable comme horloge compl\u00E9mentaire.',
      bottom_2: "Zero Hour r\u00E9sout le probl\u00E8me de se r\u00E9veiller dans le noir en hiver et d\u2019avoir besoin de r\u00E9veils.",
      bottom_3: "Zero Hour pr\u00E9serve la pr\u00E9cision du chronom\u00E9trage moderne tout en r\u00E9introduisant un sens plus naturel du d\u00E9but de la journ\u00E9e.",
      bottom_4: "R\u00E9veillez-vous naturellement avec le soleil \u2014 pas artificiellement avec un r\u00E9veil.",
      footer: "Zero Hour Proposal \u00A9 2026. Un syst\u00E8me horaire parall\u00E8le ancr\u00E9 au lever du soleil.",
      sunrise: 'Lever du soleil',
      sunset: 'Coucher du soleil',
      detecting: 'D\u00E9tection de la localisation\u2026',
      no_sunrise: "Pas de lever de soleil \u00E0 cette latitude aujourd\u2019hui",
      my_location: 'Ma position',
    },

    es: {
      page_title: 'Zero Hour \u2014 Un sistema horario anclado al amanecer',
      nav_map: 'Mapa global',
      nav_concept: 'Concepto',
      nav_how: 'C\u00F3mo funciona',
      nav_dst: 'vs horario de verano',
      hero_title: 'La propuesta Zero Hour',
      hero_q1: '\u00BFY si pudieras despertarte sin despertador todos los d\u00EDas del a\u00F1o?',
      hero_imagine1: 'Imagina cu\u00E1nto m\u00E1s descansado estar\u00EDas en el trabajo o en la escuela.',
      hero_q2: '\u00BFY si el trabajo o la escuela comenzaran exactamente 2 horas despu\u00E9s del amanecer todos los d\u00EDas del a\u00F1o?',
      hero_imagine2: 'Imagina cu\u00E1nto menos estresantes ser\u00EDan las ma\u00F1anas.',
      hero_cta: 'Zero Hour es la soluci\u00F3n.',
      hero_zht_label: 'Hora Zero Hour actual',
      hero_civil_label: 'Sistema GMT actual',
      map_heading: 'Mapa <span class="accent">Zero Hour</span> actual',
      concept_heading: 'El <span class="accent">Concepto</span>',
      concept_subtitle: 'La mayor\u00EDa de los animales del planeta Tierra duermen por la noche y se despiertan naturalmente al amanecer. La sociedad humana se ha impuesto un sistema diferente que no es natural, saludable ni necesario.',
      concept_sunrise_title: 'Alineado con el amanecer',
      concept_sunrise_desc: 'Zero Hour sigue el d\u00EDa natural. Cuando el sol sale, el reloj paralelo comienza. ZHT 0 est\u00E1 adyacente al amanecer, haciendo que el inicio nombrado del d\u00EDa coincida con la luz visible.',
      concept_parallel_title: 'Sistema paralelo',
      concept_parallel_desc: 'La hora civil ordinaria permanece sin cambios para el transporte, el software, la ley, la aviaci\u00F3n y las finanzas. Zero Hour existe junto a ella como una capa de programaci\u00F3n centrada en el ser humano.',
      concept_drift_title: 'Desplazamiento estacional suave',
      concept_drift_desc: 'En lugar del choque abrupto de una hora del horario de verano, Zero Hour se desplaza continuamente con las estaciones, siguiendo el movimiento natural del sol.',
      concept_schedule_title: 'Programaci\u00F3n natural',
      concept_schedule_desc: 'La vida diaria puede expresarse en Zero Time. \u00ABLa escuela empieza a ZHT 1,5\u00BB significa una hora y media despu\u00E9s del amanecer. Las tiendas abren a ZHT 2. Intuitivo y universal.',
      concept_disruption_title: 'Cero perturbaci\u00F3n',
      concept_disruption_desc: 'Ning\u00FAn sistema t\u00E9cnico necesita ser reescrito. Zero Hour preserva completamente la hora civil. Es aditivo, no un reemplazo \u2014 una segunda escala de tiempo para las rutinas humanas.',
      concept_predictable_title: 'Totalmente predecible',
      concept_predictable_desc: 'Zero Hour se calcula a partir de la fecha, latitud, longitud y un desplazamiento de amanecer elegido. Es determinista para cualquier ubicaci\u00F3n en la Tierra, para cualquier fecha, pasada o futura.',
      how_heading: 'C\u00F3mo <span class="accent">funciona</span>',
      how_subtitle: 'Una definici\u00F3n matem\u00E1ticamente limpia anclada al amanecer local, con un desplazamiento opcional para uso pr\u00E1ctico.',
      how_core_title: 'Definici\u00F3n principal',
      how_core_desc: 'Donde <strong>k</strong> es un desplazamiento elegido en minutos. k\u00A0=\u00A00 significa que la hora cero es exactamente el amanecer. k\u00A0=\u00A0+20 significa que la hora cero ocurre 20 minutos despu\u00E9s del amanecer.',
      how_solar_title: 'C\u00E1lculo solar',
      how_solar_desc: 'N\u00A0= d\u00EDa del a\u00F1o, h\u00A0= hora aproximada del amanecer (6), \u03C6\u00A0= latitud, \u03B4\u00A0= declinaci\u00F3n solar, \u03BB\u00A0= longitud (grados este), E\u00A0= ecuaci\u00F3n del tiempo (minutos), H\u00A0= \u00E1ngulo horario (grados). Modelo est\u00E1ndar de posici\u00F3n solar NOAA.',
      how_convert_title: 'Conversi\u00F3n de hora civil a hora Zero Hour',
      how_convert_desc: 'Donde t es la hora UTC actual en minutos despu\u00E9s de medianoche y ZeroHourLocal son los minutos UTC del amanecer + desplazamiento k. El resultado son horas en tiempo Zero Hour.',
      dst_heading: 'Zero Hour <span class="accent">vs horario de verano</span>',
      dst_subtitle: 'Por qu\u00E9 el desplazamiento estacional continuo supera los cambios de hora legislativos abruptos.',
      dst_dst_title: 'Horario de verano',
      dst_dst_1: 'Salto abrupto de una hora dos veces al a\u00F1o',
      dst_dst_2: 'Altera los horarios de sue\u00F1o y los ritmos circadianos',
      dst_dst_3: 'Causa picos medibles en accidentes y eventos de salud',
      dst_dst_4: 'Legislativa y pol\u00EDticamente controvertido',
      dst_dst_5: 'Desconectado de la posici\u00F3n solar real',
      dst_zh_title: 'Zero Hour',
      dst_zh_1: 'Ajuste estacional continuo y suave',
      dst_zh_2: 'Sigue el movimiento natural del sol',
      dst_zh_3: 'Sin choques repentinos a los ritmos biol\u00F3gicos',
      dst_zh_4: 'F\u00F3rmula determinista, no pol\u00EDtica legislativa',
      dst_zh_5: 'Adyacente al amanecer por definici\u00F3n',
      bottom_title: 'En resumen',
      bottom_1: 'Zero Hour es matem\u00E1ticamente viable como reloj complementario.',
      bottom_2: 'Zero Hour soluciona el problema de despertarse en la oscuridad en invierno y necesitar despertadores.',
      bottom_3: 'Zero Hour preserva la precisi\u00F3n del cronometraje moderno mientras reintroduce un sentido m\u00E1s natural de cu\u00E1ndo comienza el d\u00EDa.',
      bottom_4: 'Despierta naturalmente con el sol \u2014 no artificialmente con un despertador.',
      footer: 'Zero Hour Proposal \u00A9 2026. Un sistema horario paralelo anclado al amanecer.',
      sunrise: 'Amanecer',
      sunset: 'Atardecer',
      detecting: 'Detectando ubicaci\u00F3n\u2026',
      no_sunrise: 'Sin amanecer en esta latitud hoy',
      my_location: 'Mi ubicaci\u00F3n',
    },

    it: {
      page_title: "Zero Hour \u2014 Un sistema orario ancorato all\u2019alba",
      nav_map: 'Mappa globale',
      nav_concept: 'Concetto',
      nav_how: 'Come funziona',
      nav_dst: 'vs ora legale',
      hero_title: 'La proposta Zero Hour',
      hero_q1: "E se potessi svegliarti senza sveglia ogni giorno dell\u2019anno?",
      hero_imagine1: 'Immagina quanto saresti pi\u00F9 riposato al lavoro o a scuola.',
      hero_q2: "E se il lavoro o la scuola iniziassero esattamente 2 ore dopo l\u2019alba ogni giorno dell\u2019anno?",
      hero_imagine2: 'Immagina quanto meno stressanti sarebbero le mattine.',
      hero_cta: 'Zero Hour \u00E8 la soluzione.',
      hero_zht_label: 'Ora Zero Hour attuale',
      hero_civil_label: 'Sistema GMT attuale',
      map_heading: 'Mappa <span class="accent">Zero Hour</span> attuale',
      concept_heading: 'Il <span class="accent">Concetto</span>',
      concept_subtitle: "La maggior parte degli animali del pianeta Terra dorme di notte e si sveglia naturalmente all\u2019alba. La societ\u00E0 umana si \u00E8 imposta un sistema diverso che non \u00E8 naturale, salutare o necessario.",
      concept_sunrise_title: "Allineato con l\u2019alba",
      concept_sunrise_desc: "Zero Hour segue il giorno naturale. Quando il sole sorge, l\u2019orologio parallelo parte. ZHT 0 \u00E8 adiacente all\u2019alba, facendo coincidere l\u2019inizio nominale della giornata con la luce visibile.",
      concept_parallel_title: 'Sistema parallelo',
      concept_parallel_desc: "L\u2019ora civile ordinaria rimane invariata per trasporti, software, legge, aviazione e finanza. Zero Hour esiste accanto ad essa come un livello di pianificazione incentrato sull\u2019uomo.",
      concept_drift_title: 'Deriva stagionale graduale',
      concept_drift_desc: "Invece dello shock brusco di un\u2019ora dell\u2019ora legale, Zero Hour scorre continuamente con le stagioni, seguendo il moto naturale del sole.",
      concept_schedule_title: 'Programmazione naturale',
      concept_schedule_desc: "La vita quotidiana pu\u00F2 essere espressa in Zero Time. \u00ABLa scuola inizia a ZHT 1,5\u00BB significa un\u2019ora e mezza dopo l\u2019alba. I negozi aprono a ZHT 2. Intuitivo e universale.",
      concept_disruption_title: 'Zero interruzioni',
      concept_disruption_desc: "Nessun sistema tecnico deve essere riscritto. Zero Hour preserva completamente l\u2019ora civile. \u00C8 additivo, non sostitutivo \u2014 una seconda scala temporale per le routine umane.",
      concept_predictable_title: 'Completamente prevedibile',
      concept_predictable_desc: "Zero Hour viene calcolato da data, latitudine, longitudine e un offset dell\u2019alba scelto. \u00C8 deterministico per qualsiasi luogo sulla Terra, per qualsiasi data, passata o futura.",
      how_heading: 'Come <span class="accent">funziona</span>',
      how_subtitle: "Una definizione matematicamente pulita ancorata all\u2019alba locale, con un offset opzionale per l\u2019uso pratico.",
      how_core_title: 'Definizione principale',
      how_core_desc: "Dove <strong>k</strong> \u00E8 un offset scelto in minuti. k\u00A0=\u00A00 significa che l\u2019ora zero coincide esattamente con l\u2019alba. k\u00A0=\u00A0+20 significa che l\u2019ora zero si verifica 20 minuti dopo l\u2019alba.",
      how_solar_title: 'Calcolo solare',
      how_solar_desc: "N\u00A0= giorno dell\u2019anno, h\u00A0= ora approssimativa dell\u2019alba (6), \u03C6\u00A0= latitudine, \u03B4\u00A0= declinazione solare, \u03BB\u00A0= longitudine (gradi est), E\u00A0= equazione del tempo (minuti), H\u00A0= angolo orario (gradi). Modello standard NOAA di posizione solare.",
      how_convert_title: "Conversione dell\u2019ora civile in ora Zero Hour",
      how_convert_desc: "Dove t \u00E8 l\u2019ora UTC attuale in minuti dopo mezzanotte e ZeroHourLocal sono i minuti UTC dell\u2019alba + offset k. Il risultato \u00E8 in ore Zero Hour.",
      dst_heading: 'Zero Hour <span class="accent">vs ora legale</span>',
      dst_subtitle: "Perch\u00E9 la deriva stagionale continua batte i bruschi cambiamenti d\u2019ora legislativi.",
      dst_dst_title: 'Ora legale',
      dst_dst_1: "Salto brusco di un\u2019ora due volte all\u2019anno",
      dst_dst_2: 'Disturba i ritmi del sonno e circadiani',
      dst_dst_3: 'Causa picchi misurabili di incidenti ed eventi sanitari',
      dst_dst_4: 'Legislativamente e politicamente controversa',
      dst_dst_5: 'Scollegata dalla posizione solare reale',
      dst_zh_title: 'Zero Hour',
      dst_zh_1: 'Adeguamento stagionale continuo e graduale',
      dst_zh_2: 'Segue il moto naturale del sole',
      dst_zh_3: 'Nessuno shock improvviso ai ritmi biologici',
      dst_zh_4: 'Formula deterministica, non politica legislativa',
      dst_zh_5: "Adiacente all\u2019alba per definizione",
      bottom_title: 'In sintesi',
      bottom_1: 'Zero Hour \u00E8 matematicamente fattibile come orologio complementare.',
      bottom_2: 'Zero Hour risolve il problema di svegliarsi al buio in inverno e della necessit\u00E0 di sveglie.',
      bottom_3: "Zero Hour preserva la precisione della misurazione del tempo moderna, reintroducendo al contempo un senso pi\u00F9 naturale di quando inizia la giornata.",
      bottom_4: 'Svegliati naturalmente con il sole \u2014 non artificialmente con una sveglia.',
      footer: "Zero Hour Proposal \u00A9 2026. Un sistema orario parallelo ancorato all\u2019alba.",
      sunrise: 'Alba',
      sunset: 'Tramonto',
      detecting: 'Rilevamento posizione\u2026',
      no_sunrise: 'Nessuna alba a questa latitudine oggi',
      my_location: 'La mia posizione',
    },

    zh: {
      page_title: 'Zero Hour \u2014 \u57FA\u4E8E\u65E5\u51FA\u7684\u65F6\u95F4\u7CFB\u7EDF',
      nav_map: '\u5168\u7403\u5730\u56FE',
      nav_concept: '\u6982\u5FF5',
      nav_how: '\u5DE5\u4F5C\u539F\u7406',
      nav_dst: 'vs \u590F\u4EE4\u65F6',
      hero_title: 'Zero Hour \u63D0\u6848',
      hero_q1: '\u5982\u679C\u4F60\u6BCF\u5929\u90FD\u80FD\u4E0D\u7528\u95F9\u949F\u81EA\u7136\u9192\u6765\u5462\uFF1F',
      hero_imagine1: '\u60F3\u8C61\u4E00\u4E0B\u4F60\u5728\u5DE5\u4F5C\u6216\u5B66\u4E60\u65F6\u4F1A\u591A\u4E48\u7CBE\u795E\u7115\u53D1\u3002',
      hero_q2: '\u5982\u679C\u5DE5\u4F5C\u6216\u5B66\u6821\u6BCF\u5929\u90FD\u5728\u65E5\u51FA\u540E\u6070\u597D2\u5C0F\u65F6\u5F00\u59CB\u5462\uFF1F',
      hero_imagine2: '\u60F3\u8C61\u4E00\u4E0B\u65E9\u6668\u4F1A\u5C11\u591A\u5C11\u538B\u529B\u3002',
      hero_cta: 'Zero Hour \u5C31\u662F\u89E3\u51B3\u65B9\u6848\u3002',
      hero_zht_label: '\u5F53\u524D Zero Hour \u65F6\u95F4',
      hero_civil_label: '\u5F53\u524D GMT \u7CFB\u7EDF',
      map_heading: '\u5F53\u524D <span class="accent">Zero Hour</span> \u5730\u56FE',
      concept_heading: '<span class="accent">\u6982\u5FF5</span>',
      concept_subtitle: '\u5730\u7403\u4E0A\u5927\u591A\u6570\u52A8\u7269\u5728\u591C\u95F4\u7761\u89C9\uFF0C\u5728\u9ECE\u660E\u65F6\u81EA\u7136\u9192\u6765\u3002\u4EBA\u7C7B\u793E\u4F1A\u4E00\u76F4\u5728\u5F3A\u5236\u63A8\u884C\u4E00\u4E2A\u4E0D\u540C\u7684\u7CFB\u7EDF\uFF0C\u800C\u8FD9\u65E2\u4E0D\u81EA\u7136\u3001\u4E0D\u5065\u5EB7\uFF0C\u4E5F\u6CA1\u6709\u5FC5\u8981\u3002',
      concept_sunrise_title: '\u4E0E\u65E5\u51FA\u5BF9\u9F50',
      concept_sunrise_desc: 'Zero Hour \u8DDF\u968F\u81EA\u7136\u65E5\u3002\u5F53\u592A\u9633\u5347\u8D77\u65F6\uFF0C\u5E73\u884C\u65F6\u949F\u5F00\u59CB\u3002ZHT 0 \u63A5\u8FD1\u9ECE\u660E\uFF0C\u4F7F\u5F97\u4E00\u5929\u7684\u547D\u540D\u8D77\u70B9\u4E0E\u53EF\u89C1\u65E5\u5149\u4E00\u81F4\u3002',
      concept_parallel_title: '\u5E73\u884C\u7CFB\u7EDF',
      concept_parallel_desc: '\u666E\u901A\u65F6\u949F\u65F6\u95F4\u5728\u4EA4\u901A\u3001\u8F6F\u4EF6\u3001\u6CD5\u5F8B\u3001\u822A\u7A7A\u548C\u91D1\u878D\u65B9\u9762\u4FDD\u6301\u4E0D\u53D8\u3002Zero Hour \u4F5C\u4E3A\u4EE5\u4EBA\u4E3A\u4E2D\u5FC3\u7684\u65E5\u7A0B\u5C42\u4E0E\u5176\u5E76\u5B58\u3002',
      concept_drift_title: '\u5E73\u6ED1\u5B63\u8282\u6F02\u79FB',
      concept_drift_desc: '\u4E0D\u540C\u4E8E\u590F\u4EE4\u65F6\u7A81\u7136\u7684\u4E00\u5C0F\u65F6\u8C03\u6574\uFF0CZero Hour \u968F\u5B63\u8282\u8FDE\u7EED\u6F02\u79FB\uFF0C\u8DDF\u968F\u592A\u9633\u7684\u81EA\u7136\u8FD0\u52A8\u3002',
      concept_schedule_title: '\u81EA\u7136\u8C03\u5EA6',
      concept_schedule_desc: '\u65E5\u5E38\u751F\u6D3B\u53EF\u4EE5\u7528 Zero Time \u8868\u8FBE\u3002\u300C\u5B66\u6821\u5728 ZHT 1.5 \u5F00\u59CB\u300D\u610F\u5473\u7740\u65E5\u51FA\u540E\u4E00\u4E2A\u534A\u5C0F\u65F6\u3002\u5546\u5E97\u5728 ZHT 2 \u5F00\u95E8\u3002\u76F4\u89C2\u4E14\u901A\u7528\u3002',
      concept_disruption_title: '\u96F6\u5E72\u6270',
      concept_disruption_desc: '\u65E0\u9700\u91CD\u5199\u4EFB\u4F55\u6280\u672F\u7CFB\u7EDF\u3002Zero Hour \u5B8C\u5168\u4FDD\u7559\u6C11\u7528\u65F6\u95F4\u3002\u5B83\u662F\u9644\u52A0\u7684\uFF0C\u4E0D\u662F\u66FF\u4EE3\u54C1\u2014\u2014\u4E3A\u4EBA\u7C7B\u65E5\u5E38\u6D3B\u52A8\u63D0\u4F9B\u7684\u7B2C\u4E8C\u65F6\u95F4\u5C3A\u5EA6\u3002',
      concept_predictable_title: '\u5B8C\u5168\u53EF\u9884\u6D4B',
      concept_predictable_desc: 'Zero Hour \u7531\u65E5\u671F\u3001\u7EAC\u5EA6\u3001\u7ECF\u5EA6\u548C\u9009\u5B9A\u7684\u9ECE\u660E\u504F\u79FB\u91CF\u8BA1\u7B97\u5F97\u51FA\u3002\u5BF9\u4E8E\u5730\u7403\u4E0A\u4EFB\u4F55\u5730\u70B9\u3001\u4EFB\u4F55\u65E5\u671F\uFF08\u8FC7\u53BB\u6216\u672A\u6765\uFF09\uFF0C\u5B83\u90FD\u662F\u786E\u5B9A\u6027\u7684\u3002',
      how_heading: '\u5DE5\u4F5C<span class="accent">\u539F\u7406</span>',
      how_subtitle: '\u4E00\u4E2A\u57FA\u4E8E\u5F53\u5730\u65E5\u51FA\u7684\u6570\u5B66\u4E0A\u7B80\u6D01\u7684\u5B9A\u4E49\uFF0C\u5E26\u6709\u53EF\u9009\u7684\u5B9E\u7528\u504F\u79FB\u91CF\u3002',
      how_core_title: '\u6838\u5FC3\u5B9A\u4E49',
      how_core_desc: '\u5176\u4E2D <strong>k</strong> \u662F\u4EE5\u5206\u949F\u4E3A\u5355\u4F4D\u7684\u9009\u5B9A\u504F\u79FB\u91CF\u3002k\u00A0=\u00A00 \u8868\u793A\u96F6\u70B9\u6070\u597D\u662F\u65E5\u51FA\u65F6\u523B\u3002k\u00A0=\u00A0+20 \u8868\u793A\u96F6\u70B9\u51FA\u73B0\u5728\u65E5\u51FA\u540E20\u5206\u949F\u3002',
      how_solar_title: '\u592A\u9633\u8BA1\u7B97',
      how_solar_desc: 'N\u00A0= \u5E74\u4E2D\u7B2C\u51E0\u5929\uFF0Ch\u00A0= \u65E5\u51FA\u8FD1\u4F3C\u5C0F\u65F6\uFF086\uFF09\uFF0C\u03C6\u00A0= \u7EAC\u5EA6\uFF0C\u03B4\u00A0= \u592A\u9633\u8D64\u7EAC\uFF0C\u03BB\u00A0= \u7ECF\u5EA6\uFF08\u4E1C\u7ECF\u5EA6\u6570\uFF09\uFF0CE\u00A0= \u65F6\u5DEE\uFF08\u5206\u949F\uFF09\uFF0CH\u00A0= \u65F6\u89D2\uFF08\u5EA6\uFF09\u3002\u6807\u51C6 NOAA \u592A\u9633\u4F4D\u7F6E\u6A21\u578B\u3002',
      how_convert_title: '\u6C11\u7528\u65F6\u95F4\u8F6C\u6362\u4E3A Zero Hour \u65F6\u95F4',
      how_convert_desc: '\u5176\u4E2D t \u662F\u5F53\u524D UTC \u65F6\u95F4\uFF08\u5348\u591C\u540E\u7684\u5206\u949F\u6570\uFF09\uFF0CZeroHourLocal \u662F\u65E5\u51FA UTC \u5206\u949F\u6570 + \u504F\u79FB\u91CF k\u3002\u7ED3\u679C\u4EE5 Zero Hour \u65F6\u95F4\u7684\u5C0F\u65F6\u6570\u8868\u793A\u3002',
      dst_heading: 'Zero Hour <span class="accent">vs \u590F\u4EE4\u65F6</span>',
      dst_subtitle: '\u4E3A\u4EC0\u4E48\u8FDE\u7EED\u7684\u5B63\u8282\u6F02\u79FB\u4F18\u4E8E\u7A81\u7136\u7684\u7ACB\u6CD5\u65F6\u949F\u53D8\u66F4\u3002',
      dst_dst_title: '\u590F\u4EE4\u65F6',
      dst_dst_1: '\u6BCF\u5E74\u4E24\u6B21\u7A81\u7136\u7684\u4E00\u5C0F\u65F6\u8DF3\u53D8',
      dst_dst_2: '\u6270\u4E71\u7761\u7720\u65F6\u95F4\u8868\u548C\u663C\u591C\u8282\u5F8B',
      dst_dst_3: '\u5BFC\u81F4\u4E8B\u6545\u548C\u5065\u5EB7\u4E8B\u4EF6\u51FA\u73B0\u53EF\u6D4B\u91CF\u7684\u5CF0\u503C',
      dst_dst_4: '\u5728\u7ACB\u6CD5\u548C\u653F\u6CBB\u4E0A\u5B58\u5728\u4E89\u8BAE',
      dst_dst_5: '\u4E0E\u5B9E\u9645\u592A\u9633\u4F4D\u7F6E\u8131\u8282',
      dst_zh_title: 'Zero Hour',
      dst_zh_1: '\u8FDE\u7EED\u3001\u5E73\u6ED1\u7684\u5B63\u8282\u8C03\u6574',
      dst_zh_2: '\u8DDF\u968F\u592A\u9633\u7684\u81EA\u7136\u8FD0\u52A8',
      dst_zh_3: '\u4E0D\u4F1A\u5BF9\u751F\u7269\u8282\u5F8B\u9020\u6210\u7A81\u7136\u51B2\u51FB',
      dst_zh_4: '\u786E\u5B9A\u6027\u516C\u5F0F\uFF0C\u975E\u7ACB\u6CD5\u653F\u7B56',
      dst_zh_5: '\u5B9A\u4E49\u4E0A\u4E0E\u9ECE\u660E\u76F8\u90BB',
      bottom_title: '\u603B\u7ED3',
      bottom_1: 'Zero Hour \u4F5C\u4E3A\u4E00\u4E2A\u4F34\u4FA3\u65F6\u949F\u5728\u6570\u5B66\u4E0A\u662F\u53EF\u884C\u7684\u3002',
      bottom_2: 'Zero Hour \u89E3\u51B3\u4E86\u51AC\u5929\u5728\u9ED1\u6697\u4E2D\u9192\u6765\u548C\u9700\u8981\u95F9\u949F\u7684\u95EE\u9898\u3002',
      bottom_3: 'Zero Hour \u4FDD\u7559\u4E86\u73B0\u4EE3\u8BA1\u65F6\u7684\u7CBE\u786E\u6027\uFF0C\u540C\u65F6\u91CD\u65B0\u5F15\u5165\u4E86\u5BF9\u4E00\u5929\u4F55\u65F6\u5F00\u59CB\u7684\u66F4\u81EA\u7136\u611F\u77E5\u3002',
      bottom_4: '\u968F\u592A\u9633\u81EA\u7136\u9192\u6765\u2014\u2014\u800C\u4E0D\u662F\u88AB\u95F9\u949F\u4EBA\u4E3A\u5524\u9192\u3002',
      footer: 'Zero Hour Proposal \u00A9 2026\u3002\u57FA\u4E8E\u65E5\u51FA\u7684\u5E73\u884C\u65F6\u95F4\u7CFB\u7EDF\u3002',
      sunrise: '\u65E5\u51FA',
      sunset: '\u65E5\u843D',
      detecting: '\u6B63\u5728\u68C0\u6D4B\u4F4D\u7F6E\u2026',
      no_sunrise: '\u4ECA\u5929\u6B64\u7EAC\u5EA6\u65E0\u65E5\u51FA',
      my_location: '\u6211\u7684\u4F4D\u7F6E',
    },
  };

  const LANG_LABELS = {
    en: 'English',
    de: 'Deutsch',
    fr: 'Fran\u00E7ais',
    es: 'Espa\u00F1ol',
    it: 'Italiano',
    zh: '\u4E2D\u6587',
  };

  let currentLang = 'en';
  const changeCallbacks = [];

  function detectLanguage() {
    const saved = localStorage.getItem('zh-lang');
    if (saved && translations[saved]) return saved;

    const nav = navigator.language || navigator.userLanguage || 'en';
    const short = nav.split('-')[0].toLowerCase();
    if (translations[short]) return short;

    return 'en';
  }

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) ||
           translations.en[key] || key;
  }

  function getLang() {
    return currentLang;
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('zh-lang', lang);
    document.documentElement.lang = lang;
    document.title = t('page_title');
    applyTranslations();
    updateSwitcher();
    changeCallbacks.forEach(cb => cb(lang));
  }

  function onLanguageChange(cb) {
    changeCallbacks.push(cb);
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
  }

  function updateSwitcher() {
    const btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = currentLang.toUpperCase();
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === currentLang);
    });
  }

  function createSwitcher() {
    const nav = document.querySelector('.nav-inner');
    if (!nav) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'lang-switcher';

    const btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.id = 'lang-btn';
    btn.setAttribute('aria-label', 'Select language');
    btn.textContent = currentLang.toUpperCase();

    const dropdown = document.createElement('div');
    dropdown.className = 'lang-dropdown';
    dropdown.id = 'lang-dropdown';

    Object.keys(LANG_LABELS).forEach(code => {
      const opt = document.createElement('button');
      opt.className = 'lang-option' + (code === currentLang ? ' active' : '');
      opt.setAttribute('data-lang', code);
      opt.textContent = LANG_LABELS[code];
      opt.addEventListener('click', () => {
        setLanguage(code);
        dropdown.classList.remove('open');
      });
      dropdown.appendChild(opt);
    });

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
    });

    wrapper.appendChild(btn);
    wrapper.appendChild(dropdown);
    nav.appendChild(wrapper);
  }

  function init() {
    currentLang = detectLanguage();
    createSwitcher();
    document.documentElement.lang = currentLang;
    document.title = t('page_title');
    applyTranslations();
  }

  return { init, t, getLang, setLanguage, onLanguageChange, applyTranslations };
})();

document.addEventListener('DOMContentLoaded', () => {
  I18n.init();
});
