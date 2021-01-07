import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertionPage } from './insertion.page';

describe('InsertionPage', () => {
  let component: InsertionPage;
  let fixture: ComponentFixture<InsertionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
