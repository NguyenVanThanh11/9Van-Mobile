import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _FileUploadIcon_FileTypeDocume } from '../_FileUploadIcon_FileTypeDocume/_FileUploadIcon_FileTypeDocume.js';
import { LoadingIndicator_StyleLineSimp } from '../LoadingIndicator_StyleLineSimp/LoadingIndicator_StyleLineSimp.js';
import classes from './_FileUploadItemBase_TypeProgre.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    text?: boolean;
  };
}
/* @figmaId 1251:3542 */
export const _FileUploadItemBase_TypeProgre: FC<Props> = memo(function _FileUploadItemBase_TypeProgre(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.progressFill}></div>
      <div className={classes.content}>
        <_FileUploadIcon_FileTypeDocume />
        <div className={classes.content2}>
          <div className={classes.textAndSupportingText}>
            <div className={classes.text}>Tech design requirements.pdf</div>
            <div className={classes.supportingText}>200 KB – 70% uploaded</div>
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
