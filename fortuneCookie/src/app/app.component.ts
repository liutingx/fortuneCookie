import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService, CookieText } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fortuneCookie';

  form: FormGroup
  cookies: CookieText[] = [
    { cookie: 'Press "Get Cookies" to get some fortune cookies'}
  ];

  constructor(private fb: FormBuilder, private cookieSvc: CookieService){}

  ngOnInit(){
    this.form = this.fb.group({
      cookieCount: this.fb.control(1)
    })
  }
  async showCookies(){
    const cookieCount = parseInt(this.form.get('cookieCount').value) //or this.form.value['cookieCount']
    console.log('get', cookieCount)
    this.cookies = await this.cookieSvc.getCookies(cookieCount)
    console.log('results', this.cookies)
  }
}
