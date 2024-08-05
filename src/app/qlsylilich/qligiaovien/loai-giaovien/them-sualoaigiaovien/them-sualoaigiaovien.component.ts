import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-sualoaigiaovien',
  templateUrl: './them-sualoaigiaovien.component.html',
  styleUrl: './them-sualoaigiaovien.component.css'
})
export class ThemSualoaigiaovienComponent implements OnInit {
  maloaigiaovien :any;
  tenloaigiaovien :any;
  isAddingHV: boolean = true;
  isEditingHV:boolean = false;
;
  
  @Input() lgv:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.lgv.maloaigiaovien === 0) {
      this.isAddingHV = true;
    
    } else {
      this.isAddingHV = false;
      this.maloaigiaovien = this.lgv.maloaigiaovien;
      this.tenloaigiaovien = this.lgv.tenloaigiaovien;
    }
  }
  
  addLoaiGiaoVien() {
    var lgv = {
      maloaigiaovien: this.maloaigiaovien,
      tenloaigiaovien: this.tenloaigiaovien,
      
    };
  console.log(lgv)
    this.service.addLGV(lgv).subscribe(
      res => {
        window.alert('Thêm loại giáo viên thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm loại giáo viên thất bại');
        console.log(error);
      }
    );
    this.isAddingHV=true
  }
  suaLGV(){
    var lgv = {
      maloaigiaovien: this.maloaigiaovien,
      tenloaigiaovien: this.tenloaigiaovien,
     
    };
  
    this.service.putLGV(lgv).subscribe(
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
