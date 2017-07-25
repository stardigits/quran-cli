#!/usr/bin/env node
var tanzil = require('tanzil'),
  version = require('../package.json').version;
  
function exit(code, str) {
  console.log(str) || process.exit(code);
}

function usage() {
  var str = "quran-cli (" + version + ")";
  str += `
Usage: quran-cli <<method>|<keyword>>

Methods:
  search <keyword>        Search for Quran Text by 'smart' keyword
  
Examples:
  quran-cli search 1      Search Quran translation by Sura/Chapter number 1
  quran-cli search 71:1   Search Quran translation by Aya/Verse number 71:1
  quran-cli search kursi  Search Quran translation for word 'kursi'
  quran-cli 76:1,100:2    Search Quran translation by list of Ayas/Verses
`;
  exit(1, str);
}

function _showTrans(trans) {
  if (Object.keys(trans).length !== 0) console.log(trans);
}

function showTrans(trans) {
  if (Object.keys(trans).length !== 0) {
    for (var key in trans) console.log('['+key+']',trans[key]);
  }
}

if (process.argv[2] == '-v' || process.argv[2] == '--version') exit(0, tanzil.version);
else if (process.argv[2] == null) usage();
var method = process.argv[2], query = process.argv[3];
var callback = function(err, resp) {
  if (err) return exit(1, "Error: " + err.message);
  if (process.argv.indexOf('-i') != -1)
    console.log(resp.headers) || console.log('');
  console.log(resp.body.toString());
};

var trans = {};
var m = ["search","index","config","transpath"];
if (m.indexOf(method)!=-1) {
  trans = tanzil[method](query); showTrans(trans);
} else {
  trans = tanzil.search(method); showTrans(trans);
}