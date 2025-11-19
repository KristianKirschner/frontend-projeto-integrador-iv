import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  status: 'Ativo' | 'Inativo';
  descricao: string;   // <-- NOVO
}

@Component({
  selector: 'app-lista-produtos',
  standalone: false,
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
produtos: Produto[] = [
  { id: 1, nome: 'Notebook Lenovo', preco: 3500, status: 'Ativo', descricao: 'Notebook ótimo para estudos.' },
  { id: 2, nome: 'Mouse Gamer', preco: 150, status: 'Ativo', descricao: 'Mouse com RGB e 2400 DPI.' },
  { id: 3, nome: 'Teclado Mecânico', preco: 320, status: 'Inativo', descricao: 'Switch blue, barulhento.' },
];
  excluir(id: number) {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}
