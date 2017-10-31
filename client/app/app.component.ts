// Component: É um decorator (é análogo a uma annotation)
// Inject: Módulo de injeção de dependências (não é necessário se usarmos a sintaxe de tipagem do javascript)
import { Component, Inject } from '@angular/core'; // Procura nos node_modules o @angular/core
import { Http } from '@angular/http';

@Component({
    moduleId: module.id, // id gerado pelo System.js
    selector: 'app', // Como iremos acessar nosso componente nas views (<app>),
    templateUrl: './app.component.html'
})

export class AppComponent {

}