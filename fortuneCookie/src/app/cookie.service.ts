import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

const SERVER = '/api/cookie'

//should be done in a separate ts
export interface CookieText {
    cookie: string
}

@Injectable()
export class CookieService {
    constructor(private http: HttpClient){}

    async getCookies(cookieCount):Promise<CookieText[]>{
        //query string
        const params = new HttpParams().set('count', `${cookieCount}`)

        //construct call
        //GET api/cookie?count=cookieCount
        const resp = await this.http.get<any>(SERVER, {params})
        .toPromise()

        if(cookieCount == 1)
            return [resp as CookieText]

        return resp as CookieText[]
    }

    

}
