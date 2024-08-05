import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5160/api";
  readonly APIUrl2 = "http://localhost:5160/";
  constructor(private http:HttpClient) { }
  logout(): void {
    localStorage.removeItem('token');
    // Thực hiện các bước cần thiết để đăng xuất người dùng
    window.location.href = 'http://localhost:4200/';
  }
  handleError(error: any) {
    // Xử lý lỗi ở đây (ví dụ: hiển thị thông báo lỗi, ghi log, ...)
    console.error('Có lỗi xảy ra:', error);
    return throwError(error);
  }
  //--------Trang chu--------------
  //Thoikhoabieu-----------------------------------------------------------
  gettkb(): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/Thoikhoabieu');
  }
  gettkbid(id: any): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/Thoikhoabieu/'+id);
  }
  addtkb(tkb: any): Observable<any> {
    return this.http.post<any>(this.APIUrl+'/Thoikhoabieu/createbymodels', tkb);
  }
  
  puttkb(tkb: any): Observable<any> {
    const url = `${this.APIUrl}/Thoikhoabieu/${tkb.matkb}`
    return this.http.put<any>(url, tkb);
  }
  
  deletetkb(matkb: any): Observable<any> {
    const url = `${this.APIUrl}/Thoikhoabieu/${matkb}`;
    return this.http.delete<any>(url);
  }

  //thucdon--------------------------------------------------
  gettd(): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/DsthucDon');
  }
  gettdbyID(id: any): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/DsthucDon/'+id);
  }
  addtd(td: any): Observable<any> {
    return this.http.post<any>(this.APIUrl+'/DsthucDon/createbymodels', td);
  }
  
  puttd(td: any): Observable<any> {
    const url = `${this.APIUrl}/DsthucDon/${td.menuId}`
    return this.http.put<any>(url, td);
  }
  
  deletetd(menuId: any): Observable<any> {
    const url = `${this.APIUrl}/DsthucDon/${menuId}`;
    return this.http.delete<any>(url);
  }
  //Danh sách món ăn theo ngày ---------------
  getMenuIdDanhs(): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/Danhmonantheongay/menuId');
  }
  addDSmaTn(td: any): Observable<any> {
    return this.http.post<any>(this.APIUrl+'/Danhmonantheongay/models', td);
  }

  //lấy menuid theo ngày hiện tại -----------------------
  getMenuIdDanhsTd(): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/Danhmonantheongay/menuIdtd');
  }
  //danh sách nhâp học ---------------------------------
  getnh(): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/Donnhaphoc');
  }
  getnhbyID(id: any): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/Donnhaphoc/'+id);
  }
  ///-------------Nhap hocx
  addnh(nh: any): Observable<any> {
    console.log(nh)
    return this.http.post<any>(this.APIUrl+'/Donnhaphoc/models', nh).pipe(
      catchError(this.handleError)
    );
  }
  
  putnh(nh: any): Observable<any> {
    const url = `${this.APIUrl}/Donnhaphoc/${nh.afaId}`
    return this.http.put<any>(url, nh);
  }
  
  deletenh(afaId: any): Observable<any> {
    const url = `${this.APIUrl}/Donnhaphoc/${afaId}`;
    return this.http.delete<any>(url);
  }
   //danh sách học viên ---------------------------------
   gethv(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.http.get<any>(this.APIUrl+'/HocvienService',httpOptions);
  }
  gethvbyID(id: any): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/HocvienService/'+id);
  }
  addhv(hv: any): Observable<any> {
    return this.http.post<any>(this.APIUrl+'/HocvienService/CreateByModels', hv);
  }
  
  puthv(hv: any): Observable<any> {
    const url = `${this.APIUrl}/HocvienService/${hv.childResumeId}`
    return this.http.put<any>(url, hv);
  }
  
  deletehv(childResumeId: any): Observable<any> {
    const url = `${this.APIUrl}/HocvienService/${childResumeId}`;
    return this.http.delete<any>(url);
  }
  getTotalchiphi(): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/HocvienService/total-chiphi');
  }
