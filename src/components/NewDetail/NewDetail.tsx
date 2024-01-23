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
import { InputDropdown_TypeDefaultState } from './InputDropdown_TypeDefaultState/InputDropdown_TypeDefaultState.js';
import { InputDropdown_TypeIconLeadingS } from './InputDropdown_TypeIconLeadingS/InputDropdown_TypeIconLeadingS.js';
import classes from './NewDetail.module.css';
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
/* @figmaId 5633:32373 */
export const NewDetail: FC<Props> = memo(function NewDetail(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Component3
        className={classes.component3}
        text={{
          oPhanMoBaiBaiVanANeuHienTuongT: <div className={classes.oPhanMoBaiBaiVanANeuHienTuongT}>Nội dung 1</div>,
          oPhanMoBaiBaiVanANeuHienTuongT2: <div className={classes.oPhanMoBaiBaiVanANeuHienTuongT2}>Nội dung 2</div>,
          oPhanMoBaiBaiVanANeuHienTuongT3: <div className={classes.oPhanMoBaiBaiVanANeuHienTuongT3}>Nội dung 3</div>,
          oPhanMoBaiBaiVanANeuHienTuongT4: <div className={classes.oPhanMoBaiBaiVanANeuHienTuongT4}>Nội dung 4</div>,
        }}
      />
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
      <InputDropdown_TypeIconLeadingS
        className={classes.inputDropdown}
        hide={{
          inputWithLabel: true,
        }}
      />
      <InputDropdown_TypeDefaultState
        className={classes.inputDropdown2}
        text={{
          text: <div className={classes.text}>Nhập lớp</div>,
        }}
      />
      <TextareaInputField_TypeDefault
        className={classes.textareaInputField}
        classes={{ inputWithLabel: classes.inputWithLabel }}
        hide={{
          hintText: true,
        }}
        text={{
          label: <div className={classes.label}>Mô tả</div>,
          text: <div className={classes.text2}>Mô tả bài học</div>,
        }}
      />
      <div className={classes.inputField}>
        <div className={classes.inputWithLabel2}>
          <div className={classes.label2}>Tên</div>
          <div className={classes.input}>
            <div className={classes.content}>
              <div className={classes.text4}>Nhập tên</div>
            </div>
          </div>
        </div>
      </div>
      <Button_SizeMdHierarchySecondar
        className={classes.button}
        hide={{
          plus: true,
        }}
        text={{
          text: <div onClick={() => { navigate('/tao-bai-hoc-thanh-cong'); }} className={classes.text3}>Lưu</div>,
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
                icon: <ArrowLeftIcon onClick={() => { navigate('/danh-sach-de-bai'); }} className={classes.icon} />,
              }}
            />
          ),
        }}
      />
      <div className={classes.taoBaiMoi}>Tạo bài mới</div>
    </div>
  );
});
