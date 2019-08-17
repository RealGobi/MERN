import { GET_ERRORS, CLEAR_ERRORS } from './type';

//return err

export const returnErrors = (msg, status, id = null) => {
    return {
      type: GET_ERRORS,
      payload: { msg, status, id }
    };
  };

//Clera ERR

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}