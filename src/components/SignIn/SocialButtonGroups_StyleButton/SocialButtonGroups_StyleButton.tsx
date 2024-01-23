import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { SocialButton_SocialAppleSuppor } from '../SocialButton_SocialAppleSuppor/SocialButton_SocialAppleSuppor.js';
import { SocialButton_SocialFacebookSup } from '../SocialButton_SocialFacebookSup/SocialButton_SocialFacebookSup.js';
import { SocialButton_SocialGoogleSuppo } from '../SocialButton_SocialGoogleSuppo/SocialButton_SocialGoogleSuppo.js';
import { SocialButton_SocialTwitterSupp } from '../SocialButton_SocialTwitterSupp/SocialButton_SocialTwitterSupp.js';
import classes from './SocialButtonGroups_StyleButton.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    text?: ReactNode;
    text2?: ReactNode;
    text3?: ReactNode;
  };
}
/* @figmaId 1256:132637 */
export const SocialButtonGroups_StyleButton: FC<Props> = memo(function SocialButtonGroups_StyleButton(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <SocialButton_SocialGoogleSuppo
        className={classes.socialButton}
        text={{
          text: props.text?.text,
        }}
      />
      <SocialButton_SocialFacebookSup
        className={classes.socialButton2}
        text={{
          text: props.text?.text2,
        }}
      />
      <SocialButton_SocialAppleSuppor
        className={classes.socialButton3}
        text={{
          text: props.text?.text3,
        }}
      />
    </div>
  );
});
