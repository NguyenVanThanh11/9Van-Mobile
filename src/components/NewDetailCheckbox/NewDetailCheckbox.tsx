import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _ButtonGroupBase_CurrentFalseI } from './_ButtonGroupBase_CurrentFalseI/_ButtonGroupBase_CurrentFalseI.js';
import { _ModalActions_TypeHorizontalFi } from './_ModalActions_TypeHorizontalFi/_ModalActions_TypeHorizontalFi.js';
import { ArrowLeft } from './ArrowLeft/ArrowLeft.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { BatteryIcon } from './BatteryIcon.js';
import { Button_SizeMdHierarchySecondar } from './Button_SizeMdHierarchySecondar/Button_SizeMdHierarchySecondar.js';
import { ButtonCloseX_SizeLgColorGrayTh } from './ButtonCloseX_SizeLgColorGrayTh/ButtonCloseX_SizeLgColorGrayTh.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { CheckCircle } from './CheckCircle/CheckCircle.js';
import { CheckCircleIcon } from './CheckCircleIcon.js';
import { Component3 } from './Component3/Component3.js';
import { FeaturedIcon_SizeLgColorSucces } from './FeaturedIcon_SizeLgColorSucces/FeaturedIcon_SizeLgColorSucces.js';
import { InputDropdown_TypeDefaultState } from './InputDropdown_TypeDefaultState/InputDropdown_TypeDefaultState.js';
import { InputDropdown_TypeIconLeadingS } from './InputDropdown_TypeIconLeadingS/InputDropdown_TypeIconLeadingS.js';
import classes from './NewDetailCheckbox.module.css';
import { TextareaInputField_TypeDefault } from './TextareaInputField_TypeDefault/TextareaInputField_TypeDefault.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
  hide?: {
    plus?: boolean;
    inputWithLabel?: boolean;
    hintText?: boolean;
    iconVariant3?: boolean;
    placeholder?: boolean;
    placeholder2?: boolean;
  };
}
/* @figmaId 5752:5170 */
export const NewDetailCheckbox: FC<Props> = memo(function NewDetailCheckbox(props = {}) {
  const navigate = useNavigate(); 
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Component3 className={classes.component3} />
      <div className={classes.rectangle33}></div>
      <div className={classes.taoBaiMoi}>Tạo bài mới</div>
      <div className={classes.rectangle332}></div>
      <div className={classes.huy}>Hủy</div>
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
          <BatteryIcon className={classes.icon3} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon4} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon5} />
        </div>
        <div className={classes.timeStyle}>
          <div className={classes.time}>9:41</div>
        </div>
      </div>
      <Button_SizeMdHierarchySecondar
        className={classes.button}
        hide={{
          plus: true,
        }}
        text={{
          text: <div className={classes.text}>Lưu</div>,
        }}
      />
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
          text: <div className={classes.text2}>Mô tả bài học</div>,
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
                icon: <ArrowLeftIcon className={classes.icon} />,
              }}
            />
          ),
        }}
      />
      <div className={classes.taoBaiMoi2}>Tạo bài mới</div>
      <div className={classes.modal}>
        <div className={classes.modal2}>
          <div className={classes.content}>
            <FeaturedIcon_SizeLgColorSucces
              swap={{
                alertCircle: (
                  <CheckCircle
                    className={classes.checkCircle}
                    swap={{
                      icon: <CheckCircleIcon className={classes.icon2} />,
                    }}
                  />
                ),
              }}
            />
            <div className={classes.textAndSupportingText}>
              <div className={classes.text5}>Lưu thành công</div>
            </div>
          </div>
          <_ModalActions_TypeHorizontalFi
            hide={{
              iconVariant3: true,
            }}
            text={{
              text: <div onClick={() => { navigate('/danh-sach-de-bai'); }} className={classes.text3}>Thoát</div>,
              text2: <div onClick={() => { navigate('/tao-moi-bai-hoc'); }} className={classes.text4}>Tạo bài mới</div>,
            }}
          />
          <ButtonCloseX_SizeLgColorGrayTh className={classes.buttonCloseX} />
        </div>
      </div>
    </div>
  );
});
