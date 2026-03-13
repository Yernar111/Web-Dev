import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAlbumDetail } from './component-album-detail';

describe('ComponentAlbumDetail', () => {
  let component: ComponentAlbumDetail;
  let fixture: ComponentFixture<ComponentAlbumDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAlbumDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAlbumDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
