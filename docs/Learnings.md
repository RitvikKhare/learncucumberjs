# Learnings


## Links 
https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/

## Notes
1. Internet Explorer downloads IE server.exe - "webdriver-manager update --ie" , put browsercapabilities as "internet explorer".
2. If we don't put browser in protractor config. by default it will work with Chrome.
3. browser.waitForAngularEnabled(false) for non angular apps.
4. for Jasmine - any function should be inside describe block to be used.

## Service Call 
1. node-fetch library added - @types/node ,@types/node-fetch, @types/form
2. Userful links
* https://www.npmjs.com/package/@types/node-fetch
* https://github.com/node-fetch/node-fetch

3. Created file in the folder ./lib/codepracticets/servicecall.ts
4. Output is as below with node servicecall.js

{ login: 'RitvikKhare',
  id: 28248633,
  node_id: 'MDQ6VXNlcjI4MjQ4NjMz',
  avatar_url: 'https://avatars2.githubusercontent.com/u/28248633?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/RitvikKhare',
  html_url: 'https://github.com/RitvikKhare',
  followers_url: 'https://api.github.com/users/RitvikKhare/followers',
  following_url:
   'https://api.github.com/users/RitvikKhare/following{/other_user}',
  gists_url: 'https://api.github.com/users/RitvikKhare/gists{/gist_id}',
  starred_url:
   'https://api.github.com/users/RitvikKhare/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/RitvikKhare/subscriptions',
  organizations_url: 'https://api.github.com/users/RitvikKhare/orgs',
  repos_url: 'https://api.github.com/users/RitvikKhare/repos',
  events_url: 'https://api.github.com/users/RitvikKhare/events{/privacy}',
  received_events_url: 'https://api.github.com/users/RitvikKhare/received_events',
  type: 'User',
  site_admin: false,
  name: 'Ritvik Khare',
  company: null,
  blog: 'https://www.linkedin.com/in/ritvik-khare-a5706420/',
  location: 'India',
  email: null,
  hireable: true,
  bio: null,
  public_repos: 2,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: '2017-05-01T05:44:33Z',
  updated_at: '2020-03-15T15:33:00Z' }
{ args: {},
  data: '{"a":1}',
  files: {},
  form: {},
  headers:
   { Accept: '*/*',
     'Accept-Encoding': 'gzip,deflate',
     'Content-Length': '7',
     'Content-Type': 'application/json',
     Host: 'httpbin.org',
     'User-Agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
     'X-Amzn-Trace-Id': 'Root=1-5e7198ba-edb3aeec367f35a0cdf9afec' },
  json: { a: 1 },
  origin: '14.96.87.101',
  url: 'https://httpbin.org/post' }