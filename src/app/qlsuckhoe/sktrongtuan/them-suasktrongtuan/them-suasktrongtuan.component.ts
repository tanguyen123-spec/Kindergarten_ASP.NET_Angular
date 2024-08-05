import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-suasktrongtuan',
  templateUrl: './them-suasktrongtuan.component.html',
  styleUrl: './them-suasktrongtuan.component.css'
})
export class ThemSuasktrongtuanComponent implements OnInit {
  ttskId:any
  childResumeId :any;
  magiaovien :any;
  ngaykiemtra :any;
  nhietdo :any;
  trangthaian :any;
  trangthaingu :any;
  thaidohochanh :any;
  isAddingLH: boolean = true;
  selectedFile: File | null = null;
  fileName: string | null = null;
  imagesTinhtrangsuckhoeId:any;
  linkImage:any;
  @Input() sktt:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.sktt.ttskId === 0) {
      this.isAddingLH = true;
      
     
    } else {
      this.isAddingLH = false;
      this.ttskId = this.sktt.ttskId;
      this.childResumeId = this.sktt.childResumeId;
      this.magiaovien = this.sktt.magiaovien;
      this.ngaykiemtra = this.sktt.ngaykiemtra;
      this.nhietdo = this.sktt.nhietdo;
      this.trangthaian = this.sktt.trangthaian;
      this.trangthaingu = this.sktt.trangthaingu;
      this.thaidohochanh = this.sktt.thaidohochanh;
    
      
    }
    this.generateRandomSuckhoemn();
    this.nhietdo = '37';
this.trangthaian = 'Bthường';
this.trangthaingu = 'Bthường';
this.thaidohochanh = 'Bthường';
  }
  
  addSktt() {
    var sktt= {
      ttskId: this.ttskId,
      childResumeId: this.childResumeId,
      magiaovien: this.magiaovien,
      ngaykiemtra: this.ngaykiemtra,
      nhietdo: this.nhietdo,
      trangthaian: this.trangthaian,
      trangthaingu: this.trangthaingu,
      thaidohochanh: this.thaidohochanh,
     
     
     
    };
  console.log(sktt)
    this.service.addSKTT(sktt).subscribe(
      res => {
        window.alert('Thêm  thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm thất bại');
        console.log(error.error);
      }
    );
    this.isAddingLH=true
  }
  suaSktt(){
    var sktt = {
      ttskId: this.ttskId,
      childResumeId: this.childResumeId,
      magiaovien: this.magiaovien,
      ngaykiemtra: this.ngaykiemtra,
      nhietdo: this.nhietdo,
      trangthaian: this.trangthaian,
      trangthaingu: this.trangthaingu,
      thaidohochanh: this.thaidohochanh,
    };
  
    this.service.putSKTT(sktt).subscribe(
      res => {
        window.alert('Sửa thành công');
        console.log(res);
      },
      error => {
        window.alert('Sửa thất bại');
        console.log(error);
      }
    );
  }
  generateRandomSuckhoemn() {
    const characters = '0123456789';
    const length = 6; // Độ dài của mã ngẫu nhiên (không tính "HDP")
    let result = 'SKTt';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    this.ttskId = result;
  }
}
