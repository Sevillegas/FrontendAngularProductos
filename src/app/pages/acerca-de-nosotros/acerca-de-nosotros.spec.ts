import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeNosotrosComponent} from './acerca-de-nosotros.component';

describe('AcercaDeNosotros', () => {
  let component: AcercaDeNosotrosComponent;
  let fixture: ComponentFixture<AcercaDeNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcercaDeNosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
