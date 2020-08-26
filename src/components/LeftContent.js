import React, { memo } from 'react';

//Import Images
import LeftBanner from '../images/leftbanner.jpg';
import LeftAvatar from '../images/leftavatar.jpg';
import QrCode from '../images/leftqrcode.jpg';
import Service from '../images/service.png';

const LeftContent = memo(props => {
  return (
    <section className="left-content">
      <img src={Service} />
      <div className="banner">
        <img src={LeftBanner} />
        <div className="avatar">
          <img src={LeftAvatar} />
          <h4>ZaloPay</h4>
          <p>zalo.me/zalopay</p>
        </div>
      </div>
      <div className="qr-code">
        <img src={QrCode} />
        <p>
          Quét mã QR hoặc tìm kiếm theo tên của <br></br> Official Account để theo dõi trên Zalo
        </p>
      </div>
    </section>
  )
});

export default LeftContent;