import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_ButtonGroupBaseTrueFalseDefau.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle1?: string;
    root?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 1241:125606 */
export const _ButtonGroupBaseTrueFalseDefau: FC<Props> = memo(function _ButtonGroupBaseTrueFalseDefau(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle1 || ''} ${classes.rectangle1}`}></div>
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Text</div>}
    </div>
  );
});
