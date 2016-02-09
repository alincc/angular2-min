// Polyfills
import 'es6-shim';
import 'angular2/bundles/angular2-polyfills';

import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {Master} from './master/components/master'

document.addEventListener('DOMContentLoaded', function main() {
  bootstrap(Master, [
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ])
  .catch(err => console.error(err));

});