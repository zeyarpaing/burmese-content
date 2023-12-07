import { readFileSync, writeFileSync } from 'fs';

const p = `/Users/zeyarpaing/Projects/figma-plugin/burmese-placeholder/src/data`;
const mobiles = readFileSync(p + '/date-short-en.json', 'utf8');

let out = '';
for (let i = 0, len = mobiles.length; i < len; i++) {
  if (mobiles.charCodeAt(i) >= 48 && mobiles.charCodeAt(i) <= 57) {
    out += String.fromCharCode(mobiles.charCodeAt(i) + 4112);
  } else {
    out += mobiles[i];
  }
}
console.log(out);
writeFileSync(p + '/date-short-mm.json', out, 'utf8');
// console.log('i : ', i);
