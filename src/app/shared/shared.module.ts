// tslint:disable-next-line: max-line-length
import { CommonModule, DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppInterceptor } from '../auth/app.interceptor';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [
		// DeleteComponent,
		// NotificationsComponent,
		// PeriodPipe,
		// CnpjPipe,
		// CpfPipe,
		// OrderByPipe,
		// PageUnderConstructionComponent
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		// PeriodPipe,
		// CnpjPipe,
		// CpfPipe,
		// OrderByPipe,
		// ProgressBarAllModule,
	],
	providers: [
		DatePipe,
		{
			provide: LOCALE_ID,
			useValue: 'pt',
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AppInterceptor,
			multi: true,
		},
	],
})
export class SharedModule {
	static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
		};
	}
}
