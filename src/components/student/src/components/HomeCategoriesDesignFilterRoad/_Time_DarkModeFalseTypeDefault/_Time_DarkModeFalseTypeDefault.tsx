import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_Time_DarkModeFalseTypeDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _941?: ReactNode;
  };
}
/* @figmaId 5633:32453 */
export const _Time_DarkModeFalseTypeDefault: FC<Props> = memo(function _Time_DarkModeFalseTypeDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?._941 != null ? props.text?._941 : <div className={classes._941}>9:41</div>}
    </div>
  );
});
