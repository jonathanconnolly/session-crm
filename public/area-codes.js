/**
 * US & Territory Area Code Lookup
 *
 * Maps North American Numbering Plan (NANP) area codes to primary city and state.
 * Used for auto-tagging contacts based on phone number area code.
 *
 * Format: { areaCode: { city: 'City Name', state: 'ST' } }
 *
 * Includes:
 * - All 50 US states
 * - Washington DC
 * - US territories (Puerto Rico, USVI, Guam, American Samoa, Northern Mariana Islands)
 * - Canada (for reference, since they share NANP)
 */

var AREA_CODES = {
  // Alabama
  '205': { city: 'Birmingham', state: 'AL' },
  '251': { city: 'Mobile', state: 'AL' },
  '256': { city: 'Huntsville', state: 'AL' },
  '334': { city: 'Montgomery', state: 'AL' },
  '938': { city: 'Birmingham', state: 'AL' },

  // Alaska
  '907': { city: 'Anchorage', state: 'AK' },

  // Arizona
  '480': { city: 'Phoenix', state: 'AZ' },
  '602': { city: 'Phoenix', state: 'AZ' },
  '623': { city: 'Phoenix', state: 'AZ' },
  '928': { city: 'Flagstaff', state: 'AZ' },

  // Arkansas
  '479': { city: 'Fayetteville', state: 'AR' },
  '501': { city: 'Little Rock', state: 'AR' },
  '870': { city: 'Jonesboro', state: 'AR' },

  // California
  '209': { city: 'Stockton', state: 'CA' },
  '213': { city: 'Los Angeles', state: 'CA' },
  '279': { city: 'Los Angeles', state: 'CA' },
  '310': { city: 'Los Angeles', state: 'CA' },
  '323': { city: 'Los Angeles', state: 'CA' },
  '408': { city: 'San Jose', state: 'CA' },
  '415': { city: 'San Francisco', state: 'CA' },
  '424': { city: 'Los Angeles', state: 'CA' },
  '442': { city: 'San Diego', state: 'CA' },
  '510': { city: 'Oakland', state: 'CA' },
  '530': { city: 'Sacramento', state: 'CA' },
  '559': { city: 'Fresno', state: 'CA' },
  '562': { city: 'Long Beach', state: 'CA' },
  '619': { city: 'San Diego', state: 'CA' },
  '626': { city: 'Pasadena', state: 'CA' },
  '628': { city: 'San Francisco', state: 'CA' },
  '650': { city: 'Palo Alto', state: 'CA' },
  '657': { city: 'Anaheim', state: 'CA' },
  '661': { city: 'Bakersfield', state: 'CA' },
  '669': { city: 'San Jose', state: 'CA' },
  '707': { city: 'Santa Rosa', state: 'CA' },
  '714': { city: 'Anaheim', state: 'CA' },
  '760': { city: 'San Diego', state: 'CA' },
  '831': { city: 'Monterey', state: 'CA' },
  '858': { city: 'San Diego', state: 'CA' },
  '909': { city: 'Riverside', state: 'CA' },
  '916': { city: 'Sacramento', state: 'CA' },
  '925': { city: 'Oakland', state: 'CA' },
  '949': { city: 'Irvine', state: 'CA' },
  '951': { city: 'Riverside', state: 'CA' },

  // Colorado
  '303': { city: 'Denver', state: 'CO' },
  '719': { city: 'Colorado Springs', state: 'CO' },
  '720': { city: 'Denver', state: 'CO' },
  '970': { city: 'Fort Collins', state: 'CO' },

  // Connecticut
  '203': { city: 'Bridgeport', state: 'CT' },
  '475': { city: 'New Haven', state: 'CT' },
  '860': { city: 'Hartford', state: 'CT' },
  '959': { city: 'New Haven', state: 'CT' },

  // Delaware
  '302': { city: 'Wilmington', state: 'DE' },

  // Washington DC
  '202': { city: 'Washington', state: 'DC' },
  '771': { city: 'Washington', state: 'DC' },

  // Florida
  '239': { city: 'Fort Myers', state: 'FL' },
  '305': { city: 'Miami', state: 'FL' },
  '321': { city: 'Orlando', state: 'FL' },
  '352': { city: 'Gainesville', state: 'FL' },
  '386': { city: 'Daytona Beach', state: 'FL' },
  '407': { city: 'Orlando', state: 'FL' },
  '561': { city: 'West Palm Beach', state: 'FL' },
  '727': { city: 'St Petersburg', state: 'FL' },
  '754': { city: 'Fort Lauderdale', state: 'FL' },
  '772': { city: 'Stuart', state: 'FL' },
  '786': { city: 'Miami', state: 'FL' },
  '813': { city: 'Tampa', state: 'FL' },
  '850': { city: 'Tallahassee', state: 'FL' },
  '863': { city: 'Lakeland', state: 'FL' },
  '904': { city: 'Jacksonville', state: 'FL' },
  '941': { city: 'Sarasota', state: 'FL' },
  '954': { city: 'Fort Lauderdale', state: 'FL' },

  // Georgia
  '229': { city: 'Albany', state: 'GA' },
  '404': { city: 'Atlanta', state: 'GA' },
  '470': { city: 'Atlanta', state: 'GA' },
  '478': { city: 'Macon', state: 'GA' },
  '706': { city: 'Augusta', state: 'GA' },
  '678': { city: 'Atlanta', state: 'GA' },
  '912': { city: 'Savannah', state: 'GA' },
  '770': { city: 'Atlanta', state: 'GA' },
  '779': { city: 'Atlanta', state: 'GA' },

  // Hawaii
  '808': { city: 'Honolulu', state: 'HI' },

  // Idaho
  '208': { city: 'Boise', state: 'ID' },
  '986': { city: 'Boise', state: 'ID' },

  // Illinois
  '217': { city: 'Springfield', state: 'IL' },
  '224': { city: 'Chicago', state: 'IL' },
  '309': { city: 'Peoria', state: 'IL' },
  '312': { city: 'Chicago', state: 'IL' },
  '331': { city: 'Chicago', state: 'IL' },
  '618': { city: 'Belleville', state: 'IL' },
  '630': { city: 'Aurora', state: 'IL' },
  '708': { city: 'Chicago', state: 'IL' },
  '773': { city: 'Chicago', state: 'IL' },
  '779': { city: 'Chicago', state: 'IL' },
  '815': { city: 'Rockford', state: 'IL' },

  // Indiana
  '219': { city: 'Gary', state: 'IN' },
  '260': { city: 'Fort Wayne', state: 'IN' },
  '317': { city: 'Indianapolis', state: 'IN' },
  '463': { city: 'Indianapolis', state: 'IN' },
  '574': { city: 'South Bend', state: 'IN' },
  '765': { city: 'Muncie', state: 'IN' },
  '812': { city: 'Evansville', state: 'IN' },
  '930': { city: 'Fort Wayne', state: 'IN' },

  // Iowa
  '319': { city: 'Cedar Rapids', state: 'IA' },
  '515': { city: 'Des Moines', state: 'IA' },
  '563': { city: 'Davenport', state: 'IA' },
  '641': { city: 'Iowa City', state: 'IA' },
  '712': { city: 'Sioux City', state: 'IA' },

  // Kansas
  '316': { city: 'Wichita', state: 'KS' },
  '620': { city: 'Liberal', state: 'KS' },
  '785': { city: 'Topeka', state: 'KS' },
  '913': { city: 'Kansas City', state: 'KS' },

  // Kentucky
  '270': { city: 'Bowling Green', state: 'KY' },
  '502': { city: 'Louisville', state: 'KY' },
  '606': { city: 'Lexington', state: 'KY' },
  '859': { city: 'Lexington', state: 'KY' },

  // Louisiana
  '225': { city: 'Baton Rouge', state: 'LA' },
  '318': { city: 'Alexandria', state: 'LA' },
  '337': { city: 'Lafayette', state: 'LA' },
  '504': { city: 'New Orleans', state: 'LA' },
  '985': { city: 'Slidell', state: 'LA' },

  // Maine
  '207': { city: 'Portland', state: 'ME' },

  // Maryland
  '240': { city: 'Silver Spring', state: 'MD' },
  '301': { city: 'Silver Spring', state: 'MD' },
  '410': { city: 'Baltimore', state: 'MD' },
  '443': { city: 'Baltimore', state: 'MD' },
  '667': { city: 'Baltimore', state: 'MD' },

  // Massachusetts
  '339': { city: 'Boston', state: 'MA' },
  '351': { city: 'Worcester', state: 'MA' },
  '413': { city: 'Springfield', state: 'MA' },
  '508': { city: 'Worcester', state: 'MA' },
  '617': { city: 'Boston', state: 'MA' },
  '774': { city: 'Worcester', state: 'MA' },
  '781': { city: 'Boston', state: 'MA' },
  '857': { city: 'Boston', state: 'MA' },
  '978': { city: 'Lowell', state: 'MA' },

  // Michigan
  '231': { city: 'Traverse City', state: 'MI' },
  '248': { city: 'Detroit', state: 'MI' },
  '269': { city: 'Kalamazoo', state: 'MI' },
  '313': { city: 'Detroit', state: 'MI' },
  '517': { city: 'Lansing', state: 'MI' },
  '586': { city: 'Detroit', state: 'MI' },
  '616': { city: 'Grand Rapids', state: 'MI' },
  '640': { city: 'Detroit', state: 'MI' },
  '810': { city: 'Flint', state: 'MI' },
  '906': { city: 'Marquette', state: 'MI' },
  '989': { city: 'Saginaw', state: 'MI' },

  // Minnesota
  '218': { city: 'Duluth', state: 'MN' },
  '320': { city: 'St Cloud', state: 'MN' },
  '507': { city: 'Rochester', state: 'MN' },
  '612': { city: 'Minneapolis', state: 'MN' },
  '651': { city: 'St Paul', state: 'MN' },
  '763': { city: 'Minneapolis', state: 'MN' },
  '952': { city: 'Minneapolis', state: 'MN' },

  // Mississippi
  '228': { city: 'Biloxi', state: 'MS' },
  '601': { city: 'Jackson', state: 'MS' },
  '662': { city: 'Tupelo', state: 'MS' },
  '769': { city: 'Jackson', state: 'MS' },

  // Missouri
  '314': { city: 'St Louis', state: 'MO' },
  '417': { city: 'Springfield', state: 'MO' },
  '573': { city: 'Columbia', state: 'MO' },
  '636': { city: 'St Louis', state: 'MO' },
  '660': { city: 'Chillicothe', state: 'MO' },
  '816': { city: 'Kansas City', state: 'MO' },
  '975': { city: 'St Louis', state: 'MO' },

  // Montana
  '406': { city: 'Billings', state: 'MT' },

  // Nebraska
  '308': { city: 'North Platte', state: 'NE' },
  '402': { city: 'Omaha', state: 'NE' },
  '531': { city: 'Omaha', state: 'NE' },

  // Nevada
  '702': { city: 'Las Vegas', state: 'NV' },
  '725': { city: 'Las Vegas', state: 'NV' },
  '775': { city: 'Reno', state: 'NV' },

  // New Hampshire
  '603': { city: 'Manchester', state: 'NH' },

  // New Jersey
  '201': { city: 'Jersey City', state: 'NJ' },
  '551': { city: 'Jersey City', state: 'NJ' },
  '609': { city: 'Trenton', state: 'NJ' },
  '732': { city: 'New Brunswick', state: 'NJ' },
  '848': { city: 'New Brunswick', state: 'NJ' },
  '856': { city: 'Camden', state: 'NJ' },
  '862': { city: 'Newark', state: 'NJ' },
  '908': { city: 'Elizabeth', state: 'NJ' },
  '973': { city: 'Newark', state: 'NJ' },

  // New Mexico
  '505': { city: 'Albuquerque', state: 'NM' },
  '575': { city: 'Las Cruces', state: 'NM' },

  // New York
  '212': { city: 'New York', state: 'NY' },
  '315': { city: 'Syracuse', state: 'NY' },
  '347': { city: 'New York', state: 'NY' },
  '516': { city: 'Hempstead', state: 'NY' },
  '518': { city: 'Albany', state: 'NY' },
  '585': { city: 'Rochester', state: 'NY' },
  '607': { city: 'Binghamton', state: 'NY' },
  '631': { city: 'Hempstead', state: 'NY' },
  '646': { city: 'New York', state: 'NY' },
  '716': { city: 'Buffalo', state: 'NY' },
  '718': { city: 'New York', state: 'NY' },
  '845': { city: 'Newburgh', state: 'NY' },
  '914': { city: 'Yonkers', state: 'NY' },
  '917': { city: 'New York', state: 'NY' },
  '929': { city: 'New York', state: 'NY' },

  // North Carolina
  '252': { city: 'Greenville', state: 'NC' },
  '336': { city: 'Greensboro', state: 'NC' },
  '704': { city: 'Charlotte', state: 'NC' },
  '743': { city: 'Charlotte', state: 'NC' },
  '828': { city: 'Asheville', state: 'NC' },
  '910': { city: 'Wilmington', state: 'NC' },
  '919': { city: 'Raleigh', state: 'NC' },
  '980': { city: 'Charlotte', state: 'NC' },

  // North Dakota
  '701': { city: 'Bismarck', state: 'ND' },

  // Ohio
  '216': { city: 'Cleveland', state: 'OH' },
  '220': { city: 'Columbus', state: 'OH' },
  '234': { city: 'Akron', state: 'OH' },
  '330': { city: 'Akron', state: 'OH' },
  '419': { city: 'Toledo', state: 'OH' },
  '440': { city: 'Cleveland', state: 'OH' },
  '513': { city: 'Cincinnati', state: 'OH' },
  '567': { city: 'Toledo', state: 'OH' },
  '614': { city: 'Columbus', state: 'OH' },
  '740': { city: 'Columbus', state: 'OH' },
  '937': { city: 'Dayton', state: 'OH' },

  // Oklahoma
  '405': { city: 'Oklahoma City', state: 'OK' },
  '539': { city: 'Oklahoma City', state: 'OK' },
  '580': { city: 'Lawton', state: 'OK' },
  '918': { city: 'Tulsa', state: 'OK' },

  // Oregon
  '503': { city: 'Portland', state: 'OR' },
  '541': { city: 'Eugene', state: 'OR' },
  '971': { city: 'Portland', state: 'OR' },

  // Pennsylvania
  '215': { city: 'Philadelphia', state: 'PA' },
  '267': { city: 'Philadelphia', state: 'PA' },
  '412': { city: 'Pittsburgh', state: 'PA' },
  '570': { city: 'Scranton', state: 'PA' },
  '610': { city: 'Philadelphia', state: 'PA' },
  '717': { city: 'Lancaster', state: 'PA' },
  '724': { city: 'Pittsburgh', state: 'PA' },
  '814': { city: 'Erie', state: 'PA' },
  '878': { city: 'Pittsburgh', state: 'PA' },

  // Rhode Island
  '401': { city: 'Providence', state: 'RI' },

  // South Carolina
  '803': { city: 'Columbia', state: 'SC' },
  '843': { city: 'Charleston', state: 'SC' },
  '864': { city: 'Greenville', state: 'SC' },

  // South Dakota
  '605': { city: 'Sioux Falls', state: 'SD' },

  // Tennessee
  '423': { city: 'Chattanooga', state: 'TN' },
  '615': { city: 'Nashville', state: 'TN' },
  '629': { city: 'Nashville', state: 'TN' },
  '731': { city: 'Jackson', state: 'TN' },
  '865': { city: 'Knoxville', state: 'TN' },
  '901': { city: 'Memphis', state: 'TN' },
  '931': { city: 'Clarksville', state: 'TN' },

  // Texas
  '210': { city: 'San Antonio', state: 'TX' },
  '214': { city: 'Dallas', state: 'TX' },
  '254': { city: 'Waco', state: 'TX' },
  '281': { city: 'Houston', state: 'TX' },
  '325': { city: 'Abilene', state: 'TX' },
  '361': { city: 'Corpus Christi', state: 'TX' },
  '409': { city: 'Beaumont', state: 'TX' },
  '430': { city: 'Tyler', state: 'TX' },
  '469': { city: 'Dallas', state: 'TX' },
  '512': { city: 'Austin', state: 'TX' },
  '713': { city: 'Houston', state: 'TX' },
  '726': { city: 'Dallas', state: 'TX' },
  '737': { city: 'Austin', state: 'TX' },
  '806': { city: 'Lubbock', state: 'TX' },
  '817': { city: 'Fort Worth', state: 'TX' },
  '830': { city: 'New Braunfels', state: 'TX' },
  '832': { city: 'Houston', state: 'TX' },
  '903': { city: 'Tyler', state: 'TX' },
  '915': { city: 'El Paso', state: 'TX' },
  '936': { city: 'Huntsville', state: 'TX' },
  '940': { city: 'Denton', state: 'TX' },
  '956': { city: 'Brownsville', state: 'TX' },
  '972': { city: 'Dallas', state: 'TX' },
  '979': { city: 'College Station', state: 'TX' },

  // Utah
  '385': { city: 'Salt Lake City', state: 'UT' },
  '435': { city: 'St George', state: 'UT' },
  '801': { city: 'Salt Lake City', state: 'UT' },

  // Vermont
  '802': { city: 'Montpelier', state: 'VT' },

  // Virginia
  '276': { city: 'Wytheville', state: 'VA' },
  '434': { city: 'Lynchburg', state: 'VA' },
  '540': { city: 'Roanoke', state: 'VA' },
  '571': { city: 'Arlington', state: 'VA' },
  '703': { city: 'Arlington', state: 'VA' },
  '757': { city: 'Norfolk', state: 'VA' },
  '804': { city: 'Richmond', state: 'VA' },

  // Washington
  '206': { city: 'Seattle', state: 'WA' },
  '253': { city: 'Tacoma', state: 'WA' },
  '360': { city: 'Vancouver', state: 'WA' },
  '425': { city: 'Bellevue', state: 'WA' },
  '509': { city: 'Spokane', state: 'WA' },

  // West Virginia
  '304': { city: 'Charleston', state: 'WV' },
  '681': { city: 'Charleston', state: 'WV' },

  // Wisconsin
  '262': { city: 'Racine', state: 'WI' },
  '414': { city: 'Milwaukee', state: 'WI' },
  '534': { city: 'Madison', state: 'WI' },
  '608': { city: 'Madison', state: 'WI' },
  '715': { city: 'Wausau', state: 'WI' },
  '920': { city: 'Green Bay', state: 'WI' },

  // Wyoming
  '307': { city: 'Cheyenne', state: 'WY' },

  // US Territories
  '670': { city: 'Saipan', state: 'MP' },  // Northern Mariana Islands
  '671': { city: 'Hagatna', state: 'GU' },  // Guam
  '684': { city: 'Pago Pago', state: 'AS' },  // American Samoa
  '787': { city: 'San Juan', state: 'PR' },  // Puerto Rico
  '939': { city: 'San Juan', state: 'PR' },  // Puerto Rico

  // US Virgin Islands
  '340': { city: 'Charlotte Amalie', state: 'VI' },

  // Canada (for reference)
  '204': { city: 'Winnipeg', state: 'MB' },
  '226': { city: 'London', state: 'ON' },
  '236': { city: 'Vancouver', state: 'BC' },
  '249': { city: 'Sudbury', state: 'ON' },
  '250': { city: 'Victoria', state: 'BC' },
  '289': { city: 'Toronto', state: 'ON' },
  '306': { city: 'Regina', state: 'SK' },
  '343': { city: 'Ottawa', state: 'ON' },
  '365': { city: 'Oshawa', state: 'ON' },
  '403': { city: 'Calgary', state: 'AB' },
  '416': { city: 'Toronto', state: 'ON' },
  '418': { city: 'Quebec City', state: 'QC' },
  '431': { city: 'Winnipeg', state: 'MB' },
  '437': { city: 'Toronto', state: 'ON' },
  '438': { city: 'Montreal', state: 'QC' },
  '450': { city: 'Longueuil', state: 'QC' },
  '506': { city: 'Saint John', state: 'NB' },
  '514': { city: 'Montreal', state: 'QC' },
  '519': { city: 'London', state: 'ON' },
  '548': { city: 'Guelph', state: 'ON' },
  '579': { city: 'Sherbrooke', state: 'QC' },
  '581': { city: 'Quebec City', state: 'QC' },
  '587': { city: 'Edmonton', state: 'AB' },
  '604': { city: 'Vancouver', state: 'BC' },
  '613': { city: 'Ottawa', state: 'ON' },
  '639': { city: 'Regina', state: 'SK' },
  '647': { city: 'Toronto', state: 'ON' },
  '672': { city: 'Whitehorse', state: 'YT' },
  '705': { city: 'Sudbury', state: 'ON' },
  '709': { city: 'St Johns', state: 'NL' },
  '778': { city: 'Vancouver', state: 'BC' },
  '780': { city: 'Edmonton', state: 'AB' },
  '782': { city: 'Halifax', state: 'NS' },
  '807': { city: 'Thunder Bay', state: 'ON' },
  '819': { city: 'Gatineau', state: 'QC' },
  '867': { city: 'Yellowknife', state: 'NT' },
  '873': { city: 'Ottawa', state: 'ON' },
  '902': { city: 'Halifax', state: 'NS' },
  '905': { city: 'Hamilton', state: 'ON' },
  '250': { city: 'Victoria', state: 'BC' }
};

/**
 * Helper function to generate phone tag from a phone number
 * Strips formatting, extracts area code, and returns tag like "phone_city_state"
 *
 * @param {string} phoneNumber - Phone number (any format)
 * @returns {string|null} - Tag string or null if area code not found
 */
function getPhoneTag(phoneNumber) {
  // Strip non-digits
  var digits = phoneNumber.replace(/\D/g, '');

  // Handle country code (1 for NANP - US/Canada/etc)
  if (digits.length === 11 && digits[0] === '1') {
    digits = digits.substring(1);
  }

  // Need at least 10 digits for valid NANP number
  if (digits.length < 10) {
    return null;
  }

  // Extract area code (first 3 digits)
  var areaCode = digits.substring(0, 3);
  var entry = AREA_CODES[areaCode];

  if (!entry) {
    return null;
  }

  // Build tag: convert city to lowercase, replace spaces/special chars with underscores
  var city = entry.city.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
  var state = entry.state.toLowerCase();

  return 'phone_' + city + '_' + state;
}
