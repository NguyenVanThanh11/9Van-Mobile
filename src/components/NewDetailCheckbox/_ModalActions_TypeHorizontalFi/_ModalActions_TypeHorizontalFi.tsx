import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_SizeLgHierarchyPrimaryI } from '../Button_SizeLgHierarchyPrimaryI/Button_SizeLgHierarchyPrimaryI.js';
import { Button_SizeLgHierarchySecondar } from '../Button_SizeLgHierarchySecondar/Button_SizeLgHierarchySecondar.js';
import classes from './_ModalActions_TypeHorizontalFi.module.css';

interface Props {
  className?: string;
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
    iconVariant3?: boolean;
  };
  text?: {
    text?: ReactNode;
    text2?: ReactNode;
  };
}
/* @figmaId 1104:365 */
export const _ModalActions_TypeHorizontalFi: FC<Props> = memo(function _ModalActions_TypeHorizontalFi(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Button_SizeLgHierarchySecondar
        className={classes.button}
        hide={{
          iconVariant3: props.hide?.iconVariant3,
        }}
        text={{
          text: props.text?.text || <div className={classes.text}>Cancel</div>,
        }}
      />
      <Button_SizeLgHierarchyPrimaryI
        className={classes.button2}
        hide={{
          placeholder: true,
          placeholder2: true,
        }}
        text={{
          text: props.text?.text2 || <div className={classes.text2}>Confirm</div>,
        }}
      />
    </div>
  );
});
