import * as yup from 'yup';

export const deliveryValidationSchema = yup.object().shape({
  delivery_status: yup.string().required(),
  delivery_address: yup.string().required(),
  order_id: yup.string().nullable().required(),
  driver_id: yup.string().nullable().required(),
});
