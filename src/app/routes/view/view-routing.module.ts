// routes.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExcursaoComponent } from './excursao/excursao.component';
import { SeatComponent } from './excursao/seat/seat.component';


@NgModule({
	declarations: [
		ExcursaoComponent,
		SeatComponent,
	],
	imports: [
		HttpClientModule,
		RouterModule,
		MatButtonModule,
		SharedModule,
	],
	exports: [
		ExcursaoComponent,
	],
})
export class ViewRoutingModule { }