//---------Upliad File ------------
uploadFile(file:any) {
  return this.http.post(this.APIUrl + '/HocvienService/UploadImage',file);
}


  //Phụ huynh -------------------------------------
  getPH(): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/Phuhuynh');
  }
  getPHbyID(id: any): Observable<any> {
    return this.http.get<any>(this.APIUrl+'/Phuhuynh/'+id);
  }
  addPH(ph: any): Observable<any> {
    return this.http.post<any>(this.APIUrl+'/Phuhuynh/create-by-models', ph);
  }
  
  putPH(ph: any): Observable<any> {
    const url = `${this.APIUrl}/Phuhuynh/${ph.childResumeId}`
    return this.http.put<any>(url, ph);
  }
  
  deletePH(parentResumeId: any): Observable<any> {
    const url = `${this.APIUrl}/Phuhuynh/${parentResumeId}`;
    return this.http.delete<any>(url);
  }
//------Lop --------------------------------------------------------
getClas(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Lop');
}
getclasbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Lop/'+id);
}
addclas(l: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Lop/create-by-models', l);
}

putclas(l: any): Observable<any> {
  const url = `${this.APIUrl}/Lop/${l.classId}`
  return this.http.put<any>(url, l);
}

deleteclas(classId: any): Observable<any> {
  const url = `${this.APIUrl}/Lop/${classId}`;
  return this.http.delete<any>(url);
}
getfilterClas_hv(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/HocvienService/class/'+id);
}
//-------Loại lớp -------------------------
getClasT(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Loailop');
}
getclasTbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Loailop/'+id);
}
addclasT(ll: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Loailop/CreateByModels', ll);
}

putclasT(ll: any): Observable<any> {
  const url = `${this.APIUrl}/Loailop/${ll.classId}`
  return this.http.put<any>(url, ll);
}

deleteclasT(classtypeId: any): Observable<any> {
  const url = `${this.APIUrl}/Loailop/${classtypeId}`;
  return this.http.delete<any>(url);
}
//-----------------Hiển thị lớp bằng năm và classtypeid và sắp xếp lớp cũ đến lớp mới 
getNH_clasty(namhoc: string, classtypeId: string): Observable<any> {
  const url = `${this.APIUrl}/Lop/display/${namhoc}/${classtypeId}`;
  return this.http.get<any>(url);
}
addNH_clasty(oldClassId: string, newClassId: string, ll: any): Observable<any> {
  const url = `${this.APIUrl}/HocvienService/hocvien/update-classid`;
  const params = new HttpParams()
    .set('oldClassId', oldClassId)
    .set('newClassId', newClassId);
    
  return this.http.post<any>(url, ll, { params });
}
//0--------- Phiếu điểm danh -------------
getPDD(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Phieudiemdanh');
}
getPDDbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Phieudiemdanh/'+id);
}
addPDD(pdd: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Phieudiemdanh/createbymodels', pdd);
}

putPDD(pdd: any): Observable<any> {
  const url = `${this.APIUrl}/Phieudiemdanh/${pdd.diemdanhId}`
  return this.http.put<any>(url, pdd);
}

deletePDD(diemdanhId: any): Observable<any> {
  const url = `${this.APIUrl}/Phieudiemdanh/${diemdanhId}`;
  return this.http.delete<any>(url);
}
//---------Hoatdong----------------
getHD(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Hoatdong');
}
getHDbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Hoatdong/'+id);
}
addHD(hd: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Hoatdong/create-by-models', hd);
}

putHD(hd: any): Observable<any> {
  const url = `${this.APIUrl}/Hoatdong/${hd.mahoatdong}`
  return this.http.put<any>(url, hd);
}

deleteHD(mahoatdong: any): Observable<any> {
  const url = `${this.APIUrl}/Hoatdong/${mahoatdong}`;
  return this.http.delete<any>(url);
}
//------ Hoat dong chinh ----------
getHDC(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Hoatdonghchinh');
}
getHDCbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Hoatdonghchinh/'+id);
}
addHDC(hdc: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Hoatdonghchinh', hdc);
}

putHDC(hdc: any): Observable<any> {
  const url = `${this.APIUrl}/Hoatdonghchinh/${hdc.maHoatdongchinh}`
  return this.http.put<any>(url, hdc);
}

