import { Component } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-thoikhoabieu',
  templateUrl: './ds-thoikhoabieu.component.html',
  styleUrl: './ds-thoikhoabieu.component.css'
})
  export class DsThoikhoabieuComponent implements OnInit{
    constructor(private service: SharedService,private router: Router) { }
  DsTkb : any =[];
  DsTkTN : any =[];
  tkb:any=[];
  dangThemSua:boolean=false;
  matkb:any;
  tieuDe:any;
  selectedTkb: any;
  isDetailModalVisible = false;
  pageSize: number = 2; // Số lượng dữ liệu trên mỗi trang
  currentPage: number = 1; // Trang hiện tại
  showTemplate:boolean = true


    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.tailaiDsTkb();
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
     tailaiDsTkb(): void {
      this.service.gettkb().subscribe(data => {
        this.DsTkb = data;
        console.log(data);
      
      });
    }
     hienThiChiTiettkb(tkb:any) {
      this.matkb = tkb.matkb; 
    
      if (this.matkb) {
        this.router.navigate(['/ds-thoikhoabieu', this.matkb, 'tiethoc']);
      } else {
        console.error('Ma tkb is undefined.');
      }
      console.log(this.matkb)
    }
    
     chitietTKb(tkb:any){
    this.tkb=tkb;
    this.dangThemSua=true
    this.tieuDe="Sửa thông tin tkb"
    
     }
     dong(){
      this.dangThemSua=false
      this.tailaiDsTkb();
      
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
    this.tieuDe="Thêm Thời khóa biểu"
    
     }
   
     tailaiDsTkbID(tkb:any){
      this.service.getTKBTNbyTKBID(tkb.matkb).subscribe(data => {
        this.DsTkTN = data;
        console.log(data)
      });
     }
     chitietDsTkbID(tkb: any) {
      this.selectedTkb = tkb;
    this.isDetailModalVisible = true;
    this.tailaiDsTkbID(tkb);
    }
      // Tính toán tổng số trang dựa trên số lượng dữ liệu và kích thước trang
  get totalPages(): number {
    return Math.ceil(this.DsTkb.length / this.pageSize);
  }

  // Trang hiện tại của dữ liệu được hiển thị
  get displayedTkb(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.DsTkb.slice(startIndex, endIndex);
  }
  // Danh sách các trang để hiển thị trong phân trang
  get pages(): number[] {
    return Array(Math.ceil(this.DsTkb.length / this.pageSize)).fill(0).map((_, index) => index + 1);
  }

  // Chuyển đến trang cụ thể
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  }
