import Account = require('../../../lib/h5_service_client/account');
import Auth = require('../../../lib/h5_service_client/auth');
import Certification = require('../../../lib/h5_service_client/certification');
import GuestArticle = require('../../../lib/h5_service_client/guest_article');
import Org = require('../../../lib/h5_service_client/org');
import Permission = require('../../../lib/h5_service_client/permission');
import Personnel = require('../../../lib/h5_service_client/personnel');
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
