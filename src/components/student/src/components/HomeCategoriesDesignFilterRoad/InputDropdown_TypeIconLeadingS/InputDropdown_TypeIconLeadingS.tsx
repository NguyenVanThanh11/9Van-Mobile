import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ChevronDown } from '../ChevronDown/ChevronDown.js';
import { ChevronDownIcon } from './ChevronDownIcon.js';
import classes from './InputDropdown_TypeIconLeadingS.module.css';

interface Props {
  className?: string;
}
/* @figmaId 3281:379949 */
export const InputDropdown_TypeIconLeadingS: FC<Props> = memo(function InputDropdown_TypeIconLeadingS(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.inputWithLabel}>
        <div className={classes.label}>Team member</div>
        <div className={classes.input}>
          <div className={classes.content}>
            <div className={classes.text}>Danh sách bài tập</div>
          </div>
          <ChevronDown
            className={classes.chevronDown}
            swap={{
              icon: <ChevronDownIcon className={classes.icon} />,
            }}
          />
        </div>
      </div>
    </div>
  );
});
