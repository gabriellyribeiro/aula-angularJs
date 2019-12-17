import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoComponent } from './corpo.component';

describe('CorpoComponent', () => {
  let component: CorpoComponent;
  let fixture: ComponentFixture<CorpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
