import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {

    @Input() titulo: string;

    // Nesse momento ainda não temos o "titulo" populado (valor recebido pelo component no html)
    // Pois a propriedade "titulo" só será populada após a invocação do construtor, portanto, temos
    // "cannot read length of undefined"
    // constructor() {

    // }

    // Nesse caso o componente já terá atribuído os valores recebidos às respectivas propriedades 
    ngOnInit() {
        this.titulo = this.titulo.length > 7 ? this.titulo.substr(0, 7).concat('...') : this.titulo;
    }
}