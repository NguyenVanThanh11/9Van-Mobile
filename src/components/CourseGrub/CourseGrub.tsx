import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CourseGrub2 } from './CourseGrub2/CourseGrub2.js';
import classes from './CourseGrub.module.css';

interface Props {
  className?: string;
}
/* @figmaId 5785:1309 */
export const CourseGrub: FC<Props> = memo(function CourseGrub(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <CourseGrub2 className={classes.courseGrub} />
    </div>
  );
});
