import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-sualop',
  templateUrl: './them-sualop.component.html',
  styleUrl: './them-sualop.component.css'
})
export class ThemSualopComponent implements OnInit {
  classId:any
  classtypeId :any;
  nameClass :any;
  siso :any;
  namhoc :any;
  isAddingLH: boolean = true;
  isEditingLH:boolean = false;
  
  @Input() l:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.l.classId === 0) {
      this.isAddingLH = true;
      
     
    } else {
      this.isAddingLH = false;
      this.classId = this.l.classId;
      this.classtypeId = this.l.classtypeId;
      this.namhoc = this.l.namhoc;
      this.nameClass = this.l.nameClass;
      this.siso = this.l.siso;
      
    }
  }
  
  addLophoc() {
    var l = {
      classId: this.classId,
      classtypeId: this.classtypeId,
      namhoc: this.namhoc,
      nameClass: this.nameClass,
      siso: this.siso,
     
     
    };
  console.log(l)
    this.service.addclas(l).subscribe(
      res => {
        window.alert('Thêm lớp học thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm lớp học thất bại');
        console.log(error.error);
      }
    );
    this.isAddingLH=true
  }
  suaL(){
    var l = {
      classId: this.classId,
      classtypeId: this.classtypeId,
      namhoc: this.namhoc,
      nameClass: this.nameClass,
      siso: this.siso,
     
    };
  
    this.service.putclas(l).subscribe(
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
