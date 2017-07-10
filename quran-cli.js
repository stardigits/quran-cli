/* Text files */
var jsonfile = {
  'id': './quran.id.min.json',
  'idx_id': './quranidx.id.min.json'
};

/* Check arguments */
var a = process.argv[2];
var ayas = [];
if (a) {
  if (a=='all') { ayas = getAyasAll(); console.log(ayas); }
  else if ((a>=1)&&(a<=114)) { var ayas = getAyas(a); console.log(ayas); }
  else if (a=='help') { help(); }
  else if (a=='index') { indexGenerator(); }
  else if (a=='search') { var a3 = process.argv[3]; if (a3) search(a3); }
  else {console.log('Unknown argument, see help!');}
} else help();
process.exit();

/* End here, that's it */

/* All functions */
function getAya(i,j){
  var quran = require(jsonfile.id);
  var aya = {};
  aya.id = '[' + quran.sura[i].i + ':' + quran.sura[i].aya[j].i + ']';
  aya.text = quran.sura[i].aya[j].t;
  return aya;
}

function getAyas(sura) {
  var quran = require(jsonfile.id);
  var j;
  var i = sura-1;
  var ayas = [];
  for (j in quran.sura[i].aya) {
    var aya = {};
    aya.ayaid = '[' + quran.sura[i].i + ':' + quran.sura[i].aya[j].i + ']';
    aya.text = quran.sura[i].aya[j].t;
    ayas.push(aya);
  }
  return ayas;
}

function getAyasAll(){
  var s = 1;
  var allayas = [];
  for (s=1; s <= 114; s++) {
    allayas = allayas.concat(getAyas(s));
  };
  return allayas;
}

function help(){
  console.log("quran-cli v0.0.1");
  console.log("Help me please!");
}

function indexGenerator(){
  var elasticlunr = require('elasticlunr');
  var quran = getAyasAll();
  var index = elasticlunr(function () {
    this.addField('text');
    this.setRef('ayaid');
    this.saveDocument(false);
  });
  for (var k in quran) {index.addDoc(quran[k]);}
  console.log(JSON.stringify(index));
}

function search(q){
  var elasticlunr = require('elasticlunr');
  var quran = getAyasAll();
  var index = elasticlunr(function () {
    this.addField('text');
    this.setRef('ayaid');
    this.saveDocument(false);
  });
  for (var k in quran) {index.addDoc(quran[k]);}
  var res = index.search(q);
  //console.log(JSON.stringify(index));
  //console.log(index.search(q));
  console.log("Result ("+res.length+"):");
  for (k in res) {
    console.log(res[k].ref);
    for (var j in quran){if (quran[j].ayaid==res[k].ref) console.log(quran[j]);};
  }
}
