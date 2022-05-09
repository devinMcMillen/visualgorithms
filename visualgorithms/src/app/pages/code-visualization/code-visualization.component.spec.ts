import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVisualizationComponent } from './code-visualization.component';

describe('CodeVisualizationComponent', () => {
  let component: CodeVisualizationComponent;
  let fixture: ComponentFixture<CodeVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeVisualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
