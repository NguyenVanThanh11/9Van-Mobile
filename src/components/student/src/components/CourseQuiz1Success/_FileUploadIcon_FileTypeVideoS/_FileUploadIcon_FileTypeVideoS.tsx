import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { FeaturedIcon_SizeSmColorPrimar } from '../FeaturedIcon_SizeSmColorPrimar/FeaturedIcon_SizeSmColorPrimar.js';
import { Film2 } from '../Film2/Film2.js';
import classes from './_FileUploadIcon_FileTypeVideoS.module.css';
import { Film2Icon } from './Film2Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1175:100198 */
export const _FileUploadIcon_FileTypeVideoS: FC<Props> = memo(function _FileUploadIcon_FileTypeVideoS(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <FeaturedIcon_SizeSmColorPrimar
        className={classes.featuredIcon}
        swap={{
          alertCircle: (
            <Film2
              className={classes.film2}
              swap={{
                icon: <Film2Icon className={classes.icon} />,
              }}
            />
          ),
        }}
      />
    </div>
  );
});
