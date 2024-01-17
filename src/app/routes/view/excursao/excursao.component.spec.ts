import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcursaoComponent } from './excursao.component';


describe('MainComponent', () => {
  let component: ExcursaoComponent;
  let fixture: ComponentFixture<ExcursaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcursaoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExcursaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
