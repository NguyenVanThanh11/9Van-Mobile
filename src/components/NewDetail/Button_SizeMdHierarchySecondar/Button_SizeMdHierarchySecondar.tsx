import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Plus } from '../Plus/Plus.js';
import classes from './Button_SizeMdHierarchySecondar.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    plus?: boolean;
  };
  text?: {
    text?: ReactNode;
  };
}
/* @figmaId 3287:427323 */
export const Button_SizeMdHierarchySecondar: FC<Props> = memo(function Button_SizeMdHierarchySecondar(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.plus && <Plus />}
      {props.text?.text != null ? props.text?.text : <div className={classes.text}>Button CTA</div>}
    </button>
  );
});
