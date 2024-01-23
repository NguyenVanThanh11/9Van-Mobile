import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './UploadCloud2.module.css';
import { UploadCloud2Icon } from './UploadCloud2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3463:405156 */
export const UploadCloud2: FC<Props> = memo(function UploadCloud2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <UploadCloud2Icon className={classes.icon2} />}</div>
    </div>
  );
});
