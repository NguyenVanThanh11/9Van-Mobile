import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SocialIcon_PlatformFacebookCol.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1027:1516 */
export const SocialIcon_PlatformFacebookCol: FC<Props> = memo(function SocialIcon_PlatformFacebookCol(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon2} />
      </div>
    </div>
  );
});
