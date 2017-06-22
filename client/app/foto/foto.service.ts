
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FotoComponent } from './foto.component';

/* Decorator: diz para o Angular que essa classe tem  
 *  dependencias que precisam ser injetadas (Http) */ 
@Injectable() 
export class FotoService {

    http: Http;
    headers: Headers;
    url = "v1/fotos";

    constructor (http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    /**
     * método POST (inclusão) e PUT (alteração)
     */ 
    cadastrar(foto: FotoComponent): Observable<MensagemCadastro> {

        if (foto._id) { // Alteração
            return this.http.put(this.url + '/' + foto._id
                                , JSON.stringify(foto)
                                , { headers: this.headers })
                            .map(() => new MensagemCadastro('Foto alterada com sucesso', false) );
        } else { //Inclusão
            return this.http.post(this.url,
                                JSON.stringify(foto), 
                                { headers: this.headers })
                            .map(() => new MensagemCadastro('Foto incluída com sucesso', true));
        }
        
    }

    /**
     * método GET
     */ 
    listar(): Observable<FotoComponent[]> {
        /* AngularJS usava bastante Promises, mas o Agular2 adotou outro padrão: RxJS (Reactive Extensions for JavaScript)
         * O RxJS é um conjunto de bibliotecas para compor programas assíncronos e baseados em eventos, usando coleções observáveis */
        return this.http.get(this.url) /* retorna um Observable<Response>. Esse objeto especial faz parte do arsenal do RxJS */
            /* Função map adicionada à um Observable via import RxJS em AppModule (Precisamos explicar seu carregamento). 
             Nem todas as extensões de um observable são carregadas por padrão pelo RxJS*/
                        .map(response => /* necessário importar em AppModule: 'import 'rxjs/add/operator/map'' add funtion 'map' nos Observables de RxJS */
                              response.json());
    }

    /* método DELETE */
    remover(foto: FotoComponent): Observable<Response> {
        return this.http.delete(this.url + '/' + foto._id);
    }

    /* método GET com parâmetro */
    buscaPorId(id: string): Observable<FotoComponent> {
        return this.http
                 .get(this.url + '/' + id)
                 .map(resp => resp.json());
    }
}

export class MensagemCadastro {

    /* Ao colocar modificador de acesso, o TypeScript entende que deve criar esses atributos
     *  no escopo da classe. Isso é uma facilidade para não repetição de código
     */
    constructor(private _mensagem: string, private _inclusao: boolean) {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;

        // Object.freeze(this);
    }

    public get mensagem(): string {
        return this._mensagem;
    }

    // mesmo sem o modificador de acesso 'public' esse método é public por padrão
    get inclusao(): boolean {
        return this._inclusao;
    }
}