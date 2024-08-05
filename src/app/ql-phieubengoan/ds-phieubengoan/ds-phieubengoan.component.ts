import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-phieubengoan',
  templateUrl: './ds-phieubengoan.component.html',
  styleUrl: './ds-phieubengoan.component.css'
})
export class DsPhieubengoanComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsPBN : any =[];
pbn:any=[];
dangThemSua:boolean=false;
phbnId:any;
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
    this.service.getPBN().subscribe(data => {
      this.DsPBN = data;
      console.log(data)
    });
   }
   
  
   chitietpbn(pbn:any){
  this.pbn=pbn;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin phiếu bé ngoan"
  
   }
   
   dong(){
    this.dangThemSua=false
    this.tailaiDsLL();
    
   }
   thempbn(){
    this.pbn={
      phbnId:0,
      childResumeId:"",
      magiaovien:"",
      hanhvi:"",
      thaido:"",
      thanhtich:"",
   
    }
    this.dangThemSua=true
  this.tieuDe="Thêm thông tin phiếu bé ngoan"
  
   }
   xoaloploai(ll: any) {
    this.service.deleteclasT(ll.classtypeId).subscribe(
      data => {
        alert("Xóa phiếu bé ngoan thành công");
        this.tailaiDsLL();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa phiếu bé ngoan");
        this.tailaiDsLL();
      }
    );
  }
  
  
}
