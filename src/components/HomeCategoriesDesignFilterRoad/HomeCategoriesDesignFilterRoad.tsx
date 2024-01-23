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
import { JamHomeIcon } from './JamHomeIcon.js';
import { MessageDotsCircle } from './MessageDotsCircle/MessageDotsCircle.js';
import { MessageDotsCircleIcon } from './MessageDotsCircleIcon.js';
import { SegmentedPickerIcon2 } from './SegmentedPickerIcon2.js';
import { SegmentedPickerIcon } from './SegmentedPickerIcon.js';
import { Slider } from './Slider/Slider.js';
import { SliderIcon } from './SliderIcon.js';
import { SwitchIcon2 } from './SwitchIcon2.js';
import { SwitchIcon } from './SwitchIcon.js';
import { UPlay } from './UPlay/UPlay.js';

interface Props {
  className?: string;
  hide?: {
    label?: boolean;
  };
}
/* @figmaId 5633:33058 */
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
            <UPlay className={classes.slider} />
          </div>
          <div className={classes.chuongTrinhNguVan6}>Chương trình ngữ văn 6</div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button}>
          <div className={classes.buyClassRp0}>Buy class - Rp0</div>
        </button>
      </div>
      <div className={classes.textInputContainer}>
        <div className={classes.textInput}></div>
      </div>
      <div className={classes.container3}>
        <div className={classes.getInTouch}>Get in touch!</div>
        <div className={classes.segmentedPickerContainer}>
          <div className={classes.segmentedPicker}>
            <SegmentedPickerIcon className={classes.icon4} />
          </div>
          <div className={classes.slider2}>
            <SliderIcon className={classes.icon5} />
          </div>
          <div className={classes.segmentedPicker2}>
            <SegmentedPickerIcon2 className={classes.icon6} />
          </div>
        </div>
      </div>
      <div className={classes.paragraphContainer2}>
        <div className={classes.aboutClass}>About class</div>
        <div className={classes.thisClassIsAnEarlyStageToLearn}>
          This class is an early stage to learn more about Application History, when the application was first created,
          by who the creator was, and why the application was created to the development of the application today.
        </div>
      </div>
      <div className={classes.table}>
        <div className={classes.keyPoint}>Key point</div>
        <div className={classes.verticalContainer}>
          <div className={classes.textInput2}>
            <Slider />
            <div className={classes.understandWhyTheApp}>Understand why the App.</div>
          </div>
          <div className={classes.container4}>
            <Slider />
            <div className={classes.theEssenceOfAppCreation}>The essence of App creation.</div>
          </div>
          <div className={classes.container5}>
            <Slider />
            <div className={classes.applicationUseForHumanLife}>Application use for human life.</div>
          </div>
          <div className={classes.button2}>
            <Slider />
            <div className={classes.theImpactOfTheApplicationOnThe}>
              The impact of the application on the civilizations of the world&#39;s cultures.
            </div>
          </div>
          <div className={classes.button3}>
            <Slider />
            <div className={classes.understandTheDevelopmentOfAppl}>
              Understand the development of applications from time to time.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.horizontalContainer}>
        <div className={classes.benefit}>Benefit</div>
        <div className={classes.buttonContainer2}>
          <div className={classes.button4}>
            <Slider />
            <div className={classes.lifelongClassMaterial}>Lifelong class material.</div>
          </div>
        </div>
      </div>
      <div className={classes.calendar}>
        <div className={classes.toolsRequired}>Tools required</div>
        <div className={classes.container6}>
          <div className={classes.switchContainer}>
            <div className={classes.switch2}>
              <SwitchIcon className={classes.icon7} />
            </div>
          </div>
          <div className={classes.figma}>Figma</div>
        </div>
      </div>
      <div className={classes.verticalContainer2}>
        <div className={classes.verticalContainer3}>
          <div className={classes.mentorClass}>Mentor class</div>
          <div className={classes.switch3}>
            <SwitchIcon2 className={classes.icon8} />
          </div>
        </div>
        <div className={classes.paragraphContainer3}>
          <div className={classes.name}>Jacob Jones</div>
          <div className={classes.roleCompany}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>Sr. UI/UX Designer at </span>
              <span className={classes.label2}>Malaka Company, SGP.</span>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.sliderContainer}>
        <div className={classes.slider3}></div>
      </div>
      <div className={classes.horizontalContainer2}>
        <div className={classes.container7}>
          <ContainerIcon className={classes.icon9} />
        </div>
        <_Time_DarkModeFalseTypeDefault
          className={classes.container}
          text={{
            _941: <div className={classes._941}>9:41</div>,
          }}
        />
      </div>
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
      <div className={classes.nguVan6}>Ngữ văn 6</div>
      <div className={classes._10Chuong}>10 Chương </div>
      <div className={classes._30HocSinh}>30 học sinh</div>
      <div className={classes.biPeople}>
        <BiPeopleIcon className={classes.icon10} />
      </div>
      <div onClick={() => { navigate('/danh-sach-de-bai'); }} className={classes.inputWithLabel}>
        <div className={classes.input}>
          <div className={classes.content}>
            <div className={classes.text2}>Kho đề bài chung</div>
          </div>
          <ChevronDown
            className={classes.chevronDown}
            swap={{
              icon: <ChevronDownIcon className={classes.icon2} />,
            }}
          />
        </div>
      </div>
      <InputDropdown_TypeAvatarLeadin
        className={classes.inputDropdown}
        hide={{
          label: true,
        }}
        text={{
          text: <div className={classes.text}>Danh sách học sinh</div>,
        }}
      />
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle33}></div>
      <div className={classes.jamHome}>
        <JamHomeIcon onClick={() => { navigate('/giao-vien'); }} className={classes.icon11} />
      </div>
      <div className={classes.rectangle34}></div>
      <div className={classes.rectangle38}></div>
      <div className={classes.lopHoc}>Lớp học</div>
      <div className={classes.clarityBookSolid}>
        <ClarityBookSolidIcon className={classes.icon12} />
      </div>
      <div className={classes.rectangle35}></div>
      <div className={classes.icOutlineAccountCircle}>
        <IcOutlineAccountCircleIcon onClick={() => { navigate('/profile'); }} className={classes.icon13} />
      </div>
      <div className={classes.barsHomeIndicatorIPhoneLightPo}>
        <div className={classes.rectangle30}></div>
        <div className={classes.homeIndicator}></div>
      </div>
      <button className={classes.button5}>
        <MessageDotsCircle
          swap={{
            icon: <MessageDotsCircleIcon onClick={() => { navigate('/chat'); }} className={classes.icon3} />,
          }}
        />
      </button>
    </div>
  );
});
