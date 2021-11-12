import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenualeatoriocollatzComponent } from './menualeatoriocollatz.component';

describe('MenualeatoriocollatzComponent', () => {
  let component: MenualeatoriocollatzComponent;
  let fixture: ComponentFixture<MenualeatoriocollatzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenualeatoriocollatzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenualeatoriocollatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
