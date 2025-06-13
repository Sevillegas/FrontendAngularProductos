import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardCrud } from './product-card-crud.component';

describe('ProductCardCrud', () => {
  let component: ProductCardCrud;
  let fixture: ComponentFixture<ProductCardCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardCrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
