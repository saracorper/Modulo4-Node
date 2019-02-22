'use strict';
const dns = require('dns');
function dnsLookup(hostname, callback) {
    dns.lookup(hostname, (err, address, family) => {
      if (err) {
        return callback(err, null);
      }
  
      const data = {
        address,
        family,
      };
  
      return callback(null, data);
    });
  }
  
  module.exports = dnsLookup;
  dnsLookup('hack-a-bos.com', console.log);

  //OTRA FORMA

  'use strict';

  const dns = require('dns');
  const { promisify } = require('util');
  
  const lookup = promisify(dns.lookup);
  
  async function dnsLookup(hostname) {
    /**
     * lookup is dns.lookup BUT we promisified it, that means is returning a new Promise, so
     * we can use the syntax sugar await instead of chain resolve/reject methods
     */
    const { address, family } = await lookup(hostname);
  
    const data = {
      address,
      family,
    };
  
    return data;
  }
  
  module.exports = dnsLookup;

//OTRA MÁS

'use strict';

const dns = require('dns');

function dnsLookup(hostname) {
  return new Promise((resolve, reject) => {
    dns.lookup(hostname, (err, address, family) => {
      if (err) {
        return reject(err);
      }

      const data = {
        address,
        family,
      };

      return resolve(data);
    });
  });
}

module.exports = dnsLookup;

  








