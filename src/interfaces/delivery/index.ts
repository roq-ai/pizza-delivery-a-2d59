import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DeliveryInterface {
  id?: string;
  delivery_status: string;
  delivery_address: string;
  order_id: string;
  driver_id: string;
  created_at?: any;
  updated_at?: any;

  order?: OrderInterface;
  user?: UserInterface;
  _count?: {};
}

export interface DeliveryGetQueryInterface extends GetQueryInterface {
  id?: string;
  delivery_status?: string;
  delivery_address?: string;
  order_id?: string;
  driver_id?: string;
}
