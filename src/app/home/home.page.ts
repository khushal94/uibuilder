import { Component } from '@angular/core';
import { FormServiceService } from '../form-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public formJsonData: any;
  public currentPageId: string = '1';
  public showMsg = '';

  constructor(public formService: FormServiceService) {

    this.formJsonData = formService.formJson.pages;

  }

  btnEvents(elementData: any) {

    if (elementData.text === 'Save') {
      this.showMsg = 'Thanks for submitting your details!';
      console.log(this.formJsonData, '<-----final submitted values, inside every input object accessible via .value');
    }

    if (elementData.navigate) {
      this.currentPageId = elementData.navigate
    }

  }


}
