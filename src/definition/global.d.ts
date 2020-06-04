declare const PROJECT_ROOT: string;
declare const ENV: 'dev' | 'prod' | 'gamma';
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

interface Global {
    PROJECT_ROOT: string;
    ENV: string;
    Common: any;
    Service: any;
    ORM: any;
    Config: any;
    NotificationCenter: any;
    Inside: any;
    Action: any;
}

declare module '@qtk/orm-framework' {

}
declare const ORM;
declare const Action;
