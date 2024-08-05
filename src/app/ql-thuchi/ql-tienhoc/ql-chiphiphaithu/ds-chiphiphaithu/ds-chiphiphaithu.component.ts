import { Component } from '@angular/core';
import { SharedService } from '../../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ds-chiphiphaithu',
  templateUrl: './ds-chiphiphaithu.component.html',
  styleUrl: './ds-chiphiphaithu.component.css'
})
export class DsChiphiphaithuComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsHV : any =[];
DsCPC:any=[];
DsCPP:any=[];
DsBL:any=[];
DsHD:any=[];
hv:any=[];
hd:any=[];
totalDiemDanh: number = 0;
dangThemSua:boolean=false;
tieuDe:any;
DsLH_hv:any=[];
selectedNameCPP:any;
selectedNameCPC:any;
mabienlai:any;
childResumeId:any;
tongchiphiphaitra:number =0;
trangthai: boolean = true;
totalHocPhi: number = 0;
totalPhiDong: number = 0;

selectedHD:any;
isDetailModalVisible = false;
totalChiphi: number = 0;
totalChiPhiWithDiemDanh: number =0;
totalChiPhiPhu: number = 0;
totalChiPhiNgoai: number = 0;
isFirstMonth: boolean = true;
selectedOption: any;
showTemplate:boolean = true

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDsTC();
    this.tailaiDsBL();

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
   tailaiDsTC(){
    this.service.gethv().subscribe(data => {
      this.DsHV = data;
      console.log(data)
    });
   }
   tailaiDsCPC(hv: any) {
    this.service.getCPCID(hv.childResumeId).subscribe((data: any[]) => {
      this.DsCPC = data.filter((cpc: any) => {
        return !this.DsBL.some((bl: any) => bl.thang_namhoc === cpc.thang_namhoc && bl.childResumeId === cpc.childResumeId);
      });
      console.log(this.DsCPC);
    });
  }
   tailaiDsBL(){
    this.service.getBL().subscribe(data => {
      this.DsBL = data;
      console.log(data)
    });
   }
   tailaiDsCPP(hv: any) {
    this.service.getCPPID(hv.childResumeId).subscribe((data: any[]) => {
      this.DsCPP = data.filter((cpp: any) => {
        return !this.DsBL.some((bl: any) => bl.thang_namhoc === cpp.thang_namhoc && bl.childResumeId === cpp.child_resume_id);
      });
      console.log(this.DsCPP);
    });
  }
  
  chitietCPP_hv(hv: any) {
    this.selectedNameCPP = hv;
  this.isDetailModalVisible = true;
  this.tailaiDsCPP(hv);
  this.calculateTotalChiPhiTong();
 
  } 
  chitietCPC_hv(hv: any) {
    this.selectedNameCPC = hv;
  this.isDetailModalVisible = true;
  this.tailaiDsCPC(hv);
  this.tailaiDsHD(); // Tải dữ liệu từ bảng HoatDong trước khi sử dụng
  this.getTotalSBDD(hv.childResumeId); // Lấy tổng số điểm danh dựa vào childResumeId
  this.calculateTotalChiPhiTong();
 
  }
  tailaiDsHD(){
    this.service.getHD().subscribe(data => {
      this.DsHD= data;
      console.log(data)
    });
   }
   getChiPhiByMaHoatDong(mahoatdong: string): string {
    const Hoatdong = this.DsHD.find((hd: any) => hd.mahoatdong === mahoatdong);
    return Hoatdong ? Hoatdong.chiphi : '';
  }
  calculateHocPhi(mahoatdong: string, month: string): string {
    const chiphi = parseFloat(this.getChiPhiByMaHoatDong(mahoatdong));
    const ngayTrongThang = this.getDaysInMonthFromString(month);
    const hocPhi = Math.floor(chiphi / ngayTrongThang);
    return hocPhi.toString();
  }
  calculateTotalChiPhi(): number {
    let totalChiPhi: number = 0;
    for (const CPC of this.DsCPC) {
      totalChiPhi += parseInt(this.calculateHocPhi(CPC.mahoatdong, CPC.thang_namhoc), 10);
    }
    return totalChiPhi;
  }

  getDaysInMonthFromString(thangNamHoc: string): number {
    const monthKey = thangNamHoc.split('/')[0];
    const daysInMonth: Record<string, number> = {
      '01': 23,
      '02': 21,
      '03': 21,
      '04': 22,
      '05': 23,
      '06': 20,
      '07': 23,
      '08': 22,
      '09': 21,
      '10': 23,
      '11': 21,
      '12': 22,
    };
    return daysInMonth[monthKey];
  }
 
 
  calculateTotalChiPhiP(): number {
    let totalChiPhi1: number = 0;
    for (const CPP of this.DsCPP) {
      const chiPhi: number = parseFloat(this.getChiPhiByMaHoatDong(CPP.mahoatdong));
      if (!isNaN(chiPhi)) {
        totalChiPhi1 += chiPhi;
      }
    }
    return totalChiPhi1;
  }
  // Xử lý sự kiện khi người dùng chọn tùy chọn "Chi phí tháng đầu tiên"
