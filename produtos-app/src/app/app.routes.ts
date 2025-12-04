import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductFormComponent } from './product-form.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'produtos/novo', component: ProductFormComponent },
  { path: 'produtos/editar/:id', component: ProductFormComponent },
  { path: '**', redirectTo: '' }
];
