import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit {
  formGroup: FormGroup | null = null; // Khởi tạo formGroup với giá trị ban đầu là null
  isLoggedIn = false; // Biến cờ để theo dõi trạng thái đăng nhập
  loggedInEmail: string | null = null;
  constructor(private service: SharedService,private router :Router) {}

  ngOnInit(): void {
    this.initFormGroup();
    // Kiểm tra xem token có tồn tại hay không
  const token = localStorage.getItem('token');
  if (token) {
    this.isLoggedIn = true;
  }
  }

  initFormGroup() {
    this.formGroup = new FormGroup({
      Email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.formGroup?.valid) {
      const email = this.formGroup.get('Email')?.value;
      const password = this.formGroup.get('password')?.value;
  
      this.service.Login(email, password).subscribe(result => {
        if (result.success) {
          console.log(result);
          alert(result.message);
          const token = result.data.accessToken;
          console.log(token); // Kiểm tra giá trị của token
          localStorage.setItem('token', token);
          this.isLoggedIn = true; // Đặt biến cờ thành true sau khi đăng nhập thành công
          this.loggedInEmail = email;

          // Redirect to the desired component
          this.router.navigateByUrl('/trangchu'); // Chuyển hướng đến component <app-navigation>
        } else {
          alert(result.message);
        }
      });
    }
  }
  logout() {
    this.service.logout();
    this.isLoggedIn = false; // Đặt biến cờ thành false sau khi đăng xuất
    // Redirect to the login page
    window.location.href = '/';
  }

}