onSelectChiPhiDauTien() {
  this.selectedOption = 'chiPhiDauTien';
}

// Xử lý sự kiện khi người dùng chọn tùy chọn "Chi phí các tháng sau"
onSelectChiPhiCacThangSau() {
  this.selectedOption = 'chiPhiCacThangSau';
}
  getTotalSBDD(childResumeId: any): void {
    
      this.service.getTotalSBDD(childResumeId).subscribe(data => {
        this.totalDiemDanh = data;
        console.log(this.totalDiemDanh)
        // Lưu tổng số điểm danh từ API vào biến totalDiemDanh
        this.totalChiPhiWithDiemDanh = this.calculateTotalChiPhi()*this.totalDiemDanh
      });
    }
  
    calculateTotalChiPhiTong(): number {
      let totalChiPhiT: number = 0;
    
      if (this.selectedOption === 'chiPhiDauTien') {
        totalChiPhiT = this.getChiphibandauByChildResumeId(this.selectedNameCPC.childResumeId) + this.calculateTotalChiPhiP();
      } else if (this.selectedOption === 'chiPhiCacThangSau') {
        totalChiPhiT = this.totalChiPhiWithDiemDanh + this.calculateTotalChiPhiP();
      }
    
      console.log(totalChiPhiT); // In ra tổng chi phí (tùy chọn được chọn) trong console
      return totalChiPhiT;
    }
  generateMaBienLai(): string {
  const maxDigits = 10;
  const prefix = 'MBL';

  let randomNumber = '';
  for (let i = 0; i < maxDigits - prefix.length; i++) {
    randomNumber += Math.floor(Math.random() * 10).toString();
  }

  return prefix + randomNumber;
}
addBienlai(): void {
  const bl = {
    mabienlai: this.generateMaBienLai(), // Tạo mã biên lai tự động
    childResumeId: '', // Sẽ được gán giá trị trong vòng lặp
    tongchiphiphaitra: this.calculateTotalChiPhiTong(),
    trangthai: true,
    thang_namhhoc: ''
  };

  const firstCPC = this.DsCPC.slice(0, 1); // Lấy phần tử đầu tiên từ mảng DsCPC

  if (firstCPC.length === 0) {
    window.alert('Không có CPC để thêm biên lai');
    return;
  }

  bl.childResumeId = firstCPC[0].childResumeId; // Gán giá trị childResumeId từ cột "Mã học viên"
  bl.thang_namhhoc = firstCPC[0].thang_namhoc; // Gán giá trị childResumeId từ cột "Mã học viên"

  console.log(bl);

  this.service.addTBL(bl).subscribe(
    res => {
      window.alert('Thêm biên lai thành công');
      console.log(res);

      // Xóa phiếu điểm danh dựa vào childResumeId
      this.xoaAllpddbyChildid(firstCPC[0]);
      this.xoaAllcpcbyChildid(firstCPC[0]);
      this.xoaAllcppbyChildid(firstCPC[0]);
    },
    error => {
      window.alert('Thêm biên lai thất bại');
      console.log(error.error);
    }
  );
}
getChiphibandauByChildResumeId(childResumeId: string): number {
  const hocvien = this.DsHV.find((hv: any) => hv.childResumeId === childResumeId);
  return hocvien ? hocvien.chiphibandau : '';
}
xoaAllpddbyChildid(CPP: any) {
  console.log(CPP.childResumeId); // In ra childResumeId để kiểm tra

  this.service.deleteallPhieudiemdanhbyhv(CPP.childResumeId).subscribe(
   
  );
}
xoaAllcpcbyChildid(id: any) {
  console.log(id.childResumeId); // In ra childResumeId để kiểm tra

  this.service.deleteallCPCbyhv(id.childResumeId).subscribe(
   
  );
}
xoaAllcppbyChildid(id: any) {
  console.log(id.childResumeId); // In ra childResumeId để kiểm tra

  this.service.deleteallCPPbyhv(id.childResumeId).subscribe(
   
  );
}
}
