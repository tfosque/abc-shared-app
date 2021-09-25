import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPlusApiComponent } from './pro-plus-api.component';

describe('ProPlusApiComponent', () => {
  let component: ProPlusApiComponent;
  let fixture: ComponentFixture<ProPlusApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProPlusApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProPlusApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
