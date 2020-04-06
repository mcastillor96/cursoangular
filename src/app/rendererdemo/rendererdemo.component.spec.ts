import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererdemoComponent } from './rendererdemo.component';

describe('RendererdemoComponent', () => {
  let component: RendererdemoComponent;
  let fixture: ComponentFixture<RendererdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendererdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendererdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
