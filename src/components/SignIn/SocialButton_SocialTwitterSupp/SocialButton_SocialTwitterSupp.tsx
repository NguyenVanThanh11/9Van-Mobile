import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { SocialIcon_PlatformTwitterColo } from '../SocialIcon_PlatformTwitterColo/SocialIcon_PlatformTwitterColo.js';
import classes from './SocialButton_SocialTwitterSupp.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1256:132135 */
export const SocialButton_SocialTwitterSupp: FC<Props> = memo(function SocialButton_SocialTwitterSupp(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <SocialIcon_PlatformTwitterColo />
      <div className={classes.text}>Sign in with Twitter</div>
    </button>
  );
});
