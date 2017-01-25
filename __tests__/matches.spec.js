jest.mock('../src/Http');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

import Vainglory from '../src/Vainglory';

const validMethods = ['single', 'collection'];

describe('Vainglory.matches', () => {
  const vainglory = new Vainglory('aaa.bbb.ccc');

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(vainglory.matches[method]).toBeDefined();
    })
  });

  it('.collection should get a collection of matches', async () => {
    const matches = await vainglory.matches.collection();
    expect(matches).toMatchSnapshot();
  });

  it('.single should get a single match', async () => {
    const matchId = '0123b560-d74c-11e6-b845-0671096b3e30';
    const match = await vainglory.matches.single(matchId);

    // console.log(match.rosters[0].participants[0].player.stats);

    expect(match).toMatchSnapshot();
  });

  it('.single should throw if invalid param is given', async () => {
    try {
      await vainglory.matches.single({});
    } catch (err) {
      expect(err).toThrow();
    }
  });

});
