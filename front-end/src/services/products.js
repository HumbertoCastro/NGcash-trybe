import { API_BASE, basicGetRequisition } from '.';

const productsService = {
  getAll: async () => [
    ...await basicGetRequisition(API_BASE, 'products'),
  ],
};

export default productsService;
