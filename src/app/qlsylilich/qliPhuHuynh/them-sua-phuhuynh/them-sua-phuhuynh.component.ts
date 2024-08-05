import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-sua-phuhuynh',
  templateUrl: './them-sua-phuhuynh.component.html',
  styleUrl: './them-sua-phuhuynh.component.css'
})
export class ThemSuaPhuhuynhComponent implements OnInit {
  parentResumeId:any
  nameP :any;
  dateOfBirth :any;
  phone1 :any;
  phone2 :any;
  nameP2:any
  diachi :any;
  gender :boolean = true;
  jobParent :any;
  numberOfChildren :number = 0;
  imageUrl :any;
  isAddingLH: boolean = true;
  isEditingLH:boolean = false;
  
  @Input() ph:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.ph.parentResumeId === 0) {
      this.isAddingLH = true;
      
     
    } else {
      this.isAddingLH = false;
      this.parentResumeId = this.ph.parentResumeId;
      this.nameP = this.ph.nameP;
      this.dateOfBirth = this.ph.dateOfBirth;
      this.phone1 = this.ph.phone1;
      this.phone2 = this.ph.phone2;
      this.nameP2 = this.ph.nameP2;
      this.diachi = this.ph.diachi;
      this.gender = this.ph.gender;
      this.jobParent = this.ph.jobParent;
      this.numberOfChildren = this.ph.numberOfChildren;
      this.imageUrl = this.ph.imageUrl;
      
    }
  }
  
  addPhuhuynh() {
    var ph = {
      parentResumeId: this.parentResumeId,
      nameP: this.nameP,
      dateOfBirth: this.dateOfBirth,
      phone1: this.phone1,
      phone2: this.phone2,
      nameP2: this.nameP2,
      diachi: this.diachi,
      gender: this.gender,
      jobParent: this.jobParent,
      numberOfChildren: this.numberOfChildren,
      imageUrl: 'none',
     
    };
  console.log(ph)
    this.service.addPH(ph).subscribe(
      res => {
        window.alert('Thêm phụ huynh thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm phụ huynh thất bại');
        console.log(error.error);
      }
    );
    this.isAddingLH=true
  }
  suaPH(){
    var ph = {
      parentResumeId: this.parentResumeId,
      nameP: this.nameP,
      dateOfBirth: this.dateOfBirth,
      phone1: this.phone1,
      phone2: this.phone2,
      nameP2: this.nameP2,
      diachi: this.diachi,
      gender: this.gender,
      jobParent: this.jobParent,
      numberOfChildren: this.numberOfChildren,
      imageUrl: this.imageUrl,
     
    };
  
    this.service.putPH(ph).subscribe(
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
