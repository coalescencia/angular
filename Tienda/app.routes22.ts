import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });// useHash introduce
// en la barra de navegación el símbolo # pero evita que tengamos que realizar configuraciones adicionales
// en el servidor para que funcione bien la navegación