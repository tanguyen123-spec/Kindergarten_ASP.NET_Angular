import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth.guard',
  templateUrl: './auth.guard.component.html',
  styleUrl: './auth.guard.component.css'
})
export class AuthGuardComponent implements OnInit{
  constructor(private service: SharedService,private router: Router) { }
DsLL : any =[];
ll:any=[];
dangThemSua:boolean=false;
classtypeId:any;
tieuDe:any;
showTemplate:boolean = true

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tailaiDsLL();
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
   tailaiDsLL(){
    this.service.getND().subscribe(data => {
      this.DsLL = data;
      console.log(data)
    });
   }
   
  

   
   dong(){
    this.dangThemSua=false
    this.tailaiDsLL();
    
   }
 
  
}
