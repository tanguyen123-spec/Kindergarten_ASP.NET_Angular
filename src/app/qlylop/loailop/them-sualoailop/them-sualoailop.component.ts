import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-sualoailop',
  templateUrl: './them-sualoailop.component.html',
  styleUrl: './them-sualoailop.component.css'
})
export class ThemSualoailopComponent  implements OnInit {
  classtypeId:any
  nameClasstype :any;
  isAddingLL: boolean = true;
  isEditingLL:boolean = false;
  
  @Input() ll:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.ll.classtypeId === 0) {
      this.isAddingLL = true;
      
     
    } else {
      this.isAddingLL = false;
      this.classtypeId = this.ll.classtypeId;
      this.nameClasstype = this.ll.nameClasstype;
      
      
    }
  }
  
  addLopLoai() {
    var ll = {
      classtypeId: this.classtypeId,
      nameClasstype: this.nameClasstype,
    
     
    };
  console.log(ll)
    this.service.addclasT(ll).subscribe(
      res => {
        window.alert('Thêm loại lớp học thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm loại lớp học thất bại');
        console.log(error.error);
      }
    );
    this.isAddingLL=true
  }
  suaLL(){
    var ll = {
      classtypeId: this.classtypeId,
      nameClasstype: this.nameClasstype,
    };
  
    this.service.putclasT(ll).subscribe(
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
