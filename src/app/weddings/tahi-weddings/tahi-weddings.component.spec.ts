import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TahiWeddingsComponent} from './tahi-weddings.component';

describe('TahiWeddingsComponent', () => {
  let component: TahiWeddingsComponent;
  let fixture: ComponentFixture<TahiWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TahiWeddingsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TahiWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
