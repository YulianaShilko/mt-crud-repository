import {Observable} from 'rxjs';

/**
 * type parameters :
 * T - the type of the entity the repository manages
 * ID - the type of id of the entity the service manages
 * CreateRequest - the type of the object used for entity creation request
 * UpdateRequest - the type of the object used for entity update request
 */
// TODO: think about creation of findAll() method
export interface CrudRepository<T, ID, CreateRequest, UpdateRequest> {

    create(entity: CreateRequest): Observable<{}>;

    findById(id: ID): Observable<T>;

    update(entity: UpdateRequest): Observable<{}>;

    delete(id: ID): Observable<{}>;

}
