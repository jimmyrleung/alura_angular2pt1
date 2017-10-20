// Component: É um decorator (é análogo a uma annotation)
import { Component } from '@angular/core'; // Procura nos node_modules o @angular/core

@Component({
    selector: 'app', // Como iremos acessar nosso componente nas views (<app>),
    templateUrl: './app/app.component.html' // A partir da raíz (client) busca o template html
})

export class AppComponent {
    constructor() {

    }
}