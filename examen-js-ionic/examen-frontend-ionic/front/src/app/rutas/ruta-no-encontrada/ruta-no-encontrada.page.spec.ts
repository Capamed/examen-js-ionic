import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNoEncontradaPage } from './ruta-no-encontrada.page';

describe('RutaNoEncontradaPage', () => {
  let component: RutaNoEncontradaPage;
  let fixture: ComponentFixture<RutaNoEncontradaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaNoEncontradaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNoEncontradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
