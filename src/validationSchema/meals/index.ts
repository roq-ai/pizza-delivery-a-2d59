import * as yup from 'yup';

export const mealValidationSchema = yup.object().shape({
  meal_name: yup.string().required(),
  meal_description: yup.string().nullable(),
  price: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
