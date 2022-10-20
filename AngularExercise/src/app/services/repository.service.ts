import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IService } from '../interfaces/iservice';

@Injectable()
export class RepositoryService implements IService {
  constructor(private http: HttpClient) {}

  getWithLinkBase<T>(link: string): Observable<T> {
    return this.http.get<T>(link);
  }
  getWithLinkBaseById<T>(link: string, id: number): Observable<T> {
    return this.http.get<T>(link + '/' + id);
  }
  postWithLinkBase<T>(link: string, data: T): Observable<T> {
    return this.http.post<T>(link, data);
  }
  putWithLinkBase<T>(link: string, id: number, data: T): Observable<T> {
    return this.http.put<T>(link + '/' + id, data);
  }
  deleteWithLinkBase(link: string, id: number): Observable<void> {
    return this.http.delete<void>(link + '/' + id);
  }
}
