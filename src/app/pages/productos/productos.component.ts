import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // <-- IMPORTANTE
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { ProductCardCrudComponent } from '../../components/product-card-crud/product-card-crud.component';
import { Producto } from '../../models/producto.model';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,  // <-- AGREGADO
    ProductFormComponent,
    ProductCardCrudComponent
  ],
  templateUrl: './productos.component.html',
})
export class ProductosComponent {

  productos: Producto[] = [];
  productoEnEdicion: Producto | null = null;

  constructor(private productService: ProductService) {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productService.getAllProducts().subscribe((data: Producto[]) => {
      this.productos = data;
    });
  }

  guardarProducto(producto: Producto) {
    this.productService.addProduct(producto).subscribe(() => {
      this.cargarProductos();
    });
  }

  abrirEdicionPorId(id: string) {
    const productoSeleccionado = this.productos.find(p => p._id === id);
    if (productoSeleccionado) {
      this.productoEnEdicion = { ...productoSeleccionado };
    }
  }

  cerrarEdicion() {
    this.productoEnEdicion = null;
  }

  actualizarProducto() {
    if (!this.productoEnEdicion) return;

    this.productService.updateProduct(this.productoEnEdicion).subscribe(() => {
      this.cargarProductos();
      this.cerrarEdicion();
    });
  }

  eliminarProducto(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.cargarProductos();
    });
  }
}
