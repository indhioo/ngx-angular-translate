import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngx-translate';
  user: any = {
    name: 'Marcos Ribeiro',
    xxx: 'sss'
  };

  usuario = []
  
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('pt-br');
  }

  ngOnInit() {
    
    console.log(this.user);
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }

}
