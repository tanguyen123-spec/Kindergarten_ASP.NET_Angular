import { Component } from '@angular/core';
import { SharedService } from '../../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-loaigiaovien',
  templateUrl: './ds-loaigiaovien.component.html',
  styleUrl: './ds-loaigiaovien.component.css'
})
export class DsLoaigiaovienComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsLGV : any =[];
lgv:any=[];
dangThemSua:boolean=false;
maloaigiaovien:any;
tieuDe:any;
showTemplate:boolean = true


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDsLGV();
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
   tailaiDsLGV(){
    this.service.getLGV().subscribe(data => {
      this.DsLGV = data;
      console.log(data)
    });
   }
   
  
   chitietLGV(lgv:any){
  this.lgv=lgv;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin loại giáo viên"
  
   }
   dong(){
    this.dangThemSua=false
    this.tailaiDsLGV();
    
   }
   themlgv(){
    this.lgv={
      maloaigiaovien:0,
      tenloaigiaovien:""
     
    }
    this.dangThemSua=true
  this.tieuDe="Thêm loại giáo viên"
  
   }
   xoaloaigiaovien(lgv: any) {
    this.service.deleteLgv(lgv.maloaigiaovien).subscribe(
      data => {
        alert("Xóa loại giáo viên thành công");
        this.tailaiDsLGV();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa loại giáo viên ");
        this.tailaiDsLGV();
      }
    );
  }
  
}
