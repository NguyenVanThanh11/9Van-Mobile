import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../../_resets.module.css';
import { UPlay } from '../UPlay/UPlay.js';
import classes from './InputForm.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 5682:41561 */
export const InputForm: FC<Props> = memo(function InputForm(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.paragraphContainer}>
        <div className={classes.lyThuyet}>Lý thuyết</div>
        <div className={classes._10Chuong}>10 chương</div>
      </div>
      <div onClick={() => { navigate('/chi-tiet-bai-hoc'); }} className={classes.segmentedPicker}>
        <div className={classes.switch}>
          <UPlay
            className={classes.slider}
            swap={{
              vector: <VectorIcon className={classes.icon} />,
            }}
          />
        </div>
        <div className={classes.chuong1ToiVaCacBan}>Chương 1 : Tôi và các bạn</div>
      </div>
      <div onClick={() => { navigate('/chi-tiet-bai-hoc'); }} className={classes.segmentedPicker2}>
        <div className={classes.switch2}>
          <UPlay
            className={classes.slider2}
            swap={{
              vector: <VectorIcon2 className={classes.icon2} />,
            }}
          />
        </div>
        <div className={classes.chuong2GoCuaTraiTim}>Chương 2 :Gõ cửa trái tim</div>
      </div>
      <div onClick={() => { navigate('/chi-tiet-bai-hoc'); }} className={classes.segmentedPicker3}>
        <div className={classes.switch3}>
          <UPlay
            className={classes.slider3}
            swap={{
              vector: <VectorIcon3 className={classes.icon3} />,
            }}
          />
        </div>
        <div className={classes.chuong3YeuThuongVaChiaSe}>Chương 3 : Yêu thương và chia sẻ</div>
      </div>
      <div className={classes.segmentedPicker4}>
        <div className={classes.switch4}>
          <UPlay
            className={classes.slider4}
            swap={{
              vector: <VectorIcon4 className={classes.icon4} />,
            }}
          />
        </div>
        <div className={classes.chuong4QueHuongYeuDau}>Chương 4: Quê hương yêu dấu</div>
      </div>
      <div className={classes.segmentedPicker5}>
        <div className={classes.switch5}>
          <UPlay
            className={classes.slider5}
            swap={{
              vector: <VectorIcon5 className={classes.icon5} />,
            }}
          />
        </div>
        <div className={classes.chuong5TheGioiCoTich}>Chương 5: Thế giới cổ tích</div>
      </div>
    </div>
  );
});
