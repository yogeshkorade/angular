import { async, ComponentFixture, CustomBed } from '@angular/core/testing';

import { CustomComponent } from './custom.component';

describe('CustomComponent', () => {
  let component: CustomComponent;
  let fixture: ComponentFixture<CustomComponent>;

  beforeEach(async(() => {
    CustomBed.configureTestingModule({
      declarations: [ CustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = CustomBed.createComponent(CustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
