import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionbydateofmodificationComponent } from './actionbydateofmodification.component';

describe('ActionbydateofmodificationComponent', () => {
  let component: ActionbydateofmodificationComponent;
  let fixture: ComponentFixture<ActionbydateofmodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionbydateofmodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionbydateofmodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
