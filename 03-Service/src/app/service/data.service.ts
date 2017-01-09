import {LogService} from "./log.service";
import {Injectable, EventEmitter} from "@angular/core";

//declear inject meta to inject service into service
@Injectable()
export class DataService {
    private data: string[] = [];
    pushData = new EventEmitter<string>();

    constructor(private logService: LogService) {

    }

    addData(input: string) {
        this.data.push(input);
        this.logService.writeToLog('Save item ' + input);
    }

    getData() {
        return this.data;
    }

    //push data for other to receive
    broadcastData(value: string) {
        this.pushData.emit(value);
    }
}
