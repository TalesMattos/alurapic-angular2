import { routing } from './../app.routes';
import { FotoComponent } from './../foto/foto.component';
import { FotoService } from './../foto/foto.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    fotoService: FotoService;
    activatedRoute: ActivatedRoute; // para caputarar os parâmetros da rota
    router: Router; // para navegações programáticas
    mensagem: string = '';

    constructor(formBuilder: FormBuilder
              , fotoService: FotoService
              , activatedRoute: ActivatedRoute
              , router: Router) {

        this.fotoService = fotoService;
        
        this.activatedRoute = activatedRoute;
        this.router = router;
        
        this.activatedRoute.params.subscribe(params => {
            let id = params['id']; /* coringa descrito em app.routes.ts */
            if (id) { // só tem id se for uma edição
                this.fotoService.buscaPorId(id)
                                .subscribe(foto => {
                                    this.foto = foto;
                                }, err => console.error(err));
            }
        });

        this.meuForm = formBuilder.group({
                tituloCtrlName: ['', Validators.compose([Validators.required, Validators.minLength(4)]) ],
                urlCtrlName: ['', Validators.required],
                // descrição não participa da validação mas é necessário informar todos os campos do form
                descricaoCtrlName: [''] 
            });
    }

    cadastrar(event): void {
        event.preventDefault();
        
        this.fotoService.cadastrar(this.foto)
                .subscribe(resp => {
                    this.mensagem = resp.mensagem;
                    this.foto = new FotoComponent();
                    if (!resp.inclusao)
                        this.router.navigate(['']);
                }, err => console.error('Erro ao cadastrar a foto!') );
    }

}