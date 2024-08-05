import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-them-suahocvien',
  templateUrl: './them-suahocvien.component.html',
  styleUrl: './them-suahocvien.component.css'
})
export class ThemSuahocvienComponent implements OnInit {
  childResumeId:any
  parentResumeId :any;
  afaId :any;
  classId :any;
  name :any;
  diachi :any;
   gender: boolean = false;
  medicalHistory :any;
  informationDif :any;
  currentHealthStatus :any;
  imageUrl :any;
  isAddingHV: boolean = true;
  isEditingHV:boolean = false;
  selectedFile: File | null = null;
  fileName: string | null = null;
  chiphibandau:any;
  DsNH:any=[];
  @Input() hv:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    if (this.hv.childResumeId === 0) {
      this.isAddingHV = true;
    
    } else {
      this.isAddingHV = false;
      this.childResumeId = this.hv.childResumeId;
      this.parentResumeId = this.hv.parentResumeId;
      this.afaId = this.hv.afaId;
      this.classId = this.hv.classId;
      this.name = this.hv.name;
      this.diachi = this.hv.diachi;
      this.gender = this.hv.gender;
      this.medicalHistory = this.hv.medicalHistory;
      this.informationDif = this.hv.informationDif;
      this.currentHealthStatus = this.hv.currentHealthStatus;
      this.imageUrl = this.hv.imageUrl;
      this.chiphibandau= this.hv.chiphibandau
    }
   
  }
  
  addHocVien() {
    this.generateRandomMaHoatdongPhu(); // Tạo mã học viên ngẫu nhiên
    var hv = {
      childResumeId: this.childResumeId,
      parentResumeId: this.parentResumeId,
      afaId: this.afaId,
      classId: this.classId,
      name: this.name,
      diachi: this.diachi,
      gender: this.gender,
      medicalHistory: this.medicalHistory,
      informationDif: this.informationDif,
      currentHealthStatus: this.currentHealthStatus,
      imageUrl: this.imageUrl,
      chiphibandau:this.chiphibandau
    };
  console.log(hv)
    this.service.addhv(hv).subscribe(
      res => {
        window.alert('Thêm học viên thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm học viên thất bại');
        console.log(error);
      }
    );
    this.isAddingHV=true
  }
  suaHV(){
    var hv = {
      childResumeId: this.childResumeId,
      parentResumeId: this.parentResumeId,
      afaId: this.afaId,
      classId: this.classId,
      name: this.name,
      diachi: this.diachi,
      gender: this.gender,
      medicalHistory: this.medicalHistory,
      informationDif: this.informationDif,
      currentHealthStatus: this.currentHealthStatus,
      imageUrl: this.imageUrl,
      chiphibandau:this.chiphibandau
     
    };
  
    this.service.puthv(hv).subscribe(
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
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.fileName = this.selectedFile?.name;
  }
  onUpload() {
    if (this.selectedFile) {
      const filedata = new FormData();
      filedata.append('imageUrl', this.selectedFile, this.childResumeId);
      this.service.uploadFile(filedata).subscribe(
        res => {
          console.log(res);
          this.imageUrl = res.toString();
        },
        error => {
          console.log(error);
        }
        );
      // Tiếp tục xử lý filedata
    } else {
      // Xử lý khi selectedFile là null
    }
  }
  generateRandomMaHoatdongPhu() {
    const characters = '0123456789';
    const length = 7; // Độ dài của mã ngẫu nhiên (không tính "HDP")
    let result = 'HV';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    this.childResumeId = result;
  }
  tailaiDsNH(){
    this.service.getnh().subscribe(data => {
      this.DsNH = data;
      console.log(data)
    });
   }
}
