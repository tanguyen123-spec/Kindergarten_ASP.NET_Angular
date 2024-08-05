import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-suahoatdong',
  templateUrl: './them-suahoatdong.component.html',
  styleUrl: './them-suahoatdong.component.css'
})
export class ThemSuahoatdongComponent implements OnInit {
  mahoatdong:any
  tenhoatdong :any;
  chiphi :any;
  isAddingHD: boolean = true;
  isEditingHD:boolean = false;
  
  @Input() hd:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.hd.mahoatdong === 0) {
      this.isAddingHD = true;
      
     
    } else {
      this.isAddingHD = false;
      this.mahoatdong = this.hd.mahoatdong;
      this.tenhoatdong = this.hd.tenhoatdong;
      this.chiphi = this.hd.chiphi;
      
    }
  }
  
  addHoatdong() {
    var hd = {
      mahoatdong: this.mahoatdong,
      tenhoatdong: this.tenhoatdong,
      chiphi: this.chiphi,
    };
  console.log(hd)
    this.service.addHD(hd).subscribe(
      res => {
        window.alert('Thêm hoạt động thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm hoạt động thất bại');
        console.log(error.error);
      }
    );
    this.isAddingHD=true
  }
  suaHD(){
    var hd = {
      mahoatdong: this.mahoatdong,
      tenhoatdong: this.tenhoatdong,
      chiphi: this.chiphi,
     
     
    };
  
    this.service.putHD(hd).subscribe(
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
