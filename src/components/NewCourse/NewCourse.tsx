import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _ButtonGroupBase_CurrentFalseI } from './_ButtonGroupBase_CurrentFalseI/_ButtonGroupBase_CurrentFalseI.js';
import { ArrowLeft } from './ArrowLeft/ArrowLeft.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { BatteryIcon2 } from './BatteryIcon2.js';
import { BatteryIcon } from './BatteryIcon.js';
import { CellularConnectionIcon2 } from './CellularConnectionIcon2.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { HelpIcon_OpenFalseSupportingTe } from './HelpIcon_OpenFalseSupportingTe/HelpIcon_OpenFalseSupportingTe.js';
import classes from './NewCourse.module.css';
import { Tag_SizeMdIconAvatarActionXClo } from './Tag_SizeMdIconAvatarActionXClo/Tag_SizeMdIconAvatarActionXClo.js';
import { WifiIcon2 } from './WifiIcon2.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
  hide?: {
    helpCircle?: boolean;
    avatar?: boolean;
  };
}
/* @figmaId 5806:3279 */
export const NewCourse: FC<Props> = memo(function NewCourse(props = {}) {
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
      <div className={classes.barsStatusBarIPhoneLight2}>
        <div className={classes.rectangle292}></div>
        <div className={classes.battery2}>
          <BatteryIcon2 className={classes.icon5} />
        </div>
        <div className={classes.wifi2}>
          <WifiIcon2 className={classes.icon6} />
        </div>
        <div className={classes.cellularConnection2}>
          <CellularConnectionIcon2 className={classes.icon7} />
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
              <div className={classes.text2}>Nhập tên lớp</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.textareaInputField}>
        <div className={classes.inputWithLabel2}>
          <div className={classes.label2}>Mô tả</div>
          <div className={classes.input2}>
            <div className={classes.text3}>Nhập mô tả</div>
          </div>
        </div>
      </div>
      <div className={classes.inputField2}>
        <div className={classes.inputWithLabel3}>
          <div className={classes.label3}>Năm</div>
          <div className={classes.input3}>
            <div className={classes.content2}>
              <div className={classes.text4}>2024</div>
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
        <div onClick={() => { navigate('/tao-lop-hoc-thanh-cong'); }} className={classes.text5}>Lưu</div>
      </button>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
    </div>
  );
});
