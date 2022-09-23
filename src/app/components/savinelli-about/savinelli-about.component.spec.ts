import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavinelliAboutComponent } from './savinelli-about.component';

describe('SavinelliAboutComponent', () => {
  let component: SavinelliAboutComponent;
  let fixture: ComponentFixture<SavinelliAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavinelliAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavinelliAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
