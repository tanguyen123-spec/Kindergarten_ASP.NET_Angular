import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-them-suamonantheongay',
  templateUrl: './them-suamonantheongay.component.html',
  styleUrl: './them-suamonantheongay.component.css'
})
export class ThemSuamonantheongayComponent implements OnInit {
  malichngay:any
  menuId :any;
  ngay :any;
  buoisang:any;
  buoitrua :any;
  buoichieu :any;
  trangmieng:any;
  DsTD: any = [];
  
  constructor(private service:SharedService,private router: Router) { }
  ngOnInit(): void {
   this.tailaiDsTD();
  }
  generateRandommalichngay() {
    const characters = '0123456789';
    const length = 7; // Độ dài của mã ngẫu nhiên (không tính "HDP")
    let result = 'MA';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result; // Thêm từ khóa "return" để trả về giá trị của "result"
  }
  addMA() {
    var MA = {
      malichngay: this.generateRandommalichngay(),
      menuId: this.menuId,
      ngay: this.ngay,
      buoisang: this.buoisang,
      buoitrua: this.buoitrua,
      buoichieu: this.buoichieu,
      trangmieng: this.trangmieng,
    };
  console.log(MA)
    this.service.addDSmaTn(MA).subscribe(
      res => {
        window.alert('Thêm món ăn thành công');
        console.log(res);
       
      },
      error => {
        window.alert('Thêm món ăn thất bại');
        console.log(error.error);
      }
    );
   
  }
  getRandomFoodBF(): void {
    this.service.getbs().subscribe(
      response => {
        const randomIndex = Math.floor(Math.random() * response.length);
        this.buoisang = response[randomIndex].foodBF;
      },
      error => {
        console.error(error);
        // Xử lý lỗi nếu cần thiết
      }
    );
  }
  getRandomFoodLunch(): void {
    this.service.getLunch().subscribe(
      response => {
        const randomIndex = Math.floor(Math.random() * response.length);
        this.buoitrua = response[randomIndex].foodLunch;
      },
      error => {
        console.error(error);
        // Xử lý lỗi nếu cần thiết
      }
    );
  }
  getRandomFoodAF(): void {
    this.service.getaf().subscribe(
      response => {
        const randomIndex = Math.floor(Math.random() * response.length);
        this.buoichieu = response[randomIndex].foodAF;
      },
      error => {
        console.error(error);
        // Xử lý lỗi nếu cần thiết
      }
    );
  }
  getRandomFoodDS(): void {
    this.service.getDers().subscribe(
      response => {
        const randomIndex = Math.floor(Math.random() * response.length);
        this.trangmieng = response[randomIndex].foodDS;
      },
      error => {
        console.error(error);
        // Xử lý lỗi nếu cần thiết
      }
    );
  }
  tailaiDsTD() {
    this.service.gettd().subscribe(data => {
      this.DsTD = data;
      console.log(data);
    });
  }

}
