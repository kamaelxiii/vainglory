jest.mock('../src/Http');

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

    expect(match).toMatchSnapshot();
  });

});
