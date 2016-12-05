import Vainglory from '../src/Vainglory';

const validMethods = ['searchPlayers', 'searchUuid'];

describe('Vainglory.matches', () => {
  const vainglory = new Vainglory('3wCUeHy6RiRBoVjQfbTz32yk9nlUXdj8RzwPd5rj');

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(vainglory.matches[method]).toBeDefined();
    })
  });

  it('.searchPlayers(players, startTime, endTime) should throw an error if correct types are not provided', () => {
    const str = 'abc123';
    vainglory.matches.searchPlayers(str).catch(e => expect(e.toThrowError('Expecting array for players')));
    vainglory.matches.searchPlayers([], str).catch(e => expect(e.toThrowError('Expecting integer for startTime')));
    vainglory.matches.searchPlayers([], 1, str).catch(e => expect(e.toThrowError('Expecting integer for endTime')));
  });

  // TODO
  // it('.searchPlayers(arr) should search players for matches', async () => {
  //   const players = await vainglory.matches.searchPlayers(['famous'], 1, 1);
  //   console.log(players);
  // });

  // it('.searchUuid(uuid) should return results', async () => {
  //   const results = await vainglory.matches.searchUuid('044a3f8f-f10b-4bf1-83c0-651da4bc3c55');

  //   console.log(results);
  // });

  // it('.searchUuid(uuid, { transverse: true }) should return inner results', async () => {
  //   const results = await vainglory.matches.searchUuid('044a3f8f-f10b-4bf1-83c0-651da4bc3c55', { transverse: true });
  //   expect(results).toMatchSnapshot();
  // });

});
