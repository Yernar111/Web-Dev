import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAlbums } from './component-albums';

describe('ComponentAlbums', () => {
  let component: ComponentAlbums;
  let fixture: ComponentFixture<ComponentAlbums>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAlbums]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAlbums);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
