import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  produto: Produto = { nome: '', preco: 0 };
  editando = false;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editando = true;
      this.produtoService.buscarPorId(+id).subscribe({
        next: (p) => {
          console.log('🔄 Produto carregado para edição:', p);
          this.produto = p;
        },
        error: (err) => console.error('❌ Erro ao carregar produto:', err)
      });
    }
  }

  salvar(): void {
    console.log('✅ Botão Salvar clicado! Produto atual:', this.produto);

    if (this.editando) {
      this.produtoService.atualizar(this.produto.id!, this.produto).subscribe({
        next: () => {
          alert('Produto atualizado com sucesso!');
          console.log('✅ Produto atualizado:', this.produto);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('❌ Erro ao atualizar produto:', err);
          alert('Erro ao atualizar produto!');
        }
      });
    } else {
      this.produtoService.salvar(this.produto).subscribe({
        next: (res) => {
          alert('Produto cadastrado com sucesso!');
          console.log('✅ Produto cadastrado:', res);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('❌ Erro ao salvar produto:', err);
          alert('Erro ao salvar produto!');
        }
      });
    }
  }

  cancelar(): void {
    console.log('↩️ Operação cancelada, voltando para a lista.');
    this.router.navigate(['/']);
  }
}
