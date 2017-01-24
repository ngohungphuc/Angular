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

	saveTodo(todo) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.post('/api/v1/todos', JSON.stringify(todo), { headers: headers })
			.map(res => res.json());
	}

	updateTodo(todo) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.put('/api/v1/todo/' + todo.id, JSON.stringify(todo), { headers: headers })
			.map(res => res.json());
	}

	deleteTodo(id) {
		return this._http.delete('/api/v1/todo/' + id).map(res => res.json());
	}
}
