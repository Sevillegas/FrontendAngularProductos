import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  private terminoSubject = new BehaviorSubject<string>('');
  termino$ = this.terminoSubject.asObservable();

  setTermino(termino: string) {
    this.terminoSubject.next(termino);
  }
}
