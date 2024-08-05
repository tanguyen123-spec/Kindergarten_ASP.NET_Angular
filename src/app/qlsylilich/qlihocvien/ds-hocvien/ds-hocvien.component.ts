import { Component } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardComponent } from '../../../auth.guard/auth.guard.component';
@Component({
  selector: 'app-ds-hocvien',
  templateUrl: './ds-hocvien.component.html',
  styleUrl: './ds-hocvien.component.css'
})
export class DsHocvienComponent implements OnInit{
  constructor(private service: SharedService,private router: Router,) { }
DsHV : any =[];
hv:any=[];
dangThemSua:boolean=false;
childResumeId:any;
tieuDe:any;
phData: any = []; // Storethe Phuhuynh data from the API
ClasData: any = []; // Storethe Phuhuynh data from the API
showTemplate:boolean = true

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (!token) {
      this.router.navigateByUrl('/');
    } else {
      // Fetch data or perform other operations
      this.showTemplate = true; // Add this variable to your component
    }
    this.tailaiDsHV();
    this.refreshPhuhuynhList();
    this.refreshlopList();
   }
   tailaiDsHV(){
    this.service.gethv().subscribe(data => {
      this.DsHV = data;
      console.log(data)
    });
   }
   
  
   chitiethv(hv:any){
  this.hv=hv;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin học viên"
  
   }
   dong(){
    this.dangThemSua=false
    this.tailaiDsHV();
    
   }
   themhv(){
    this.hv={
      childResumeId:0,
      parentResumeId:"",
      afaId:"",
      classId:"",
      name:"",
      diachi:"",
      gender:"",
      medicalHistory:"",
      informationDif:"",
      currentHealthStatus:"",
      imageUrl :"",
      chiphibandau:""
    }
    this.dangThemSua=true
  this.tieuDe="Thêm học viên"
  
   }
   xoahocvien(hv: any) {
    this.service.deletehv(hv.childResumeId).subscribe(
      data => {
        alert("Xóa học viên thành công");
        this.tailaiDsHV();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa học viên");
        this.tailaiDsHV();
      }
    );
  }
  refreshPhuhuynhList() {
    this.service.getPH().subscribe((data: any) => {
      this.phData = data;
    });
  }
  refreshlopList() {
    this.service.getClas().subscribe((data: any) => {
      this.ClasData = data;
    });
  }
  getPhName(parentResumeId: string) {
    const ph = this.phData.find((ph: any) => ph.parentResumeId === parentResumeId);
    return ph ? ph.nameP : '';
  }
  getClasName(classId: string) {
    const l = this.ClasData.find((l: any) => l.classId === classId);
    return l ? l.nameClass : '';
  }
}
