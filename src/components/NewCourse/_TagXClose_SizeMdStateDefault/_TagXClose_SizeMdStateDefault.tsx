import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { XClose } from '../XClose/XClose.js';
import classes from './_TagXClose_SizeMdStateDefault.module.css';
import { XCloseIcon } from './XCloseIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 3307:417720 */
export const _TagXClose_SizeMdStateDefault: FC<Props> = memo(function _TagXClose_SizeMdStateDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <XClose
        className={classes.xClose}
        swap={{
          icon: <XCloseIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
