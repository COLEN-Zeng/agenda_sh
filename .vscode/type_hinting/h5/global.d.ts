import Account = require('../../../src_js/lib/h5_service_client/account');
import Auth = require('../../../src_js/lib/h5_service_client/auth');
import Certification = require('../../../src_js/lib/h5_service_client/certification');
import GuestArticle = require('../../../src_js/lib/h5_service_client/guest_article');
import Org = require('../../../src_js/lib/h5_service_client/org');
import Permission = require('../../../src_js/lib/h5_service_client/permission');
import Personnel = require('../../../src_js/lib/h5_service_client/personnel');
export = {
    Account: Account(),
    Auth: Auth(),
    Certification: Certification(),
    GuestArticle: GuestArticle(),
    Org: Org(),
    Permission: Permission(),
    Personnel: Personnel(),
};
export as namespace H5;