deleteHDC(maHoatdongchinh: any): Observable<any> {
  const url = `${this.APIUrl}/Hoatdonghchinh/${maHoatdongchinh}`;
  return this.http.delete<any>(url);
}
//------- Tạo bảng chi phí cho từng học viên và cho tất cả học viên-------------
addChiphichinh(ChildResumeId: string, thang_namhoc: string) {
  const url = this.APIUrl+`/chiphichinh/create-chiphichinh`;
  const params = { ChildResumeId: ChildResumeId, thang_namhoc: thang_namhoc };
  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this.http.post(url, null, { headers: headers, params: params });
}
addChiphichinhByThangNamhoc(thang_namhoc:any) {
  const url = this.APIUrl+`/chiphichinh/create-chiphichinhall`;
  const params = { thang_namhoc: thang_namhoc};
  const headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this.http.post(url, null, { headers: headers, params: params });
}
//-------------------- Bảng giáo viên -------------------------------------
getGV(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Giaovien');
}
getGVbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Giaovien/'+id);
}
addGV(gv: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Giaovien/CreateByModels', gv);
}

putGV(gv: any): Observable<any> {
  const url = `${this.APIUrl}/Giaovien/${gv.magiaovien}`
  return this.http.put<any>(url, gv);
}

deletegv(magiaovien: any): Observable<any> {
  const url = `${this.APIUrl}/Giaovien/${magiaovien}`;
  return this.http.delete<any>(url);
}
//--------- Loại giáo viên ----------------
getLGV(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Loaigiaovien');
}
getLGVbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Loaigiaovien/'+id);
}
addLGV(gv: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Loaigiaovien/CreateByModels', gv);
}

putLGV(gv: any): Observable<any> {
  const url = `${this.APIUrl}/Loaigiaovien/${gv.magiaovien}`
  return this.http.put<any>(url, gv);
}

deleteLgv(magiaovien: any): Observable<any> {
  const url = `${this.APIUrl}/Loaigiaovien/${magiaovien}`;
  return this.http.delete<any>(url);
}
//---------------- Chi phi  phu-----------------------
addCPP(cpp: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Chiphiphu/models', cpp);
}
getCPP(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Chiphiphu');
}
//------------ Tìm kiếm chi phí phụ và chi phí chính qua mã học viên--------
getCPCID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Chiphichinh/hocvien-chiphichinh/'+id);
}
getCPPID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Chiphiphu/hocvien-chiphiPHU/'+id);
}
//------------- Tổng số buổi điểm danh----------
getTotalSBDD(childResumeId : any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Phieudiemdanh/totaldiemdanh/'+childResumeId );
}
//-------------Tạo biên lai --------------------
addTBL(tbl: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Bienlai/CreateByModels', tbl);
}
//-------- Hiển thị biên lai -------------------
getBL(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Bienlai');
}
//--------Thống Kê --------------------------------
getTK(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Bienlai/thong-ke-theo-thang-nam-hoc');
}
//----------------------- Ý kiến -----------------------------------
getYK(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Ykien');
}
getYKbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Ykien/'+id);
}
addYK(yk: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Ykien', yk);
}

putYK(yk: any): Observable<any> {
  const url = `${this.APIUrl}/Ykien/${yk.opinionId}`
  return this.http.put<any>(url, yk);
}

deleteYK(opinionId: any): Observable<any> {
  const url = `${this.APIUrl}/Ykien/${opinionId}`;
  return this.http.delete<any>(url);
}
///--------Chủ đề ý kiến --------
getcd(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Chude');
}
getcdbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Chude/'+id);
}
addcd(cd: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Chude', cd);
}

putcd(cd: any): Observable<any> {
  const url = `${this.APIUrl}/Chude/${cd.machude}`
  return this.http.put<any>(url, cd);
}

deletecd(machude: any): Observable<any> {
  const url = `${this.APIUrl}/Chude/${machude}`;
  return this.http.delete<any>(url);
}
//---------- Sức khỏe định kì --------------
getSKDK(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Suckhoedinhki');
}
getSKDKbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Suckhoedinhki/'+id);
}
addSKDK(skdk: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Suckhoedinhki/createbymodels', skdk);
}

putSKDK(skdk: any): Observable<any> {
  const url = `${this.APIUrl}/Suckhoedinhki/${skdk.skdkId}`
  return this.http.put<any>(url, skdk);
}

deleteSKDK(skdkId: any): Observable<any> {
  const url = `${this.APIUrl}/Suckhoedinhki/${skdkId}`;
  return this.http.delete<any>(url);
}
DowloadSKDK(): Observable<any> {
  const url = `${this.APIUrl}/Suckhoedinhki/download`;
  return this.http.get<any>(url);
}
UploadSKDK(skdk: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Suckhoedinhki/upload', skdk);
}
addSKbyClID(skcl: any): Observable<any> {
  const url = `${this.APIUrl}/Suckhoedinhki/create-for-class?malop=${skcl}`;
  const body = {}; // Replace {} with the actual body object you want to send

  return this.http.post<any>(url, body);
}

