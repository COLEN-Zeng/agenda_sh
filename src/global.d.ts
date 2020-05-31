declare const PROJECT_ROOT: string;
declare const ENV: string;
// import * as _Common from './common';
declare const Common: any;
declare const Service: any;
declare const Config: any;
declare const NotificationCenter: any;
declare const Inside: any;
declare namespace Logger {
    function info(...params: any[]): void;
    function debug(...params: any[]): void;
    function error(...params: any[]): void;
    function warn(...params: any[]): void;
    function record(...params: any[]): void;
}

// declare module '@qtk/orm-framework'
declare const ORM;
declare const Action;
