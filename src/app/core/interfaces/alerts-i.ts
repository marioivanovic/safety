import { StateOrder } from '../enums/state-alerts';

export interface OrderI {
  Noms: string;
  Descriptions: string;
  state: StateOrder;
  id: number;
}
