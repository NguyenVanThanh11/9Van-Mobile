import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _ButtonGroupBase_CurrentFalseI } from '../_ButtonGroupBase_CurrentFalseI/_ButtonGroupBase_CurrentFalseI.js';
import { Plus } from '../Plus/Plus.js';
import classes from './Component3.module.css';
import { PlusIcon } from './PlusIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 5633:27347 */
export const Component3: FC<Props> = memo(function Component3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_ButtonGroupBase_CurrentFalseI
        className={classes._ButtonGroupBase}
        swap={{
          placeholder: (
            <Plus
              className={classes.plus}
              swap={{
                icon: <PlusIcon className={classes.icon} />,
              }}
            />
          ),
        }}
      />
      <div className={classes.noiDung}>Nội dung</div>
      <div className={classes.frame1000004499}>
        <div className={classes.oPhanMoBaiBaiVanANeuHienTuongT}>
          Ở phần mở bài, bài văn đã nêu hiện tượng tự nhiên và đưa ra cái nhìn bao quát về hiện tượng này chưa?
        </div>
      </div>
      <div className={classes.frame1000004500}>
        <div className={classes.oPhanMoBaiBaiVanANeuHienTuongT2}>
          Ở phần mở bài, bài văn đã nêu hiện tượng tự nhiên và đưa ra cái nhìn bao quát về hiện tượng này chưa?
        </div>
      </div>
      <div className={classes.frame1000004501}>
        <div className={classes.oPhanMoBaiBaiVanANeuHienTuongT3}>
          Ở phần mở bài, bài văn đã nêu hiện tượng tự nhiên và đưa ra cái nhìn bao quát về hiện tượng này chưa?
        </div>
      </div>
      <div className={classes.frame1000004502}>
        <div className={classes.oPhanMoBaiBaiVanANeuHienTuongT4}>
          Ở phần mở bài, bài văn đã nêu hiện tượng tự nhiên và đưa ra cái nhìn bao quát về hiện tượng này chưa?
        </div>
      </div>
    </div>
  );
});
