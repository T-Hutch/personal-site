import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditechComponent } from './meditech.component';

describe('MeditechComponent', () => {
  let component: MeditechComponent;
  let fixture: ComponentFixture<MeditechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeditechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeditechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
