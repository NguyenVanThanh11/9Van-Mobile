import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { LoadingCircleIcon } from './LoadingCircleIcon.js';
import classes from './LoadingIndicator_StyleLineSimp.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    text?: boolean;
  };
}
/* @figmaId 1198:99394 */
export const LoadingIndicator_StyleLineSimp: FC<Props> = memo(function LoadingIndicator_StyleLineSimp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.content}>
        <div className={classes.loadingCircle}>
          <LoadingCircleIcon className={classes.icon} />
        </div>
        {!props.hide?.text && <div className={classes.text}>Loading...</div>}
      </div>
    </div>
  );
});
