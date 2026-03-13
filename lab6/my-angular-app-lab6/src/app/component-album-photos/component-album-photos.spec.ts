import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAlbumPhotos } from './component-album-photos';

describe('ComponentAlbumPhotos', () => {
  let component: ComponentAlbumPhotos;
  let fixture: ComponentFixture<ComponentAlbumPhotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAlbumPhotos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAlbumPhotos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
