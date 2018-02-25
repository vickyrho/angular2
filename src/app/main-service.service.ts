import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'

@Injectable()
export class MainServiceService {

  constructor( private http : HttpClient) { }

  regUser(user): Observable<any> {
        return this.http.post('http://localhost:8888/api/register',user)
          .map(
          (response: Response) => {
            return response ;
          })
  }

  logUser(user): Observable<any> {
    return this.http.post('http://localhost:8888/api/authenticate',user)
      .map(
        (response: Response) => {
          return response ;
        })
  }


}
