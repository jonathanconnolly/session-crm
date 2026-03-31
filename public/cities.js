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
 *   3. jsDelivr picks up changes — both forms update automatically
 *
 * Format: { name: 'City, ST', tag: 'city_slug', aliases: [...] }
 *   - tag: lowercase, underscores, used for GHL contact tagging
 *   - aliases: neighborhoods, abbreviations, nearby cities for fuzzy matching
 *
 * Last updated: 2026-03-31
 * Total cities: 54
 */


var CITIES = [
  { name: 'Atlanta, GA', tag: 'city_atlanta_ga', aliases: ['atl', 'decatur', 'marietta', 'buckhead', 'sandy springs', 'roswell ga', 'alpharetta', 'smyrna ga', 'kennesaw'] },
  { name: 'Austin, TX', tag: 'city_austin_tx', aliases: ['atx', 'dripping springs', 'round rock', 'cedar park', 'pflugerville', 'georgetown tx', 'lakeway'] },
  { name: 'Birmingham, AL', tag: 'city_birmingham_al', aliases: ['hoover al', 'vestavia hills', 'homewood al', 'mountain brook'] },
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
