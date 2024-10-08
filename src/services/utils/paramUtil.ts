import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * 排序项
 */
interface OrderItem {
  column?: string;
  asc?: boolean;
}

/**
 * 转换options为order参数
 * @param options options
 * @returns order参数
 */
export const options2order = (options?: { [key: string]: any }) => {
  // 将options转为json对象
  const obj = JSON.parse(JSON.stringify(options));
  // 生成排序map
  const map = new Map();
  for (const k of Object.keys(obj)) {
    // 将英文的排序转换为bool
    map.set(k, obj[k] === 'ascend' ? true : false);
  }
  // 将map对象转为list，即order参数
  const list: OrderItem[] = new Array();
  for (const [key, value] of map) {
    const orderItem: OrderItem = {
      column: key,
      asc: value,
    };
    list.push(orderItem);
  }
  // 将list转为json字符串，即order参数
  return encodeURIComponent(JSON.stringify(list));
};

/**
 * 转换options为列表
 * @param options options
 * @returns 列表
 */
export const options2list = (options?: { [key: string]: any }) => {
  // 将options转为json对象
  const obj = JSON.parse(JSON.stringify(options));
  // 取出key对应的列表
  return obj.key;
};

/**
 * 将params转为filter参数
 *
 * @param params params
 * @param rangeParam 时间范围字段名
 * @returns
 */
export const params2filter = (params?: { [key: string]: any }, rangeParam?: string[]) => {
  if (params) {
    // 1. 转换参数中指定的时间范围字段为UTC时间
    // 将params转为json对象
    const obj = JSON.parse(JSON.stringify(params));
    // 将json对象中指定的时间范围字段转换为UTC时间
    if (rangeParam) {
      rangeParam.forEach((param) => {
        for (const k of Object.keys(obj)) {
          if (param === k) {
            // 转换为UTC时间
            obj[k][0] = dayjs.tz(obj[k][0], dayjs.tz.guess()).utc().format('YYYY-MM-DD HH:00:00');
            obj[k][1] = dayjs.tz(obj[k][1], dayjs.tz.guess()).utc().format('YYYY-MM-DD HH:00:00');
          }
        }
      });
    }
    // 2. 去除参数中多余的current与pageSize参数
    delete obj.current;
    delete obj.pageSize;
    // 3. 删除参数重中值为空的数据
    Object.keys(obj).forEach((key) => {
      if (!obj[key]) {
        // !obj[key]表示为false,值为空时就是判定为false.
        delete obj[key]; // 删除对象的key.
      }
    });
    return encodeURIComponent(JSON.stringify(obj));
  }
};

/**
 * 将后端返回的数据转为前端所需page格式
 * @param result 后端返回的结果
 * @returns 前端所需page格式
 */
export const result2page = (result?: API.PageResult) => {
  if (result) {
    return {
      data: result.data?.data,
      success: result.success,
      total: result.data?.total,
    };
  }
  return {
    data: [],
    success: false,
    total: 0,
  };
};
