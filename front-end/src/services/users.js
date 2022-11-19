import {
  API_BASE,
  getRequisitionWithParams,
} from '.';

const usersService = {
  getUserById: async (id) => getRequisitionWithParams(API_BASE, 'users', id),
};

export default usersService;
