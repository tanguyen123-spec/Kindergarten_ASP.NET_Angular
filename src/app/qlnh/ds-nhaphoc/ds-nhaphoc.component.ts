import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ds-nhaphoc',
  templateUrl: './ds-nhaphoc.component.html',
  styleUrl: './ds-nhaphoc.component.css'
})
export class DsNhaphocComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsNH : any =[];
nh:any=[];
dangThemSua:boolean=false;
afaId:any;
tieuDe:any;
isClicked: boolean = false;
showTemplate:boolean = true

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (!token) {
      this.router.navigateByUrl('/');
    } else {
      // Fetch data or perform other operations
      this.showTemplate = true; // Add this variable to your component
    }
    this.tailaiDsNH();
   }
   tailaiDsNH(){
    this.service.getnh().subscribe(data => {
      this.DsNH = data;
      console.log(data)
    });
   }
   
  
   chitietNH(nh:any){
  this.nh=nh;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin nhập học"
  
   }
   dong(){
    this.dangThemSua=false
    this.tailaiDsNH();
    
   }
   themnh(){
    this.nh={
      afaId:0,
      lophocmongmuon:"",
      namhoc:"",
      batdauhoc:"",
      status:"",
      ngaytaodon:"",
      sdtLienhe:"",
      name:"",
    }
    this.dangThemSua=true
  this.tieuDe="Thêm phiếu nhập học"
  
   }
   xoaphieunhaphoc(nh: any) {
    this.service.deletenh(nh.afaId).subscribe(
      data => {
        alert("Xóa phiếu thành công");
        this.tailaiDsNH();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa phiếu");
        this.tailaiDsNH();
      }
    );
  }
 
  
}

