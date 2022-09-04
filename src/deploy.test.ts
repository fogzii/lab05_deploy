import request from 'sync-request';
import { DEPLOYED_URL } from './deploy';

test('Remove this test and uncomment the tests below', () => {
  expect(1 + 1).toEqual(2);
});

/*

function requestEcho(message: string) {
  const res = request(
    'GET',
    DEPLOYED_URL + '/echo/echo',
    {
      // Note that for PUT/POST requests, you should
      // use the key 'json' instead of the query string 'qs'
      qs: {
        message
      }
    }
  );
  return JSON.parse(res.getBody() as string);
}

test('Deployed Server Sanity check', () => {
  const zIDs = (DEPLOYED_URL.match(/z[0-9]{7}/g) || []);

  // URL Sanity test
  expect(zIDs.length).toEqual(1);
  expect(DEPLOYED_URL.startsWith('http')).toBe(true);
  expect(DEPLOYED_URL.endsWith('/')).toBe(false);

  if (process.env.GITLAB_USER_LOGIN) {
    // Pipeline CI test
    expect(zIDs[0]).toEqual(process.env.GITLAB_USER_LOGIN);
  }

  // Root test
  const res = request('GET', DEPLOYED_URL + '/', { qs: {} });
  const data = JSON.parse(res.getBody() as string);
  expect(data).toStrictEqual({ message: expect.any(String) });

  // Echo tests
  expect(requestEcho('wrapper')).toStrictEqual({ message: 'wrapper' });
  expect(requestEcho('echo')).toStrictEqual({ error: expect.any(String) });
});

*/
