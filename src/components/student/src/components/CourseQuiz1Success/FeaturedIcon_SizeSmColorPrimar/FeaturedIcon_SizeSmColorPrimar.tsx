import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AlertCircle } from '../AlertCircle/AlertCircle.js';
import { AlertCircleIcon } from './AlertCircleIcon.js';
import classes from './FeaturedIcon_SizeSmColorPrimar.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    alertCircle?: ReactNode;
  };
}
/* @figmaId 1102:5672 */
export const FeaturedIcon_SizeSmColorPrimar: FC<Props> = memo(function FeaturedIcon_SizeSmColorPrimar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.alertCircle || (
        <AlertCircle
          className={classes.alertCircle}
          swap={{
            icon: <AlertCircleIcon className={classes.icon} />,
          }}
        />
      )}
    </div>
  );
});
