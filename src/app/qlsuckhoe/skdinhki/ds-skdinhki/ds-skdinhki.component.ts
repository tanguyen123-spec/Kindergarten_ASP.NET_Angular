import { Component } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ds-skdinhki',
  templateUrl: './ds-skdinhki.component.html',
  styleUrl: './ds-skdinhki.component.css'
})
export class DsSkdinhkiComponent implements OnInit{
  constructor(private service: SharedService,private router: Router,private http:HttpClient) { }
DsSKDK : any =[];
skdk:any=[];
dangThemSua:boolean=false;
skdkId:any;
tieuDe:any;
contentType: any; // Thêm thuộc tính contentType với kiểu dữ liệu là string
file1: File | null = null;
skdk1: any;
fileName: any;
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
    this.tailaiDsSKDK();
   }
   tailaiDsSKDK(){
    this.service.getSKDK().subscribe(data => {
      this.DsSKDK = data;
      console.log(data)
    });
   }
   
  
   chitietSKDK(skdk:any){
  this.skdk=skdk;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin sức khỏe định kì"
  
   }
   dong(){
    this.dangThemSua=false
    this.tailaiDsSKDK();
    
   }
   themskdk(){
    this.skdk={
      skdkId:0,
      magiaovien:"",
      childResumeId:"",
      ngaykiemtra:"",
      chieucao:"",
      cannang:"",
      benhlykhac:"",
      ghichubacsy:"",
      ngayTao:"",
    }
    this.dangThemSua=true
  this.tieuDe="Thêm phiếu sức khỏe"
  
   }
   xoaskdk(skdk: any) {
    this.service.deleteSKDK(skdk.skdkId).subscribe(
      data => {
        alert("Xóa phiếu thành công");
        this.tailaiDsSKDK();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa phiếu");
        this.tailaiDsSKDK();
      }
    );
  }
  tailaiFiledownload(contentType: any, fileName: string) {
    return this.http.get('http://localhost:5160/api/Suckhoedinhki/download', { responseType: 'blob' })
      .subscribe((result: any) => {
        const blob = new Blob([result], { type: contentType });
        const url = window.URL.createObjectURL(blob);
  
        // Tạo một thẻ <a> tạm thời để tải xuống file
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        console.log("success");
      });
  }
  prepareDownload() {
    const contentType = 'text/csv';
    const currentDate = new Date().toISOString().slice(0, 10); // Lấy ngày hiện tại dưới dạng chuỗi "YYYY-MM-DD"
    const fileName = `Data_${currentDate}.csv`;
  
    this.tailaiFiledownload(contentType, fileName);
  }
  onFileSelected(event: any): void {
    const formdata = new FormData();
    formdata.append('file', event.target.files[0]);
    this.http.post('http://localhost:5160/api/Suckhoedinhki/upload', formdata, { responseType: 'text' }).subscribe(
      result => {
        console.log(result);
        if (result === 'File uploaded and processed.') {
          alert('Upload successful');
          this.tailaiDsSKDK();
        } else {
          alert('Upload failed');
        }
      },
      error => {
        console.error(error);
        alert('Upload failed');
        this.tailaiDsSKDK();
      }
    );
  }


  }

