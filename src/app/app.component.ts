import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './mock/agenda.json';
import { FormularioContatoComponent } from './componentes/paginas/formulario-contato/formulario-contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormularioContatoComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto: string = '';

  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }

    return this.contatos.filter((contato) => {
      return contato.nome
        .toLowerCase()
        .includes(this.filtroPorTexto.toLowerCase());
    });
  }

  filtrarLetrasComContato(letra: string) {
    const contatosCarregados = this.contatos.filter((contato) => {
      return contato.nome
        .toLowerCase()
        .includes(this.filtroPorTexto.toLowerCase());
    });
    const contatosComLetra = contatosCarregados.filter((contato) => {
      return contato.nome.toLowerCase().includes(letra.toLowerCase());
    });
    const contatosDaLetra = contatosComLetra.filter((contato) => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
    if (contatosDaLetra.length > 0) return true;
    else return false;
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter((contato) => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }
}
