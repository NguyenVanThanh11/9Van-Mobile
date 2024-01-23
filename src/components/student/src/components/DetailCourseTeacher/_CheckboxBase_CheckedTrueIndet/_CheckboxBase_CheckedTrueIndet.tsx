import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Check } from '../Check/Check.js';
import classes from './_CheckboxBase_CheckedTrueIndet.module.css';
import { CheckIcon } from './CheckIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1097:63895 */
export const _CheckboxBase_CheckedTrueIndet: FC<Props> = memo(function _CheckboxBase_CheckedTrueIndet(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Check
        className={classes.check}
        swap={{
          icon: <CheckIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
