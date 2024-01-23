import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _Dot_SizeMd } from './_Dot_SizeMd/_Dot_SizeMd.js';
import { AntDesignSearchOutlinedIcon } from './AntDesignSearchOutlinedIcon.js';
import { BatteryIcon } from './BatteryIcon.js';
import { BiPeopleIcon } from './BiPeopleIcon.js';
import { BxBxTimeIcon2 } from './BxBxTimeIcon2.js';
import { BxBxTimeIcon3 } from './BxBxTimeIcon3.js';
import { BxBxTimeIcon } from './BxBxTimeIcon.js';
import { CellularConnectionIcon } from './CellularConnectionIcon.js';
import { ClarityBookLineIcon } from './ClarityBookLineIcon.js';
import { ClarityNotificationSolidBadged } from './ClarityNotificationSolidBadged.js';
import classes from './HomeStudent.module.css';
import { IcOutlineAccountCircleIcon } from './IcOutlineAccountCircleIcon.js';
import { JamHomeFIcon } from './JamHomeFIcon.js';
import { LatestNews } from './LatestNews/LatestNews.js';
import { MessageDotsCircle } from './MessageDotsCircle/MessageDotsCircle.js';
import { MessageDotsCircleIcon } from './MessageDotsCircleIcon.js';
import { Rectangle58Icon } from './Rectangle58Icon.js';
import { TeacherPanaIcon } from './TeacherPanaIcon.js';
import { Vector1Icon } from './Vector1Icon.js';
import { Vector2Icon } from './Vector2Icon.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 5752:4689 */
export const HomeStudent: FC<Props> = memo(function HomeStudent(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle33}></div>
      <div className={classes.antDesignSearchOutlined}>
        <AntDesignSearchOutlinedIcon className={classes.icon5} />
      </div>
      <div className={classes.timKiem}>Tìm kiếm</div>
      <div className={classes.xinChaoEdison}>Xin chào, Edison</div>
      <div className={classes.homNayBanMuonLamGi}>Hôm nay bạn muốn làm gì</div>
      <div className={classes.clarityNotificationSolidBadged}>
        <ClarityNotificationSolidBadged className={classes.icon6} />
      </div>
      <div className={classes.barsStatusBarIPhoneLight}>
        <div className={classes.rectangle29}></div>
        <div className={classes.battery}>
          <BatteryIcon className={classes.icon7} />
        </div>
        <div className={classes.wifi}>
          <WifiIcon className={classes.icon8} />
        </div>
        <div className={classes.cellularConnection}>
          <CellularConnectionIcon className={classes.icon9} />
        </div>
        <div className={classes.timeStyle}>
          <div className={classes.time}>9:41</div>
        </div>
      </div>
      <div onClick={() => { navigate('/lop-hoc'); }} className={classes.recentLearning}>
        <div className={classes.lopHocAngThamGia}>Lớp học đang tham gia</div>
        <div onClick={() => { navigate('/lop-hoc'); }} className={classes.rectangle34}></div>
        <div className={classes._30HocSinh}>30 học sinh</div>
        <div className={classes.biPeople}>
          <BiPeopleIcon className={classes.icon10} />
        </div>
        <div className={classes.nguVan6}>Ngữ văn 6</div>
        <div className={classes.lop6A1}>Lớp 6A1</div>
        <div className={classes.rectangle57}></div>
      </div>
      <LatestNews
        className={classes.latestNews2}
        classes={{
          vishwarajsinhRana_1fByLYHA_0Un: classes.vishwarajsinhRana_1fByLYHA_0Un,
          vishwarajsinhRana_1fByLYHA_0Un2: classes.vishwarajsinhRana_1fByLYHA_0Un2,
          nationalCancerInstituteL7en7Lb: classes.nationalCancerInstituteL7en7Lb,
        }}
        swap={{
          bxBxTime: <BxBxTimeIcon className={classes.icon} />,
          bxBxTime2: <BxBxTimeIcon2 className={classes.icon2} />,
          bxBxTime3: <BxBxTimeIcon3 className={classes.icon3} />,
        }}
        text={{
          howToWorkOutAPercentageUsingAC: (
            <div className={classes.howToWorkOutAPercentageUsingAC}>
              <div className={classes.textBlock}>Tóm tắt văn bản theo những yêu cầu khác nhau về độ dài</div>
              <div className={classes.textBlock2}>
                <p></p>
              </div>
              <div className={classes.textBlock3}>
                <p></p>
              </div>
            </div>
          ),
          _24August2020: <div className={classes._24August2020}>1/8/2024</div>,
          mathematics: <div className={classes.mathematics}>Ngữ văn 6</div>,
          howToWorkOutAPercentageUsingAC2: (
            <div className={classes.howToWorkOutAPercentageUsingAC2}>
              <div className={classes.textBlock4}>Viết bài luận về bản thân</div>
              <div className={classes.textBlock5}>
                <p></p>
              </div>
              <div className={classes.textBlock6}>
                <p></p>
              </div>
            </div>
          ),
          _24August20202: <div className={classes._24August20202}>1/1/2024</div>,
          mathematics2: <div className={classes.mathematics2}>Ngữ văn 8</div>,
          theEffectsOfTemperatureOnEnzym: (
            <div className={classes.theEffectsOfTemperatureOnEnzym}>
              <div className={classes.textBlock7}>Bàn luận về hiện tượng bạo lực học đường</div>
              <div className={classes.textBlock8}>
                <p></p>
              </div>
              <div className={classes.textBlock9}>
                <p></p>
              </div>
            </div>
          ),
          _1HourAgo: <div className={classes._1HourAgo}>1 giờ trước</div>,
          biology: <div className={classes.biology}>Ngữ văn 6</div>,
          latestNews: <div className={classes.latestNews}>Đề tự luyện chung</div>,
          seeAll: <div className={classes.seeAll}>Xem tất cả</div>,
        }}
      />
      <button className={classes.button}>
        <MessageDotsCircle
          swap={{
            icon: <MessageDotsCircleIcon  onClick={() => { navigate('/chat'); }} className={classes.icon4} />,
          }}
        />
      </button>
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle332}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes.trangChu}>Trang chủ</div>
      <div className={classes.jamHomeF}>
        <JamHomeFIcon className={classes.icon11} />
      </div>
      <div className={classes.rectangle342}></div>
      <div className={classes.clarityBookLine}>
        <ClarityBookLineIcon onClick={() => { navigate('/lop-hoc'); }} className={classes.icon12} />
      </div>
      <div className={classes.rectangle35}></div>
      <div className={classes.icOutlineAccountCircle}>
        <IcOutlineAccountCircleIcon onClick={() => { navigate('/profile'); }} className={classes.icon13} />
      </div>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
    </div>
  );
});
