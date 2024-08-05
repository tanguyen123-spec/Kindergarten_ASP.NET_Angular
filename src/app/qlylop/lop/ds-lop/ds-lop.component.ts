import { Component } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';
@Component({
  selector: 'app-ds-lop',
  templateUrl: './ds-lop.component.html',
  styleUrl: './ds-lop.component.css'
})
export class DsLopComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsL : any =[];
l:any=[];
dangThemSua:boolean=false;
classId:any;
tieuDe:any;
selectedClassDetails: any;
DsLH_hv:any=[];
isDetailModalVisible = false;
selectedClass: any;
thang_namhoc:any;
showTemplate:boolean = true

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDsL();
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
   tailaiDsL(){
    this.service.getClas().subscribe(data => {
      this.DsL = data;
      console.log(data)
    });
   }
   
  
   chitietl(l:any){
  this.l=l;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin lớp học"
  
   }
   
   dong(){
    this.dangThemSua=false
    this.tailaiDsL();
    
   }
   themhv(){
    this.l={
      classId:0,
      classtypeId:"",
      nameClass:"",
      siso:"",
      namhoc:"",
      
    }
    this.dangThemSua=true
  this.tieuDe="Thêm lớp học"
  
   }
   xoalophoc(l: any) {
    this.service.deleteclas(l.classId).subscribe(
      data => {
        alert("Xóa lớp học thành công");
        this.tailaiDsL();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa lớp học");
        this.tailaiDsL();
      }
    );
  }
  tailaiDsHv_lop(l:any){
    this.service.getfilterClas_hv(l.classId).subscribe(data => {
      this.DsLH_hv = data;
      console.log(data)
    });
   }
   chitietl_hv(l: any) {
    this.selectedClass = l;
  this.isDetailModalVisible = true;
  this.tailaiDsHv_lop(l);
  }
  diemDanh() {
    const currentTimestamp = new Date().getTime(); // Get the current timestamp
    let count = 1; // Counter to increase value after each attendance record
  
    // Loop through the list of students and automatically add attendance records
    this.DsLH_hv.forEach((l_hv: any) => {
      if (l_hv.diemDanh) {
        const hashValue = this.hashCode(currentTimestamp.toString()); // Convert timestamp to a short hash value
        const diemDanhId = `PDD${hashValue}${count}`; // Create a unique attendance record ID
        const diemDanhData = {
          diemdanhId: diemDanhId.substring(0, 10), // Limit the length of the attendance record ID to 10 characters
          childResumeId: l_hv.childResumeId,
          ngayhoc: new Date().toISOString(),
          namhoc: this.selectedClass.namhoc,
          thang_namhoc:this.thang_namhoc
        };
  
        console.log(diemDanhData); // Display attendance record information
  
        // Send a POST request to the API
        this.service.addPDD(diemDanhData).subscribe(
          response => {
            // Handle the API response if needed
            window.alert('Đã điểm danh thành công');
            console.log(response);
          },
          error => {
            // Handle errors if any
            window.alert('Đã điểm danh thất bại');
            console.error(error);
          }
        );
  
        count++; // Increase the counter after adding an attendance record
      }
    });
  }
  
  hashCode(str: string) {
    let hash = 0;
    if (str.length === 0) {
      return hash;
    }
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString().slice(0, 5); // Lấy 5 chữ số đầu tiên của giá trị hash
  }
  creatbyclass() {
    if (this.DsLH_hv.length >= 1) {
      const malop = this.DsLH_hv[0].classId;
  
      console.log(malop); // Display the classId value
  
      // Send a POST request to the API
      this.service.addSKbyClID(malop).subscribe(
        response => {
          // Handle the API response if needed
          window.alert('Đã thành công');
          console.log(response);
        },
        error => {
          // Handle errors if any
          window.alert('Đã thất bại');
          console.error(error);
        }
      );
    } else {
      window.alert('Không thể thực hiện vì có nhiều mã lớp');
    }
  }
}
