/**
 * Personality Pop-Up™ — Master City List
 * ========================================
 * This is the SINGLE SOURCE OF TRUTH for all city data.
 * Both the Waitlist form and Contact form load this file.
 *
 * Hosted at: https://session-crm.vercel.app/cities.js
 *
 * To add a city:
 *   1. Add a new entry below in alphabetical order
 *   2. Push to GitHub (main branch)
 *   3. Vercel auto-deploys — both forms update automatically
 *
 * Format: { name: 'City, ST', tag: 'city_slug', aliases: [...] }
 *   - tag: lowercase, underscores, used for GHL contact tagging
 *   - aliases: neighborhoods, abbreviations, nearby cities for fuzzy matching
 *
 * Last updated: 2026-03-31
 * Total cities: 53
 */

var CITIES = [
  { name: 'Atlanta, GA', tag: 'city_atlanta_ga', aliases: ['atl', 'decatur', 'marietta', 'buckhead', 'sandy springs', 'roswell ga', 'alpharetta', 'smyrna ga', 'kennesaw'] },
  { name: 'Austin, TX', tag: 'city_austin_tx', aliases: ['atx', 'dripping springs', 'round rock', 'cedar park', 'pflugerville', 'georgetown tx', 'lakeway'] },
  { name: 'Birmingham, AL', tag: 'city_birmingham_al', aliases: ['hoover al', 'vestavia hills', 'homewood al', 'mountain brook'] },
  { name: 'Boca Raton, FL', tag: 'city_boca_raton_fl', aliases: ['boca', 'delray beach', 'deerfield beach', 'boynton beach'] },
  { name: 'Boston, MA', tag: 'city_boston_ma', aliases: ['bos', 'cambridge', 'somerville', 'brookline', 'newton ma', 'quincy ma'] },
  { name: 'Brooklyn, NY', tag: 'city_brooklyn_ny', aliases: ['bk', 'williamsburg', 'bushwick', 'park slope', 'dumbo', 'bed stuy', 'flatbush', 'greenpoint'] },
  { name: 'Carlsbad, CA', tag: 'city_carlsbad_ca', aliases: ['encinitas', 'oceanside', 'vista ca'] },
  { name: 'Charleston, SC', tag: 'city_charleston_sc', aliases: ['mount pleasant sc', 'summerville sc', 'james island', 'folly beach'] },
  { name: 'Charlotte, NC', tag: 'city_charlotte_nc', aliases: ['clt', 'south end charlotte', 'noda', 'huntersville', 'matthews nc', 'concord nc'] },
  { name: 'Chicago, IL', tag: 'city_chicago_il', aliases: ['chi', 'chi-town', 'windy city', 'evanston', 'oak park', 'naperville', 'schaumburg', 'gary'] },
  { name: 'Cincinnati, OH', tag: 'city_cincinnati_oh', aliases: ['cincy', 'mason oh', 'west chester oh', 'blue ash', 'kenwood oh', 'hyde park cincinnati'] },
  { name: 'Cleveland, OH', tag: 'city_cleveland_oh', aliases: ['cle', 'shaker heights', 'beachwood oh', 'westlake oh', 'rocky river', 'chagrin falls'] },
  { name: 'Columbus, OH', tag: 'city_columbus_oh', aliases: ['cbus', 'dublin oh', 'westerville', 'upper arlington'] },
  { name: 'Dallas, TX', tag: 'city_dallas_tx', aliases: ['dfw', 'dallas fort worth', 'plano', 'frisco tx', 'irving tx', 'arlington tx', 'richardson tx', 'mckinney tx', 'fort worth'] },
  { name: 'Denver, CO', tag: 'city_denver_co', aliases: ['mile high', 'aurora co', 'boulder', 'lakewood co', 'littleton co', 'broomfield'] },
  { name: 'Detroit, MI', tag: 'city_detroit_mi', aliases: ['ann arbor', 'royal oak', 'birmingham mi', 'bloomfield hills', 'troy mi', 'grosse pointe', 'novi mi', 'plymouth mi', 'metro detroit'] },
  { name: 'Garden City, NY', tag: 'city_garden_city_ny', aliases: ['mineola', 'hempstead', 'westbury ny'] },
  { name: 'Greenville, SC', tag: 'city_greenville_sc', aliases: ['greer sc', 'simpsonville', 'mauldin', 'travelers rest'] },
  { name: 'Greenwich, CT', tag: 'city_greenwich_ct', aliases: ['cos cob', 'old greenwich', 'riverside ct'] },
  { name: 'Houston, TX', tag: 'city_houston_tx', aliases: ['h-town', 'htx', 'the woodlands', 'sugar land', 'katy tx', 'pearland', 'cypress tx', 'spring tx'] },
  { name: 'Indianapolis, IN', tag: 'city_indianapolis_in', aliases: ['indy', 'carmel in', 'fishers in', 'noblesville'] },
  { name: 'Irvine, CA', tag: 'city_irvine_ca', aliases: ['tustin', 'lake forest ca', 'mission viejo'] },
  { name: 'Jersey City, NJ', tag: 'city_jersey_city_nj', aliases: ['jc', 'hoboken', 'bayonne', 'weehawken'] },
  { name: 'Kansas City, MO', tag: 'city_kansas_city_mo', aliases: ['kc', 'overland park', 'olathe', 'lee summit', 'independence mo'] },
  { name: 'La Jolla, CA', tag: 'city_la_jolla_ca', aliases: ['ucsd area', 'torrey pines'] },
  { name: 'Las Vegas, NV', tag: 'city_las_vegas_nv', aliases: ['vegas', 'lv', 'henderson nv', 'summerlin', 'north las vegas', 'the strip'] },
  { name: 'London, UK', tag: 'city_london_uk', aliases: ['central london', 'west london', 'north london', 'south london', 'east london', 'kensington', 'chelsea london', 'notting hill', 'hampstead'] },
  { name: 'Long Beach, CA', tag: 'city_long_beach_ca', aliases: ['lb', 'signal hill', 'lakewood ca'] },
  { name: 'Los Altos, CA', tag: 'city_los_altos_ca', aliases: ['los altos hills', 'mountain view', 'sunnyvale'] },
  { name: 'Los Angeles, CA', tag: 'city_los_angeles_ca', aliases: ['la', 'beverly hills', 'pasadena', 'santa monica', 'west hollywood', 'studio city', 'burbank', 'glendale ca', 'silver lake la', 'los feliz', 'brentwood ca', 'malibu'] },
  { name: 'Louisville, KY', tag: 'city_louisville_ky', aliases: ['lou', 'st matthews ky', 'prospect ky', 'anchorage ky', 'highlands louisville'] },
  { name: 'Madison, WI', tag: 'city_madison_wi', aliases: ['middleton wi', 'fitchburg wi', 'sun prairie'] },
  { name: 'Manhattan, NY', tag: 'city_manhattan_ny', aliases: ['nyc', 'new york city', 'new york', 'midtown', 'soho', 'tribeca', 'upper east side', 'upper west side', 'harlem', 'chelsea nyc', 'east village', 'west village', 'lower east side', 'fidi'] },
  { name: 'Miami, FL', tag: 'city_miami_fl', aliases: ['mia', 'south beach', 'wynwood', 'brickell', 'coral gables', 'coconut grove', 'north miami', 'miami beach', 'doral', 'fort lauderdale', 'ft lauderdale', 'hollywood fl'] },
  { name: 'Minneapolis, MN', tag: 'city_minneapolis_mn', aliases: ['mpls', 'twin cities', 'st paul', 'saint paul', 'bloomington mn', 'edina mn'] },
  { name: 'Nashville, TN', tag: 'city_nashville_tn', aliases: ['nash', 'franklin tn', 'brentwood tn', 'murfreesboro', 'hendersonville tn', 'gallatin tn', 'knoxville'] },
  { name: 'New Haven, CT', tag: 'city_new_haven_ct', aliases: ['yale', 'west haven', 'east haven', 'hamden ct'] },
  { name: 'Newport Beach, CA', tag: 'city_newport_beach_ca', aliases: ['newport', 'costa mesa', 'balboa', 'corona del mar'] },
  { name: 'Oklahoma City, OK', tag: 'city_oklahoma_city_ok', aliases: ['okc', 'edmond ok', 'norman ok', 'moore ok'] },
  { name: 'Orlando, FL', tag: 'city_orlando_fl', aliases: ['orl', 'winter park fl', 'kissimmee', 'lake nona', 'dr phillips'] },
  { name: 'Philadelphia, PA', tag: 'city_philadelphia_pa', aliases: ['philly', 'phl', 'center city', 'south philly', 'old city philly', 'king of prussia', 'conshohocken'] },
  { name: 'Phoenix, AZ', tag: 'city_phoenix_az', aliases: ['phx', 'scottsdale', 'tempe', 'mesa az', 'chandler az', 'gilbert az', 'glendale az'] },
  { name: 'Pittsburgh, PA', tag: 'city_pittsburgh_pa', aliases: ['pgh', 'the burgh', 'oakland pittsburgh', 'shadyside', 'squirrel hill', 'strip district', 'lawrenceville', 'south side pittsburgh'] },
  { name: 'Portland, OR', tag: 'city_portland_or', aliases: ['pdx', 'beaverton', 'lake oswego', 'tigard', 'hillsboro or'] },
  { name: 'Raleigh, NC', tag: 'city_raleigh_nc', aliases: ['raleigh durham', 'durham nc', 'chapel hill', 'cary nc', 'wake forest nc', 'the triangle'] },
  { name: 'Salt Lake City, UT', tag: 'city_salt_lake_city_ut', aliases: ['slc', 'park city', 'provo', 'sandy ut', 'draper ut', 'west jordan'] },
  { name: 'San Diego, CA', tag: 'city_san_diego_ca', aliases: ['sd', 'gaslamp', 'pacific beach', 'north park sd', 'hillcrest sd', 'chula vista', 'el cajon'] },
  { name: 'San Francisco, CA', tag: 'city_san_francisco_ca', aliases: ['sf', 'the city', 'frisco', 'oakland', 'berkeley', 'sausalito', 'daly city', 'san mateo', 'palo alto'] },
  { name: 'San Jose, CA', tag: 'city_san_jose_ca', aliases: ['sj', 'campbell ca', 'milpitas', 'santa clara', 'cupertino', 'saratoga ca', 'willow glen', 'evergreen sj'] },
  { name: 'Savannah, GA', tag: 'city_savannah_ga', aliases: ['tybee island', 'pooler ga', 'richmond hill ga', 'hilton head'] },
  { name: 'Seattle, WA', tag: 'city_seattle_wa', aliases: ['sea', 'bellevue wa', 'redmond wa', 'kirkland wa', 'tacoma', 'everett wa'] },
  { name: 'Stamford, CT', tag: 'city_stamford_ct', aliases: ['darien ct', 'norwalk ct', 'westport ct'] },
  { name: 'Washington, DC', tag: 'city_washington_dc', aliases: ['dc', 'dmv', 'georgetown dc', 'dupont circle', 'capitol hill', 'arlington va', 'bethesda md', 'silver spring md', 'alexandria va'] },
];
