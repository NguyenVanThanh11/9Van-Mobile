import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon.js';
import { BiPeopleIcon2 } from './BiPeopleIcon2.js';
import { BiPeopleIcon3 } from './BiPeopleIcon3.js';
import { BiPeopleIcon4 } from './BiPeopleIcon4.js';
import { BiPeopleIcon } from './BiPeopleIcon.js';
import { BxBxTimeIcon2 } from './BxBxTimeIcon2.js';
import { BxBxTimeIcon3 } from './BxBxTimeIcon3.js';
import { BxBxTimeIcon4 } from './BxBxTimeIcon4.js';
import { BxBxTimeIcon } from './BxBxTimeIcon.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { ClarityBookSolidIcon } from './ClarityBookSolidIcon.js';
import { Component2 } from './Component2/Component2.js';
import classes from './CourseTeacher.module.css';
import { IcOutlineAccountCircleIcon } from './IcOutlineAccountCircleIcon.js';
import { JamHomeIcon } from './JamHomeIcon.js';
import { MaskGroupIcon2 } from './MaskGroupIcon2.js';
import { MaskGroupIcon3 } from './MaskGroupIcon3.js';
import { MaskGroupIcon4 } from './MaskGroupIcon4.js';
import { MaskGroupIcon } from './MaskGroupIcon.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 5619:14861 */
export const CourseTeacher: FC<Props> = memo(function CourseTeacher(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Component2
        className={classes.component2}
        classes={{
          maskGroup: classes.maskGroup,
          maskGroup2: classes.maskGroup2,
          maskGroup3: classes.maskGroup3,
          maskGroup4: classes.maskGroup4,
        }}
        swap={{
          maskGroup: (
            <div onClick={() => {
              navigate('/lop-hoc');
            }} className={classes.maskGroup}>
              <MaskGroupIcon className={classes.icon} />
            </div>
          ),
          bxBxTime: <BxBxTimeIcon className={classes.icon2} />,
          biPeople: <BiPeopleIcon className={classes.icon3} />,
          maskGroup2: (
            <div onClick={() => {
              navigate('/lop-hoc');
            }} className={classes.maskGroup2}>
              <MaskGroupIcon2 className={classes.icon4} />
            </div>
          ),
          bxBxTime2: <BxBxTimeIcon2 className={classes.icon5} />,
          biPeople2: <BiPeopleIcon2 className={classes.icon6} />,
          maskGroup3: (
            <div onClick={() => {
              navigate('/lop-hoc');
            }} className={classes.maskGroup3}>
              <MaskGroupIcon3 className={classes.icon7} />
            </div>
          ),
          bxBxTime3: <BxBxTimeIcon3 className={classes.icon8} />,
          biPeople3: <BiPeopleIcon3 className={classes.icon9} />,
          maskGroup4: (
            <div onClick={() => {
              navigate('/lop-hoc');
            }} className={classes.maskGroup4}>
              <MaskGroupIcon4 className={classes.icon10} />
            </div>
          ),
          bxBxTime4: <BxBxTimeIcon4 className={classes.icon11} />,
          biPeople4: <BiPeopleIcon4 className={classes.icon12} />,
        }}
        text={{
          latestNews: <div className={classes.latestNews}>Danh sách lớp học</div>,
          seeAll: <div className={classes.seeAll}>Xem tất cả</div>,
        }}
      />
      <div className={classes.barsStatusBarIPhoneLight}>
        <div className={classes.rectangle29}></div>
        <div className={classes.battery}>
          <BatteryIcon className={classes.icon13} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon14} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon15} />
        </div>
        <div className={classes.timeStyle}>
          <div className={classes.time}>9:41</div>
        </div>
      </div>
      <button onClick={() => {
              navigate('/tao-moi-lop');
            }}
 className={classes.button}>
        <div className={classes.text}>Tạo lớp mới</div>
      </button>
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle33}></div>
      <div onClick={() => {
              navigate('/giao-vien');
            }}
 className={classes.jamHome}>
        <JamHomeIcon className={classes.icon16} />
      </div>
      <div className={classes.rectangle34}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes.lopHoc}>Lớp học</div>
      <div className={classes.clarityBookSolid}>
        <ClarityBookSolidIcon className={classes.icon17} />
      </div>
      <div className={classes.rectangle35}></div>
      <div onClick={() => {
              navigate('/profile');
            }}
 className={classes.icOutlineAccountCircle}>
        <IcOutlineAccountCircleIcon className={classes.icon18} />
      </div>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
    </div>
  );
});
