import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

// Constante que contém nossas rotas - Array de elementos do tipo Routes
const appRoutes: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '**', component: ListagemComponent } // Otherwise
];

// Pega nossas rotas, as "compila" e as exporta
export const routing = RouterModule.forRoot(appRoutes);