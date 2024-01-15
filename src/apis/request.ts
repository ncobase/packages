import { $Fetch, $fetch, FetchOptions } from 'ofetch';

import { ACCESS_TOKEN_KEY } from '@/features/account/context';
import { TENANT_KEY } from '@/features/system/tenant/context';
import { BearerKey, XMdTenantKey } from '@/helpers/constants';
import { eventEmitter } from '@/helpers/events';
import { locals } from '@/helpers/locals';
import { isBrowser } from '@/helpers/ssr';

export class Request {
  private readonly $fetch: $Fetch;
  private readonly defaultHeaders: Record<string, string | undefined>;

  static baseConfig: FetchOptions = {
    baseURL: import.meta.env.VITE_API_URL || '/api',
    timeout: 30000
  };

  constructor(fetcher: $Fetch, defaultHeaders: Record<string, string | undefined> = {}) {
    this.$fetch = fetcher;
    this.defaultHeaders = {
      Accept: 'application/json;charset=utf-8',
      'Content-Type': 'application/json;charset=utf-8',
      ...defaultHeaders
    };
  }

  private getHeaders() {
    const token = isBrowser && locals.get(ACCESS_TOKEN_KEY);
    const tenant = isBrowser && locals.get(TENANT_KEY);

    return {
      ...this.defaultHeaders,
      ...(token && tenant && { [XMdTenantKey]: tenant }),
      ...(token && { Authorization: `${BearerKey}${token}` })
    };
  }

  private async handleErrors(err: Error | Response, method: string, url: string): Promise<void> {
    if (err instanceof Error) {
      console.error(`请求错误 [${method} ${url}]: ${err.message}`);
    } else {
      const { status, statusText } = err;
      console.error(`响应错误 [${method} ${url}]: ${status} ${statusText}`);
      if (status === 401) {
        eventEmitter.emit('unauthorized');
      }
    }
    throw err;
  }

  protected async request(
    method: string,
    url: string,
    data?: ExplicitAny,
    fetchOptions?: FetchOptions
  ): Promise<any> {
    try {
      const headers = this.getHeaders();
      const body = data ? { body: JSON.stringify(data) } : {};
      const options: FetchOptions = {
        ...Request.baseConfig,
        method,
        headers,
        ...body,
        ...fetchOptions,
        onRequestError: ({ error }) => this.handleErrors(error, method, url),
        onResponseError: ({ response }) => this.handleErrors(response, method, url),
        onResponse: async ({ response }) => {
          if (!response.ok) {
            await this.handleErrors(response, method, url);
          }
        }
      };
      return this.$fetch(url, options);
    } catch (err) {
      await this.handleErrors(err as Error, method, url);
    }
  }

  public async get(url: string, fetchOptions?: FetchOptions): Promise<any> {
    return this.request('GET', url, undefined, fetchOptions);
  }

  public async post(url: string, data?: ExplicitAny, fetchOptions?: FetchOptions): Promise<any> {
    return this.request('POST', url, data, fetchOptions);
  }

  public async put(url: string, data?: ExplicitAny, fetchOptions?: FetchOptions): Promise<any> {
    return this.request('PUT', url, data, fetchOptions);
  }

  public async delete(url: string, fetchOptions?: FetchOptions): Promise<any> {
    return this.request('DELETE', url, undefined, fetchOptions);
  }
}

export const request = new Request($fetch);
