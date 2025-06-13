import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BusquedaService } from './services/busqueda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent]
})
export class AppComponent {
  title = 'frontend';

  constructor(private http: HttpClient, private busquedaService: BusquedaService) {}

  filtrarDesdeApp(termino: string) {
    this.busquedaService.setTermino(termino);
  }
}

