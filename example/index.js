import Vainglory from '../';

const vainglory = new Vainglory('aaa.bbb.ccc');
const results = vainglory.matches.collection();

results.then((matches) => {
  // do something with matches
  console.log(matches);
});
