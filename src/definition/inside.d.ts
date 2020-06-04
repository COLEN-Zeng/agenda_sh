// import ClientClass from '@silver-ins-common/inside-client';
// import Core = require('@silver-ins-core/inside-client');
// import Common = require('@silver-ins-common/inside-client');

// export = {
//     Core: new Core(),
//     Common: new Common(),
// }
// export as namespace Inside;

// import { _Core } from './core'
declare class Common {
    call(method: string, request: any, timeout?: number): any;
}

declare const Inside: {
    Common: Common,
    // Core: _Core
}
