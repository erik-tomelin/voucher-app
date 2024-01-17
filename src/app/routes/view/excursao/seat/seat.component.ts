import { Component } from '@angular/core';
import { SeatService } from './seat.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent {
  public currentYear = new Date();
  public response: any;

  constructor(
    private mainService: SeatService
  ) {
    const email = "Luan";
    this.mainService.getOi(email).subscribe(response => {
      console.log(response)
      this.response = response;
    })
  }
}
