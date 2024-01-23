import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _FileUploadIcon_FileTypeMiscSt } from '../_FileUploadIcon_FileTypeMiscSt/_FileUploadIcon_FileTypeMiscSt.js';
import { LoadingIndicator_StyleLineSimp } from '../LoadingIndicator_StyleLineSimp/LoadingIndicator_StyleLineSimp.js';
import classes from './_FileUploadItemBase_TypeProgre3.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    text?: boolean;
  };
  text?: {
    text?: ReactNode;
    supportingText?: ReactNode;
  };
}
/* @figmaId 1251:4077 */
export const _FileUploadItemBase_TypeProgre3: FC<Props> = memo(function _FileUploadItemBase_TypeProgre3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.progressFill}></div>
      <div className={classes.content}>
        <_FileUploadIcon_FileTypeMiscSt />
        <div className={classes.content2}>
          <div className={classes.textAndSupportingText}>
            {props.text?.text != null ? (
              props.text?.text
            ) : (
              <div className={classes.text}>Tech design requirements.pdf</div>
            )}
            {props.text?.supportingText != null ? (
              props.text?.supportingText
            ) : (
              <div className={classes.supportingText}>200 KB – 70% uploaded</div>
            )}
          </div>
        </div>
      </div>
      <LoadingIndicator_StyleLineSimp
        className={classes.loadingIndicator}
        hide={{
          text: true,
        }}
      />
    </div>
  );
});
