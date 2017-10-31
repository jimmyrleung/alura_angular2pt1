import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();

    cadastrar(event) {
        event.preventDefault(); // Cancela o event default do submit
        console.log(this.foto);

    }

}