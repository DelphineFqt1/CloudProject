//import { helloWorld } from './index';

/*describe('typeScript test suite', () => {
  it('should return "Hello world!"', () => {
    expect.assertions(1);
    expect(helloWorld()).toBe('Hello world!');
  });
});*/

import {callback} from './callback'
import {server} from './server'
import http from 'http';

test('test callback', async () => {
  const data = await callback();
  expect(data).toContain("cpu");
});

test('test callback', async () => {
  const data = await callback();
  expect(data).toContain("system");
});

describe('get /api/v1/sysinfo', () => {
  test('should return 200', () => {
    const monServer = server();
    monServer.listen(8000);
    http.get('http://localhost:8000/api/v1/sysinfo', (res) => {
      expect(res.statusCode).toBe(200);
      monServer.close();
    });
  });
});

describe('get url with error', () => {
  test('should return Error 404', () => {
    const monServer = server();
    monServer.listen(8001);
    http.get('http://localhost:8001/api/v1/sysi', (res) => {
      expect(res.statusCode).toBe(404);
      monServer.close();
    });
  });
});