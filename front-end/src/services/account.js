import { API_BASE, getRequisitionWithParams } from '.';

const accountService = {
  getByid: async (id) => getRequisitionWithParams(API_BASE, 'account', id),
};

export default accountService;
