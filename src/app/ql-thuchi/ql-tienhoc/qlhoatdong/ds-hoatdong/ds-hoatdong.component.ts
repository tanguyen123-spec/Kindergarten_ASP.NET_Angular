import { Component } from '@angular/core';
import { SharedService } from '../../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-hoatdong',
  templateUrl: './ds-hoatdong.component.html',
  styleUrl: './ds-hoatdong.component.css'
})
export class DsHoatdongComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsHD : any =[];
DsHDC:any =[];
hd:any=[];
dangThemSua:boolean=false;
mahoatdong:any;
tieuDe:any;
isClicked: boolean = false;
maHoatdongchinh:any;
ChildResumeId:any;
thang_namhoc:any;
machiphiphu:any;
child_resume_id:any;
showTemplate:boolean = true;
pageSize: number = 5; // Số lượng dữ liệu trên mỗi trang
currentPage: number = 1; // Trang hiện tại
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDshd();
    this.tailaiDshdc();
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
   tailaiDshd(){
    this.service.getHD().subscribe(data => {
      this.DsHD = data;
      console.log(data)
    });
   }
   
  
   chitiethd(hd:any){
  this.hd=hd;
  this.dangThemSua=true
  this.tieuDe="Sửa thông tin hoạt động"
  
   }
   dong(){
    this.dangThemSua=false
    this.tailaiDshd();
    
   }
   themhd(){
    this.hd={
      mahoatdong:0,
      tenhoatdong:"",
      chiphi:"",
     
    }
    this.dangThemSua=true
  this.tieuDe="Thêm hoạt động"
  
   }
   xoahd(hd: any) {
    this.service.deleteHD(hd.mahoatdong).subscribe(
      data => {
        alert("Xóa hoạt động thành công");
        this.tailaiDshd();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi hoạt động");
        
      }
    );
  }
  tailaiDshdc(){
    this.service.getHDC().subscribe(data => {
      this.DsHDC = data;
      console.log(data)
    });
   }
  addHDC() {
    var HDC = {
      maHoatdongchinh: this.maHoatdongchinh,
      mahoatdong: this.mahoatdong,
    };
  console.log(HDC)
    this.service.addHDC(HDC).subscribe(
      res => {
        window.alert('Thêm hoạt động thành công');
        console.log(res);
        this.tailaiDshdc();
      },
      error => {
        window.alert('Thêm hoạt động thất bại');
        console.log(error.error);
      }
    );
    
  }
  generateRandomMaHoatdongchinh() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 7; // Độ dài của mã ngẫu nhiên (không tính "HDC")
    let result = 'HDC';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    this.maHoatdongchinh = result;
  }
  xoahdc(hdc: any) {
    this.service.deleteHDC(hdc.maHoatdongchinh).subscribe(
      data => {
        alert("Xóa hoạt động chính thành công");
        this.tailaiDshdc();
      },
      error => {
        console.error(error);
        alert("Đã xảy ra lỗi khi xóa hoạt động chính");
        
      }
    );
  }
  addchiphichinh() {
    this.service.addChiphichinh(this.ChildResumeId,this.thang_namhoc).subscribe(
      res => {
        window.alert('Thêm  thành công');
        console.log(res);
        
      },
      error => {
        window.alert('Thêm  thất bại');
        console.log(error.error);
      }
    );
  }
  addchiphichinhall() {
  

    this.service.addChiphichinhByThangNamhoc(this.thang_namhoc).subscribe(
      res => {
        window.alert('Thêm  thành công');
        console.log(res);
        
      },
      error => {
        window.alert('Thêm  thất bại');
        console.log(error.error);
      }
    );
    
  }
  generateRandomMaHoatdongPhu() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 7; // Độ dài của mã ngẫu nhiên (không tính "HDP")
    let result = 'HDP';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    this.machiphiphu = result;
  }
  
  addchiphiphu() {
    var cpp = {
      machiphiphu: this.machiphiphu,
      mahoatdong: this.mahoatdong,
      child_resume_id: this.child_resume_id,
      thang_namhoc:this.thang_namhoc
    };
    console.log(cpp);
    this.service.addCPP(cpp).subscribe(
      res => {
        window.alert('Thêm chi phí phụ thành công');
        console.log(res);
      },
      error => {
        window.alert('Thêm chi phí phụ thất bại');
        console.log(error);
      }
    );
  }
      // Tính toán tổng số trang dựa trên số lượng dữ liệu và kích thước trang
      get totalPages(): number {
        return Math.ceil(this.DsHD.length / this.pageSize);
      }
    
      // Trang hiện tại của dữ liệu được hiển thị
      get displayedTkb(): any[] {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.DsHD.slice(startIndex, endIndex);
      }
      // Danh sách các trang để hiển thị trong phân trang
      get pages(): number[] {
        return Array(Math.ceil(this.DsHD.length / this.pageSize)).fill(0).map((_, index) => index + 1);
      }
    
      // Chuyển đến trang cụ thể
      goToPage(page: number): void {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      }
}
