import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qlylop',
  templateUrl: './qlylop.component.html',
  styleUrl: './qlylop.component.css'
})
export class QlylopComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsTKB : any =[];
tkb:any=[];
dangThemSua:boolean=false;
matkb:any;
tieuDe:any;
isClicked: boolean = false;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDsTKB();
   }
   tailaiDsTKB(){
    this.service.gettkb().subscribe(data => {
      this.DsTKB = data;
      console.log(data)
    });
   }
   
  
   chitiettkb(tkb:any){
  this.tkb=tkb;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin thời khóa biểu"
  
   }
   dong(){
    this.dangThemSua=false
    this.tailaiDsTKB();
    
   }
   themtkb(){
    this.tkb={
      matkb:0,
      classId:"",
      magiaovien:"",
      ngaybatdau:"",
      ngayketthuc:"",
    }
    this.dangThemSua=true
  this.tieuDe="Thêm thời khóa biểu"
  
   }
   xoathoikhoabieu(tkb: any) {
    this.service.deletetkb(tkb.matkb).subscribe(
      data => {
        alert("Xóa thời khóa biểu thành công");
        this.tailaiDsTKB();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa thời khóa biểu");
        this.tailaiDsTKB();
      }
    );
  }

}
