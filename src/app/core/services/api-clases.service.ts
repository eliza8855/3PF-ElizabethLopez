import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment} from 'src/environments/environment'
import { firstValueFrom, Subject } from "rxjs";

@Injectable ({
    providedIn: 'root'
})

export class ApiClasesService {

    private api: string = environment.api;

constructor(
    private http : HttpClient
) {


}

obtenerPromiseClases() {
    return  firstValueFrom(this.http.get(`${this.api}/clases`))
}


}