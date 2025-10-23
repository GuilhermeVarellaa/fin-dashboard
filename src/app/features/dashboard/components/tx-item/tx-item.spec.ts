import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxItem } from './tx-item';

describe('TxItem', () => {
  let component: TxItem;
  let fixture: ComponentFixture<TxItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TxItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
