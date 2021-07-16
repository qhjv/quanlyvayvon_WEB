/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import solution3 from "../../src/assest/images/solution3.png"
import intro1 from "../assest/images/intro1.png"
import intro2 from "../assest/images/intro2.png"
import intro3 from "../assest/images/intro3.png"
import intro4 from "../assest/images/intro4.png"
import why1 from "../assest/images/why1.jpg"
import why2 from "../assest/images/why2.jpg"
import why3 from "../assest/images/why3.jpg"
import morepage from "../assest/images/morePageImg.jpg"
import Form from '../components/form';
import Tel from '../components/tel';
import $ from "jquery"


FullPage.propTypes = {
    
};

function FullPage(props) {

    const handleForm = () => {
        $(".formPage").addClass("hien")
        $(".overflowPage").addClass("hien")
    }
    const handleCloseForm = () => {
        $(".formPage").removeClass("hien")
        $(".overflowPage").removeClass("hien")
    }
    const handleMenu = () => {
        $("ul.nav.navbar-nav").toggleClass("hien")
    }
    const handleClickTrangChu=()=>{
        $('html,body').animate({
            scrollTop:0
        },1000 );
}
    const handleClickGioiThieu=()=>{
            $('html,body').animate({
                scrollTop:$(".whyPage").offset().top-70 
            },1000 );
    }
    const handleClickVayTinChap=()=>{
        $('html,body').animate({
            scrollTop:$(".morePage--infos").offset().top-70 
        },1000 );
    }
    const handleClickVayLienHe=()=>{
        $('html,body').animate({
            scrollTop:$(".footerPage").offset().top 
        },1000 );
    }
    return (
        <div>
        <div className="fullPage">
          <header>
            <div className="container">
              <nav className="navbar d-flex align-items-center ">
                <div className="navbar-header">
                  <div className="navbar-brand_top">VAYTINCHAP</div>
                  <div className="navbar-brand_bottom">VAY TIÊU DÙNG TÍN CHẤP</div>
                </div>
                <ul className="nav navbar-nav">
                  <li><a href="#" onClick={handleClickTrangChu}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1664 1896.0833" className fill="rgba(9, 26, 89, 1)"> <path d="M1408 992v480q0 26-19 45t-45 19H960v-384H704v384H320q-26 0-45-19t-19-45V992q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7L832 424l-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5T37 878l719-599q32-26 76-26t76 26l244 204V288q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" /> </svg>
                      TRANG CHỦ
                    </a></li>
                  <li><a className="a-gioithieu" href="#" onClick={handleClickGioiThieu}>GIỚI THIỆU</a></li>
                  <li><a href="#" onClick={handleClickVayTinChap}>VAY TÍN CHẤP</a></li>
                  <li><a href="#" onClick={handleClickVayLienHe}>LIÊN HỆ</a></li>
                </ul>
                <div className="menu-btn" onClick={handleMenu}>
                  <i className="fas fa-bars" />
                </div>
              </nav>
            </div>
          </header>
          <div className="bannerPage">
            <div className="container">
              <div className="bannerPage--intro">
                <div className="bannerPage--intro__content">
                  <div>HỖ TRỢ VAY TÍN CHẤP</div>
                </div>
                <div className="bannerPage--intro__contact">
                  <div className="bannerPage--intro__contact-title">Chuyên viên tư vấn:<span> Mr.Huy</span></div>
                  <div className="bannerPage--intro__contact-div bannerPage--intro__contact-sdt d-flex  align-items-end">
                    <svg className=" bannerPage--intro__contact-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1536 1896.0833" fill="rgba(201, 17, 17, 1.0)"> <path d="M1280 1193q0-11-2-16-3-8-38.5-29.5T1151 1098l-53-29q-5-3-19-13t-25-15-21-5q-18 0-47 32.5t-57 65.5-44 33q-7 0-16.5-3.5T853 1157t-17-9.5-14-8.5q-99-55-170.5-126.5T525 842q-2-3-8.5-14t-9.5-17-6.5-15.5T497 779q0-13 20.5-33.5t45-38.5 45-39.5T628 631q0-10-5-21t-15-25-13-19q-3-6-15-28.5T555 492t-26.5-47.5-25-40.5-16.5-18-16-2q-48 0-101 22-46 21-80 94.5T256 631q0 16 2.5 34t5 30.5 9 33 10 29.5 12.5 33 11 30q60 164 216.5 320.5T843 1358q6 2 30 11t33 12.5 29.5 10 33 9 30.5 5 34 2.5q57 0 130.5-34t94.5-80q22-53 22-101zm256-777v960q0 119-84.5 203.5T1248 1664H288q-119 0-203.5-84.5T0 1376V416q0-119 84.5-203.5T288 128h960q119 0 203.5 84.5T1536 416z" /> </svg>
                    0358.839.559
                  </div>
                  <div className="bannerPage--intro__contact-div bannerPage--intro__contact-zalo d-flex  align-items-end">
                    <svg className="bannerPage--intro__contact-svg bannerPage--intro__contact-svg2" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1056.9019 1896.0833" fill="rgba(201, 17, 17, 1)"> <path d="M464 1408q0-33-23.5-56.5T384 1328t-56.5 23.5T304 1408t23.5 56.5T384 1488t56.5-23.5T464 1408zm208-160V544q0-13-9.5-22.5T640 512H128q-13 0-22.5 9.5T96 544v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zM480 400q0-16-16-16H304q-16 0-16 16t16 16h160q16 0 16-16zm288-16v1024q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V384q0-52 38-90t90-38h512q52 0 90 38t38 90z" /> </svg>
                    Zalo: 0358.839.559
                  </div>
                </div>
                <div className="bannerPage--intro__button">
                  <div onClick={handleForm}>
                    ĐĂNG KÝ TƯ VẤN
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="solutionsPage">
            <div className="container">
              <div className="solutionsPage-content">CUNG CẤP GIẢI PHÁP</div>
              <div className="solutionsPage-solutions d-flex justify-content-around align-items-center">
                <div className="solution">
                  <div className="solution--svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1542.7035 1896.0833" className fill="rgba(201, 17, 17, 1)"> <path d="M768 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5T103 896 0 768V598q119 84 325 127t443 43zm0 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5T0 1536v-170q119 84 325 127t443 43zm0-384q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5T0 1152V982q119 84 325 127t443 43zM768 0q208 0 385 34.5t280 93.5 103 128v128q0 69-103 128t-280 93.5T768 640t-385-34.5T103 512 0 384V256q0-69 103-128t280-93.5T768 0z" /> </svg>
                  </div>
                  <h5>VAY KHÔNG CẦN THẾ CHẤP</h5>
                </div>
                <div className="solution">
                  <div className="solution--svg solution--svg2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1920 1896.0833" className fill="rgba(201, 17, 17, 1)"> <path d="M1879 952q0 31-31 66l-336 396q-43 51-120.5 86.5T1248 1536H160q-34 0-60.5-13T73 1480q0-31 31-66l336-396q43-51 120.5-86.5T704 896h1088q34 0 60.5 13t26.5 43zm-343-344v160H704q-94 0-197 47.5T343 935L6 1331l-5 6q0-4-.5-12.5T0 1312V352q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158z" /> </svg>
                  </div>
                  <h5>VAY KHÔNG CẦN GIẤY TỜ TUỲ THÂN</h5>
                </div>
                <div className="solution">
                  <div className="solution--svg solution--svg3">
                    <img src={solution3} alt="" />
                  </div>
                  <h5>VAY KHÔNG CẦN TÀI SẢN ĐẢM BẢO</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="introsPage">
            <div className="container d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="intro col-md-3 col-lg-3">
                  <img src={intro1} alt="" />
                  <h5>VAY NHANH TRONG 24H</h5>
                </div>
                <div className="intro col-md-3 col-lg-3">
                  <img src={intro2} alt="" />
                  <h5>LÃI SUẤT ƯU ĐÃI</h5>
                </div>
                <div className="intro col-md-3 col-lg-3">
                  <img src={intro3} alt="" />
                  <h5>THỦ TỤC GIẢI NGÂNNHANH CHÓNG</h5>
                </div>
                <div className="intro col-md-3 col-lg-3">
                  <img src={intro4} alt="" />
                  <h5>PHƯƠNG THỨC THANH TOÁN LINH HOẠT - TIỀN MẶT CHUYỂN KHOẢN</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="whyPage">
            <div className="container d-flex justify-content-center align-items-center flex-column">
              <div className="whyPage-content">TẠI SAO CHỌN CHÚNG TÔI</div>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="listWhy col-md-4 col-lg-4">
                  <img src={why1} alt="" />
                </div>
                <div className="listWhy col-md-4 col-lg-4">
                  <img src={why2} alt="" />
                </div>
                <div className="listWhy col-md-4 col-lg-4">
                  <img src={why3} alt="" />
                </div>
              </div>
              <div className="whyPage-button">
                <a href="tel:0358839559">
                  HOTLINE: 0358.839.559
                </a>
              </div>
            </div>
          </div>
          <div className="morePage">
            <div className="container morePage--container d-flex justify-content-center align-items-center flex-column">
              <div className="row">
                <div className="morePage--img col-md-4 col-lg-4">
                  <img src={morepage} alt="" />
                </div>
                <div className="morePage--infos col-md-8 col-lg-8">
                  <div className="container ">
                    <div className="morePage--infos_content">VAY TÍN CHẤP</div>
                    <p className="morePage--infos_p">Gói vay theo lương của chúng tôi là gói vay dành cho các cá nhân đang đi làm hưởng lương hàng tháng. Cơ sở để cho vay phụ thuộc vào mức lương của người lao động.</p>
                    <div className="row">
                      <div className="morePage--info__user morePage--info col-md-6 col-lg-6">
                        <div className="morePage--info_header">Đối tượng:</div>
                        <div className="morePage--info_lists">
                          <ul className="morePage--info__ul">
                            <li className="morePage--info__li">Độ tuổi từ 21 đến 55 tuổi đến thời điểm tất toán.</li>
                            <li className="morePage--info__li">Làm việc tại các công ty, tập đoàn, cơ quan, đoàn thể nhà nước, bệnh viện, trường học...</li>
                          </ul>
                        </div>
                      </div>
                      <div className="morePage--info__adv morePage--info col-md-6 col-lg-6">
                        <div className="morePage--info_header">Ưu điểm:</div>
                        <div className="morePage--info_lists">
                          <ul className="morePage--info__ul">
                            <li className="morePage--info__li">Không thế chấp tài sản</li>
                            <li className="morePage--info__li">Hỗ trợ vay lên đến 10 lần thu nhập</li>
                            <li className="morePage--info__li">Thờ gian vay linh hoạt 12, 24, 36, 48 tháng</li>
                            <li className="morePage--info__li">Nhận tiền giải ngân nhanh trong 24 - 72 tiếng</li>
                            <li className="morePage--info__li">Tất toán sớm sau 3 tháng giải ngân</li>
                          </ul>
                        </div>
                      </div>
                      <div className="orePage--info__profile morePage--info col-md-6 col-lg-6">
                        <div className="morePage--info_header">Hồ sơ:</div>
                        <div className="morePage--info_lists">
                          <ul className="morePage--info__ul">
                            <li className="morePage--info__li">CMND/ CCCD/ Hộ chiếu</li>
                            <li className="morePage--info__li" />
                            <li className="morePage--info__li">Sổ hộ khẩu (photo hoặc công chứng)</li>
                            <li className="morePage--info__li">Sao kê lương 2 tháng gần nhất, SMS nhận  lương, xác nhận lương có dấu đỏ công ty</li>
                            <li className="morePage--info__li">BHYT mã DN, HC, CH</li>
                          </ul>
                          <p>Lưu ý: Các giấy tờ cần phải có bản gốc để nhân viên đối chiếu trực tiếp khi làm hồ sơ vay.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="morePage--bonus col-md-10 col-lg-10">
                  <div className="morePage--info_header">Đặc điểm khoản vay</div>
                  <div className="morePage--info_lists">
                    <p>
                      ✧ Số tiền mượn: từ 20.000.000 VNĐ đến 500.000.000.000 VNĐ<br />✧ Thời hạn hoàn trả khoản vay từ 12 đến 48 tháng<br />✧ Lãi suất vay hàng năm APR tối đa: 32%<br />✧ Lãi suất vay hàng năm APR tối thiểu: 18%<br />✧ Phí thủ tục: 0%<br />✧ Lệ phí giao dịch: 0 VND<br /><br /><span style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>Ví dụ:</span><br />✧ Bạn mượn 100 triệu trong 4 năm với lãi suất 0,8%/tháng<br />✧ Số lãi hàng tháng phải trả: 100.000.000Đ x 0,8%= 800.000 VNĐ<br />✧ Số tiền gốc phải trả: 100.000.000 VNĐ / 48 tháng = 2.083.000 VNĐ<br />✧ Tổng số tiền phải trả: 2.883.000 VNĐ (Tiền lãi + tiền gốc)<br />✧ Phí làm hồ sơ 0 VNĐ<br />✧ Khách hàng có thể tất toán sớm bất cứ lúc nào kể cả vừa giải ngân. Phí phạt giảm dần theo năm 6%, 4%, 3%, 2% tính trên dư nợ còn lại của số tiền gốc khách hàng vay tại thời điểm tất toán.<br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="whyPage-button">
                <a href="tel:0358839559">
                  HOTLINE: 0358.839.559
                </a>
              </div>
            </div>
          </div>
          <div className="contactPage">
            <div className="container d-flex flex-column justify-content-center align-items-center"> 
              <div className="contactPage--content">ĐĂNG KÝ LIÊN HỆ</div>
              <div className="row d-flex flex-column justify-content-center align-items-center">
                <div className="col-md-8 col-lg-8">
                    <Form></Form>
                </div>
              </div>
            </div>
          </div>
          <div className="footerPage">
            <div className="container">
              <div className="footerPage--content">THÔNG TIN LIÊN HỆ</div>
              <p className="footerPage--p">Gọi ngay cho chúng tôi theo số hotline bên dưới, chúng tôi sẽ tư vấn tận tình nhất, hoặc quý khách có thể để lại số điện thoại tại form đăng ký để chúng tôi gọi lại!</p>
              <div className="footerPage--contacts">
                <div className="footerPage--contact">
                  <i className="fas fa-map-marker-alt" />
                  Địa chỉ: TP.Hà Nội
                </div>
                <div className="footerPage--contact">
                  <i className="fas fa-phone-alt" />
                  Hotline:  0358.839.559
                </div>
              </div>
            </div>
          </div>
        <Tel></Tel>
        </div>
        <div className="overflowPage" onClick={handleCloseForm}/>
        <div className="formPage">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="row d-flex flex-column justify-content-center align-items-center">
              <div className="formPage--forms col-md-8 col-lg-8 ">
                <div className="formPage--off" onClick={handleCloseForm}>
                    <i className="fas fa-times" />
                </div>
                <div className="formPage--content">ĐĂNG KÝ LIÊN HỆ</div>
                    <Form></Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FullPage;