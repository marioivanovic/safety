import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../models/person';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl : string = environment.urlApi;

  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }

  register(user: Person):Observable<any> {
    return this.http.post<any>(this.baseUrl + "/register", user)
  }

  login(user: Person):Observable<any> {
    return this.http.post<any>(this.baseUrl + "/login", user)
    .pipe(
      map(
        (resp: any) => {
          console.log(resp);
          localStorage.setItem('TOKEN_APPLI', resp.token);
          localStorage.setItem('USER_ID', resp.userId);
          localStorage.setItem('USER_NAME', resp.userName);
          console.log('Token Save');
          console.log(resp.userId);
          console.log(resp.userName);
          return resp;
        }
      )
    )
  }

  getIdByToken(){
    const token = localStorage.getItem("TOKEN_APPLI")
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token!);
    console.log(decodedToken)
    const id = decodedToken.userId;
    return id;
  }


  logout() {
    localStorage.removeItem('TOKEN_APPLI');
    localStorage.removeItem('USER_ID');
    localStorage.removeItem('USER_NAME');
    this.router.navigate(["/"]);
  }
}
