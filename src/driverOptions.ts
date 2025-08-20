export class DriverOptions {
    public browserName: Browser
    public logLevel: LogLevel
    constructor(options: any) {
        this.browserName = Browser.chrome;
        this.logLevel = LogLevel.silent;

        if ("browser" in options) {
          let value = String(options.browser);
          switch (value.toLowerCase()) {
            case "chrome":
              this.browserName = Browser.chrome;
              break;
            case "edge":
              this.browserName = Browser.Edge;
              break;
            case "safari":
              this.browserName = Browser.safari;
              break;
            default:
              this.browserName = Browser.chrome;
              break;
          }
        }

        if ("logLevel" in options) {
            let value = String(options.logLevel);
            switch (value.toLowerCase()) {
              case "info":
                this.logLevel = LogLevel.info;
                break;
            case "debug":
                this.logLevel = LogLevel.debug;
                break;
            default:
                this.logLevel = LogLevel.silent;
                break;
            }
          }
    }
}

export enum Browser {
    chrome = 'chrome',Edge = 'Edge',safari = 'safari'
}

export enum LogLevel{
    silent= 'silent',info = 'info',debug= 'debug'
}