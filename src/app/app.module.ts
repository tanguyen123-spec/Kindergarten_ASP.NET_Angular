import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QLNHComponent } from './qlnh/qlnh.component';
import { DsNhaphocComponent } from './qlnh/ds-nhaphoc/ds-nhaphoc.component';
import { ThemSuanhaphocComponent } from './qlnh/them-suanhaphoc/them-suanhaphoc.component';
import { QlsylilichComponent } from './qlsylilich/qlsylilich.component';
import { QlihocvienComponent } from './qlsylilich/qlihocvien/qlihocvien.component';
import { DsHocvienComponent } from './qlsylilich/qlihocvien/ds-hocvien/ds-hocvien.component';
import { ThemSuahocvienComponent } from './qlsylilich/qlihocvien/them-suahocvien/them-suahocvien.component';
import { QligiaovienComponent } from './qlsylilich/qligiaovien/qligiaovien.component';
import { DsGiaovienComponent } from './qlsylilich/qligiaovien/ds-giaovien/ds-giaovien.component';
import { ThemSuagiaovienComponent } from './qlsylilich/qligiaovien/them-suagiaovien/them-suagiaovien.component';
import { DsPhuhuynhComponent } from './qlsylilich/qliPhuHuynh/ds-phuhuynh/ds-phuhuynh.component';
import { ThemSuaPhuhuynhComponent } from './qlsylilich/qliPhuHuynh/them-sua-phuhuynh/them-sua-phuhuynh.component';
import { QlsuckhoeComponent } from './qlsuckhoe/qlsuckhoe.component';
import { SkdinhkiComponent } from './qlsuckhoe/skdinhki/skdinhki.component';
import { SktrongtuanComponent } from './qlsuckhoe/sktrongtuan/sktrongtuan.component';
import { DsSkdinhkiComponent } from './qlsuckhoe/skdinhki/ds-skdinhki/ds-skdinhki.component';
import { ThemSuaskdinhkiComponent } from './qlsuckhoe/skdinhki/them-suaskdinhki/them-suaskdinhki.component';
import { DsSktrongtuanComponent } from './qlsuckhoe/sktrongtuan/ds-sktrongtuan/ds-sktrongtuan.component';
import { ThemSuasktrongtuanComponent } from './qlsuckhoe/sktrongtuan/them-suasktrongtuan/them-suasktrongtuan.component';
import { QlylopComponent } from './qlylop/qlylop.component';
import { LopComponent } from './qlylop/lop/lop.component';
import { DsLopComponent } from './qlylop/lop/ds-lop/ds-lop.component';
import { ThemSualopComponent } from './qlylop/lop/them-sualop/them-sualop.component';
import { LoailopComponent } from './qlylop/loailop/loailop.component';
import { DsLoailopComponent } from './qlylop/loailop/ds-loailop/ds-loailop.component';
import { ThemSualoailopComponent } from './qlylop/loailop/them-sualoailop/them-sualoailop.component';
import { DsThoikhoabieuComponent } from './qlylop/tk-bieu/ds-thoikhoabieu/ds-thoikhoabieu.component';
import { ThemSuathoikhoabieuComponent } from './qlylop/tk-bieu/them-suathoikhoabieu/them-suathoikhoabieu.component';
import { TiethocComponent } from './qlylop/tk-bieu/tiethoc/tiethoc.component';
import { DsTiethocComponent } from './qlylop/tk-bieu/tiethoc/ds-tiethoc/ds-tiethoc.component';
import { ThemSuatiethocComponent } from './qlylop/tk-bieu/tiethoc/them-suatiethoc/them-suatiethoc.component';
import { LoaiGiaovienComponent } from './qlsylilich/qligiaovien/loai-giaovien/loai-giaovien.component';
import { DsLoaigiaovienComponent } from './qlsylilich/qligiaovien/loai-giaovien/ds-loaigiaovien/ds-loaigiaovien.component';
import { ThemSualoaigiaovienComponent } from './qlsylilich/qligiaovien/loai-giaovien/them-sualoaigiaovien/them-sualoaigiaovien.component';
import { QlThuchiComponent } from './ql-thuchi/ql-thuchi.component';
import { QlTienhocComponent } from './ql-thuchi/ql-tienhoc/ql-tienhoc.component';
import { DsTienhocComponent } from './ql-thuchi/ql-tienhoc/ds-tienhoc/ds-tienhoc.component';
import { ThemSuatienhocComponent } from './ql-thuchi/ql-tienhoc/them-suatienhoc/them-suatienhoc.component';
import { QlhoatdongComponent } from './ql-thuchi/ql-tienhoc/qlhoatdong/qlhoatdong.component';
import { DsHoatdongComponent } from './ql-thuchi/ql-tienhoc/qlhoatdong/ds-hoatdong/ds-hoatdong.component';
import { ThemSuahoatdongComponent } from './ql-thuchi/ql-tienhoc/qlhoatdong/them-suahoatdong/them-suahoatdong.component';
import { QlChiphiphaithuComponent } from './ql-thuchi/ql-tienhoc/ql-chiphiphaithu/ql-chiphiphaithu.component';
import { DsChiphiphaithuComponent } from './ql-thuchi/ql-tienhoc/ql-chiphiphaithu/ds-chiphiphaithu/ds-chiphiphaithu.component';
import { ThemSuachiphiphaithuComponent } from './ql-thuchi/ql-tienhoc/ql-chiphiphaithu/them-suachiphiphaithu/them-suachiphiphaithu.component';
import { QlPhieudiemdanhComponent } from './ql-thuchi/ql-tienhoc/ql-phieudiemdanh/ql-phieudiemdanh.component';
import { DsPhieudiemdanhComponent } from './ql-thuchi/ql-tienhoc/ql-phieudiemdanh/ds-phieudiemdanh/ds-phieudiemdanh.component';
import { ThemSuaphieudiemdanhComponent } from './ql-thuchi/ql-tienhoc/ql-phieudiemdanh/them-suaphieudiemdanh/them-suaphieudiemdanh.component';
import { ThongkeComponent } from './ql-thuchi/thongke/thongke.component';
import { DsThongkeComponent } from './ql-thuchi/thongke/ds-thongke/ds-thongke.component';
import { QlBepComponent } from './ql-bep/ql-bep.component';
import { QlthucdonComponent } from './ql-bep/qlthucdon/qlthucdon.component';
import { DsthucdonComponent } from './ql-bep/qlthucdon/dsthucdon/dsthucdon.component';
import { ThemSuathucdonComponent } from './ql-bep/qlthucdon/them-suathucdon/them-suathucdon.component';
import { QlmonantheongayComponent } from './ql-bep/qlmonantheongay/qlmonantheongay.component';
import { DsMonantheongayComponent } from './ql-bep/qlmonantheongay/ds-monantheongay/ds-monantheongay.component';
import { ThemSuamonantheongayComponent } from './ql-bep/qlmonantheongay/them-suamonantheongay/them-suamonantheongay.component';
import { QlYkienComponent } from './ql-ykien/ql-ykien.component';
import { DsYkienComponent } from './ql-ykien/ds-ykien/ds-ykien.component';
import { ThemSuaykienComponent } from './ql-ykien/them-suaykien/them-suaykien.component';
import { QlPhieubengoanComponent } from './ql-phieubengoan/ql-phieubengoan.component';
import { DsPhieubengoanComponent } from './ql-phieubengoan/ds-phieubengoan/ds-phieubengoan.component';
import { ThemSuaPhieubengoanComponent } from './ql-phieubengoan/them-sua-phieubengoan/them-sua-phieubengoan.component';
import { TemplateComponent } from './template/template.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { ImagesuckhoehangngayComponent } from './qlsuckhoe/imagesuckhoehangngay/imagesuckhoehangngay.component';
import { DsImagesuckhoehangngayComponent } from './qlsuckhoe/imagesuckhoehangngay/ds-imagesuckhoehangngay/ds-imagesuckhoehangngay.component';
import { ThemSuaimagesuckhoehangngayComponent } from './qlsuckhoe/imagesuckhoehangngay/them-suaimagesuckhoehangngay/them-suaimagesuckhoehangngay.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrangchuComponent } from './trangchu/trangchu.component';
import {bootstrapApplication} from '@angular/platform-browser';
import { TonghopLophocMMComponent } from './qlnh/tonghop-lophoc-mm/tonghop-lophoc-mm.component';
import { SapxeplopComponent } from './qlylop/sapxeplop/sapxeplop.component';
import { SapxeploptheonamComponent } from './qlylop/sapxeploptheonam/sapxeploptheonam.component';
import { Utf8Pipe } from './utf8.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { AuthGuardComponent } from './auth.guard/auth.guard.component';

