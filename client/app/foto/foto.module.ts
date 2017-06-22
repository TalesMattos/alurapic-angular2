import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from './foto.service';


@NgModule({
    /* tudo que faz parte desse módulo */
    declarations: [ FotoComponent, FiltroPorTitulo ], 
    /* o que desse módulo se permite usar em outros módulos */
    exports: [ FotoComponent, FiltroPorTitulo ],
    providers: [ FotoService ] /* Define o que é injetável nesse módulo */
})
export class FotoModule {

}