import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
// extends SupabaseService
export class SeatService {
    private apiUrl = 'http://hostmast.ddns.net:8080'; // Adjust the base API URL accordingly

    constructor(public http: HttpClient) { }

    getOi(email: string): Observable<any> {
        const url = `${this.apiUrl}/oi`;
        return this.http.post(url, { email: email });
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return throwError(error);
    }
}
