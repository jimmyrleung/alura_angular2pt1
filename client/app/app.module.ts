import { NgModule } from '@angular/core'; // Importamos o NgModule para criar nossos módulos (Transforma nossas classes em módulos do angular)
import { BrowserModule } from '@angular/platform-browser'; // Indica que nossa aplicação irá rodar num browser
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http'; // Modulo Http criado pela equipe do angular
import { PainelModule } from './painel/painel.module';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // FormsModule - É necessário para alguns recursos como o ngModel | ReactiveFormsModule - Validações
import 'rxjs/add/operator/map'; // Adiciona o map ao Observable

@NgModule({
    imports: [BrowserModule, FotoModule, HttpModule, PainelModule, routing, FormsModule, ReactiveFormsModule], // Array de módulos que queremos importar
    declarations: [AppComponent, CadastroComponent, ListagemComponent], // Declarar componentes e recursos que esse módulo possui
    bootstrap: [AppComponent] // Indica em qual componente iniciar quando este módulo for carregado (Não confundir com o framework bootstrap)
})
export class AppModule { }