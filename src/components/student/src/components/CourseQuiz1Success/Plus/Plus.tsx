import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Plus.module.css';
import { PlusIcon } from './PlusIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 3463:405282 */
export const Plus: FC<Props> = memo(function Plus(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>
        <PlusIcon className={classes.icon2} />
      </div>
    </div>
  );
});
