import { Routes } from '@angular/router';
import { FormularioContatoComponent } from './componentes/paginas/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './componentes/paginas/lista-contatos/lista-contatos.component';

export const routes: Routes = [
  { path: 'formulario', component: FormularioContatoComponent },
  { path: 'lista', component: ListaContatosComponent },
  {
    path: '',
    redirectTo: '/lista',
    pathMatch: 'full',
  },
];
