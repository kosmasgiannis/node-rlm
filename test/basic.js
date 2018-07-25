// -----------------------------------------------------------------------------
//
// basic.js
//
// Written by Giannis Kosmas <kosmasgiannis@gmail.com>
//
// License: http://opensource.org/licenses/MIT
//
// -----------------------------------------------------------------------------

var tap = require('tap');

var test = tap.test;

var RLM = require('../rlm.js');

// -----------------------------------------------------------------------------

test('RLM', function(t) {

  var lic = new RLM.rlm('license.lic');

  t.ok(lic, 'License instance created');

  t.equal('myhost', (lic.getServer()).name, 'Server name');
  t.equal(2, (lic.getVendors()).length, 'Get all vendors');
  t.equal('prime', (lic.getVendor('prime')).name, 'Get known vendor');
  t.equal(null, lic.getVendor('unknown'), 'Get unknown vendor');
  t.deepEqual({
    name: 'venus',
    version: '2.0',
    vendor: 'orbit',
    expDate: '30-nov-2013',
    licCount: '10',
    _ck: '6b06fc422d',
    sig: '"24P0450NNB1CD5XB47DRFS8RA07G77TR6DPEVJ022H900RXJ2QKXJ08H36EEWCA1NM6T3UUKE4"'
  }, lic.getFeature('orbit', 'venus'), 'Get feature');
  t.equal(3, (lic.getFeatures('prime')).length, 'Get all features');
  t.notOk((null == lic.findExpirations('prime')), 'Find expirations');
  t.ok((null != lic.findAllExpirations()), 'Find all expirations');

  t.end();
});

// -----------------------------------------------------------------------------
