import Account = require('../../../lib/core_service_client/account');
import NonVehicle = require('../../../lib/core_service_client/non_vehicle');
import Policy = require('../../../lib/core_service_client/policy');
import Payment = require('../../../lib/core_service_client/payment');
import Warehouse = require('../../../lib/core_service_client/warehouse');
export = {
    Account: Account(),
    NonVehicle: NonVehicle(),
    Policy: Policy(),
    Payment: Payment(),
    Warehouse: Warehouse(),
};
export as namespace Core;
