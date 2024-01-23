import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _ButtonGroupBase_CurrentFalseI } from './_ButtonGroupBase_CurrentFalseI/_ButtonGroupBase_CurrentFalseI.js';
import { ArrowLeft } from './ArrowLeft/ArrowLeft.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { BatteryIcon } from './BatteryIcon.js';
import { Button_SizeMdHierarchySecondar } from './Button_SizeMdHierarchySecondar/Button_SizeMdHierarchySecondar.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { Component3 } from './Component3/Component3.js';
import classes from './DetailCourseEditTeacher.module.css';
import { InputDropdown_TypeDefaultState } from './InputDropdown_TypeDefaultState/InputDropdown_TypeDefaultState.js';
import { InputDropdown_TypeIconLeadingS } from './InputDropdown_TypeIconLeadingS/InputDropdown_TypeIconLeadingS.js';
import { TextareaInputField_TypeDefault } from './TextareaInputField_TypeDefault/TextareaInputField_TypeDefault.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
  hide?: {
    inputWithLabel?: boolean;
    hintText?: boolean;
    plus?: boolean;
  };
}
/* @figmaId 5715:54470 */
export const DetailCourseEditTeacher: FC<Props> = memo(function DetailCourseEditTeacher(props = {}) {
  
 const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle33}></div>
      <div onClick={() => { navigate('/chi-tiet-bai-hoc'); }} className={classes.huy}>Hủy</div>
      <div className={classes.tenBai}>Tên bài</div>
      <div className={classes.vietBanThuyetMinhGiaiThichMotH}>
        <div className={classes.textBlock}>Viết bản thuyết minh giải thích một hiện tượng tự nhiên</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
        <div className={classes.textBlock3}>
          <p></p>
        </div>
      </div>
      <div className={classes.line16}></div>
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
      <Component3 className={classes.component3} />
      <InputDropdown_TypeIconLeadingS
        className={classes.inputDropdown}
        hide={{
          inputWithLabel: true,
        }}
      />
      <InputDropdown_TypeDefaultState className={classes.inputDropdown2} />
      <TextareaInputField_TypeDefault
        className={classes.textareaInputField}
        classes={{ inputWithLabel: classes.inputWithLabel }}
        hide={{
          hintText: true,
        }}
        text={{
          label: <div className={classes.label}>Mô tả</div>,
          text: <div className={classes.text}>Mô tả bài học</div>,
        }}
      />
      <Button_SizeMdHierarchySecondar
        className={classes.button}
        hide={{
          plus: true,
        }}
        text={{
          text: <div onClick={() => { navigate('/chi-tiet-bai-hoc'); }} className={classes.text2}>Lưu</div>,
        }}
      />
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
      <div className={classes.rectangle32}></div>
      <_ButtonGroupBase_CurrentFalseI
        className={classes._ButtonGroupBase}
        swap={{
          placeholder: (
            <ArrowLeft
              className={classes.arrowLeft}
              swap={{
                icon: <ArrowLeftIcon onClick={() => { navigate('/chi-tiet-bai-hoc'); }} className={classes.icon} />,
              }}
            />
          ),
        }}
      />
      <div className={classes.suaBai}>Sửa bài</div>
    </div>
  );
});
