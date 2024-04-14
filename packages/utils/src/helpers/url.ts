/**
 * 转换 URL 参数
 * @param {object} params
 * @returns {string}
 */

import { cleanArray } from './array';
import { isObject } from './raw_type';

export function buildQueryString(params: Record<string, any>): string {
  if (!isObject(params)) {
    return '';
  }
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    searchParams.append(key, String(value));
  }
  return searchParams.toString();
}

/**
 * 将 JSON 对象转换为 URL 查询参数字符串
 * @param json JSON 对象
 * @returns URL 查询参数字符串
 */
export function param(json: Record<string, any> | null | undefined): string {
  if (!json) {
    return '';
  }
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) {
        return '';
      }
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    })
  ).join('&');
}

/**
 * 将 URL 查询参数字符串转换为 JSON 对象
 * @param url URL 查询参数字符串
 * @returns JSON 对象
 */
export function param2Obj(url: string): Record<string, any> {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
      '"}'
  );
}

/**
 * 判断当前路径是否与目标路径匹配
 * @param currentPath 当前路径
 * @param to 目标路径
 * @param depth 匹配深度，默认为 1
 * @returns 如果匹配则返回 true，否则返回 false
 */
export const isPathMatching = (currentPath: string, to: string, depth: number = 1) => {
  if (!!to && currentPath === to) {
    return true;
  }
  const currentPathParts = currentPath.split('/').filter(p => p);
  const toPathParts = to.split('/').filter(p => p);
  for (let i = 0; i < depth; i++) {
    if (currentPathParts[i] !== toPathParts[i]) {
      return false;
    }
  }
  return true;
};
