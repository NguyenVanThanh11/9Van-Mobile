import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button_SizeMdHierarchyLinkColo } from '../Button_SizeMdHierarchyLinkColo/Button_SizeMdHierarchyLinkColo.js';
import { FeaturedIcon_SizeMdColorGrayTh } from '../FeaturedIcon_SizeMdColorGrayTh/FeaturedIcon_SizeMdColorGrayTh.js';
import { UploadCloud2 } from '../UploadCloud2/UploadCloud2.js';
import classes from './_FileUploadBase_StateDefault.module.css';
import { UploadCloud2Icon } from './UploadCloud2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    placeholder?: boolean;
    placeholder2?: boolean;
  };
}
/* @figmaId 139:335 */
export const _FileUploadBase_StateDefault: FC<Props> = memo(function _FileUploadBase_StateDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.content}>
        <FeaturedIcon_SizeMdColorGrayTh
          swap={{
            alertCircle: (
              <UploadCloud2
                className={classes.uploadCloud2}
                swap={{
                  icon: <UploadCloud2Icon className={classes.icon} />,
                }}
              />
            ),
          }}
        />
        <div className={classes.textAndSupportingText}>
          <div className={classes.action}>
            <Button_SizeMdHierarchyLinkColo
              hide={{
                placeholder: true,
                placeholder2: true,
              }}
              text={{
                text: <div className={classes.text}>Click to upload</div>,
              }}
            />
            <div className={classes.text2}>or drag and drop</div>
          </div>
          <div className={classes.supportingText}>SVG, PNG, JPG or GIF (max. 800x400px)</div>
        </div>
      </div>
    </div>
  );
});
