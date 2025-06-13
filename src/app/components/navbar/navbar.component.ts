import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // <-- IMPORTANTE

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [FormsModule, RouterModule]
})
export class NavbarComponent {
  terminoBusqueda: string = '';
  @Output() onBuscar: EventEmitter<string> = new EventEmitter();

  buscarProducto() {
    this.onBuscar.emit(this.terminoBusqueda);
  }
}

