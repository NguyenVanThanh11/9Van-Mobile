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
import classes from './CourseQuiz1Success.module.css';
import { FeaturedIcon_SizeLgColorSucces } from './FeaturedIcon_SizeLgColorSucces/FeaturedIcon_SizeLgColorSucces.js';
import { FileUpload_FilesQueuedTrueType } from './FileUpload_FilesQueuedTrueType/FileUpload_FilesQueuedTrueType.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
    text?: boolean;
    text2?: boolean;
    _FileUploadItemBase?: boolean;
    plus?: boolean;
    iconVariant3?: boolean;
    placeholder3?: boolean;
    placeholder4?: boolean;
  };
}
/* @figmaId 5752:5447 */
export const CourseQuiz1Success: FC<Props> = memo(function CourseQuiz1(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.hocSinhChupBaiLamQuayVideoCuaM}>
        Học sinh chụp bài làm/ quay video của mình ở phần dưới đây:{' '}
      </div>
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
      <FileUpload_FilesQueuedTrueType
        className={classes.fileUpload}
        hide={{
          _FileUploadItemBase: true,
        }}
      />
      <Button_SizeMdHierarchySecondar
        className={classes.button}
        hide={{
          plus: true,
        }}
        text={{
          text: <div className={classes.text}>Nộp bài</div>,
        }}
      />
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
              <div className={classes.text4}>Nộp bài thành công</div>
            </div>
          </div>
          <_ModalActions_TypeHorizontalFi
            hide={{
              iconVariant3: true,
            }}
            text={{
              text: <div onClick={() => { navigate('/chi-tiet-bai-hoc'); }} className={classes.text2}>Thoát</div>,
              text2: <div onClick={() => { navigate('/nop-bai'); }} className={classes.text3}>Nộp lại </div>,
            }}
          />
          <ButtonCloseX_SizeLgColorGrayTh className={classes.buttonCloseX} />
        </div>
      </div>
      <div className={classes.barsStatusBarIPhoneLight}>
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
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.homeIndicator}></div>
      </div>
    </div>
  );
});
