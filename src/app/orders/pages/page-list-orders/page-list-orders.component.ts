import { HttpClient } from '@angular/common/http';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  BehaviorSubject,
  Observable,
  pluck,
  Subject,
  Subscription,
  tap
} from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-alerts';
import { Order } from 'src/app/core/models/alerts';
import { VersionService } from 'src/app/core/services/version.service';
import { OrdersService } from '../../services/orders.service';
import {
  deleteOrderByIdAction,
  editOrderAction,
  getAllOrdersAction
} from '../../store/actions/orders.actions';
import { selectAllOrders } from '../../store/selectors/orders.selectors';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titleParent = 'Alertes';
  // public collection!: Order[];
  public collection$: Observable<Order[]>;
  public headers: string[];

  public titleTest = 'Le titre de mon composant';

  public userList!: any;
  public userListHeaders!: string[];
  public demoDate = new Date();

  public stateOrder = StateOrder;
  public collection!: Order[];

  private count = 0;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private store: Store
  ) {
    this.headers = [
      $localize`Editer`,
      $localize`Supprimer`,
      $localize`Noms`,
      $localize`Descriptions`,
      $localize`State`
    ];
    this.collection$ = this.store.select(selectAllOrders);
    this.store.dispatch(getAllOrdersAction());
  }

  ngOnInit(): void {}

  public onChangeState(order: Order, event: any): void {
    const orderToUpdate = new Order({ ...order, state: event.target.value });
    this.store.dispatch(editOrderAction({ orderToUpdate }));
  }

  public onClickGoToEdit(order: Order): void {
    // redirection vers une url du type /orders/edit/order.id
    // this.router.navigate(['orders', 'edit', order.id]);
    this.router.navigateByUrl(`/orders/edit/${order.id}`);
  }

  public onClickDelete(order: Order): void {
    this.store.dispatch(deleteOrderByIdAction({ id: order.id }));
  }

  ngOnDestroy(): void {
    console.log('Instance detruite + desinscription');
  }
}
