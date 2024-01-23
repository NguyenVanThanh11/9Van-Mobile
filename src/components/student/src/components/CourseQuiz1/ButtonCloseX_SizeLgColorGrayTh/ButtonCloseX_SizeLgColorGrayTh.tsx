import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { XClose } from '../XClose/XClose.js';
import classes from './ButtonCloseX_SizeLgColorGrayTh.module.css';
import { XCloseIcon } from './XCloseIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2763:420142 */
export const ButtonCloseX_SizeLgColorGrayTh: FC<Props> = memo(function ButtonCloseX_SizeLgColorGrayTh(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <XClose
        swap={{
          icon: <XCloseIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
