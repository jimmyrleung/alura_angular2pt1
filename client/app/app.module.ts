import { NgModule } from '@angular/core'; // Importamos o NgModule para criar nossos módulos (Transforma nossas classes em módulos do angular)
import { BrowserModule } from '@angular/platform-browser'; // Indica que nossa aplicação irá rodar num browser
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule], // Array de módulos que queremos importar
    declarations: [AppComponent], // Declarar componentes e recursos que esse módulo possui
    bootstrap: [AppComponent] // Indica em qual componente iniciar quando este módulo for carregado (Não confundir com o framework bootstrap)
})
export class AppModule { }