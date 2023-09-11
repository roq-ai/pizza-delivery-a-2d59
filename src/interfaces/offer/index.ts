import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OfferInterface {
  id?: string;
  offer_name: string;
  offer_code: string;
  offer_description?: string;
  start_date: any;
  end_date: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface OfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  offer_name?: string;
  offer_code?: string;
  offer_description?: string;
  user_id?: string;
}
