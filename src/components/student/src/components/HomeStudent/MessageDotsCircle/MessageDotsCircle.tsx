import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './MessageDotsCircle.module.css';
import { MessageDotsCircleIcon } from './MessageDotsCircleIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:406248 */
export const MessageDotsCircle: FC<Props> = memo(function MessageDotsCircle(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <MessageDotsCircleIcon className={classes.icon2} />}</div>
    </div>
  );
});
