import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BricksmashComponent } from './bricksmash.component';

describe('BricksmashComponent', () => {
  let component: BricksmashComponent;
  let fixture: ComponentFixture<BricksmashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BricksmashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BricksmashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
