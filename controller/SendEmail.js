const nodemailer = require("nodemailer")
require('dotenv').config();
exports.sendEmail = async (req, res) => {
    const log = console.log;
    const data = req.body;
    // Step 1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL || 'dungnttn02@gmail.com', // TODO: your gmail account
            pass: process.env.PASSWORDEMAIL || 'mvfx zqqi ajkc tpwv' // TODO: your gmail password
        }
    });

    // Step 2
    var content = '';
    content += `
    <div style="background-color: #acacac;
    font-family: "Jost";">
<div class="card" style="font-family: 'Jost', sans-serif !important;
    padding: 50px 60px;
    background-color: #f8f8f8;
    display: block;">
<div class="card_top" style="border-bottom: 1px solid #dddddd;
    width: 100%;
    margin-bottom: 49px;
    padding-bottom: 13px;">
    <img style="width: 65px;
    height: 29px;" src="https://thietkeweb.5chau.net/wp-content/uploads/2017/07/NEW-LOGO-ngang-Copy.png.webp" alt="Logo.png" />
</div>
<div class="highlight" style="font-weight: 600;
    font-size: 24px;
    line-height: 110%;
    color: #1e2029;
    margin-bottom: 11px;
    width: 100%;">Chúc mừng bạn đặt tour thành công!</div>
<div class="text" style="width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #1e2029;
    margin-top: 22px;
    margin-bottom: 22px;">Tên khách hàng: Nguyễn Tiến Dũng</div>
<div class="text" style="width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #1e2029;
    margin-bottom: 22px;">Giá tiền: ${data.thanhtien}</div>
<div class="text" style="width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #1e2029;
    margin-bottom: 22px;">Điểm đến: ${data.tentour}</div>
<div class="text" style="width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #1e2029;
    margin-bottom: 22px;">Nơi khởi hành: Hà Nội</div>
<div class="text" style="width: 100%;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #1e2029;
    margin-bottom: 22px;">Thời gian: 8 giờ sáng ngày 04 tháng 02 năm 2029</div>
<div class="code" style="font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    color: blue;">Lưu ý: Nếu có bất kỳ thắc mắc nào xin vui lòng liên hệ: 5ChauMedia (0339832545)</div>
</div>
</div>
    `;
    let mailOptions = {
        from: 'dungnttn02@gmail.com', // TODO: email receiver
        to: data.email, // TODO: email sender
        subject: 'Đăng ký tour thành công!',
        text: 'Chúc đã đặt tour thành công tour ' + data.tentour + ' với giá ' + data.thanhtien + 'vnđ Xin chúc mừng bạn !',
        html: content
    };

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return log('Error occurs', err);
        }
        return log('Email sent!!!');
    });
}