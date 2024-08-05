import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-suanhaphoc',
  templateUrl: './them-suanhaphoc.component.html',
  styleUrl: './them-suanhaphoc.component.css'
})
export class ThemSuanhaphocComponent implements OnInit {
  afaId:any
  lophocmongmuon :any;
  namhoc :any;
  batdauhoc :any;
  status: boolean = false;
  ngaytaodon :any;
  sdtLienhe :any;
  name :any;
  isAddingNH: boolean = true;
  isEditingNH:boolean = false;
  
  @Input() nh:any;
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
    this.ngaytaodon = new Date().toISOString().substring(0, 10);

    if (this.nh.afaId === 0) {
      this.isAddingNH = true;
      
     
    } else {
      this.isAddingNH = false;
      this.afaId = this.nh.afaId;
      this.lophocmongmuon = this.nh.lophocmongmuon;
      this.namhoc = this.nh.namhoc;
      this.batdauhoc = this.nh.batdauhoc;
      this.status = this.nh.status;
      this.ngaytaodon = this.nh.ngaytaodon;
      this.sdtLienhe = this.nh.sdtLienhe;
      this.name = this.nh.name;
    }
    this.generateRandomMaHoatdongPhu();
  }
  generateRandomMaHoatdongPhu() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 7; 
    let result = 'DNH';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    this.afaId = result;
  }
  addNhaphoc() {
    var nh = {
      afaId: this.afaId,
      lophocmongmuon: this.lophocmongmuon,
      namhoc: this.namhoc,
      batdauhoc: this.batdauhoc,
      status: this.status,
      ngaytaodon: this.ngaytaodon,
      sdtLienhe: this.sdtLienhe,
      name: this.name
     
    };
  console.log(nh)
    this.service.addnh(nh).subscribe(
      res => {
        window.alert('Thêm phiếu thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm phiếu thất bại');
        console.log(error.error);
      }
    );
    this.isAddingNH=true
  }
  suaNH(){
    var nh = {
      afaId: this.afaId,
      lophocmongmuon: this.lophocmongmuon,
      namhoc: this.namhoc,
      batdauhoc: this.batdauhoc,
      status: this.status,
      ngaytaodon: this.ngaytaodon,
      sdtLienhe: this.sdtLienhe,
      name: this.name
     
    };
  
    this.service.putnh(nh).subscribe(
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
