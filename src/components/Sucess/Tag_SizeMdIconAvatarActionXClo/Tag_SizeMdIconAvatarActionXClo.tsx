import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _TagXClose_SizeMdStateDefault } from '../_TagXClose_SizeMdStateDefault/_TagXClose_SizeMdStateDefault.js';
import { Avatar_SizeXsPlaceholderFalseT } from '../Avatar_SizeXsPlaceholderFalseT/Avatar_SizeXsPlaceholderFalseT.js';
import classes from './Tag_SizeMdIconAvatarActionXClo.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    avatar?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 3307:418149 */
export const Tag_SizeMdIconAvatarActionXClo: FC<Props> = memo(function Tag_SizeMdIconAvatarActionXClo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.content}>
        {!props.hide?.avatar && <Avatar_SizeXsPlaceholderFalseT className={classes.avatar} />}
        {props.text?.text != null ? props.text?.text : <div className={classes.text}>Label</div>}
      </div>
      <_TagXClose_SizeMdStateDefault className={classes._TagXClose} />
    </div>
  );
});
