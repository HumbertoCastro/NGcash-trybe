import {
  API_BASE,
  basicDeleteRequisition,
  basicGetRequisition,
  basicPostRequisition,
  basicUpdateRequisition,
  getRequisitionWithParams,
} from '.';

const filterByRole = (role, userData) => userData.filter((item) => item.role === role);

const usersService = {
  getSellers: async () => [
    ...await basicGetRequisition(API_BASE, 'users/sellers'),
  ],
  getAdmins: async () => [
    ...filterByRole('administrator', await basicGetRequisition(API_BASE, 'users')),
  ],
  getCustomers: async () => [
    ...filterByRole('customer', await basicGetRequisition(API_BASE, 'users')),
  ],
  getAll: async () => [...await basicGetRequisition(API_BASE, 'users')],
  getUserById: async (id) => getRequisitionWithParams(API_BASE, 'users', id),
  createUser: async (data) => basicPostRequisition(API_BASE, 'users', data),
  updateUser: async (id, data) => basicUpdateRequisition(API_BASE, 'users', id, data),
  deleteUser: async (id) => basicDeleteRequisition(API_BASE, 'users/me', id),
};

export default usersService;
