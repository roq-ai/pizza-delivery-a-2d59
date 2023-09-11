import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_status: yup.string().required(),
  pizza_type: yup.string().required(),
  quantity: yup.number().integer().required(),
  customer_id: yup.string().nullable().required(),
});
