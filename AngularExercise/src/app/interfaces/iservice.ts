import { Observable } from "rxjs";

export interface IService {
  getWithLinkBase<T>(link: string): Observable<T>;

  getWithLinkBaseById<T>(link: string, id: number): Observable<T>;

  postWithLinkBase<T>(link: string, data: T): Observable<T>;

  putWithLinkBase<T>(link: string, id: number, data: T): Observable<T>;

  deleteWithLinkBase(link: string, id: number): Observable<void>;
}
