import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-ykien',
  templateUrl: './ds-ykien.component.html',
  styleUrl: './ds-ykien.component.css'
})
export class DsYkienComponent  implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsYK : any =[];
yk:any=[];
dangThemSua:boolean=false;
opinionId:any;
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
    this.tailaiDsYK();
   }
   tailaiDsYK(){
    this.service.getYK().subscribe(data => {
      this.DsYK = data;
      console.log(data)
    });
   }
   
  
   chitietYK(yk:any){
  this.yk=yk;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin ý kiến"
   }
   dong(){
    this.dangThemSua=false
    this.tailaiDsYK();
    
   }
   themyk(){
    this.yk={
      opinionId:0,
      machude:"",
      parentResumeId:"",
      noteOpinion:"",
      giaiphap:"",
     
    }
    this.dangThemSua=true
  this.tieuDe="Thêm ý kiến"
  
   }
   xoaykien(yk: any) {
    this.service.deleteYK(yk.opinionId).subscribe(
      data => {
        alert("Xóa ý kiến thành công");
        this.tailaiDsYK();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa ý kiến ");
        this.tailaiDsYK();
      }
    );
  }
  
}
