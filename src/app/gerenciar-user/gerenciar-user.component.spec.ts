import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarUserComponent } from './gerenciar-user.component';

describe('GerenciarUserComponent', () => {
  let component: GerenciarUserComponent;
  let fixture: ComponentFixture<GerenciarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