//------Imgasuckhoehangngay -------------
addsuckhoeImage(imgsk: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/ImagesTinhtrangsuckhoe', imgsk);
}
putsuckhoeImage(imgsk: any): Observable<any> {
  const url = `${this.APIUrl}/ImagesTinhtrangsuckhoe/${imgsk.imagesTinhtrangsuckhoeId}`
  return this.http.put<any>(url, imgsk);
}
uploadFile2(file:any) {
  return this.http.post(this.APIUrl + '/ImagesTinhtrangsuckhoe/UploadImage',file);
}
//-------Sức khỏe trong tuần ------------
getSKTT(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Tinhtrangsuckhoe');
}
getSKTTbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Tinhtrangsuckhoe/'+id);
}
addSKTT(sktt: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Tinhtrangsuckhoe/models', sktt);
}

putSKTT(sktt: any): Observable<any> {
  const url = `${this.APIUrl}/Tinhtrangsuckhoe/${sktt.ttskId}`
  return this.http.put<any>(url, sktt);
}
deleteSKTT(ttskId: any): Observable<any> {
  const url = `${this.APIUrl}/Tinhtrangsuckhoe/${ttskId}`;
  return this.http.delete<any>(url);
}
//-------------Thòi khóa biểu theo tuần -----------------
getTKBTN(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Tiethoc');
}
getTKBTNbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Tiethoc/'+id);
}
addTKBTN(sktt: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Tiethoc/CreatebyModels', sktt);
}

putTKBTN(sktt: any): Observable<any> {
  const url = `${this.APIUrl}/Tiethoc/${sktt.tiethocid}`
  return this.http.put<any>(url, sktt);
}
deleteTKBTN(tiethocid: any): Observable<any> {
  const url = `${this.APIUrl}/Tiethoc/${tiethocid}`;
  return this.http.delete<any>(url);
}
getTKBTNbyTKBID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Tiethoc/ByMatkb/'+id);
}
//------- FOOD DATASET---------------------------
getbs(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/bfdatasets');
}
getaf(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/afnoondatasets');
}
getLunch(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/lunchdatasets');
}

getDers(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/desertdatasets');
}
//----------------dELETE ALLL pHIEUDIEMDANH CPP CPC--------------
deleteallPhieudiemdanhbyhv(id:any):Observable<any>{
  return this.http.delete<any>(this.APIUrl+'/Phieudiemdanh/deletebychildresumeid/'+id)
}
deleteallCPCbyhv(id:any):Observable<any>{
  return this.http.delete<any>(this.APIUrl+'/Chiphichinh/delete-by-childresumeid/'+id)
}
deleteallCPPbyhv(id:any):Observable<any>{
  return this.http.delete<any>(this.APIUrl+'/Chiphiphu/delete-by-childresumeid/'+id)
}
//--------------Login--------
Login(email: string, password: string): Observable<any> {
  const data = { email, password }; // Tạo đối tượng chứa email và password

  return this.http.post<any>(this.APIUrl2 + 'Login', data);
}
//--------Phieu be ngoan -------
getPBN(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Phieubengoan');
}
getPBNbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Phieubengoan/'+id);
}
addPBN(pbn: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Phieubengoan/createbymodels', pbn);
}

putPBN(pbn: any): Observable<any> {
  const url = `${this.APIUrl}/Phieubengoan/${pbn.phbnId}`
  return this.http.put<any>(url, pbn);
}

deletePBN(pbnid: any): Observable<any> {
  const url = `${this.APIUrl}/Phieubengoan/${pbnid}`;
  return this.http.delete<any>(url);
}
//------- Người dùng --------
getND(): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Nguoidung');
}
getNDbyID(id: any): Observable<any> {
  return this.http.get<any>(this.APIUrl+'/Nguoidung/'+id);
}
addND(pbn: any): Observable<any> {
  return this.http.post<any>(this.APIUrl+'/Nguoidung/createbymodels', pbn);
}

putND(pbn: any): Observable<any> {
  const url = `${this.APIUrl}/Nguoidung/${pbn.phbnId}`
  return this.http.put<any>(url, pbn);
}

deleteND(pbnid: any): Observable<any> {
  const url = `${this.APIUrl}/Nguoidung/${pbnid}`;
  return this.http.delete<any>(url);
}
}
