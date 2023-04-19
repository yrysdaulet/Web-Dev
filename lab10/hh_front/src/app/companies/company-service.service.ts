import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) {

  }
  getCompanies():Observable<Company[]>{
    return this.client.get<Company[]>(
      `${this.BASE_URL}/api/companies`
    )
  }

  createCompany(
    name : string ,
    description : string ,
    city : string ,
    address : string
  ): Observable<Company> {
    return this.client.post<Company>(
      `${this.BASE_URL}/api/companies`,
      {
        name: name,
        description : description,
        city : city,
        address : address
      }
    )
  }
  deleteCompany(id: number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/companies/${id}`
    )
  }
}
