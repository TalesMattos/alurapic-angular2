
import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: [ './painel.component.css' ]
})
export class PainelComponent implements OnInit {

    /* inbound property */
    @Input() titulo: String;

    // ElementRef apenas encapsula o elemento nativo
    elementoRef: ElementRef;

    constructor(elementoRef: ElementRef) {
        this.elementoRef = elementoRef;
    }

    /*
        Um componente em Angular 2 possui um ciclo de vida, e um deles é chamado de OnInit
        Nele, o componente é iniciado, mas só depois das inbound properties terem sido atribuídas,
         como é o caso do título do nosso painel
    */
    ngOnInit(): void {
        this.titulo = 
                this.titulo.length > 7
                 ? this.titulo.substr(0,7) + '...'
                 : this.titulo;
    }

    fadeOut(callback) {
        //para o seletor funcionar deve-se passar o elemento nativo
        $(this.elementoRef.nativeElement).fadeOut(callback);
    }

}