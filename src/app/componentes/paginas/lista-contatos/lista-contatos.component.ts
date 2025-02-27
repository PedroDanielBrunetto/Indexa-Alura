import { Component } from '@angular/core';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from '../../../mock/agenda.json';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContainerComponent } from '../../container/container.component';
import { CabecalhoComponent } from '../../cabecalho/cabecalho.component';
import { SeparadorComponent } from '../../separador/separador.component';
import { ContatoComponent } from '../../contato/contato.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormularioContatoComponent,
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css',
})
export class ListaContatosComponent {
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
