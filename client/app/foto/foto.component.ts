/*importando decorators*/
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    /*para não precisar colocar o caminho completo até o html que está na mesma pasta
    *  module.id é um objeto que é criado pelo loader System.js 
    *  e entra em jogo quando o código é transcompilado.
    */
    moduleId: module.id, /* ex = de: './app/foto/foto.component.html', para: './foto.component.html'*/
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: [ './foto.component.css' ], 
    /* tipo de encapsulamento do css (Shadow-Dom): Emulated é o padrão. Confina o css apenas para esse componente */
    encapsulation:  ViewEncapsulation.Emulated 
})
export class FotoComponent {

    /* com @Input essas propriedades podem receber valores*/ 
    @Input() titulo: string;
    @Input() url: string;
    descricao: string;
    _id: string;
}