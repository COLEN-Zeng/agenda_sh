import Account = require('../../../src_js/lib/core_service_client/account');
import NonVehicle = require('../../../src_js/lib/core_service_client/non_vehicle');
import Policy = require('../../../src_js/lib/core_service_client/policy');
import Payment = require('../../../src_js/lib/core_service_client/payment');
import Warehouse = require('../../../src_js/lib/core_service_client/warehouse');
export = {
    Account: Account(),
    NonVehicle: NonVehicle(),
    Policy: Policy(),
    Payment: Payment(),
    Warehouse: Warehouse(),
};
export as namespace Core;
