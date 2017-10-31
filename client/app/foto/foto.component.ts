import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html'
    //templateUrl: './app/foto/foto.component.html' -- Sintaxe sem o module.id
})
export class FotoComponent {
    // Sintaxe do TYPESCRIPT, no ES6 teríamos que definir um constructor
    // url;
    // titulo;

    // Entretanto, só definir as propriedades não basta, precisamos usar o decorator @Input() para indicar que são Inputs para dados externos
    @Input() titulo: string;
    @Input() url: string;
    descricao: string; // Não será recebida via input
}