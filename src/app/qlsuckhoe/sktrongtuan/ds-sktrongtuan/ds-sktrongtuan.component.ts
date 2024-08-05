import { Component } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-sktrongtuan',
  templateUrl: './ds-sktrongtuan.component.html',
  styleUrl: './ds-sktrongtuan.component.css'
})
export class DsSktrongtuanComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsSKTT : any =[];
sktt:any=[];
dangThemSua:boolean=false;
ttskId:any;
tieuDe:any;
linkImage:any;
imagesTinhtrangsuckhoeId:any;
selectedFile: File | null = null;
fileName: string | null = null;
showTemplate:boolean = true

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDsSKTT();
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
   tailaiDsSKTT(){
    this.service.getSKTT().subscribe(data => {
      this.DsSKTT = data;
      console.log(data)
    });
   }
   
  
   chitietsktt(sktt:any){
  this.sktt=sktt;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin sức khỏe trong tuần"
  
   }
   
   dong(){
    this.dangThemSua=false
    this.tailaiDsSKTT();
    
   }
   themsktt(){
    this.sktt={
      ttskId:0,
      childResumeId:"",
      magiaovien:"",
      ngaykiemtra:"",
      nhietdo:"",
      trangthaian:"",
      trangthaingu:"",
      thaidohochanh:""
    }
    this.dangThemSua=true
  this.tieuDe="Thêm sức khỏe theo tuần"
  
   }
   xoasktt(sktt: any) {
    this.service.deleteSKTT(sktt.ttskId).subscribe(
      data => {
        alert("Xóa thành công");
        this.tailaiDsSKTT();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa");
        this.tailaiDsSKTT();
      }
    );
  }

}
