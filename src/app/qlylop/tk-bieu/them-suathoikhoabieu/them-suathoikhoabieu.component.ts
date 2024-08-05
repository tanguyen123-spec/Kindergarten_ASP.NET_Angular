import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-suathoikhoabieu',
  templateUrl: './them-suathoikhoabieu.component.html',
  styleUrl: './them-suathoikhoabieu.component.css'
})
export class ThemSuathoikhoabieuComponent implements OnInit {
  matkb:any
  classId :any;
  magiaovien :any;
  ngaybatdau :any;
  ngayketthuc :any;
  isAddingLH: boolean = true;
  isEditingLH:boolean = false;
  DSLH:any=[];
  @Input() tkb:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.tkb.matkb === 0) {
      this.isAddingLH = true;
      
     
    } else {
      this.isAddingLH = false;
      this.matkb = this.tkb.matkb;
      this.classId = this.tkb.classId;
      this.magiaovien = this.tkb.magiaovien;
      this.ngaybatdau = this.tkb.ngaybatdau;
      this.ngayketthuc = this.tkb.ngayketthuc;
    }
 this.tailaiDsLH();
  }
  
  addTkb() {
    var tkb = {
    
      matkb : this.matkb,
    classId :this.classId,
      magiaovien : this.magiaovien,
      ngaybatdau : this.ngaybatdau,
      ngayketthuc : this.ngayketthuc,
     
    };
  console.log(tkb)
    this.service.addtkb(tkb).subscribe(
      res => {
        window.alert('Thêm thời khóa biểu thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm thời khóa biểu thất bại');
        console.log(error.error);
      }
    );
    this.isAddingLH=true
  }
  suatkb(){
    var tkb = {
      matkb : this.matkb,
    classId :this.classId,
      magiaovien : this.magiaovien,
      ngaybatdau : this.ngaybatdau,
      ngayketthuc : this.ngayketthuc,
     
    };
  
    this.service.puttkb(tkb).subscribe(
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
  tailaiDsLH(){
    this.service.getClas().subscribe(data => {
      this.DSLH = data;
      console.log(data)
    });
   }
}
