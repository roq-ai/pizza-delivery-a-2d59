import axios from 'axios';
import queryString from 'query-string';
import { PizzaShopInterface, PizzaShopGetQueryInterface } from 'interfaces/pizza-shop';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPizzaShops = async (
  query?: PizzaShopGetQueryInterface,
): Promise<PaginatedInterface<PizzaShopInterface>> => {
  const response = await axios.get('/api/pizza-shops', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPizzaShop = async (pizzaShop: PizzaShopInterface) => {
  const response = await axios.post('/api/pizza-shops', pizzaShop);
  return response.data;
};

export const updatePizzaShopById = async (id: string, pizzaShop: PizzaShopInterface) => {
  const response = await axios.put(`/api/pizza-shops/${id}`, pizzaShop);
  return response.data;
};

export const getPizzaShopById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/pizza-shops/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePizzaShopById = async (id: string) => {
  const response = await axios.delete(`/api/pizza-shops/${id}`);
  return response.data;
};
