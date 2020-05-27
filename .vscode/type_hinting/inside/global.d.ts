import Core = require('@silver-ins-core/inside-client');
import Common = require('@silver-ins-common/inside-client');

export = {
    Core: new Core(),
    Common: new Common(),
}
export as namespace Inside;
