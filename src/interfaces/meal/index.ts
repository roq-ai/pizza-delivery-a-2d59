import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MealInterface {
  id?: string;
  meal_name: string;
  meal_description?: string;
  price: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface MealGetQueryInterface extends GetQueryInterface {
  id?: string;
  meal_name?: string;
  meal_description?: string;
  user_id?: string;
}
