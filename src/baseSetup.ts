import { remote, RemoteOptions} from 'webdriverio';
import { DriverOptions } from './driverOptions';

export class CreatInstance {
    public static browser: WebdriverIO.Browser;

    public static async initBrowser(confiJson: DriverOptions) {
        let options: RemoteOptions; // ✅ Use RemoteOptions here
        const containerType = String(confiJson.browserName);

        switch (containerType.toLowerCase()) {
            case 'chrome':
                options = {
                    logLevel: 'silent',
                    capabilities: {
                        browserName: 'chrome',
                    }
                };
            break;
            case 'edge':
                options = {
                    logLevel: 'silent',
                    capabilities: {
                        browserName: 'edge',
                    }
                };
            break;
            default:
                throw new Error(`Unsupported browser: ${containerType}`);
        }

        this.browser = await remote(options);
    }
}


      // this.browser = await remote({
        //     logLevel: 'silent',
        //     capabilities: {
        //       browserName: 'chrome',
        //        // You can change this to 'firefox', 'edge', etc.
        //     },
        // });