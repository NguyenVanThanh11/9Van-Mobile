import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _FileUploadBase_StateDefault } from '../_FileUploadBase_StateDefault/_FileUploadBase_StateDefault.js';
import { _FileUploadItemBase_TypeProgre2 } from '../_FileUploadItemBase_TypeProgre2/_FileUploadItemBase_TypeProgre2.js';
import { _FileUploadItemBase_TypeProgre3 } from '../_FileUploadItemBase_TypeProgre3/_FileUploadItemBase_TypeProgre3.js';
import { _FileUploadItemBase_TypeProgre } from '../_FileUploadItemBase_TypeProgre/_FileUploadItemBase_TypeProgre.js';
import classes from './FileUpload_FilesQueuedTrueType.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
    text?: boolean;
    text2?: boolean;
    text3?: boolean;
    _FileUploadItemBase?: boolean;
  };
}
/* @figmaId 1251:4560 */
export const FileUpload_FilesQueuedTrueType: FC<Props> = memo(function FileUpload_FilesQueuedTrueType(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_FileUploadBase_StateDefault className={classes._FileUploadBase} />
      <div className={classes.fileQueue}>
        <_FileUploadItemBase_TypeProgre className={classes._FileUploadItemBase} />
        <_FileUploadItemBase_TypeProgre2
          className={classes._FileUploadItemBase2}
          text={{
            text: <div className={classes.text}>Dashboard prototype.mp4</div>,
            supportingText: <div className={classes.supportingText}>16 MB – 70% uploaded</div>,
          }}
        />
        {!props.hide?._FileUploadItemBase && (
          <_FileUploadItemBase_TypeProgre3
            className={classes._FileUploadItemBase3}
            text={{
              text: <div className={classes.text2}>Dashboard prototype FINAL.fig</div>,
              supportingText: <div className={classes.supportingText2}>4.2 MB – 70% uploaded</div>,
            }}
          />
        )}
      </div>
    </div>
  );
});
