
import 'rxjs/add/operator/map'; /* add funtion 'map' nos Observables de RxJS */

/** módulos do angular */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; /* contém/disponibiliza o provider para Http */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** módulos da app */
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { BotaoModule } from './botao/botao.module';
import { ModalModule } from './modal/modal.module';

/** componentes/decorators da app */
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

/** rotas da SPA */
import { routing } from './app.routes';

/* Módulo principal do Angular (primeiro a ser carregado) 
 * toda app precisa de pelo menos um @NgModule
 * Você pode escolher não organizar sua aplicação em módulos, 
 *  mas o módulo principal da aplicação precisa existir.
*/
@NgModule({
    /* BrowserModule é a plataforma onde a aplicação será executada (se fosse para IONIC, por ex., seria outro módulo)*/
    imports: [ /* dependências do módulo (o que ele precisa / outros módulos) */
                BrowserModule, 
                FotoModule, 
                PainelModule, 
                BotaoModule,
                ModalModule,
                HttpModule, 
                FormsModule, /* para usar ngModel e fazer 2-way-data-binding */
                ReactiveFormsModule, /* permite fazer validação de formulário no modelo */
                routing /* rotas da aplicação */
            ], 
    /* componentes e recursos que esse módulo tem. que fazem parte dele */
    declarations: [ 
                    AppComponent, 
                    CadastroComponent, 
                    ListagemComponent 
                ], 
    /* primeiro módulo a ser carregado*/
    bootstrap: [ AppComponent ] 
    // , exports: ... não é preciso exportar esse módulo, pq ele é o principal e ninguém vai importar ele
    // .. é o contrário, ele que quer usar os outros módulos
})
/* ver main.ts (por isso que exportamos esse módulo) */
export class AppModule { }