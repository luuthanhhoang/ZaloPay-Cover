import React, { useState } from 'react';

//Import Components
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';

//Import CSS
import './App.css';
import './css/ZaloApp.css'

function App() {
  const [data, setData] = useState(
    { "Danh mục": "Tiện ích", "Địa chỉ": "Z06, Đường số 13, Phường Tân Thuận Đông, Quận 7, Hồ Chí Minh", "Hotline": "1900545436", "Mô tả": "ZaloPay - Ứng dụng thanh toán di động, chuyển-nhận tiền nhanh, an toàn theo tiêu Chuẩn Quốc Tế PCI-DSS. Đặc biệt, bạn có thể sử dụng ZaloPay ngay trên Zalo, chuyển tiền đến bạn bè, thanh toán hóa đơn chỉ trong 2s." }
  )

  return (
    <div className="App">
      <LeftContent />
      <RightContent data={data} />
    </div>
  );
}

export default App;
