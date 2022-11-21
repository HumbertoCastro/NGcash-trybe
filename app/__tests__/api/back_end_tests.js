const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('BACK-END - testa as ROTAS E CONTROLERS', () => {
  it('Testa O CONTROLER REGISTER, e seus resultados', async () => {
    const mockData = {
      name: 'TestUser',
      password: '12345Senha',
    };
    await frisby.post(`${url}/register`, mockData).expect('status', 201)
    .then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      expect(result.name).toBe(mockData.name);
      expect(result.id).toBe(6);
    });
  });
  it('Testa o CONTROLER ACCOUNT, e seus resultados', async () => {
    await frisby.get(`${url}/account/1`).expect('status', 200)
    .then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      expect(result.id).toBe(1);
      expect(result.balance).toBe("2341");
    });
  });
  it('Testa o CONTROLER LOGIN, e seus resultados', async () => {
    const mockData = {
      name: 'Paulo',
      password: '12345Senha',
    };

    await frisby.post(`${url}/login`, mockData).expect('status', 200)
    .then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      expect(result.name).toBe(mockData.name);
      expect(result.accountId).toBe(1);
    });
  });
  it('Testa O CONTROLER TRANSACTIONS, e seus resultados', async () => {
    const mockData = {
      id: '2',
      name: 'Paulo',
      value: '123',
    };

    await frisby.post(`${url}/transaction`, mockData).expect('status', 200)
    .then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      expect(result.creditedAccountId).toBe(1);
      expect(result.id).toBe(6);
      expect(result.value).toBe('123');
    });

    await frisby.get(`${url}/transaction/1`).expect('status', 200)
    .then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      expect(typeof result).toBe('object');
      expect(result.length).toBe(4);
    });
  });
  it('Testa o Controler User e sua funçao get userby id ', async () => {
    await frisby.get(`${url}/users/1`).expect('status', 200)
    .then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      expect(result.username).toBe('Paulo');
      expect(result.id).toBe(1);
    });
  })
});