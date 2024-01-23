import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ChevronDown } from '../ChevronDown/ChevronDown.js';
import { ChevronDownIcon } from './ChevronDownIcon.js';
import classes from './InputDropdown_TypeDefaultState.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 3281:379940 */
export const InputDropdown_TypeDefaultState: FC<Props> = memo(function InputDropdown_TypeDefaultState(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.inputWithLabel}>
        <div className={classes.label}>Lớp</div>
        <div className={classes.input}>
          <div className={classes.content}>
            {props.text?.text != null ? props.text?.text : <div className={classes.text}>6</div>}
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
