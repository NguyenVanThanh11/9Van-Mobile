import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Path4Icon } from './Path4Icon.js';
import classes from './SocialIcon_PlatformAppleColorB.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1027:1536 */
export const SocialIcon_PlatformAppleColorB: FC<Props> = memo(function SocialIcon_PlatformAppleColorB(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.path4}>
        <Path4Icon className={classes.icon} />
      </div>
    </div>
  );
});
