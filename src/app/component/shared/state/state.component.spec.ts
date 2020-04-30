import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateComponent } from './state.component';
import { StateDataService } from 'src/app/services/state-data-service/state-data.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('StateComponent', () => {
  let component: StateComponent;
  let fixture: ComponentFixture<StateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StateComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 }),
            paramMap: of({ get: () => 'we' }),
          },
        },
        { provide: StateDataService, useValue: { getStatistics: () => of({ www: {} }) } },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show no match found...', () => {
    console.log(fixture.debugElement.nativeElement.innerText);
    expect(fixture.debugElement.nativeElement.innerText.search('no match found') > 0).toBeTruthy();
  });
});
