//console.log(quran.sura[1].aya[254]);
var quran = require('./quran.id.min.json');
var i, j, s, suraid, ayaid;
for (i in quran.sura) {
  suraid = quran.sura[i].i + '. ' + quran.sura[i]._name;
  console.log(suraid);
  for (j in quran.sura[i].aya) {
    s = parseInt(i) + 1;
    ayaid = '[' + quran.sura[i].i + ':' + quran.sura[i].aya[j].i + ']';
    //console.log(quran.sura[i].i + ':' + quran.sura[i].aya[j].i + quran.sura[i].name);
    console.log(ayaid + ' ' + quran.sura[i].aya[j].t);
  }
  if (s==2) process.exit();
}
