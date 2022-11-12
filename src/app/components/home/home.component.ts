import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allPackagesList=[];
  images = [  
    { img: "../../../assets/images/home1.jpg" },  
    { img: "../../../assets/images/home2.jpg" },  
    { img: "../../../assets/images/home3.jpg" },  
    { img: "../../../assets/images/home4.jpg" },  
    { img: "../../../assets/images/home5.jpg" },  
     
  ];  
  
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": false,  
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 2000
  };  

  constructor(private packageService:PackagesService) { }

  ngOnInit(): void {
    this.getPackages()
  }

  getPackages(){
    this.packageService.getAllPackages().onSnapshot({ includeMetadataChanges: true }, (result: any) => {
    result.forEach((doc)=>{
      console.log(doc.data())
      this.allPackagesList.push(doc.data());
    },err=>{
      console.log(err)
    })
      console.log(result)
    })
  }

}