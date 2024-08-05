import { Component } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-giaovien',
  templateUrl: './ds-giaovien.component.html',
  styleUrl: './ds-giaovien.component.css'
})
export class DsGiaovienComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsGV : any =[];
gv:any=[];
dangThemSua:boolean=false;
magiaovien:any;
tieuDe:any;
showTemplate:boolean = true


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDsGV();
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
   tailaiDsGV(){
    this.service.getGV().subscribe(data => {
      this.DsGV = data;
      console.log(data)
    });
   }
   
  
   chitietGV(gv:any){
  this.gv=gv;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin giáo viên"
  
   }
   dong(){
    this.dangThemSua=false
    this.tailaiDsGV();
    
   }
   themgv(){
    this.gv={
      magiaovien:0,
      maloaigiaovien:"",
      tengiaovien:"",
      ngaysinh:"",
      diachi:"",
      sodienthoai:"",
      imageUrl:"",
     
    }
    this.dangThemSua=true
  this.tieuDe="Thêm giáo viên"
  
   }
   xoagiaovien(gv: any) {
    this.service.deletegv(gv.magiaovien).subscribe(
      data => {
        alert("Xóa giáo viên thành công");
        this.tailaiDsGV();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa giáo viên ");
        this.tailaiDsGV();
      }
    );
  }
  
  

}
