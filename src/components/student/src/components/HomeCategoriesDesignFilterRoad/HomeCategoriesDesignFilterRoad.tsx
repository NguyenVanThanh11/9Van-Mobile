import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { _ButtonGroupBase_CurrentFalseI } from './_ButtonGroupBase_CurrentFalseI/_ButtonGroupBase_CurrentFalseI.js';
import { _Dot_SizeMd } from './_Dot_SizeMd/_Dot_SizeMd.js';
import { _Time_DarkModeFalseTypeDefault } from './_Time_DarkModeFalseTypeDefault/_Time_DarkModeFalseTypeDefault.js';
import { ArrowLeft } from './ArrowLeft/ArrowLeft.js';
import { ArrowLeftIcon } from './ArrowLeftIcon.js';
import { BiPeopleIcon } from './BiPeopleIcon.js';
import { ChevronDown } from './ChevronDown/ChevronDown.js';
import { ChevronDownIcon } from './ChevronDownIcon.js';
import { ClarityBookSolidIcon } from './ClarityBookSolidIcon.js';
import { ContainerIcon } from './ContainerIcon.js';
import classes from './HomeCategoriesDesignFilterRoad.module.css';
import { IcOutlineAccountCircleIcon } from './IcOutlineAccountCircleIcon.js';
import { InputDropdown_TypeAvatarLeadin } from './InputDropdown_TypeAvatarLeadin/InputDropdown_TypeAvatarLeadin.js';
import { InputDropdown_TypeIconLeadingS } from './InputDropdown_TypeIconLeadingS/InputDropdown_TypeIconLeadingS.js';
import { InputForm } from './InputForm/InputForm.js';
import { JamHomeIcon } from './JamHomeIcon.js';
import { MessageDotsCircle } from './MessageDotsCircle/MessageDotsCircle.js';
import { MessageDotsCircleIcon } from './MessageDotsCircleIcon.js';
import { UPlay } from './UPlay/UPlay.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 5690:41909 */
export const HomeCategoriesDesignFilterRoad: FC<Props> = memo(function HomeCategoriesDesignFilterRoad(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.paragraphContainer}>
        <div className={classes.lop6A1}>Lớp 6A1</div>
      </div>
      <div className={classes.tooltipContainer}>
        <div className={classes.tooltip}>
          <div className={classes.image}></div>
          <div className={classes.container2}></div>
          <div className={classes.switch}>
            <UPlay
              className={classes.slider}
              swap={{
                vector: <VectorIcon className={classes.icon} />,
              }}
            />
          </div>
          <div className={classes.chuongTrinhNguVan6}>Chương trình ngữ văn 6</div>
        </div>
      </div>
      <_ButtonGroupBase_CurrentFalseI
        className={classes._ButtonGroupBase}
        swap={{
          placeholder: (
            <ArrowLeft
              className={classes.arrowLeft}
              swap={{
                icon: <ArrowLeftIcon onClick={() => { navigate('/hoc-sinh'); }} className={classes.icon2} />,
              }}
            />
          ),
        }}
      />
      <div className={classes.nguVan6}>Ngữ văn 6</div>
      <div className={classes._10Chuong}>10 Chương </div>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
      <InputForm className={classes.inputForm} />
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle33}></div>
      <div onClick={() => { navigate('/hoc-sinh'); }} className={classes.jamHome}>
        <JamHomeIcon className={classes.icon6} />
      </div>
      <div className={classes.rectangle34}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes.lopHoc}>Lớp học</div>
      <div className={classes.clarityBookSolid}>
        <ClarityBookSolidIcon className={classes.icon7} />
      </div>
      <div className={classes.rectangle35}></div>
      <div onClick={() => { navigate('/profile'); }} className={classes.icOutlineAccountCircle}>
        <IcOutlineAccountCircleIcon className={classes.icon8} />
      </div>
      <button className={classes.button}>
        <MessageDotsCircle
          swap={{
            icon: <MessageDotsCircleIcon onClick={() => { navigate('/chat'); }} className={classes.icon5} />,
          }}
        />
      </button>
      <div className={classes.horizontalContainer}>
        <div className={classes.container3}>
          <ContainerIcon className={classes.icon9} />
        </div>
        <_Time_DarkModeFalseTypeDefault
          className={classes.container}
          text={{
            _941: <div className={classes._941}>9:41</div>,
          }}
        />
      </div>
    </div>
  );
});
