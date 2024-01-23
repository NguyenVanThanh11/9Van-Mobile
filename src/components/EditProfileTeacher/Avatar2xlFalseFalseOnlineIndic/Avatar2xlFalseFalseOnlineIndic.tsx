import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _AvatarOnlineIndicator_Size2xl } from '../_AvatarOnlineIndicator_Size2xl/_AvatarOnlineIndicator_Size2xl.js';
import classes from './Avatar2xlFalseFalseOnlineIndic.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1217:104660 */
export const Avatar2xlFalseFalseOnlineIndic: FC<Props> = memo(function Avatar2xlFalseFalseOnlineIndic(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_AvatarOnlineIndicator_Size2xl className={classes._AvatarOnlineIndicator} />
    </div>
  );
});
