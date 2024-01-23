import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { SocialIcon_PlatformAppleColorB } from '../SocialIcon_PlatformAppleColorB/SocialIcon_PlatformAppleColorB.js';
import classes from './SocialButton_SocialAppleSuppor.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1256:131971 */
export const SocialButton_SocialAppleSuppor: FC<Props> = memo(function SocialButton_SocialAppleSuppor(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <SocialIcon_PlatformAppleColorB />
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Sign in with Apple</div>}
    </button>
  );
});
