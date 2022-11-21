import {
  API_BASE,
  getRequisitionWithParams,
  postRequisitionWithHeaders,
} from '.';

const transactionsService = {
  getAllSales: async (id) => [
    ...await getRequisitionWithParams(API_BASE, 'transaction', id),
  ],
  createTransaction: async (data, headers) => {
    const transaction = await postRequisitionWithHeaders(
      API_BASE,
      'transaction',
      data,
      headers,
    );
    return transaction;
  },
};

export default transactionsService;
