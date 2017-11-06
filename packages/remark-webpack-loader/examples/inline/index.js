
import md from 'html-loader!cjs?preset=xtend!./index.md';

export default function omg() {
  return console.log('all the things' + md);
}
console.log('all the things' + md);
