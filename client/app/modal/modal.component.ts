import { Component, Input, Output, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements AfterViewInit {

    @Input() private titulo: string = 'Tem certeza?';
    @Input() private frase: string;
    
    @Output() eventEmitter = new EventEmitter();

    _elementRef: ElementRef;


    constructor(elementRef: ElementRef) {
        
        this._elementRef = elementRef;
    }

    /* ciclo de vida: quando o construtor do nosso componente é chamado, 
        o seu template ainda não foi renderizado. O jQueryUI precisa do DOM 
        do template do nosso componente para realizar a transformação 
       
    */
    ngAfterViewInit() {

        $(this._elementRef.nativeElement).dialog({
            title: this.titulo,
            autoOpen: false,
            resizable: false,
            modal: true,
            buttons: {
                Cancelar: () => {
                    $(this._elementRef.nativeElement).dialog( "close" );
                },
                Confirmar: () => {
                    $(this._elementRef.nativeElement).dialog( "close" );
                    this.eventEmitter.emit();
                }
            }
        });
    }

    show() {
        // quando chamado irá exibir o modal
        $(this._elementRef.nativeElement).dialog('open');
    }

}