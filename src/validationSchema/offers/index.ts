import * as yup from 'yup';

export const offerValidationSchema = yup.object().shape({
  offer_name: yup.string().required(),
  offer_code: yup.string().required(),
  offer_description: yup.string().nullable(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
