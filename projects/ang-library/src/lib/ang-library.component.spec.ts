import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngLibraryComponent } from './ang-library.component';

describe('AngLibraryComponent', () => {
  let component: AngLibraryComponent;
  let fixture: ComponentFixture<AngLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
