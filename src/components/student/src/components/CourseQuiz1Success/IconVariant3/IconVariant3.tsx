import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconVariant3.module.css';
import { IconVariant3Icon } from './IconVariant3Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 5461:14059 */
export const IconVariant3: FC<Props> = memo(function IconVariant3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>
        <IconVariant3Icon className={classes.icon2} />
      </div>
    </div>
  );
});
