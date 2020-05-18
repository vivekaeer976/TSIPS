import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TreatyItem } from '../treaty';

@Injectable({
  providedIn: 'root'
})
export class TreatyserviceService {

  constructor(private httpClient: HttpClient) { }

  getAllTreatyItems(): Observable<TreatyItem[]> {
   return this.httpClient.get<TreatyItem[]>("api/treatyitems");
  }
}
