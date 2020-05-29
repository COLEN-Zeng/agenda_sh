declare const PROJECT_ROOT: string;
declare const ENV: string;
declare const Common: any;

declare namespace Logger {
    function info(...params: any[]): void;
    function debug(...params: any[]): void;
    function error(...params: any[]): void;
    function warn(...params: any[]): void;
    function record(...params: any[]): void;
}

