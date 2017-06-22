
/*imortando o decorator Pipe*/
import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
    
    /* é obrigatório para uma Pipe implementar o método 'transform' da interface PipeTransform */
    transform(fotos: FotoComponent[], textoDigitado: string) {
        console.log(fotos);
        console.log(textoDigitado);

        return fotos.filter(f => f.titulo.toLowerCase().includes(textoDigitado.toLowerCase()));
    }
}