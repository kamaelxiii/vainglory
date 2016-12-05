import Vainglory from '../src/Vainglory';

const validMethods = ['status'];

describe('Vainglory.meta', () => {
  const vainglory = new Vainglory('1234567890');

  it('should contain valid methods', () => {
    validMethods.forEach((method) => {
      expect(vainglory.meta[method]).toBeDefined();
    })
  });

  it('.status should return a boolean', () => {
    const status = vainglory.meta.status();
    const statusType = typeof status;
    expect(statusType).toBe('boolean');
  });

});
