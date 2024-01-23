import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BxBxTimeIcon2 } from './BxBxTimeIcon2.js';
import { BxBxTimeIcon3 } from './BxBxTimeIcon3.js';
import { BxBxTimeIcon } from './BxBxTimeIcon.js';
import classes from './LatestNews.module.css';

interface Props {
  className?: string;
  classes?: {
    vishwarajsinhRana_1fByLYHA_0Un?: string;
    vishwarajsinhRana_1fByLYHA_0Un2?: string;
    nationalCancerInstituteL7en7Lb?: string;
    root?: string;
  };
  swap?: {
    bxBxTime?: ReactNode;
    bxBxTime2?: ReactNode;
    bxBxTime3?: ReactNode;
  };
  text?: {
    howToWorkOutAPercentageUsingAC?: ReactNode;
    _24August2020?: ReactNode;
    mathematics?: ReactNode;
    howToWorkOutAPercentageUsingAC2?: ReactNode;
    _24August20202?: ReactNode;
    mathematics2?: ReactNode;
    theEffectsOfTemperatureOnEnzym?: ReactNode;
    _1HourAgo?: ReactNode;
    biology?: ReactNode;
    latestNews?: ReactNode;
    seeAll?: ReactNode;
  };
}
/* @figmaId 5619:13501 */
export const LatestNews: FC<Props> = memo(function LatestNews(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.howToWorkOutAPercentageUsingAC != null ? (
        props.text?.howToWorkOutAPercentageUsingAC
      ) : (
        <div className={classes.howToWorkOutAPercentageUsingAC}>How to Work Out a Percentage Using a Calculator</div>
      )}
      {props.text?._24August2020 != null ? (
        props.text?._24August2020
      ) : (
        <div className={classes._24August2020}>24 August 2020</div>
      )}
      <div className={classes.bxBxTime}>{props.swap?.bxBxTime || <BxBxTimeIcon className={classes.icon} />}</div>
      <div
        className={`${props.classes?.vishwarajsinhRana_1fByLYHA_0Un || ''} ${classes.vishwarajsinhRana_1fByLYHA_0Un}`}
      ></div>
      {props.text?.mathematics != null ? (
        props.text?.mathematics
      ) : (
        <div className={classes.mathematics}>Mathematics</div>
      )}
      {props.text?.howToWorkOutAPercentageUsingAC2 != null ? (
        props.text?.howToWorkOutAPercentageUsingAC2
      ) : (
        <div className={classes.howToWorkOutAPercentageUsingAC2}>How to Work Out a Percentage Using a Calculator</div>
      )}
      {props.text?._24August20202 != null ? (
        props.text?._24August20202
      ) : (
        <div className={classes._24August20202}>24 August 2020</div>
      )}
      <div className={classes.bxBxTime2}>{props.swap?.bxBxTime2 || <BxBxTimeIcon2 className={classes.icon2} />}</div>
      <div
        className={`${props.classes?.vishwarajsinhRana_1fByLYHA_0Un2 || ''} ${classes.vishwarajsinhRana_1fByLYHA_0Un2}`}
      ></div>
      {props.text?.mathematics2 != null ? (
        props.text?.mathematics2
      ) : (
        <div className={classes.mathematics2}>Mathematics</div>
      )}
      {props.text?.theEffectsOfTemperatureOnEnzym != null ? (
        props.text?.theEffectsOfTemperatureOnEnzym
      ) : (
        <div className={classes.theEffectsOfTemperatureOnEnzym}>
          The Effects of Temperature on Enzyme Activity and Biology
        </div>
      )}
      {props.text?._1HourAgo != null ? props.text?._1HourAgo : <div className={classes._1HourAgo}>1 hour ago</div>}
      <div className={classes.bxBxTime3}>{props.swap?.bxBxTime3 || <BxBxTimeIcon3 className={classes.icon3} />}</div>
      <div
        className={`${props.classes?.nationalCancerInstituteL7en7Lb || ''} ${classes.nationalCancerInstituteL7en7Lb}`}
      ></div>
      {props.text?.biology != null ? props.text?.biology : <div className={classes.biology}>Biology</div>}
      {props.text?.latestNews != null ? props.text?.latestNews : <div className={classes.latestNews}>Latest News</div>}
      {props.text?.seeAll != null ? props.text?.seeAll : <div className={classes.seeAll}>See all</div>}
    </div>
  );
});
