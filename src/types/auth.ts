export type Claim =
    | 'admin:view'
    | 'auth:login'
    | 'buyers:view'
    | 'events:create'
    | 'events:manage'
    | 'events:publish'
    | 'events:statistics'
    | 'events:unpublish'
    | 'events:view'
    | 'events:tickets:export'
    | 'events:tickets:scan'
    | 'events:tickets:view'
    | 'finance:export'
    | 'finance:view'
    | 'finance:invoices:view'
    | 'merchant:admin'
    | 'merchant:users'
    | 'orders:export'
    | 'orders:view'
    | 'statistics:view'
    | 'tasks:view';

export type UserTokenType =
    | 'access_token'
    | 'authorization_code'
    | 'refresh_token'
    | 'session';

export type BrowserType =
    | 'brave'
    | 'chrome'
    | 'edge'
    | 'firefox'
    | 'opera'
    | 'safari'
    | 'samsunginternet'
    | 'vivaldi';

export type OperatingSystemType =
    | 'ios'
    | 'ipados'
    | 'macos'
    | 'windows'
    | 'linux'
    | 'android'
    | 'chromeos';
