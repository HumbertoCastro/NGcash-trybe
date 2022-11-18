import {
  API_BASE,
  basicPostRequisition,
} from '.';

const salesProductsService = {
  createSalesProducts: async (data) => {
    const salesProducts = await basicPostRequisition(
      API_BASE,
      'salesProducts',
      data,
    );
    return salesProducts;
  },
};

export default salesProductsService;
