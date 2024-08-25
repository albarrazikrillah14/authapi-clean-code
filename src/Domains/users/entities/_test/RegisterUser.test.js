const RegisterUser = require('../RegisterUser');

describe('a RegisterUser entities', () => {
  it('should throw error when payload not contain needed property', () => {
    const payload = {
      username: 'medomeckz',
      fullname: 'Albarra Zikrillah'
    };

    expect(() => new RegisterUser(payload)).toThrow(Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY'));
  });
  
  it('should throw error when payload not meet data type specification', () => {
    const payload = {
      username: true,
      password: [],
      fullname: 'Albarra Zikrillah'
    };

    expect(() => new RegisterUser(payload)).toThrow(Error('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION'));
  });

  it('should throw error when username length more than 50', () => {
    const payload = {
      username: 'medomeckzmedomeckzmedomeckzmedomeckzmedomeckzmedomeckz',
      password: 'secret',
      fullname: 'Albarra Zikrillah'
    };

    expect(() => new RegisterUser(payload)).toThrow(Error('REGISTER_USER.USERNAME_LIMIT_CHAR'));
  });

  it('should throw error when username contain restricted character', () => {
    const payload = {
      username: 'medo meck',
      password: 'secret',
      fullname: 'Albarra Zikrillah'
    };

    expect(() => new RegisterUser(payload)).toThrow(Error('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER'));
  });

  it('shouLd create register user entities correctly', () => {
    const payload = {
      username: 'medomeckz',
      password: 'secret',
      fullname: 'Albarra Zikrillah'
    };

    const registerUser = new RegisterUser(payload);

    expect(registerUser.username).toEqual(payload.username);
    expect(registerUser.password).toEqual(payload.password);
    expect(registerUser.fullname).toEqual(payload.fullname);
  });
});