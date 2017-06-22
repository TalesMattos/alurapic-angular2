/**
 * Um componente é a unidade de código que encapsula os dados, o comportamento e a apresentação
 */


/** importando um decorator do angular para: decorar nosso componente! */
import { Component } from '@angular/core'; /* sintaxe de importação do sistema de módulos do ES6 */
import { Inject } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    /* para não precisar colocar o caminho completo até o html que está na mesma pasta
    *   module.id é um objeto que é criado pelo loader System.js 
    *   e entra em jogo quando o código é transcompilado. */
    moduleId: module.id, /* ex = de: './app/app.component.html', para: './app.component.html'*/
    /* nome da tag para usar o componente nas páginas html */
    selector: 'app', /* nosso seletor */
    /* por convenção tem o mesmo nome do arquivo 'ts', mundando apenas extensão (fica no mesmo diretório) */
    templateUrl: './app.component.html' /* guarda a apresentação do nosso componente */
})
/* classe deve ter o mesmo nome que o arquivo mas no padrão PascalCase */
export class AppComponent { 
    
    //injeção com inject
    // constructor(@Inject(Http) http) {}
    //ou sem inject...
    // assim não precisa do import do Inject
    //constructor(http: Http) {}

}