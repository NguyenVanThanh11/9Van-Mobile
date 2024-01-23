import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_9Van.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _9Van?: ReactNode;
  };
}
/* @figmaId 5546:13301 */
export const _9Van: FC<Props> = memo(function _9Van(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?._9Van != null ? props.text?._9Van : <div className={classes._9Van}>9Văn</div>}
    </div>
  );
});
