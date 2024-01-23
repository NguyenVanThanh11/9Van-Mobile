import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { FeaturedIcon_SizeSmColorPrimar } from '../FeaturedIcon_SizeSmColorPrimar/FeaturedIcon_SizeSmColorPrimar.js';
import { File4 } from '../File4/File4.js';
import classes from './_FileUploadIcon_FileTypeDocume.module.css';
import { File4Icon } from './File4Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1175:100187 */
export const _FileUploadIcon_FileTypeDocume: FC<Props> = memo(function _FileUploadIcon_FileTypeDocume(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <FeaturedIcon_SizeSmColorPrimar
        className={classes.featuredIcon}
        swap={{
          alertCircle: (
            <File4
              className={classes.file4}
              swap={{
                icon: <File4Icon className={classes.icon} />,
              }}
            />
          ),
        }}
      />
    </div>
  );
});
