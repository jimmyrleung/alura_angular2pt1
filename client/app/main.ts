import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Indica que nosso módulo será colocado dentro do browser
import { AppModule } from './app.module'; // O módulo que iremos carregar

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule); // faz um 'boot' do AppModule

/*
    1) Index carrega os arquivos do angular e ao chegar no system.js irá ler o que está sendo importado, ou seja, o 'app' System.import('app'))

    2) Dentro do system.config ele procura dentro de 'packages' o 'app' e verifica que para carregar o app é necessário carregar a main (esse arquivo)

    3) A main (este arquivo) carrega o AppModule que por sua vez é 'bootado' pela nossa plataforma, ou seja, o browser

    4) Quando nosso AppModule for carregado, carregará consigo o AppComponent

    5) Na nossa tag <app></app> será possível visualizar o template do AppComponent
*/