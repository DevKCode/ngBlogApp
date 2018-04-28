import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { JwtService } from "./jwt.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params }).pipe();
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${environment.api_url}${path}`, JSON.stringify(body))
      .pipe();
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, JSON.stringify(body))
      .pipe();
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`).pipe();
  }
}
