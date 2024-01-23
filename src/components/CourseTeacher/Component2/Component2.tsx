import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BiPeopleIcon2 } from './BiPeopleIcon2.js';
import { BiPeopleIcon3 } from './BiPeopleIcon3.js';
import { BiPeopleIcon4 } from './BiPeopleIcon4.js';
import { BiPeopleIcon } from './BiPeopleIcon.js';
import { BxBxTimeIcon2 } from './BxBxTimeIcon2.js';
import { BxBxTimeIcon3 } from './BxBxTimeIcon3.js';
import { BxBxTimeIcon4 } from './BxBxTimeIcon4.js';
import { BxBxTimeIcon } from './BxBxTimeIcon.js';
import classes from './Component2.module.css';
import { MaskGroupIcon2 } from './MaskGroupIcon2.js';
import { MaskGroupIcon3 } from './MaskGroupIcon3.js';
import { MaskGroupIcon4 } from './MaskGroupIcon4.js';
import { MaskGroupIcon } from './MaskGroupIcon.js';

interface Props {
  className?: string;
  classes?: {
    maskGroup?: string;
    maskGroup2?: string;
    maskGroup3?: string;
    maskGroup4?: string;
    root?: string;
  };
  swap?: {
    maskGroup?: ReactNode;
    bxBxTime?: ReactNode;
    biPeople?: ReactNode;
    maskGroup2?: ReactNode;
    bxBxTime2?: ReactNode;
    biPeople2?: ReactNode;
    maskGroup3?: ReactNode;
    bxBxTime3?: ReactNode;
    biPeople3?: ReactNode;
    maskGroup4?: ReactNode;
    bxBxTime4?: ReactNode;
    biPeople4?: ReactNode;
  };
  text?: {
    latestNews?: ReactNode;
    seeAll?: ReactNode;
  };
}
/* @figmaId 5619:15602 */
export const Component2: FC<Props> = memo(function Component2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.latestNews != null ? props.text?.latestNews : <div className={classes.latestNews}>Latest News</div>}
      {props.text?.seeAll != null ? props.text?.seeAll : <div className={classes.seeAll}>See all</div>}
      <div className={`${props.classes?.maskGroup || ''} ${classes.maskGroup}`}>
        {props.swap?.maskGroup || <MaskGroupIcon className={classes.icon} />}
      </div>
      <div className={classes.frame1529}>
        <div className={classes.rectangle69}></div>
        <div className={classes.nguVan6}>Ngữ văn 6</div>
      </div>
      <div className={classes._140Tiet}>140 tiết</div>
      <div className={classes.lop6A1}>Lớp 6A1</div>
      <div className={classes.rectangle70}></div>
      <div className={classes.rectangle71}></div>
      <div className={classes.xem}>Xem</div>
      <div className={classes.giaoBai}>Giao bài</div>
      <div className={classes.bxBxTime}>{props.swap?.bxBxTime || <BxBxTimeIcon className={classes.icon2} />}</div>
      <div className={classes._30HocSinh}>30 học sinh</div>
      <div className={classes.biPeople}>{props.swap?.biPeople || <BiPeopleIcon className={classes.icon3} />}</div>
      <div className={`${props.classes?.maskGroup2 || ''} ${classes.maskGroup2}`}>
        {props.swap?.maskGroup2 || <MaskGroupIcon2 className={classes.icon4} />}
      </div>
      <div className={classes.frame15292}>
        <div className={classes.rectangle692}></div>
        <div className={classes.nguVan62}>Ngữ văn 6</div>
      </div>
      <div className={classes._140Tiet2}>140 tiết</div>
      <div className={classes.lop6A12}>Lớp 6A1</div>
      <div className={classes.rectangle702}></div>
      <div className={classes.rectangle712}></div>
      <div className={classes.xem2}>Xem</div>
      <div className={classes.giaoBai2}>Giao bài</div>
      <div className={classes.bxBxTime2}>{props.swap?.bxBxTime2 || <BxBxTimeIcon2 className={classes.icon5} />}</div>
      <div className={classes._30HocSinh2}>30 học sinh</div>
      <div className={classes.biPeople2}>{props.swap?.biPeople2 || <BiPeopleIcon2 className={classes.icon6} />}</div>
      <div className={`${props.classes?.maskGroup3 || ''} ${classes.maskGroup3}`}>
        {props.swap?.maskGroup3 || <MaskGroupIcon3 className={classes.icon7} />}
      </div>
      <div className={classes.frame15293}>
        <div className={classes.rectangle693}></div>
        <div className={classes.nguVan63}>Ngữ văn 6</div>
      </div>
      <div className={classes._140Tiet3}>140 tiết</div>
      <div className={classes.lop6A13}>Lớp 6A1</div>
      <div className={classes.rectangle703}></div>
      <div className={classes.rectangle713}></div>
      <div className={classes.xem3}>Xem</div>
      <div className={classes.giaoBai3}>Giao bài</div>
      <div className={classes.bxBxTime3}>{props.swap?.bxBxTime3 || <BxBxTimeIcon3 className={classes.icon8} />}</div>
      <div className={classes._30HocSinh3}>30 học sinh</div>
      <div className={classes.biPeople3}>{props.swap?.biPeople3 || <BiPeopleIcon3 className={classes.icon9} />}</div>
      <div className={`${props.classes?.maskGroup4 || ''} ${classes.maskGroup4}`}>
        {props.swap?.maskGroup4 || <MaskGroupIcon4 className={classes.icon10} />}
      </div>
      <div className={classes.frame15294}>
        <div className={classes.rectangle694}></div>
        <div className={classes.nguVan64}>Ngữ văn 6</div>
      </div>
      <div className={classes._140Tiet4}>140 tiết</div>
      <div className={classes.lop6A14}>Lớp 6A1</div>
      <div className={classes.rectangle704}></div>
      <div className={classes.rectangle714}></div>
      <div className={classes.xem4}>Xem</div>
      <div className={classes.giaoBai4}>Giao bài</div>
      <div className={classes.bxBxTime4}>{props.swap?.bxBxTime4 || <BxBxTimeIcon4 className={classes.icon11} />}</div>
      <div className={classes._30HocSinh4}>30 học sinh</div>
      <div className={classes.biPeople4}>{props.swap?.biPeople4 || <BiPeopleIcon4 className={classes.icon12} />}</div>
    </div>
  );
});
