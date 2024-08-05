import { Component } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ds-monantheongay',
  templateUrl: './ds-monantheongay.component.html',
  styleUrl: './ds-monantheongay.component.css'
})
export class DsMonantheongayComponent  implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsMA: any =[];
td:any = [];
MA:any=[];
malichngay:any;
tieuDe:any;
pageSize: number = 3; // Số lượng dữ liệu trên mỗi trang
  currentPage: number = 1; // Trang hiện tại
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
    this.tailaiDsMA();
    this.hienthitimemenu();
   }
   tailaiDsMA(){
    this.service.getMenuIdDanhs().subscribe(data => {
      this.DsMA = data;
      console.log(data)
    });
   }
   hienthitimemenu(){
    this.service.getMenuIdDanhsTd().subscribe(data => {
      this.td = data;
      console.log(data)
    });
  
   }
    // Tính toán tổng số trang dựa trên số lượng dữ liệu và kích thước trang
    get totalPages(): number {
      return Math.ceil(this.DsMA.length / this.pageSize);
    }
  
    // Trang hiện tại của dữ liệu được hiển thị
    get displayedTkb(): any[] {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.DsMA.slice(startIndex, endIndex);
    }
    // Danh sách các trang để hiển thị trong phân trang
    get pages(): number[] {
      return Array(Math.ceil(this.DsMA.length / this.pageSize)).fill(0).map((_, index) => index + 1);
    }
  
    // Chuyển đến trang cụ thể
    goToPage(page: number): void {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
   
  
}
