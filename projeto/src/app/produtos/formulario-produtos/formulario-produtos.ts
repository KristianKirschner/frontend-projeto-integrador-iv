import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  status: 'Ativo' | 'Inativo';
  descricao: string;
}

@Component({
  selector: 'app-formulario-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-produtos.html',
  styleUrls: ['./formulario-produtos.css'],
})
export class FormularioProdutos {
  produto: Produto = {
    id: 0,
    nome: '',
    preco: 0,
    status: 'Ativo',
    descricao: ''
  };

  produtosMock: Produto[] = [
    { id: 1, nome: 'Notebook Lenovo', preco: 3500, status: 'Ativo', descricao: 'Notebook ótimo para estudos.' },
    { id: 2, nome: 'Mouse Gamer', preco: 150, status: 'Ativo', descricao: 'Mouse RGB.' },
    { id: 3, nome: 'Teclado Mecânico', preco: 320, status: 'Inativo', descricao: 'Switch blue.' },
  ];

  modoEdicao = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.modoEdicao = true;
      const encontrado = this.produtosMock.find(p => p.id === id);

      if (encontrado) {
        this.produto = { ...encontrado };
      }
    }
  }

  salvar() {
    if (this.modoEdicao) {
      console.log('Produto editado:', this.produto);
    } else {
      console.log('Produto criado:', this.produto);
    }
  }
}
