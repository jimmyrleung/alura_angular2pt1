// Component: É um decorator (é análogo a uma annotation)
// Inject: Módulo de injeção de dependências (não é necessário se usarmos a sintaxe de tipagem do javascript)
import { Component, Inject } from '@angular/core'; // Procura nos node_modules o @angular/core
import { Http } from '@angular/http';

@Component({
    moduleId: module.id, // id gerado pelo System.js
    selector: 'app', // Como iremos acessar nosso componente nas views (<app>),
    templateUrl: './listagem.component.html'
    //templateUrl: './app/app.component.html' // A partir da raíz (client) busca o template html - Usar caso não queira usar o moduleId: module.id
})

export class ListagemComponent {
    // Note que o 'http' é do tipo '@Inject(Http)', ou seja, tipamos o parâmetro http
    // constructor(@Inject(Http) http) {

    // Tipagem typescript - Exemplo: let nome : string; 
    // Usando o TypeScript podemos reescrever a linha acima da seguinte maneira:
    constructor(http: Http) {
        // RXJS: Reactive extension for javascript (substitui as 'promises' usadas no angular 1) e oferece o subscribe
        // http.get("v1/fotos")
        //     .subscribe(res => {
        //         this.fotos = res.json(); // poderíamos utilizar res.text() para pegar a resposta como texto
        //         console.log(this.fotos);
        //     });

        http.get("v1/fotos")
            .map(res => res.json())
            .subscribe(fotos => {
                this.fotos = fotos;
                console.log(this.fotos);
            }, 
            error => console.log(error));
    }

    //fotos: Array<Object> = []; // Um array de objects
    fotos: Object[] = [];
}