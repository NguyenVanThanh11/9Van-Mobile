import { memo } from 'react';
import type { FC, ReactNode } from 'react';

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
  text?: {
    text?: ReactNode;
    text2?: ReactNode;
    supportingText?: ReactNode;
    text3?: ReactNode;
    supportingText2?: ReactNode;
    text4?: ReactNode;
    supportingText3?: ReactNode;
  };
}
/* @figmaId 1251:4560 */
export const FileUpload_FilesQueuedTrueType: FC<Props> = memo(function FileUpload_FilesQueuedTrueType(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <_FileUploadBase_StateDefault
        className={classes._FileUploadBase}
        text={{
          text: props.text?.text,
          text2: props.text?.text2,
          supportingText: props.text?.supportingText,
        }}
      />
      <div className={classes.fileQueue}>
        <_FileUploadItemBase_TypeProgre
          className={classes._FileUploadItemBase}
          text={{
            text: props.text?.text3,
            supportingText: props.text?.supportingText2,
          }}
        />
        <_FileUploadItemBase_TypeProgre2
          className={classes._FileUploadItemBase2}
          text={{
            text: props.text?.text4 || <div className={classes.text}>Dashboard prototype.mp4</div>,
            supportingText: props.text?.supportingText3 || (
              <div className={classes.supportingText}>16 MB – 70% uploaded</div>
            ),
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
