import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Edit2 } from '../Edit2/Edit2.js';
import classes from './Button.module.css';
import { Edit2Icon } from './Edit2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 5838:19908 */
export const Button: FC<Props> = memo(function Button(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Edit2
        className={classes.edit2}
        swap={{
          icon: <Edit2Icon className={classes.icon} />,
        }}
      />
    </button>
  );
});
