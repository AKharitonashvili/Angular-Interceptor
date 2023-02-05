import { HttpRequest } from '@angular/common/http';
export { JsessionIdInterceptor } from './jsession.interceptor';
export { LoginDurationInterceptor } from './login-duration.interceptor';
export { LoginTimeInterceptor } from './login-time.interceptor';
export { TokenInterceptor } from './token.interceptor';
export { LanguageInterceptor } from './accept-language.interceptor';
export { CustomEnLanguageInterceptor } from './accept-language-en.interceptor';
export { CacheInterceptor } from './cache-interceptor/cache.interceptor';

export function getClone(req: HttpRequest<any>, name: string, value: string) {
  return req.clone({
    headers: req.headers.set(name, value),
  });
}
