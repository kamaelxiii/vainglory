import Vainglory from '../';

const vainglory = new Vainglory('aaa.bbb.ccc');

vainglory.matches.collection().then((matches) => {
  // do something with matches
  // console.log(matches);
});

const matchId = '4a73a4bc-d7d0-11e6-ad79-062445d3d668';
vainglory.matches.single(matchId).then((matches) => {
  // do something with matches
  console.log(matches);
});
