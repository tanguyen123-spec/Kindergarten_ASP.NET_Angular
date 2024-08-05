import { Component } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-loailop',
  templateUrl: './ds-loailop.component.html',
  styleUrl: './ds-loailop.component.css'
})
export class DsLoailopComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsLL : any =[];
ll:any=[];
dangThemSua:boolean=false;
classtypeId:any;
tieuDe:any;
showTemplate:boolean = true

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDsLL();
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
   tailaiDsLL(){
    this.service.getClasT().subscribe(data => {
      this.DsLL = data;
      console.log(data)
    });
   }
   
  
   chitietll(ll:any){
  this.ll=ll;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin loại lớp"
  
   }
   
   dong(){
    this.dangThemSua=false
    this.tailaiDsLL();
    
   }
   themll(){
    this.ll={
      classtypeId:0,
      nameClasstype:"",
   
    }
    this.dangThemSua=true
  this.tieuDe="Thêm loại lớp học"
  
   }
   xoaloploai(ll: any) {
    this.service.deleteclasT(ll.classtypeId).subscribe(
      data => {
        alert("Xóa loại lớp học thành công");
        this.tailaiDsLL();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa loại lớp học");
        this.tailaiDsLL();
      }
    );
  }
  
  
}
