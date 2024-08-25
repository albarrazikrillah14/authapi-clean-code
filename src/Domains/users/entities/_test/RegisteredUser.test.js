const RegisteredUser = require('../RegisteredUser');

describe('a RegisteredUser entities', () => {
  it('should throw error when payload not contain needed property', () => {
    const payload = {
      id: 'user-123',
      username: 'medomeckz'
    };

    expect(() => new RegisteredUser(payload)).toThrow(Error('REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY'));
  });

  it('should throw error when payload not meet data type specification', () => {
    const payload = {
      id: true,
      username: [],
      fullname: 'Albarra Zikrillah'
    };

    expect(() => new RegisteredUser(payload)).toThrow(Error('REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION'));
  });

  it('should create registered entities correctly', () => {
    const payload = {
      id: 'user-123',
      username: 'medomeckz',
      fullname: 'Albarra Zikrillah'
    };

    const registeredUser = new RegisteredUser(payload);

    expect(registeredUser.id).toEqual(payload.id);
    expect(registeredUser.username).toEqual(payload.username);
    expect(registeredUser.fullname).toEqual(payload.fullname);
  });
});