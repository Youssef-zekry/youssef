import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomDialogComponent } from './zoom-dialog.component';

describe('ZoomDialogComponent', () => {
  let component: ZoomDialogComponent;
  let fixture: ComponentFixture<ZoomDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomDialogComponent]
    });
    fixture = TestBed.createComponent(ZoomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
