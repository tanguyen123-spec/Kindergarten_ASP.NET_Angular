import { Component } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dsthucdon',
  templateUrl: './dsthucdon.component.html',
  styleUrl: './dsthucdon.component.css'
})
export class DsthucdonComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsTD : any =[];
td:any=[];
dangThemSua:boolean=false;
menuId:any;
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
    this.tailaiDsTD();
   }
   tailaiDsTD(){
    this.service.gettd().subscribe(data => {
      this.DsTD = data;
      console.log(data)
    });
   }
   
  
   chitiettd(td:any){
  this.td=td;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin thực đơn"
   }
   dong(){
    this.dangThemSua=false
    this.tailaiDsTD();
    
   }
   themtd(){
    this.td={
      menuId:0,
      ngaybatdau:"",
      ngayketthuc:"",
     
    }
    this.dangThemSua=true
  this.tieuDe="Thêm thực đơn"
  
   }
   xoathucdon(td: any) {
    this.service.deletetd(td.menuId).subscribe(
      data => {
        alert("Xóa thực đơn thành công");
        this.tailaiDsTD();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa ");
        this.tailaiDsTD();
      }
    );
  }
  
}
