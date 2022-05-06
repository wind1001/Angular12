import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Phong';
  public age = 0;
  public fruit=['Apple','Grape','Orange'];
  public fruit2=[
    {name:'Apple',price: 2000, saleoff:true},
    {name:'Grape',price: 3000, saleoff:false},
    {name:'Orange',price: 4000, saleoff:false}    ];

  public districts: string[] = [];  
  public VietNameData =
      [
        {city: 'Chọn tỉnh/thành phố', district:['Chọn quận/huyện']},
        {city: 'An Giang', 
        district:['Thành phố Long Xuyên',
      'Thành phố Châu Đốc',
      'Thị xã Tân Châu',
      'Huyện An Phú',
      'Huyện Châu Phú',
      'Huyện Châu Thành',
      'Huyện Chợ Mới',
      'Huyện Phú Tân',
      'Huyện Thoại Sơn',
      'Huyện Tịnh Biên',
      'Huyện Tri Tôn'],
    },
      {city: 'Bà Rịa - Vũng Tàu' ,
      district:['Thành phố Vũng Tàu',
      'Thị xã Bà Rịa',
      'Thị xã Phú Mỹ',
      'Huyện Châu Đức',
      'Huyện Côn Đảo',
      'Huyện Đất Đỏ',
      'Huyện Long Điền',
      'Huyện Tân Thành',
      'Huyện Xuyên Mộc'],
    },
      {city: 'Bạc Liêu',
      district:['Thành phố Bạc Liêu',
      'Huyện Đông Hải',
      'Huyện Giá Rai',
      'Huyện Hòa Bình',
      'Huyện Hồng Dân',
      'Huyện Phước Long',
      'Huyện Vĩnh Lợi'],
    },
];  
  // constructor() {}

  // // public ngOnInit(): void {
  // //   console.log('fruit = ', this.fruit);
    
  // // }
  // public ngOnInit(): void {
  //   console.log('VietNameData = ', this.VietNameData);
    
  // }
  public counter=0;
  public counterBinhPhuong=0;
  constructor(private common: CommonService) { }

  ngOnInit(): void {
    console.log('VietNameData = ', this.VietNameData);
    this.counter=this.common.counter;
    this.counterBinhPhuong=this.common.BinhPhuong(this.counter);
    this.common.counter++;
  }

  public changeCity(event: any){
    const city = event.target.value;
    if(!city){
      return;
    }
      this.districts = this.VietNameData.find(data=>data.city===city)?.district||[];
    // console.log('event',city);

    // const search = this.VietNameData.filter((data) => data.city === city);
    // console.log('search', search);
    // if (search && search.length>0) {
    //   this.districts = search[0].district;
    // }
  }
  // public resetName():void{
  //   console.log('resetName');
  //   this.name='';
  // }
}
