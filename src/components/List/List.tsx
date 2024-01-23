import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _ButtonGroupBase_CurrentFalseI } from './_ButtonGroupBase_CurrentFalseI/_ButtonGroupBase_CurrentFalseI.js';
import { ArrowLeft } from './ArrowLeft/ArrowLeft.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { BatteryIcon } from './BatteryIcon.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { Component4 } from './Component4/Component4.js';
import classes from './List.module.css';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 5737:3633 */

export const List: FC<Props> = memo(function List(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
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
      <div className={classes.rectangle32}></div>
      <_ButtonGroupBase_CurrentFalseI
        className={classes._ButtonGroupBase}
        swap={{
          placeholder: (
            <ArrowLeft
              className={classes.arrowLeft}
              swap={{
                icon: <ArrowLeftIcon onClick={() => {
                  navigate('/lop-hoc');
                }} className={classes.icon} />,
              }}
            />
          ),
        }}
      />
      <div className={classes.danhSachBaiTap}>Danh sách bài tập</div>
      <Component4 className={classes.component4} />
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
      <button className={classes.button}>
        <div onClick={() => { navigate('/tao-moi-bai-hoc'); }} className={classes.text}>Tạo bài mới</div>
      </button>
      <div className={classes.khoEBaiChung}>Kho đề bài chung</div>
    </div>
  );
});
