import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMessageComponent } from './hello-message.component';

describe('HelloMessageComponent', () => {
  let component: HelloMessageComponent;
  let fixture: ComponentFixture<HelloMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
