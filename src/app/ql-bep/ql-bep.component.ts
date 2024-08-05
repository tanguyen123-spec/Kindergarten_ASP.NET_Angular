import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ql-bep',
  templateUrl: './ql-bep.component.html',
  styleUrl: './ql-bep.component.css'
})
export class QlBepComponent implements OnInit{
  constructor(private service: SharedService,private router: Router,private http:HttpClient) { }

contentType: any; // Thêm thuộc tính contentType với kiểu dữ liệu là string
file1: File | null = null;
file2: File | null = null;
file3: File | null = null;
file4: File | null = null;
fileName: any;
fileName2: any;
fileName3: any;
fileName4: any;
DsBS : any =[];



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.tailaiDsBS();
   }
  
  tailaiFiledownload(contentType: any, fileName: string) {
    return this.http.get('http://localhost:5160/api/bfdatasets/download', { responseType: 'blob' })
      .subscribe((result: any) => {
        const blob = new Blob([result], { type: contentType });
        const url = window.URL.createObjectURL(blob);
  
        // Tạo một thẻ <a> tạm thời để tải xuống file
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        console.log("success");
      });
  }
  prepareDownload() {
    const contentType = 'text/csv';
    const currentDate = new Date().toISOString().slice(0, 10); // Lấy ngày hiện tại dưới dạng chuỗi "YYYY-MM-DD"
    const fileName = `BF_${currentDate}.csv`;
  
    this.tailaiFiledownload(contentType, fileName);
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
  
    const reader = new FileReader();
    reader.onload = (e) => {
      const encodedData = new TextEncoder().encode(reader.result as string);
  
      const formdata = new FormData();
      const utf8Array = new Uint8Array(encodedData);
      const utf8Blob = new Blob([utf8Array], { type: 'text/plain' });
      formdata.append('file', utf8Blob);
  
      this.http.post('http://localhost:5160/api/bfdatasets/upload', formdata, { responseType: 'text' }).subscribe(
        result => {
          console.log(result);
          if (result === 'File uploaded and processed.') {
            alert('Upload successful');
          } else {
            alert('Upload failed');
          }
        },
        error => {
          console.error(error);
          alert('Upload failed');
        }
      );
    };
  
    reader.readAsText(file);
  }
//-------------------------------------------------------------------------
tailaiFiledownload2(contentType2: any, fileName2: string) {
  return this.http.get('http://localhost:5160/api/lunchdatasets/download', { responseType: 'blob' })
    .subscribe((result: any) => {
      const blob = new Blob([result], { type: contentType2 });
      const url = window.URL.createObjectURL(blob);

      // Tạo một thẻ <a> tạm thời để tải xuống file
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName2;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("success");
    });
}
prepareDownload2() {
  const contentType = 'text/csv';
  const currentDate = new Date().toISOString().slice(0, 10); // Lấy ngày hiện tại dưới dạng chuỗi "YYYY-MM-DD"
  const fileName = `LUNCH_${currentDate}.csv`;

  this.tailaiFiledownload2(contentType, fileName);
}
onFileSelected2(event: any): void {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.onload = (e) => {
    const encodedData = new TextEncoder().encode(reader.result as string);

    const formdata = new FormData();
    const utf8Array = new Uint8Array(encodedData);
    const utf8Blob = new Blob([utf8Array], { type: 'text/plain' });
    formdata.append('file', utf8Blob);

    this.http.post('http://localhost:5160/api/lunchdatasets/upload', formdata, { responseType: 'text' }).subscribe(
      result => {
        console.log(result);
        if (result === 'File uploaded and processed.') {
          alert('Upload successful');
        } else {
          alert('Upload failed');
        }
      },
      error => {
        console.error(error);
        alert('Upload failed');
      }
    );
  };

  reader.readAsText(file);
}
//-------------------------------------------------------------------------
tailaiFiledownload3(contentType3: any, fileName3: string) {
  return this.http.get('http://localhost:5160/api/afnoondatasets/download', { responseType: 'blob' })
    .subscribe((result: any) => {
      const blob = new Blob([result], { type: contentType3 });
      const url = window.URL.createObjectURL(blob);

      // Tạo một thẻ <a> tạm thời để tải xuống file
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName3;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("success");
    });
}
prepareDownload3() {
  const contentType = 'text/csv';
  const currentDate = new Date().toISOString().slice(0, 10); // Lấy ngày hiện tại dưới dạng chuỗi "YYYY-MM-DD"
  const fileName = `AF_${currentDate}.csv`;

  this.tailaiFiledownload3(contentType, fileName);
}
onFileSelected3(event: any): void {
  const formdata = new FormData();
  formdata.append('file', event.target.files[0]);
  this.http.post('http://localhost:5160/api/afnoondatasets/upload', formdata, { responseType: 'text' }).subscribe(
    result => {
      console.log(result);
      if (result === 'File uploaded and processed.') {
        alert('Upload successful');
       
      } else {
        alert('Upload failed');
      }
    },
    error => {
      console.error(error);
      alert('Upload failed');
    
    }
  );
}
//-------------------------------------------------------------------------
tailaiFiledownload4(contentType3: any, fileName3: string) {
  return this.http.get('http://localhost:5160/api/desertdatasets/download', { responseType: 'blob' })
    .subscribe((result: any) => {
      const blob = new Blob([result], { type: contentType3 });
      const url = window.URL.createObjectURL(blob);

      // Tạo một thẻ <a> tạm thời để tải xuống file
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName3;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("success");
    });
}
prepareDownload4() {
  const contentType = 'text/csv';
  const currentDate = new Date().toISOString().slice(0, 10); // Lấy ngày hiện tại dưới dạng chuỗi "YYYY-MM-DD"
  const fileName = `DS_${currentDate}.csv`;

  this.tailaiFiledownload4(contentType, fileName);
}
onFileSelected4(event: any): void {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.onload = (e) => {
    const encodedData = new TextEncoder().encode(reader.result as string);

    const formdata = new FormData();
    const utf8Array = new Uint8Array(encodedData);
    const utf8Blob = new Blob([utf8Array], { type: 'text/plain' });
    formdata.append('file', utf8Blob);

    this.http.post('http://localhost:5160/api/desertdatasets/upload', formdata, { responseType: 'text' }).subscribe(
      result => {
        console.log(result);
        if (result === 'File uploaded and processed.') {
          alert('Upload successful');
        } else {
          alert('Upload failed');
        }
      },
      error => {
        console.error(error);
        alert('Upload failed');
      }
    );
  };

  reader.readAsText(file);
}
tailaiDsBS(){
  this.service.getbs().subscribe(data => {
    this.DsBS = data;
    console.log(data)
  });
 }

}
