import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _9Van } from './_9Van/_9Van.js';
import { _ButtonGroupBaseTrueFalseDefau } from './_ButtonGroupBaseTrueFalseDefau/_ButtonGroupBaseTrueFalseDefau.js';
import { BatteryIcon } from './BatteryIcon.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import classes from './Role.module.css';
import { Text } from './Text/Text.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 5546:25679 */
export const Role: FC<Props> = memo(function Role(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <_9Van
        className={classes._9Van2}
        text={{
          _9Van: <div className={classes._9Van}>9Văn</div>,
        }}
      />
      <_ButtonGroupBaseTrueFalseDefau
        className={classes._ButtonGroupBaseTrueFalseDefau}
        classes={{ rectangle1: classes.rectangle1 }}
        text={{
          text: <div onClick={() => {
            navigate('/giao-vien');
          }} className={classes.text}>Giáo viên</div>,
        }}
      />
      <_ButtonGroupBaseTrueFalseDefau
        className={classes._ButtonGroupBaseTrueFalseDefau2}
        classes={{ rectangle1: classes.rectangle12 }}
        text={{
          text: <div onClick={() => {
            navigate('/hoc-sinh');
          }} className={classes.text2}>Học sinh</div>,
        }}
      />
      <_ButtonGroupBaseTrueFalseDefau
        className={classes._ButtonGroupBaseTrueFalseDefau3}
        classes={{ rectangle1: classes.rectangle13 }}
        text={{
          text: <div className={classes.text3}>Phụ huynh</div>,
        }}
      />
      <Text
        className={classes.text5}
        text={{
          text: <div className={classes.text4}>Chọn vai trò</div>,
        }}
      />
      <div className={classes.barsStatusBarIPhoneLight}>
        <div className={classes.rectangle29}></div>
        <div className={classes.battery}>
          <BatteryIcon className={classes.icon} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon2} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon3} />
        </div>
        <div className={classes.timeStyle}>
          <div className={classes.time}>9:41</div>
        </div>
      </div>
    </div>
  );
});
