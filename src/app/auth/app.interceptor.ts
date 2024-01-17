import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpResponse,
	HttpErrorResponse,
	HttpStatusCode,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AppInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (request.url === './assets/i18n/pt_BR.json') {
			return next.handle(request.clone());
		}
		const clonedreq = request.clone({
			headers:
				environment.name === 'local' && !environment.integrationToken
					? request.headers.set('Accept', 'application/json').set('x-api-key', environment.integrationToken)
					: request.headers.set('Accept', 'application/json'),
			withCredentials: true,
		});
		return next.handle(clonedreq).pipe(
			tap(
				(event: HttpEvent<any>) => {
					if (event instanceof HttpResponse) {
					}
				},
				(error: HttpErrorResponse) => {
					if (error.status === HttpStatusCode.Forbidden) {
						console.log(error);
					}
				},
			),
		);
	}
}
