import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AlertCircle } from '../AlertCircle/AlertCircle.js';
import { AlertCircleIcon } from './AlertCircleIcon.js';
import classes from './FeaturedIcon_SizeMdColorGrayTh.module.css';

interface Props {
  className?: string;
  swap?: {
    alertCircle?: ReactNode;
  };
}
/* @figmaId 1130:88696 */
export const FeaturedIcon_SizeMdColorGrayTh: FC<Props> = memo(function FeaturedIcon_SizeMdColorGrayTh(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
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
