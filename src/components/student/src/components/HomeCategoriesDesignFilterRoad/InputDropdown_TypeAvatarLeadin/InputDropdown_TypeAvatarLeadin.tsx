import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ChevronDown } from '../ChevronDown/ChevronDown.js';
import { ChevronDownIcon } from './ChevronDownIcon.js';
import classes from './InputDropdown_TypeAvatarLeadin.module.css';

interface Props {
  className?: string;
}
/* @figmaId 3281:379968 */
export const InputDropdown_TypeAvatarLeadin: FC<Props> = memo(function InputDropdown_TypeAvatarLeadin(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.inputWithLabel}>
        <div className={classes.label}>Team member</div>
        <div className={classes.input}>
          <div className={classes.content}>
            <div className={classes.text}>Danh sách học sinh</div>
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
