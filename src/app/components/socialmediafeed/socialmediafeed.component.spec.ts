import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediafeedComponent } from './socialmediafeed.component';

describe('SocialmediafeedComponent', () => {
  let component: SocialmediafeedComponent;
  let fixture: ComponentFixture<SocialmediafeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialmediafeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediafeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
