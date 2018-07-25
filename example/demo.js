    var RLM = require('../rlm.js');

    var lic1 = new RLM.rlm('./license.lic');

    console.log(lic1.getServer());
    console.log(lic1.getVendor('prime'));
    console.log(lic1.getFeature('orbit', 'venus'));
    console.log(lic1.getFeatures('prime'));
    console.log(lic1.findExpirations('orbit'));
    console.log(lic1.findAllExpirations());
    console.log(lic1.findExpired('orbit', 10));

    lic1.dump();
