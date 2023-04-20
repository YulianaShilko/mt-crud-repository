import {CrudRepository} from './crud-repository';
import {Observable} from 'rxjs';

export interface CrudPagingRepository<PageItem, T, ID, CreateRequest, UpdateRequest>
    extends CrudRepository<T, ID, CreateRequest, UpdateRequest> {

    page(criteria: PageableCriteria): Observable<Page<PageItem>>;

}

export interface Page<T> {
    records: T[];
    totalRecords: number;
}

export function emptyPage<T>(): Page<T> {
    return {records: [], totalRecords: 0};
}

export interface PageableCriteria {
    pageNumber: number;
    pageSize: number;
}
