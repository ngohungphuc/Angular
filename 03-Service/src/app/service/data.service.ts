import {LogService} from "./log.service";
import {Injectable} from "@angular/core";

//declear inject meta to inject service into service
@Injectable()
export class DataService {
    private data: string[] = [];

    constructor(private logService: LogService) {

    }

    addData(input: string) {
        this.data.push(input);
        this.logService.writeToLog('Save item ' + input);
    }

    getData() {
        return this.data;
    }
}
