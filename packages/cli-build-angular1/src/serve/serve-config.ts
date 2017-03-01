import * as path from 'path';

export interface ServerOptions {
 projectRoot: string;
 address: string;
 port: number;
 livereloadPort: number;
 notificationPort: number;
 browser: string | undefined;
 browseroption: string | undefined;
 platform: string | undefined;
 consolelogs: boolean;
 serverlogs: boolean;
 nobrowser: boolean;
 nolivereload: boolean;
 noproxy: boolean;
 lab: boolean;
 iscordovaserve: boolean;
 nogulp: boolean;
 nosass: boolean;
}


export const LOGGER_DIR = '__ion-dev-server';
export const IONIC_LAB_URL = '/ionic-lab';

export const DEFAULT_ADDRESS = '0.0.0.0';
export const DEFAULT_LIVERELOAD_PORT = 35729;
export const DEFAULT_SERVER_PORT = 8100;
export const DEFAULT_NOTIFICATION_PORT = 53703;

export const IOS_PLATFORM_PATH = path.join('platforms', 'ios', 'www');
export const ANDROID_PLATFORM_PATH = path.join('platforms', 'android', 'assets', 'www');
