// PipeTransform funciona como uma interface
import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    // Recebe a lista de fotos e o valor digitado no input
    // Tipamos para usar as facilidades do autocomplete, entretanto, temos que ter a noção que após a trancompilação essa "tipagem" é removida
    transform(fotos: FotoComponent[], digitado: string) {
        digitado = digitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado.toLowerCase()));
    }

}