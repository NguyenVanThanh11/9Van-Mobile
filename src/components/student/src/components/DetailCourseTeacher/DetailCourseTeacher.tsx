import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _ButtonGroupBase_CurrentFalseI } from './_ButtonGroupBase_CurrentFalseI/_ButtonGroupBase_CurrentFalseI.js';
import { _Dot_SizeMd } from './_Dot_SizeMd/_Dot_SizeMd.js';
import { ArrowLeft } from './ArrowLeft/ArrowLeft.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { BatteryIcon } from './BatteryIcon.js';
import { Button_SizeMdHierarchySecondar } from './Button_SizeMdHierarchySecondar/Button_SizeMdHierarchySecondar.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { CheckboxGroup_SizeSmTypeCheckb } from './CheckboxGroup_SizeSmTypeCheckb/CheckboxGroup_SizeSmTypeCheckb.js';
import classes from './DetailCourseTeacher.module.css';
import { MessageDotsCircle } from './MessageDotsCircle/MessageDotsCircle.js';
import { MessageDotsCircleIcon } from './MessageDotsCircleIcon.js';
import { Rectangle31Icon } from './Rectangle31Icon.js';
import { UPlay } from './UPlay/UPlay.js';
import { Vector2Icon } from './Vector2Icon.js';
import { VectorIcon } from './VectorIcon.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
  hide?: {
    input?: boolean;
    textAndSubtext?: boolean;
    input2?: boolean;
    textAndSubtext2?: boolean;
    input3?: boolean;
    textAndSubtext3?: boolean;
    input4?: boolean;
    textAndSubtext4?: boolean;
    input5?: boolean;
    textAndSubtext5?: boolean;
    plus?: boolean;
  };
}
/* @figmaId 5690:41954 */
export const DetailCourseTeacher: FC<Props> = memo(function DetailCourseTeacher(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle57}></div>
      <div className={classes.vector2}>
        <Vector2Icon className={classes.icon4} />
      </div>
      <div className={classes.rectangle31}>
        <Rectangle31Icon className={classes.icon5} />
      </div>
      <div className={classes.moTa}>Mô tả </div>
      <div className={classes.trongThoiAiCongNgheSoHoaGiaoDu}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>
            Trong thời đại công nghệ số hóa, giáo dục không còn giới hạn bởi bốn bức tường của lớp học. Công nghệ đã mở
            ra nhiều cơ hội mới trong việc cải thiện phương pháp giảng dạy và học tập. Tuy nhiên, việc sử dụng công nghệ
            trong giáo dục cũng mang đến nhiều ưu và nhược điểm cần được cân nhắc.{' '}
          </span>
          <span className={classes.label2}>Xem thêm </span>
        </p>
      </div>
      <div className={classes.chuong1ToiVaCacBan}>Chương 1: Tôi và các bạn</div>
      <div className={classes.nguVan6}>Ngữ văn 6</div>
      <div className={classes._10Bai}>10 bài</div>
      <div className={classes.barsStatusBarIPhoneLight}>
        <div className={classes.rectangle29}></div>
        <div className={classes.battery}>
          <BatteryIcon className={classes.icon6} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon7} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon8} />
        </div>
        <div className={classes.timeStyle}>
          <div className={classes.time}>9:41</div>
        </div>
      </div>
      <CheckboxGroup_SizeSmTypeCheckb
        className={classes.checkboxGroup}
        classes={{ checkboxGroupItem: classes.checkboxGroupItem }}
        hide={{
          input: true,
          textAndSubtext: true,
          input2: true,
          textAndSubtext2: true,
          input3: true,
          textAndSubtext3: true,
          input4: true,
          textAndSubtext4: true,
          input5: true,
          textAndSubtext5: true,
        }}
        text={{
          includesUpTo10Users20GBIndivid: (
            <div className={classes.includesUpTo10Users20GBIndivid}>
              Phần mở bài học sinh đã nêu được vấn đề và bày tỏ quan điểm của mình chưa?
            </div>
          ),
          includesUpTo10Users20GBIndivid2: (
            <div className={classes.includesUpTo10Users20GBIndivid2}>
              Trong đoạn văn thứ hai học sinh đã nêu được định nghĩa về bạo lực học đường chưa?
            </div>
          ),
          includesUpTo10Users20GBIndivid3: (
            <div className={classes.includesUpTo10Users20GBIndivid3}>
              Trong đoạn văn thứ ba học sinh đã nêu được biểu hiện của bạo lực học đường và có dẫn chứng minh họa chưa?
            </div>
          ),
          includesUpTo10Users20GBIndivid4: (
            <div className={classes.includesUpTo10Users20GBIndivid4}>
              Trong đoạn văn thứ tư học sinh đã nêu được nguyên nhân dẫn tới bạo lực học đường chưa?
            </div>
          ),
          includesUpTo10Users20GBIndivid5: (
            <div className={classes.includesUpTo10Users20GBIndivid5}>
              Trong phần kết bài học sinh đã khẳng định lại vấn đề, đưa ra lời khuyên cho mọi người và liên hệ thực tế
              bản thân chưa?
            </div>
          ),
        }}
      />
      <div className={classes.baiTapVeNha}>Bài tập về nhà</div>
      <_ButtonGroupBase_CurrentFalseI
        className={classes._ButtonGroupBase}
        swap={{
          placeholder: (
            <ArrowLeft
              className={classes.arrowLeft}
              swap={{
                icon: <ArrowLeftIcon onClick={() => { navigate('/lop-hoc'); }} className={classes.icon} />,
              }}
            />
          ),
        }}
      />
      <div className={classes.switch}>
        <UPlay
          className={classes.slider}
          swap={{
            vector: <VectorIcon className={classes.icon2} />,
          }}
        />
      </div>
      <button className={classes.button2}>
        <MessageDotsCircle
          swap={{
            icon: <MessageDotsCircleIcon onClick={() => { navigate('/chat'); }} className={classes.icon3} />,
          }}
        />
      </button>
      <Button_SizeMdHierarchySecondar
        className={classes.button}
        hide={{
          plus: true,
        }}
        text={{
          text: <div onClick={() => { navigate('/nop-bai'); }} className={classes.text}>Làm bài</div>,
        }}
      />
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
    </div>
  );
});
