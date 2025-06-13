import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-product-card-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card-crud.component.html',
  styleUrls: ['./product-card-crud.component.css']
})
export class ProductCardCrudComponent {

  @Input() producto!: Producto;
  @Input() index!: number;
  @Output() editar = new EventEmitter<string>();
  @Output() eliminar = new EventEmitter<void>();

  onEditar() {
    this.editar.emit(this.producto._id);
  }

  onEliminar() {
    this.eliminar.emit();
  }


}

