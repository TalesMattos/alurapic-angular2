
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

/* SPA (Single Page Application): rotas para ora carregar a ListagemComponent ora CadastroComponent
    , dependendo da URL digitada no Browser */
const appRoutes: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'listagem', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastro/:id', component: CadastroComponent }, /* coringa */
    { path: '**', component: ListagemComponent } /* qualquer coisa que não for nenhuma das rotas anteriores vai para listagem */
];

/** Precisamos compilar as rotas em algo que o Angular vá entender */
/* será importado no módulo principal */
export const routing = RouterModule.forRoot(appRoutes); 

