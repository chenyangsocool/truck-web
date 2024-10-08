// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import { options2order, params2filter, result2page } from '../utils/paramUtil';

/** GET /api/truck/foodTruck/getPage */
export async function getTruckPage(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return result2page(
    await request<API.TruckPage>('/api/foodTruck/getPage', {
      method: 'GET',
      params: {
        current: params.current,
        pageSize: params.pageSize,
        filter: params2filter(params),
        order: options2order(options),
      },
    }),
  );
}
