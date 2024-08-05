import { Component } from '@angular/core';
import { SharedService } from '../../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-tiethoc',
  templateUrl: './ds-tiethoc.component.html',
  styleUrl: './ds-tiethoc.component.css'
})
export class DsTiethocComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsTHC : any =[];
thc:any=[];
dangThemSua:boolean=false;
tiethocid:any;
tieuDe:any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDsTHC();
   
   }
   tailaiDsTHC(){
    this.service.getTKBTN().subscribe(data => {
      this.DsTHC = data;
      console.log(data)
    });
   }
   
  
   chitietTHC(thc:any){
  this.thc=thc;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin tiết học"
  
   }
   
   dong(){
    this.dangThemSua=false
    this.tailaiDsTHC();
    
   }
   themthc(){
    this.thc={
      tiethocid:0,
      matkb:"",
      thoigianbatdauhoc:"",
      thoigianketthuchoc:"",
      ngayhoc:"",
      tieuthoc:"",

   
    }
    this.dangThemSua=true
  this.tieuDe="Thêm tiết học"
  
   }
   xoaTiethoc(thc: any) {
    this.service.deleteTKBTN(thc.tiethocid).subscribe(
      data => {
        alert("Xóa thành công");
        this.tailaiDsTHC();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa ");
        this.tailaiDsTHC();
      }
    );
  }
  
}
