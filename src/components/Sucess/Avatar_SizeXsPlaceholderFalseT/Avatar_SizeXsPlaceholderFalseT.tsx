import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatar_SizeXsPlaceholderFalseT.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 19:1011 */
export const Avatar_SizeXsPlaceholderFalseT: FC<Props> = memo(function Avatar_SizeXsPlaceholderFalseT(props = {}) {
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    ></div>
  );
});
