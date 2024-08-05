import { Component } from '@angular/core';
import { SharedService } from '../../../../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ds-phieudiemdanh',
  templateUrl: './ds-phieudiemdanh.component.html',
  styleUrl: './ds-phieudiemdanh.component.css'
})
export class DsPhieudiemdanhComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsDD : any =[];
showTemplate:boolean = true

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDsDD();
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
   tailaiDsDD(){
    this.service.getPDD().subscribe(data => {
      this.DsDD = data;
      console.log(data)
    });
   }
   
  
  
}
