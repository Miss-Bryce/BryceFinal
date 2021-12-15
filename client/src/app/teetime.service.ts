import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";

let headers = new HttpHeaders()
headers.append('Content-Type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class TeetimeService {
  apiServer: string = environment.apiServer
  constructor(private http: HttpClient) { }

  // GET
  getTeetime() {
    return this.http.get(this.apiServer + '/api/teetimes')
  }

  // POST
  addTeetime(teetime: any) {
    return this.http.post(this.apiServer + '/api/teetimes', teetime, { headers: headers })
  }

}
