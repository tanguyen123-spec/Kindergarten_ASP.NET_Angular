import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-suatiethoc',
  templateUrl: './them-suatiethoc.component.html',
  styleUrl: './them-suatiethoc.component.css'
})
export class ThemSuatiethocComponent implements OnInit {
  tiethocid:any
  matkb :any;
  thoigianbatdauhoc:any
  thoigianketthuchoc :any;
  ngayhoc:any
  tieuthoc :any;
  isAddingLL: boolean = true;
  isEditingLL:boolean = false;
  DsTKB:any=[];

  
  @Input() thc:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.thc.tiethocid === 0) {
      this.isAddingLL = true;
      
     
    } else {
      this.isAddingLL = false;
      this.tiethocid = this.thc.tiethocid;
      this.matkb = this.thc.matkb;
      this.thoigianbatdauhoc = this.thc.thoigianbatdauhoc;
      this.thoigianketthuchoc = this.thc.thoigianketthuchoc;
      this.ngayhoc = this.thc.ngayhoc;
      this.tieuthoc = this.thc.tieuthoc;

      
      
    }
    this.tailaiDsTKB();
  }
  
  addLopLoai() {
    var ngayHoc = new Date(this.ngayhoc); // Convert the selected date to a Date object
    var formattedNgayHoc = ngayHoc.toISOString().split('T')[0]; // Format ngayhoc as yyyy-mm-dd
    
    var thoigianBatDau = formattedNgayHoc + 'T' + this.thoigianbatdauhoc + ':00'; // Combine date and time for start time
    var thoigianKetThuc = formattedNgayHoc + 'T' + this.thoigianketthuchoc + ':00'; // Combine date and time for end time
    
    var ll = {
      tiethocid: this.tiethocid,
      matkb: this.matkb,
      thoigianbatdauhoc: thoigianBatDau,
      thoigianketthuchoc: thoigianKetThuc,
      ngayhoc: ngayHoc,
      tieuthoc: this.tieuthoc,
    };
  console.log(ll)
    this.service.addTKBTN(ll).subscribe(
      res => {
        window.alert('Thêm lịch ngày thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm lịch ngày thất bại');
        console.log(error.error);
      }
    );
    this.isAddingLL=true
  }
  suaLL(){
    var ll = {
      tiethocid: this.tiethocid,
      matkb: this.matkb,
      thoigianbatdauhoc: this.thoigianbatdauhoc,
      thoigianketthuchoc: this.thoigianketthuchoc,
      ngayhoc: this.ngayhoc,
      tieuthoc: this.tieuthoc,
     
    };
  
    this.service.putTKBTN(ll).subscribe(
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
  tailaiDsTKB(){
    this.service.gettkb().subscribe(data => {
      this.DsTKB = data;
      console.log(data)
    });
   }
   
}
