import { Component } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-phuhuynh',
  templateUrl: './ds-phuhuynh.component.html',
  styleUrl: './ds-phuhuynh.component.css'
})
export class DsPhuhuynhComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsPH : any =[];
ph:any=[];
dangThemSua:boolean=false;
parentResumeId:any;
tieuDe:any;
showTemplate:boolean = true


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDsPH();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (!token) {
      this.router.navigateByUrl('/');
    } else {
      // Fetch data or perform other operations
      this.showTemplate = true; // Add this variable to your component
    }
   }
   tailaiDsPH(){
    this.service.getPH().subscribe(data => {
      this.DsPH = data;
      console.log(data)
    });
   }
   
  
   chitietph(ph:any){
  this.ph=ph;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin phụ huynh"
  
   }
   
   dong(){
    this.dangThemSua=false
    this.tailaiDsPH();
    
   }
   themph(){
    this.ph={
      parentResumeId:0,
      nameP:"",
      dateOfBirth:"",
      phone1:"",
      phone2:"",
      nameP2:"",
      diachi:"",
      gender:"",
      jobParent:"",
      numberOfChildren:"",
      imageUrl:"",
    }
    this.dangThemSua=true
  this.tieuDe="Thêm phụ huynh"
  
   }
   xoaphuhuynh(ph: any) {
    this.service.deletePH(ph.parentResumeId).subscribe(
      data => {
        alert("Xóa phụ huynh thành công");
        this.tailaiDsPH();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa phụ huynh");
        this.tailaiDsPH();
      }
    );
  }


 
}
