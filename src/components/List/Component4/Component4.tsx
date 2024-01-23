import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../../_resets.module.css';
import classes from './Component4.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 5635:37052 */
export const Component4: FC<Props> = memo(function Component4(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.inputForm}>
        <div onClick={() => { navigate('/chi-tiet-bai-hoc'); }} className={classes.segmentedPicker}>
          <div className={classes.banLuanVeHienTuongHutThuocLaIe}>
            Bàn luận về hiện tượng hút thuốc lá điện tử trong học đường
          </div>
        </div>
        <div onClick={() => { navigate('/chi-tiet-bai-hoc'); }} className={classes.segmentedPicker2}>
          <div className={classes.banLuanVeHienTuongBaoLucHocUon}>Bàn luận về hiện tượng bạo lực học đường</div>
        </div>
        <div onClick={() => { navigate('/chi-tiet-bai-hoc'); }} className={classes.segmentedPicker3}>
          <div className={classes.banLuanVeHienTuongHocVetHocTuT}>
            Bàn luận về hiện tượng học vẹt, học tủ trong học sinh
          </div>
        </div>
        <div onClick={() => { navigate('/chi-tiet-bai-hoc'); }} className={classes.segmentedPicker4}>
          <div className={classes.banLuanVeHienTuongNghienGameOn}>
            Bàn luận về hiện tượng nghiện Game online của học sinh
          </div>
        </div>
        <div onClick={() => { navigate('/chi-tiet-bai-hoc'); }} className={classes.segmentedPicker5}>
          <div className={classes.traoOiVoiNguoiThanNhungMongMuo}>
            Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
          </div>
        </div>
        <button className={classes.button}>
          <div className={classes.vietBaiLuanVeBanThan}>Viết bài luận về bản thân</div>
        </button>
        <div className={classes.segmentedPicker6}>
          <div className={classes.traoOiVoiNguoiThanNhungMongMuo2}>
            Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
          </div>
        </div>
        <div className={classes.segmentedPicker7}>
          <div className={classes.traoOiVoiNguoiThanNhungMongMuo3}>
            Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
          </div>
        </div>
        <div className={classes.segmentedPicker8}>
          <div className={classes.traoOiVoiNguoiThanNhungMongMuo4}>
            Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
          </div>
        </div>
        <div className={classes.segmentedPicker9}>
          <div className={classes.traoOiVoiNguoiThanNhungMongMuo5}>
            Trao đổi với người thân những mong muốn của em về kì nghỉ hè năm tới
          </div>
        </div>
      </div>
    </div>
  );
});
