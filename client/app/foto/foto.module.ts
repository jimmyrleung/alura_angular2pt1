import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
// Poderíamos ter somente o FotoComponent, entretanto, criaremos um módulo para foto pois dessa forma podemos reutilizá-lo em outras aplicações facilmente
@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo], // Tudo que faz parte do módulo
    exports: [FotoComponent, FiltroPorTitulo] // Quais components do módulo queremos exportar 
})
export class FotoModule {

}