@NgModule({
  declarations: [
    AppComponent,
    QLNHComponent,
    DsNhaphocComponent,
    ThemSuanhaphocComponent,
    QlsylilichComponent,
    QlihocvienComponent,
    DsHocvienComponent,
    ThemSuahocvienComponent,
    QligiaovienComponent,
    DsGiaovienComponent,
    ThemSuagiaovienComponent,
    DsPhuhuynhComponent,
    ThemSuaPhuhuynhComponent,
    QlsuckhoeComponent,
    SkdinhkiComponent,
    SktrongtuanComponent,
    DsSkdinhkiComponent,
    ThemSuaskdinhkiComponent,
    DsSktrongtuanComponent,
    ThemSuasktrongtuanComponent,
    QlylopComponent,
    LopComponent,
    DsLopComponent,
    ThemSualopComponent,
    LoailopComponent,
    DsLoailopComponent,
    ThemSualoailopComponent,
    DsThoikhoabieuComponent,
    ThemSuathoikhoabieuComponent,
    TiethocComponent,
    DsTiethocComponent,
    ThemSuatiethocComponent,
    LoaiGiaovienComponent,
    DsLoaigiaovienComponent,
    ThemSualoaigiaovienComponent,
    QlThuchiComponent,
    QlTienhocComponent,
    DsTienhocComponent,
    ThemSuatienhocComponent,
    QlhoatdongComponent,
    DsHoatdongComponent,
    ThemSuahoatdongComponent,
    QlChiphiphaithuComponent,
    DsChiphiphaithuComponent,
    ThemSuachiphiphaithuComponent,
    QlPhieudiemdanhComponent,
    DsPhieudiemdanhComponent,
    ThemSuaphieudiemdanhComponent,
    ThongkeComponent,
    DsThongkeComponent,
    QlBepComponent,
    QlthucdonComponent,
    DsthucdonComponent,
    ThemSuathucdonComponent,
    QlmonantheongayComponent,
    DsMonantheongayComponent,
    ThemSuamonantheongayComponent,
    QlYkienComponent,
    DsYkienComponent,
    ThemSuaykienComponent,
    QlPhieubengoanComponent,
    DsPhieubengoanComponent,
    ThemSuaPhieubengoanComponent,
    TemplateComponent,
    NavbarComponent,
    FooterComponent,
    ImagesuckhoehangngayComponent,
    DsImagesuckhoehangngayComponent,
    ThemSuaimagesuckhoehangngayComponent,
    TrangchuComponent,
    SapxeplopComponent,
    SapxeploptheonamComponent,
    Utf8Pipe,
    AuthGuardComponent,
 


    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
   
  ],
  providers: [AuthGuardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
