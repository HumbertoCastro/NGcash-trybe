import {
  API_BASE,
  basicPostRequisition,
  getRequisitionWithParams,
} from '.';

const usersService = {
  getUserById: async (id) => getRequisitionWithParams(API_BASE, 'users', id),
  createUser: async (data) => basicPostRequisition(API_BASE, 'register', data),
};

export default usersService;
