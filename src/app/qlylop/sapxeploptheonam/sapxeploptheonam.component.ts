import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ViewChild, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-sapxeploptheonam',
  templateUrl: './sapxeploptheonam.component.html',
  styleUrls: ['./sapxeploptheonam.component.css']
})
export class SapxeploptheonamComponent implements OnInit {
  constructor(private service: SharedService, private router: Router) {}

  DsLL: any = [];
  classtypeId: any;
  nhClasstypeOptions: any = []; // Mảng chứa các lớp học chuyển đến
  namhoc: any;
  newClassId: any;
  oldClassId:any;
  notificationMessage:any;
  displayModal:boolean = false;
  showTemplate:boolean = true

  ngOnInit(): void {
    this.tailaiDsLL();
    console.log(this.nhClasstypeOptions);
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (!token) {
      this.router.navigateByUrl('/');
    } else {
      // Fetch data or perform other operations
      this.showTemplate = true; // Add this variable to your component
    }
  }

  tailaiDsLL() {
    this.service.getClasT().subscribe(data => {
      this.DsLL = data;
      console.log(data);
    });
  }

  getNH_classtype() {
    if (this.classtypeId && this.namhoc) {
      this.service.getNH_clasty(this.namhoc, this.classtypeId).subscribe(
        response => {
          this.nhClasstypeOptions = response; // Assign the response, containing the list of classes, to nhClasstypeOptions
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  submitForm() {
    if (this.oldClassId && this.newClassId) {
      this.service.addNH_clasty(this.oldClassId, this.newClassId, this.DsLL).subscribe(
        response => {
          console.log(response);
          window.alert('Sắp xếp lớp thành công');
        },
        error => {
          console.log(error);
          window.alert('Sắp xếp lớp thất bại');
        }
      );
    }
  }
  
  showSuccessNotification() {
    this.notificationMessage = 'Sắp lớp thành công.';
    this.displayModal = true;
  }
  
  showErrorNotification() {
    this.notificationMessage = 'Sắp lớp thất bại.';
    this.displayModal = true;
  }
  
  resetModal() {
    this.displayModal = false;
  }
  
}