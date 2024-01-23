import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../../_resets.module.css';
import { BatteryIcon } from './BatteryIcon.js';
import { BiEmojiSmileIcon } from './BiEmojiSmileIcon.js';
import { BiMicFillIcon } from './BiMicFillIcon.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import classes from './CourseGrub3.module.css';
import { EvaArrowBackOutlineIcon } from './EvaArrowBackOutlineIcon.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
  classes?: {
    rectangle39?: string;
    rectangle41?: string;
    rectangle30?: string;
    rectangle29?: string;
    root?: string;
  };
  text?: {
    nhanTin?: ReactNode;
    nhomLop6A1?: ReactNode;
  };
}
/* @figmaId 5752:5191 */
export const CourseGrub3: FC<Props> = memo(function CourseGrub3(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle39 || ''} ${classes.rectangle39}`}></div>
      <div className={`${props.classes?.rectangle41 || ''} ${classes.rectangle41}`}></div>
      <div className={classes.biMicFill}>
        <BiMicFillIcon className={classes.icon} />
      </div>
      <div className={classes.rectangle40}></div>
      {props.text?.nhanTin != null ? props.text?.nhanTin : <div className={classes.nhanTin}>Nhắn tin</div>}
      <div className={classes.biEmojiSmile}>
        <BiEmojiSmileIcon className={classes.icon2} />
      </div>
      <div className={classes.rectangle32}></div>
      {props.text?.nhomLop6A1 != null ? props.text?.nhomLop6A1 : <div className={classes.nhomLop6A1}>Nhóm lớp 6A1</div>}
      <div onClick={() => {
              navigate('/lop-hoc');
            }} className={classes.evaArrowBackOutline}>
        <EvaArrowBackOutlineIcon className={classes.icon3} />
      </div>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={`${props.classes?.rectangle30 || ''} ${classes.rectangle30}`}></div>
        <div className={classes.homeIndicator}></div>
      </div>
      <div className={classes.barsStatusBarIPhoneLight}>
        <div className={`${props.classes?.rectangle29 || ''} ${classes.rectangle29}`}></div>
        <div className={classes.battery}>
          <BatteryIcon className={classes.icon4} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon5} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon6} />
        </div>
        <div className={classes.timeStyle}>
          <div className={classes.time}>9:41</div>
        </div>
      </div>
    </div>
  );
});
