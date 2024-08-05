import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-suaskdinhki',
  templateUrl: './them-suaskdinhki.component.html',
  styleUrl: './them-suaskdinhki.component.css'
})
export class ThemSuaskdinhkiComponent implements OnInit {
  skdkId:any
  magiaovien :any;
  childResumeId :any;
  ngaykiemtra :any;
  chieucao :any;
  cannang :any;
  benhlykhac :any;
  ghichubacsy :any;
  ngayTao :any;
  isAddingLH: boolean = true;
  isEditingLH:boolean = false;
  
  @Input() skdk:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.skdk.skdkId === 0) {
      this.isAddingLH = true;
      
     
    } else {
      this.isAddingLH = false;
      this.skdkId = this.skdk.skdkId;
      this.magiaovien = this.skdk.magiaovien;
      this.childResumeId = this.skdk.childResumeId;
      this.ngaykiemtra = this.skdk.ngaykiemtra;
      this.chieucao = this.skdk.chieucao;
      this.cannang = this.skdk.cannang;
      this.benhlykhac = this.skdk.benhlykhac;
      this.ghichubacsy = this.skdk.ghichubacsy;
      this.ngayTao = this.skdk.ngayTao;
      
    }
  }
  
  addSkdk() {
    var skdk = {
      skdkId: this.skdkId,
      magiaovien: this.magiaovien,
      childResumeId: this.childResumeId,
      ngaykiemtra: this.ngaykiemtra,
      chieucao: this.chieucao,
      cannang: this.cannang,
      benhlykhac: this.benhlykhac,
      ghichubacsy: this.ghichubacsy,
      ngayTao: this.ngayTao,
     
     
    };
  console.log(skdk)
    this.service.addSKDK(skdk).subscribe(
      res => {
        window.alert('Thêm sức khỏe định kì thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm sức khỏe định kì thất bại');
        console.log(error.error);
      }
    );
    this.isAddingLH=true
  }
  suaSKDK(){
    var skdk = {
      skdkId: this.skdkId,
      magiaovien: this.magiaovien,
      childResumeId: this.childResumeId,
      ngaykiemtra: this.ngaykiemtra,
      chieucao: this.chieucao,
      cannang: this.cannang,
      benhlykhac: this.benhlykhac,
      ghichubacsy: this.ghichubacsy,
      ngayTao: this.ngayTao,
     
    };
  
    this.service.putSKDK(skdk).subscribe(
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

}
