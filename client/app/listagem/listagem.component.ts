
import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { PainelComponent } from '../painel/painel.component';
 
@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    
    fotos: FotoComponent[] = [];
    fotoService: FotoService;
    mensagem: string = '';


    /* poderia ser: 'constructor(@Injetct(Http) http) {', mas com a tipagem do TypeScript isso já não é necessário nesse caso
        de tal forma seria necessário a importação do decorator 'Inject'. 
       Uma instância dessa classe é criada quando do uso do seletor como tag em um arquivo html '<app></app>'*/
    constructor(fotoService: FotoService) { /* o Angular sabe que aqui deve haver uma injeção de dependência */
        this.fotoService = fotoService;
        this.fotoService.listar() 
            .subscribe(respJsonFotos => { /* tem que se inscrever nesse stream(fluxo) e esperar a resposta (observar a resposta)*/
                this.fotos = respJsonFotos; /* converte a resposta em um json */
                console.log(this.fotos);
            }, err => console.error(err));
    }

    remover(foto: FotoComponent, painel: PainelComponent) {
        this.fotoService.remover(foto)
                .subscribe(() => {

                    /*vai fazer o fadeOut do JQuery, que após o termino invoca a função de callback*/
                    painel.fadeOut(() => {
                        /* Assim não vai atualizar a view por causa do mecanismo de 'change detection' 
                        No Angular 2 só atualiza a view quando há uma atribuição direta pelo operador '='
                        , e não quando um array é modificado por exemplo, por questões de performance */
                        // let index = this.fotos.indexOf(foto);
                        // this.fotos.splice(index, 1);

                        // agora vai atualizar a view, pois o mecanismo de change detection verá a atribuição
                        let fotosCopias = this.fotos.slice(0); // faz uma cópia a partir do indice 0(zero)
                        let indexfotoRemovida = fotosCopias.indexOf(foto);
                        fotosCopias.splice(indexfotoRemovida, 1); // apaga a partir do indice até o valor passado no segundo parametro
                        this.fotos = fotosCopias;
                        this.mensagem = 'Foto removida com sucesso';
                        console.log('Foto removida com sucesso.');
                    });
                }
                , err => {
                    console.error(err);
                    this.mensagem = 'Erro ao remover a foto';
                });
    }
}