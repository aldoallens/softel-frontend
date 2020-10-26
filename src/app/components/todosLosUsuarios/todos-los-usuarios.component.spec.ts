import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLosUsuariosComponent } from './todos-los-usuarios.component';

describe('TodosLosUsuariosComponent', () => {
  let component: TodosLosUsuariosComponent;
  let fixture: ComponentFixture<TodosLosUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosLosUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosLosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
