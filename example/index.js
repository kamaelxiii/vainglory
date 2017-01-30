import Vainglory from '../';

const vainglory = new Vainglory('aaa.bbb.ccc');


const matchId = '4a73a4bc-d7d0-11e6-ad79-062445d3d668';
vainglory.matches.single(matchId).then((matches) => {
  // do something with matches
  // console.log(matches);
});


const playerId = '6abb30de-7cb8-11e4-8bd3-06eb725f8a76';

vainglory.players.single(playerId).then((player) => {
  console.log(`${player.name} is player ID ${player.id} and has a lifetime gold of ${player.stats.lifetimeGold}`);
}).catch((errorMsg) => {
  console.error(errorMsg);
});
