import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { Avatar2xlFalseFalseOnlineIndic } from './Avatar2xlFalseFalseOnlineIndic/Avatar2xlFalseFalseOnlineIndic.js';
import { BatteryIcon } from './BatteryIcon.js';
import { Button } from './Button/Button.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { ClarityBookLineIcon } from './ClarityBookLineIcon.js';
import classes from './EditProfileStudent.module.css';
import { IcSharpAccountCircleIcon } from './IcSharpAccountCircleIcon.js';
import { JamHomeIcon } from './JamHomeIcon.js';
import { MaterialSymbolsPhotoCameraOutl } from './MaterialSymbolsPhotoCameraOutl.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 6079:72953 */
export const EditProfileStudent: FC<Props> = memo(function EditProfileStudent(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame1482}>
        <div className={classes.materialSymbolsPhotoCameraOutl}>
          <MaterialSymbolsPhotoCameraOutl className={classes.icon} />
        </div>
        <Avatar2xlFalseFalseOnlineIndic className={classes.avatar2xlFalseFalseOnlineIndic} />
      </div>
      <div className={classes.frame1527}>
        <div className={classes.soDu}>Số dư</div>
        <div className={classes.frame1528}>
          <div className={classes.frame1522}>
            <div className={classes.frame1524}>
              <div className={classes._5000}>50.000 đ</div>
            </div>
            <button className={classes.button5}>
              <div className={classes.text}>Nạp thêm</div>
            </button>
          </div>
        </div>
        <div className={classes.lichSuGiaoDich}>Lịch sử giao dịch</div>
      </div>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
      <div className={classes.barsStatusBarIPhoneLight}>
        <div className={classes.rectangle29}></div>
        <div className={classes.battery}>
          <BatteryIcon className={classes.icon2} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon3} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon4} />
        </div>
        <div className={classes.timeStyle}>
          <div className={classes.time}>9:41</div>
        </div>
      </div>
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle33}></div>
      <div className={classes.jamHome}>
        <JamHomeIcon onClick={() => { navigate('/hoc-sinh'); }} className={classes.icon5} />
      </div>
      <div className={classes.rectangle34}></div>
      <div className={classes.clarityBookLine}>
        <ClarityBookLineIcon onClick={() => { navigate('/lop-hoc'); }} className={classes.icon6} />
      </div>
      <div className={classes.rectangle35}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes.taiKhoan}>Tài khoản</div>
      <div className={classes.icSharpAccountCircle}>
        <IcSharpAccountCircleIcon className={classes.icon7} />
      </div>
      <div className={classes.rectangle332}></div>
      <div onClick={() => { navigate('/'); }} className={classes.AngXuat}>Đăng xuất</div>
      <div className={classes.component6}>
        <div className={classes.hoTen}>Họ tên</div>
        <div className={classes.nguyenThiTrangNhung}>Nguyễn Thị Trang Nhung</div>
        <Button className={classes.button} />
        <div className={classes.email}>Email</div>
        <div className={classes.nhungGmailCom}>nhung@gmail.com</div>
        <Button className={classes.button2} />
        <div className={classes.emailPhuHuynh}>Email phụ huynh</div>
        <div className={classes.nhungGmailCom2}>nhung@gmail.com</div>
        <Button className={classes.button3} />
        <div className={classes.sDT}>SDT</div>
        <div className={classes._123456789}>0123456789</div>
        <Button className={classes.button4} />
        <div className={classes.thongTinCaNhan}>Thông tin cá nhân</div>
      </div>
    </div>
  );
});
