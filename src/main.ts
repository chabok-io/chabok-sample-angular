import chabokpush from 'chabokpush';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


const auth = {
  appId: 'APP_ID',
  webKey: 'WEB_KEY',
  devMode: true
};
const options = {
  webpush: {
    enabled: true,
    publicKey: 'PUBLIC_KEY'
  },
  silent: false,
  realtime: false
};

const chabok = new chabokpush.Chabok(auth, options);

// Do stuff here
