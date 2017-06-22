import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent {

    @Input() nome = 'Ok';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Input() confirmacao: boolean;

    @Output() acao: EventEmitter<any> = new EventEmitter();

    executarAcao() {
        if (this.confirmacao) {
            if (confirm('Confirma a ação?'))
                this.acao.emit(null);
            return;
        }
        this.acao.emit(null);
    }

}