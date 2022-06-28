import { StateOrder } from '../enums/state-alerts';
import { OrderI } from '../interfaces/alerts-i';

export class Order implements OrderI {
  Noms = 'Julien';
  Descriptions = 'Tornade arrivant au sud-ouest';
  state = StateOrder.ALERT;
  id!: number;
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}

// new Order();
// new Order({tjmHt: 700, nbJours: 3 })
