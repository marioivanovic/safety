import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListAlertComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddAlertComponent } from './pages/page-add-alert/page-add-alert.component';
import { PageEditAlertComponent } from './pages/page-edit-order/page-edit-order.component';
import { SharedModule } from '../shared/shared.module';
import { FormAlertComponent } from './components/form-order/form-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {
  orderReducer,
  ordersFeatureKey
} from './store/reducers/orders.reducers';
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from './store/effects/orders.effects';

@NgModule({
  declarations: [
    PageListAlertComponent,
    PageAddAlertComponent,
    PageEditAlertComponent,
    FormAlertComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(ordersFeatureKey, orderReducer),
    EffectsModule.forFeature([OrdersEffects])
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }]
})
export class OrdersModule {}
