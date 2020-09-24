import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContenidoComponent } from './edit-contenido.component';

describe('EditContenidoComponent', () => {
  let component: EditContenidoComponent;
  let fixture: ComponentFixture<EditContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
