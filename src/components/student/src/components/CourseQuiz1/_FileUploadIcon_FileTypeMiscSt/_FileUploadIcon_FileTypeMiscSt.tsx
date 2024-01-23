import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { FeaturedIcon_SizeSmColorPrimar } from '../FeaturedIcon_SizeSmColorPrimar/FeaturedIcon_SizeSmColorPrimar.js';
import { UploadCloud2 } from '../UploadCloud2/UploadCloud2.js';
import classes from './_FileUploadIcon_FileTypeMiscSt.module.css';
import { UploadCloud2Icon } from './UploadCloud2Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1175:100216 */
export const _FileUploadIcon_FileTypeMiscSt: FC<Props> = memo(function _FileUploadIcon_FileTypeMiscSt(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <FeaturedIcon_SizeSmColorPrimar
        className={classes.featuredIcon}
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
    </div>
  );
});
