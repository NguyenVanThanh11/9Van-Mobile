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
import classes from './CourseQuiz1.module.css';
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
  };
}
/* @figmaId 5690:42026 */
export const CourseQuiz1: FC<Props> = memo(function CourseQuiz1(props = {}) {
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
        text={{
          text: <div className={classes.text}>Bấm để tải lên</div>,
          text2: <div className={classes.text2}>hoặc kéo và thả</div>,
          supportingText: <div className={classes.supportingText}>SVG, PNG, JPG hoặc GIF (tối đa. 800x400px)</div>,
          text3: <div className={classes.text3}>Các yêu cầu thiết kế công nghệ pdf</div>,
          supportingText2: <div className={classes.supportingText2}>200 KB – 70% đã tải lên </div>,
          text4: <div className={classes.text4}>Nguyên mẫu bảng điều khiển.mp4</div>,
          supportingText3: <div className={classes.supportingText3}>16 MB – 70% đã tải lên </div>,
        }}
      />
      <Button_SizeMdHierarchySecondar
        className={classes.button}
        hide={{
          plus: true,
        }}
        text={{
          text: <div onClick={() => { navigate('/nop-bai-thanh-cong'); }} className={classes.text5}>Nộp bài</div>,
        }}
      />
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
    </div>
  );
});
