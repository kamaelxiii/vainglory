import Vainglory from '../';

const vainglory = new Vainglory('abc123');
const results = vainglory.matches.searchUuid('044a3f8f-f10b-4bf1-83c0-651da4bc3c55', { transverse: true });

results.then((matches) => {
  // do something with matches
});
