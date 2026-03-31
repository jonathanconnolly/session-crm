/**
 * Personality Pop-Up™ — Master City List
 * ========================================
 * This is the SINGLE SOURCE OF TRUTH for all city data.
 * Both the Waitlist form and Contact form load this file.
 *
 * Hosted via jsDelivr CDN from GitHub:
 *   https://cdn.jsdelivr.net/gh/jonathanconnolly/session-crm@main/public/cities.js
 *
 * To add/edit a city:
 *   1. Edit this file (in GitHub or locally)
 *   2. Push to GitHub (main branch)
 *   3. Purge cache: https://purge.jsdelivr.net/gh/jonathanconnolly/session-crm@main/public/cities.js
 *
 * Format: { name: 'City, ST', tag: 'city_slug', aliases: [...] }
 *   - name: public-facing parent metro city shown on waitlist
 *   - tag: lowercase, underscores, used for GHL contact tagging
 *   - aliases: suburbs, neighborhoods, child cities for type-ahead search
 *
 * Last updated: 2026-03-31
 * Total parent metros: 54
 */

var CITIES = [
  { name: 'Ann Arbor, MI', tag: 'city_ann_arbor_mi', aliases: ['a2', 'ypsilanti', 'saline mi', 'dexter mi'] },
  { name: 'Atlanta, GA', tag: 'city_atlanta_ga', aliases: ['atl', 'decatur', 'marietta', 'buckhead', 'sandy springs', 'roswell ga', 'alpharetta', 'smyrna ga', 'kennesaw', 'athens ga'] },
  { name: 'Austin, TX', tag: 'city_austin_tx', aliases: ['atx', 'dripping springs', 'round rock', 'cedar park', 'pflugerville', 'georgetown tx', 'lakeway', 'san antonio'] },
  { name: 'Birmingham, AL', tag: 'city_birmingham_al', aliases: ['hoover al', 'vestavia hills', 'homewood al', 'mountain brook', 'montgomery al', 'huntsville al'] },
  { name: 'Boston, MA', tag: 'city_boston_ma', aliases: ['bos', 'cambridge', 'somerville', 'brookline', 'newton ma', 'quincy ma', 'natick', 'wellesley', 'braintree ma', 'cohasset', 'newburyport', 'manchester nh', 'portland me', 'providence ri', 'burlington vt'] },
  { name: 'Brooklyn, NY', tag: 'city_brooklyn_ny', aliases: ['bk', 'williamsburg', 'bushwick', 'park slope', 'dumbo', 'bed stuy', 'flatbush', 'greenpoint'] },
  { name: 'Carlsbad, CA', tag: 'city_carlsbad_ca', aliases: ['encinitas', 'oceanside', 'vista ca', 'solana beach'] },
  { name: 'Charleston, SC', tag: 'city_charleston_sc', aliases: ['mount pleasant sc', 'summerville sc', 'james island', 'folly beach', 'columbia sc'] },
  { name: 'Charlotte, NC', tag: 'city_charlotte_nc', aliases: ['clt', 'south end charlotte', 'noda', 'huntersville', 'matthews nc', 'concord nc', 'greensboro', 'asheville', 'winston salem'] },
  { name: 'Chicago, IL', tag: 'city_chicago_il', aliases: ['chi', 'chi-town', 'windy city', 'evanston', 'oak park', 'naperville', 'schaumburg', 'gary', 'hinsdale', 'lake forest il', 'rockford', 'peoria il', 'springfield il', 'cedar rapids', 'davenport ia', 'milwaukee', 'south bend'] },
  { name: 'Cincinnati, OH', tag: 'city_cincinnati_oh', aliases: ['cincy', 'mason oh', 'west chester oh', 'blue ash', 'kenwood oh', 'hyde park cincinnati', 'dayton', 'kettering'] },
  { name: 'Cleveland, OH', tag: 'city_cleveland_oh', aliases: ['cle', 'shaker heights', 'beachwood oh', 'westlake oh', 'rocky river', 'chagrin falls', 'akron', 'canton oh', 'toledo'] },
  { name: 'Columbus, OH', tag: 'city_columbus_oh', aliases: ['cbus', 'dublin oh', 'westerville', 'upper arlington'] },
  { name: 'Dallas, TX', tag: 'city_dallas_tx', aliases: ['dfw', 'plano', 'frisco tx', 'irving tx', 'richardson tx', 'mckinney tx', 'denton', 'tyler tx'] },
  { name: 'Denver, CO', tag: 'city_denver_co', aliases: ['mile high', 'aurora co', 'boulder', 'lakewood co', 'littleton co', 'broomfield', 'fort collins', 'colorado springs'] },
  { name: 'Detroit, MI', tag: 'city_detroit_mi', aliases: ['royal oak', 'birmingham mi', 'bloomfield hills', 'troy mi', 'grosse pointe', 'novi mi', 'plymouth mi', 'metro detroit', 'grand rapids', 'lansing', 'flint mi', 'kalamazoo', 'saginaw'] },
  { name: 'Fort Lauderdale, FL', tag: 'city_fort_lauderdale_fl', aliases: ['ft lauderdale', 'lauderdale', 'hollywood fl', 'davie fl', 'plantation fl', 'sunrise fl', 'weston fl', 'coral springs', 'pompano beach', 'boca raton', 'boca', 'deerfield beach'] },
  { name: 'Fort Worth, TX', tag: 'city_fort_worth_tx', aliases: ['fw', 'arlington tx', 'southlake tx', 'grapevine tx', 'keller tx', 'waco'] },
  { name: 'Greenville, SC', tag: 'city_greenville_sc', aliases: ['greer sc', 'simpsonville', 'mauldin', 'travelers rest'] },
  { name: 'Houston, TX', tag: 'city_houston_tx', aliases: ['h-town', 'htx', 'the woodlands', 'sugar land', 'katy tx', 'pearland', 'cypress tx', 'spring tx', 'beaumont', 'bryan tx', 'corpus christi', 'laredo'] },
  { name: 'Indianapolis, IN', tag: 'city_indianapolis_in', aliases: ['indy', 'carmel in', 'fishers in', 'noblesville', 'zionsville', 'fort wayne', 'lafayette in'] },
  { name: 'Irvine, CA', tag: 'city_irvine_ca', aliases: ['tustin', 'lake forest ca', 'mission viejo', 'newport beach', 'newport', 'costa mesa', 'balboa', 'corona del mar', 'laguna beach', 'anaheim', 'dana point', 'orange county'] },
  { name: 'Jersey City, NJ', tag: 'city_jersey_city_nj', aliases: ['jc', 'hoboken', 'bayonne', 'weehawken', 'newark', 'summit nj', 'montclair nj', 'maplewood nj', 'west orange nj', 'basking ridge', 'asbury park', 'princeton', 'spring lake nj'] },
  { name: 'Kansas City, MO', tag: 'city_kansas_city_mo', aliases: ['kc', 'overland park', 'olathe', 'lee summit', 'independence mo', 'st louis', 'topeka', 'wichita', 'omaha', 'des moines', 'columbia mo', 'fayetteville ar'] },
  { name: 'Knoxville, TN', tag: 'city_knoxville_tn', aliases: ['knox', 'maryville tn', 'farragut tn'] },
  { name: 'Las Vegas, NV', tag: 'city_las_vegas_nv', aliases: ['vegas', 'lv', 'henderson nv', 'summerlin', 'north las vegas', 'the strip', 'reno'] },
  { name: 'London, UK', tag: 'city_london_uk', aliases: ['central london', 'west london', 'north london', 'south london', 'east london', 'kensington', 'chelsea london', 'notting hill', 'hampstead'] },
  { name: 'Long Beach, CA', tag: 'city_long_beach_ca', aliases: ['lb', 'signal hill', 'lakewood ca'] },
  { name: 'Long Island, NY', tag: 'city_long_island_ny', aliases: ['li', 'garden city', 'mineola', 'hempstead', 'westbury ny', 'roslyn', 'northport', 'huntington ny', 'sagaponack', 'babylon ny', 'massapequa'] },
  { name: 'Los Angeles, CA', tag: 'city_los_angeles_ca', aliases: ['la', 'beverly hills', 'pasadena', 'santa monica', 'west hollywood', 'studio city', 'burbank', 'glendale ca', 'silver lake la', 'los feliz', 'brentwood ca', 'malibu', 'manhattan beach', 'la verne', 'san bernardino', 'riverside ca', 'bakersfield', 'fresno', 'ontario ca'] },
  { name: 'Louisville, KY', tag: 'city_louisville_ky', aliases: ['lou', 'st matthews ky', 'prospect ky', 'anchorage ky', 'highlands louisville', 'lexington ky'] },
  { name: 'Madison, WI', tag: 'city_madison_wi', aliases: ['middleton wi', 'fitchburg wi', 'sun prairie', 'green bay'] },
  { name: 'Manhattan, NY', tag: 'city_manhattan_ny', aliases: ['nyc', 'new york city', 'new york', 'midtown', 'soho', 'tribeca', 'upper east side', 'upper west side', 'harlem', 'chelsea nyc', 'east village', 'west village', 'lower east side', 'fidi', 'bronxville', 'white plains', 'poughkeepsie', 'albany ny', 'buffalo ny', 'rochester ny', 'syracuse ny'] },
  { name: 'Miami, FL', tag: 'city_miami_fl', aliases: ['mia', 'south beach', 'wynwood', 'brickell', 'coral gables', 'coconut grove', 'north miami', 'miami beach', 'doral', 'miami shores'] },
  { name: 'Minneapolis, MN', tag: 'city_minneapolis_mn', aliases: ['mpls', 'twin cities', 'st paul', 'saint paul', 'bloomington mn', 'edina mn', 'sioux falls', 'fargo'] },
  { name: 'Nashville, TN', tag: 'city_nashville_tn', aliases: ['nash', 'franklin tn', 'brentwood tn', 'murfreesboro', 'hendersonville tn', 'gallatin tn', 'chattanooga', 'memphis', 'little rock'] },
  { name: 'New Haven, CT', tag: 'city_new_haven_ct', aliases: ['yale', 'west haven', 'east haven', 'hamden ct', 'hartford'] },
  { name: 'New Orleans, LA', tag: 'city_new_orleans_la', aliases: ['nola', 'french quarter', 'garden district', 'metairie', 'baton rouge', 'lafayette la', 'shreveport', 'jackson ms', 'biloxi'] },
  { name: 'Oklahoma City, OK', tag: 'city_oklahoma_city_ok', aliases: ['okc', 'edmond ok', 'norman ok', 'moore ok', 'tulsa'] },
  { name: 'Orlando, FL', tag: 'city_orlando_fl', aliases: ['orl', 'winter park fl', 'kissimmee', 'lake nona', 'dr phillips', 'tampa', 'jacksonville', 'gainesville fl', 'daytona beach', 'sarasota', 'tallahassee'] },
  { name: 'Philadelphia, PA', tag: 'city_philadelphia_pa', aliases: ['philly', 'phl', 'center city', 'south philly', 'old city philly', 'king of prussia', 'conshohocken', 'cherry hill nj', 'wilmington de', 'harrisburg', 'scranton'] },
  { name: 'Phoenix, AZ', tag: 'city_phoenix_az', aliases: ['phx', 'scottsdale', 'tempe', 'mesa az', 'chandler az', 'gilbert az', 'glendale az', 'tucson', 'flagstaff', 'albuquerque'] },
  { name: 'Pittsburgh, PA', tag: 'city_pittsburgh_pa', aliases: ['pgh', 'the burgh', 'oakland pittsburgh', 'shadyside', 'squirrel hill', 'strip district', 'lawrenceville', 'south side pittsburgh', 'state college'] },
  { name: 'Portland, OR', tag: 'city_portland_or', aliases: ['pdx', 'beaverton', 'lake oswego', 'tigard', 'hillsboro or', 'eugene'] },
  { name: 'Raleigh, NC', tag: 'city_raleigh_nc', aliases: ['raleigh durham', 'durham nc', 'chapel hill', 'cary nc', 'wake forest nc', 'the triangle', 'wilmington nc'] },
  { name: 'Salt Lake City, UT', tag: 'city_salt_lake_city_ut', aliases: ['slc', 'park city', 'provo', 'sandy ut', 'draper ut', 'west jordan', 'st george ut', 'layton ut', 'boise'] },
  { name: 'San Diego, CA', tag: 'city_san_diego_ca', aliases: ['sd', 'la jolla', 'gaslamp', 'pacific beach', 'north park sd', 'hillcrest sd', 'chula vista', 'el cajon'] },
  { name: 'San Francisco, CA', tag: 'city_san_francisco_ca', aliases: ['sf', 'the city', 'frisco', 'oakland', 'berkeley', 'sausalito', 'daly city', 'san mateo', 'walnut creek', 'santa rosa', 'marin', 'redding ca', 'sacramento'] },
  { name: 'San Jose, CA', tag: 'city_san_jose_ca', aliases: ['sj', 'los altos', 'los altos hills', 'mountain view', 'sunnyvale', 'campbell ca', 'milpitas', 'santa clara', 'cupertino', 'saratoga ca', 'willow glen', 'palo alto', 'redwood city', 'santa cruz', 'santa barbara'] },
  { name: 'Savannah, GA', tag: 'city_savannah_ga', aliases: ['tybee island', 'pooler ga', 'richmond hill ga', 'hilton head'] },
  { name: 'Seattle, WA', tag: 'city_seattle_wa', aliases: ['sea', 'bellevue wa', 'bellevue', 'redmond wa', 'kirkland wa', 'tacoma', 'everett wa', 'olympia', 'sammamish', 'renton', 'spokane', 'anchorage'] },
  { name: 'Stamford, CT', tag: 'city_stamford_ct', aliases: ['greenwich', 'greenwich ct', 'norwalk', 'norwalk ct', 'darien ct', 'westport ct', 'new canaan ct', 'cos cob', 'old greenwich', 'riverside ct'] },
  { name: 'Washington, DC', tag: 'city_washington_dc', aliases: ['dc', 'dmv', 'georgetown dc', 'dupont circle', 'capitol hill', 'arlington va', 'bethesda md', 'silver spring md', 'alexandria va', 'baltimore', 'richmond va', 'charlottesville', 'virginia beach', 'roanoke'] },
  { name: 'West Palm Beach, FL', tag: 'city_west_palm_beach_fl', aliases: ['wpb', 'palm beach', 'palm beach gardens', 'jupiter fl', 'lake worth', 'royal palm beach', 'wellington fl', 'delray beach', 'fort pierce'] },
];
