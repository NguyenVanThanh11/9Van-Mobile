import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _ButtonGroupBase_CurrentFalseI } from './_ButtonGroupBase_CurrentFalseI/_ButtonGroupBase_CurrentFalseI.js';
import { _ModalActions_TypeHorizontalFi } from './_ModalActions_TypeHorizontalFi/_ModalActions_TypeHorizontalFi.js';
import { ArrowLeft } from './ArrowLeft/ArrowLeft.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { BatteryIcon2 } from './BatteryIcon2.js';
import { BatteryIcon } from './BatteryIcon.js';
import { ButtonCloseX_SizeLgColorGrayTh } from './ButtonCloseX_SizeLgColorGrayTh/ButtonCloseX_SizeLgColorGrayTh.js';
import { CellularConnectionIcon2 } from './CellularConnectionIcon2.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { CheckCircle } from './CheckCircle/CheckCircle.js';
import { CheckCircleIcon } from './CheckCircleIcon.js';
import { FeaturedIcon_SizeLgColorSucces } from './FeaturedIcon_SizeLgColorSucces/FeaturedIcon_SizeLgColorSucces.js';
import { HelpIcon_OpenFalseSupportingTe } from './HelpIcon_OpenFalseSupportingTe/HelpIcon_OpenFalseSupportingTe.js';
import classes from './Sucess.module.css';
import { Tag_SizeMdIconAvatarActionXClo } from './Tag_SizeMdIconAvatarActionXClo/Tag_SizeMdIconAvatarActionXClo.js';
import { WifiIcon2 } from './WifiIcon2.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
  hide?: {
    helpCircle?: boolean;
    avatar?: boolean;
    iconVariant3?: boolean;
    placeholder?: boolean;
    placeholder2?: boolean;
  };
}
/* @figmaId 5858:31042 */
export const Sucess: FC<Props> = memo(function Sucess(props = {}) {
  
const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
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
      <div className={classes.barsStatusBarIPhoneLight2}>
        <div className={classes.rectangle292}></div>
        <div className={classes.battery2}>
          <BatteryIcon2 className={classes.icon6} />
        </div>
        <div className={classes.wifi2}>
          <WifiIcon2 className={classes.icon7} />
        </div>
        <div className={classes.cellularConnection2}>
          <CellularConnectionIcon2 className={classes.icon8} />
        </div>
        <div className={classes.timeStyle2}>
          <div className={classes.time2}>9:41</div>
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
                icon: <ArrowLeftIcon onClick={() => { navigate('/danh-sach-lop-hoc'); }} className={classes.icon} />,
              }}
            />
          ),
        }}
      />
      <div className={classes.taoLopMoi}>Tạo lớp mới</div>
      <div className={classes.inputField}>
        <div className={classes.inputWithLabel}>
          <div className={classes.label}>Tên lớp</div>
          <div className={classes.input}>
            <div className={classes.content}>
              <div className={classes.text4}>Nhập tên lớp</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.textareaInputField}>
        <div className={classes.inputWithLabel2}>
          <div className={classes.label2}>Mô tả</div>
          <div className={classes.input2}>
            <div className={classes.text5}>Nhập mô tả</div>
          </div>
        </div>
      </div>
      <div className={classes.inputField2}>
        <div className={classes.inputWithLabel3}>
          <div className={classes.label3}>Năm</div>
          <div className={classes.input3}>
            <div className={classes.content2}>
              <div className={classes.text6}>2024</div>
            </div>
            <HelpIcon_OpenFalseSupportingTe
              hide={{
                helpCircle: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.inputField3}>
        <div className={classes.inputWithLabel4}>
          <div className={classes.label4}>Danh sách học sinh</div>
          <div className={classes.hintText}>
            Gõ hoặc dán email học sinh, phân cách nhiều email bằng dấu phẩy và ấn enter
          </div>
          <div className={classes.input4}>
            <div className={classes.content3}>
              <div className={classes.tags}>
                <Tag_SizeMdIconAvatarActionXClo
                  className={classes.tag}
                  hide={{
                    avatar: true,
                  }}
                  text={{
                    text: <div className={classes.text}>nguyenthitrangnhung1902@gmail.com.vn</div>,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={classes.button}>
        <div className={classes.text7}>Lưu</div>
      </button>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
      <div className={classes.modal}>
        <div className={classes.modal2}>
          <div className={classes.content4}>
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
              <div className={classes.text8}>Lưu thành công</div>
            </div>
          </div>
          <_ModalActions_TypeHorizontalFi
            hide={{
              iconVariant3: true,
            }}
            text={{
              text: <div onClick={() => { navigate('/danh-sach-lop-hoc'); }} className={classes.text2}>Thoát</div>,
              text2: <div onClick={() => { navigate('/tao-moi-lop'); }} className={classes.text3}>Tạo lớp mới</div>,
            }}
          />
          <ButtonCloseX_SizeLgColorGrayTh className={classes.buttonCloseX} />
        </div>
      </div>
    </div>
  );
});
