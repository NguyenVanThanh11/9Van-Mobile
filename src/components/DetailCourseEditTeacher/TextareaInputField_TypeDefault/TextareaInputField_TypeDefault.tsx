import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TextareaInputField_TypeDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    inputWithLabel?: string;
    root?: string;
  };
  hide?: {
    hintText?: boolean;
  };
  text?: {
    label?: ReactNode;
    text?: ReactNode;
  };
}
/* @figmaId 1238:362 */
export const TextareaInputField_TypeDefault: FC<Props> = memo(function TextareaInputField_TypeDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.inputWithLabel || ''} ${classes.inputWithLabel}`}>
        {props.text?.label != null ? props.text?.label : <div className={classes.label}>Description</div>}
        <div className={classes.input}>
          {props.text?.text != null ? props.text?.text : <div className={classes.text}>Enter a description...</div>}
        </div>
      </div>
      {!props.hide?.hintText && <div className={classes.hintText}>This is a hint text to help user.</div>}
    </div>
  );
});
