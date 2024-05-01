import { ComponentFixture, TestBed } from '@angular/core/testing';

import { getAssist } from './getAssist.component';

describe('getAssist', () => {
  let component: getAssist;
  let fixture: ComponentFixture<getAssist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [getAssist]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(getAssist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
