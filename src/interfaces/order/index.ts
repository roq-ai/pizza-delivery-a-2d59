import { DeliveryInterface } from 'interfaces/delivery';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  order_status: string;
  pizza_type: string;
  quantity: number;
  customer_id: string;
  created_at?: any;
  updated_at?: any;
  delivery?: DeliveryInterface[];
  user?: UserInterface;
  _count?: {
    delivery?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_status?: string;
  pizza_type?: string;
  customer_id?: string;
}
