export const ENV = {
  apiUrl:
    process.env.NODE_ENV === 'production' ?
    'https://api.nl-ix.net'
    : 'https://dev.nl-ix.net/api',
  networkIp: '193.239.116.0',
  contentUrl:
    process.env.NODE_ENV === 'production' ?
    'contentful.nl-ix.net'
    : 'cdn.contentful.com'
};
