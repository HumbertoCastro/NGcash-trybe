import axios from 'axios';

export const API_BASE = 'http://localhost:3001/';

export const basicGetRequisition = (baseUrl, endpoint) => axios
  .get(`${baseUrl}${endpoint}`)
  .then((res) => res.data);

export const getRequisitionWithHeaders = (baseUrl, route, headers) => axios
  .get(`${baseUrl}${route}`, { headers })
  .then((res) => res.data);

export const getRequisitionWithParams = (baseUrl, route, param) => axios
  .get(`${baseUrl}${route}/${param}`)
  .then((res) => res.data);

export const basicPostRequisition = (baseUrl, route, data) => axios
  .post(`${baseUrl}${route}`, data)
  .then((res) => res.data);

export const postRequisitionWithHeaders = (baseUrl, route, data, headers) => axios
  .post(`${baseUrl}${route}`, data, { headers })
  .then((res) => res.data);

export const basicDeleteRequisition = (baseUrl, route, param) => axios
  .delete(`${baseUrl}${route}/${param}`)
  .then((res) => res.data);

export const basicUpdateRequisition = (baseUrl, route, param, data) => axios
  .put(`${baseUrl}${route}/${param}`, data)
  .then((res) => res.data);
