import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {

  private _producto: Producto | null = null;

  @Input()
  set producto(value: Producto | null) {
    this._producto = value;
    if (this._producto) {
      this.modelo = { ...this._producto };
    } else {
      this.modelo = this.crearModeloVacio();
    }
  }

  get producto(): Producto | null {
    return this._producto;
  }

  modelo: Producto = this.crearModeloVacio();

  @Output() onSubmit = new EventEmitter<Producto>();

  guardar() {
  // Desestructuramos para eliminar el _id antes de enviar
  const { _id, ...productoAEnviar } = this.modelo;
  this.onSubmit.emit(productoAEnviar);
}


  private crearModeloVacio(): Producto {
    return {
      _id: '',
      nombre: '',
      descripcion: '',
      precio: 0,
      stock: 0,
      categoria: ''
    };
  }
}
