import {
  API_BASE,
  basicPostRequisition,
} from '.';

const loginService = {
  login: async (data) => basicPostRequisition(API_BASE, 'login', data),
};

export default loginService;
