import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPlusComponent } from './pro-plus.component';

describe('ProPlusComponent', () => {
  let component: ProPlusComponent;
  let fixture: ComponentFixture<ProPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
