import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent  {
  header: string = 'CRM';
  title: string = "Gestion des relation Client";
  contacts = [{ "first_name": "Tatum", "last_name": "Vernon", "email": "tvernon0@lycos.com", "gender": "Female", "company": "Youopia" },
  { "first_name": "Anet", "last_name": "Bellis", "email": "abellis1@cnn.com", "gender": "Female", "company": "Oloo" },
  { "first_name": "Pippa", "last_name": "Goymer", "email": "pgoymer2@ihg.com", "gender": "Female", "company": "Browsecat" },
  { "first_name": "Addison", "last_name": "Lawther", "email": "alawther3@walmart.com", "gender": "Male", "company": "Yoveo" },
  { "first_name": "Anya", "last_name": "Franzman", "email": "afranzman4@bravesites.com", "gender": "Female", "company": "Twitterbeat" }];
  person = "Tatum";
  inputText: string = "Text...";

  ngOnInit() {}

  clickInInput(event: any ) {
    event.target.value = "";
  }

  onKeyUp(event: any ) {
    this.inputText = event.target.value;
  }

  countLetter(countMax: any) {
    let count = countMax.value.length;
    if(count >= 10){
      return true;
    }else{
      return false;
    }
  }

}
