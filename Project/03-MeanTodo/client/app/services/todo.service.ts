/**
 * Created by phuc.ngo on 20/01/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Todo} from "../model/todo";

@Injectable()
export class TodoService {
    constructor(private _http: Http) {

    }

    getTodos() {
        return this._http.get('/api/v1/todos').map(res => res.json());
    }

    saveTodo(todo: Todo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/v1/todos', JSON.stringify(todo), {headers: headers})
            .map(res => res.json());
    }
}