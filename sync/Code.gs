/**
 * Camp Status Board — live sync backend (Google Apps Script)
 *
 * Stores the shared board as text in the script's own storage (Script
 * Properties), split into chunks so it can hold the full week schedule.
 * No Google Sheet or Drive file to set up.
 *
 * Deploy this as a Web App (Deploy > New deployment > Web app):
 *   - Execute as:  Me
 *   - Who has access:  Anyone
 * Then copy the resulting /exec URL and paste it into the board's
 * "Live Sync" box on every computer that should share the board.
 *
 * The URL is a capability link: anyone who has it can read and edit the
 * board, so share it only with your camp staff.
 */

var CHUNK = 8000; // characters per Script-Property value (limit is ~9 KB)

// GET returns {"_rev": <number>, "board": <the stored board JSON, or null>}.
// The server owns the revision number so devices never disagree about ordering.
function doGet(e) {
  var props = PropertiesService.getScriptProperties();
  var rev = props.getProperty('rev') || '0';
  var n = parseInt(props.getProperty('n') || '0', 10);
  var body = '';
  for (var i = 0; i < n; i++) {
    body += props.getProperty('c' + i) || '';
  }
  if (!body) body = 'null';
  // body is already valid JSON, so concatenating it in is safe.
  var out = '{"_rev":' + rev + ',"board":' + body + '}';
  return ContentService
    .createTextOutput(out)
    .setMimeType(ContentService.MimeType.JSON);
}

// POST stores the board (chunked) and bumps the revision.
function doPost(e) {
  var body = (e && e.postData) ? e.postData.contents : '';
  var props = PropertiesService.getScriptProperties();
  var rev = parseInt(props.getProperty('rev') || '0', 10) + 1;
  var n = Math.ceil(body.length / CHUNK) || 0;
  var map = { 'rev': String(rev), 'n': String(n) };
  for (var j = 0; j < n; j++) {
    map['c' + j] = body.substr(j * CHUNK, CHUNK);
  }
  // Write the new chunks + rev, dropping any leftovers from a previous, larger board.
  props.setProperties(map, true);
  return ContentService
    .createTextOutput('{"ok":true,"rev":' + rev + '}')
    .setMimeType(ContentService.MimeType.JSON);
}
