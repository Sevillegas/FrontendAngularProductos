import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { BusquedaService } from '../../services/busqueda.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { Producto } from '../../models/producto.model';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, ProductCardComponent, CarruselComponent, RouterModule]
})
export class HomeComponent implements OnInit {

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  @ViewChild('seccionProductos') seccionProductos!: ElementRef;

  constructor(
    private productService: ProductService,
    private busquedaService: BusquedaService
  ) {}

  ngOnInit(): void {
    this.cargarProductos();

    this.busquedaService.termino$.subscribe((termino: string) => {
      this.filtrarProductos(termino);
    });
  }

  cargarProductos(): void {
    this.productService.getProducts().subscribe((data: Producto[]) => {
      this.productos = data;
      this.productosFiltrados = data;
    });
  }

  filtrarProductos(termino: string): void {
    if (termino.trim() === '') {
      this.productosFiltrados = this.productos;
    } else {
      this.productosFiltrados = this.productos.filter(p =>
        p.nombre.toLowerCase().includes(termino.toLowerCase())
      );
    }

    setTimeout(() => {
      this.seccionProductos.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
}
