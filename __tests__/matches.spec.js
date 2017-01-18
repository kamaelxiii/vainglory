import Vainglory from '../src/Vainglory';

const validMethods = ['collection'];

describe('Vainglory.matches', () => {
  const vainglory = new Vainglory('aaa.bbb.ccc');

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(vainglory.matches[method]).toBeDefined();
    })
  });

  // TODO
  it('.collection should get a collection of matches', async () => {
    const matches = await vainglory.matches.collection();
    expect(matches).toMatchSnapshot();
  });


});
