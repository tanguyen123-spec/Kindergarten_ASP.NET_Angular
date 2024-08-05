import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ds-thongke',
  templateUrl: './ds-thongke.component.html',
  styleUrls: ['./ds-thongke.component.css']
})
export class DsThongkeComponent implements OnInit {
  DsDT: any[] = [];
  DsTOTAL: any[] = [];
  maxTongChiPhi: number = 0;
  totalChiPhi: number = 0;
  showTemplate:boolean = true;
  tongChiPhiArr: number[] = [];
  constructor(private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.tailaiDsDD();
    this.getTotalChiPhi();

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

  tailaiDsDD() {
    this.service.getTK().subscribe(data => {
      this.DsDT = data;
      this.maxTongChiPhi = Math.max(...this.DsDT.map(dt => dt.tongChiPhi));
    });
  }
  tailaiDsTOTAL() {
    this.service.getTotalchiphi().subscribe(data => {
      this.DsTOTAL = data;
      this.maxTongChiPhi = Math.max(...this.DsDT.map(dt => dt.tongChiPhi));
    });
  }
  getTotalChiPhi(): void {
    this.service.getTotalchiphi().subscribe(
      result => {
        this.totalChiPhi = result;
      },
      error => {
        console.log('An error occurred:', error);
      }
    );
  }
  getColor(value: number): string {
    // Tùy chỉnh logic để xác định màu sắc dựa trên giá trị doanh thu
    // Ví dụ:
    if (value >= 80) {
      return '#14243c'; // Màu xanh lá cây
    } else if (value >= 50) {
      return '#FCB72A'; // Màu cam
    } else if (value >= 15) {
      return '#E0393E'; // Màu đỏ
    } else {
      return '#069CDB'; // Màu xanh dương
    }
  }
}