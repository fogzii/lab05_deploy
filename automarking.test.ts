import request from 'sync-request';
import { DEPLOYED_URL } from './src/deploy';

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

  if (process.env.CI_PROJECT_PATH_SLUG) {
    // Pipeline CI test
    const gitlabZids = (process.env.CI_PROJECT_PATH_SLUG.match(/z[0-9]{7}/g) || ['']);
    expect(zIDs[0]).toEqual(gitlabZids[0]);
  }

  // Root test
  const res = request('GET', DEPLOYED_URL + '/', { qs: {} });
  const data = JSON.parse(res.getBody() as string);
  expect(data).toStrictEqual({ message: expect.any(String) });

  // Echo tests
  expect(requestEcho('wrapper')).toStrictEqual({ message: 'wrapper' });
  expect(requestEcho('echo')).toStrictEqual({ error: expect.any(String) });
});
