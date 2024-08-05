import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-suathucdon',
  templateUrl: './them-suathucdon.component.html',
  styleUrl: './them-suathucdon.component.css'
})
export class ThemSuathucdonComponent implements OnInit {
  menuId:any
  ngaybatdau :any;
  ngayketthuc :any;
  
  isAddingNH: boolean = true;
  isEditingNH:boolean = false;
  
  @Input() td:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.td.menuId === 0) {
      this.isAddingNH = true;
      
     
    } else {
      this.isAddingNH = false;
      this.menuId = this.td.menuId;
      this.ngaybatdau = this.td.ngaybatdau;
      this.ngayketthuc = this.td.ngayketthuc;
    
    }
  }
  
  addThucdon() {
    var td = {
      menuId: this.menuId,
      ngaybatdau: this.ngaybatdau,
      ngayketthuc: this.ngayketthuc,
      
     
    };
  console.log(td)
    this.service.addtd(td).subscribe(
      res => {
        window.alert('Thêm thực đơn thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm thực đơn thất bại');
        console.log(error.error);
      }
    );
    this.isAddingNH=true
  }
  suaTD(){
    var td = {
      menuId: this.menuId,
      ngaybatdau: this.ngaybatdau,
      ngayketthuc: this.ngayketthuc,
     
    };
  
    this.service.puttd(td).subscribe(
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
