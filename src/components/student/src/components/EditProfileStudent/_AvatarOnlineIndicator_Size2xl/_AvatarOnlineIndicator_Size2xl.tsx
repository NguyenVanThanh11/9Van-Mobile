import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_AvatarOnlineIndicator_Size2xl.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1216:2775 */
export const _AvatarOnlineIndicator_Size2xl: FC<Props> = memo(function _AvatarOnlineIndicator_Size2xl(props = {}) {
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    ></div>
  );
});
