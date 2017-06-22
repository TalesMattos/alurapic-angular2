
/**
 * Esse é o arquivo invocado automaticamente pelo loader SystemJS (Configuração default proposta em systemjs.config.js)
 * A página html (index.html) faz a importação/configuração inicial, do SystemJS, que invoca esse arquivo pelo loader
 */

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule); /* ver propriedade bootstrap de @NgModule em AppModule 
                                        para saber quem é o primeiro componente a ser carregado */
