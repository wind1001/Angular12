import { CommonService } from '../Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.scss']
})
export class TemplateDrivenFromComponent implements OnInit {
  public name = '';

  constructor(private common: CommonService) { }

  ngOnInit(): void {
  }

  public submitForm():void{
    //console.log('Submit Form: name = ' + this.name);
    this.common.submitData({name: this.name, age: 12});
  }
}
