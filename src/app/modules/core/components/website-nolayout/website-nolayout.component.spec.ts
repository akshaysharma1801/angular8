import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteNolayoutComponent } from './website-nolayout.component';

describe('WebsiteNolayoutComponent', () => {
  let component: WebsiteNolayoutComponent;
  let fixture: ComponentFixture<WebsiteNolayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteNolayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteNolayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
