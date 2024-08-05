import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-suagiaovien',
  templateUrl: './them-suagiaovien.component.html',
  styleUrl: './them-suagiaovien.component.css'
})
export class ThemSuagiaovienComponent implements OnInit {
  magiaovien:any
  maloaigiaovien :any;
  tengiaovien :any;
  ngaysinh :any;
  diachi :any;
  sodienthoai :any;
  imageUrl: boolean = false;
  isAddingHV: boolean = true;
  isEditingHV:boolean = false;
;
  
  @Input() gv:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.gv.magiaovien === 0) {
      this.isAddingHV = true;
    
    } else {
      this.isAddingHV = false;
      this.magiaovien = this.gv.magiaovien;
      this.maloaigiaovien = this.gv.maloaigiaovien;
      this.tengiaovien = this.gv.tengiaovien;
      this.ngaysinh = this.gv.ngaysinh;
      this.diachi = this.gv.diachi;
      this.sodienthoai = this.gv.sodienthoai;
      this.imageUrl = this.gv.imageUrl;
    }
  }
  
  addGiaoVien() {
    var gv = {
      magiaovien: this.magiaovien,
      maloaigiaovien: this.maloaigiaovien,
      tengiaovien: this.tengiaovien,
      ngaysinh: this.ngaysinh,
      diachi: this.diachi,
      imageUrl:"no image",
      sodienthoai: this.sodienthoai,
      
    };
  console.log(gv)
    this.service.addGV(gv).subscribe(
      res => {
        window.alert('Thêm giáo viên thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm giáo viên thất bại');
        console.log(error);
      }
    );
    this.isAddingHV=true
  }
  suaGV(){
    var gv = {
      magiaovien: this.magiaovien,
      maloaigiaovien: this.maloaigiaovien,
      tengiaovien: this.tengiaovien,
      ngaysinh: this.ngaysinh,
      diachi: this.diachi,
      imageUrl:"no image",
      sodienthoai: this.sodienthoai,
    
     
     
    };
  
    this.service.putGV(gv).subscribe(
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
