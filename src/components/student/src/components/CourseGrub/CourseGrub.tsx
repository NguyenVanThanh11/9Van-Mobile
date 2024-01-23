import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CourseGrub2 } from './CourseGrub2/CourseGrub2.js';
import classes from './CourseGrub.module.css';

interface Props {
  className?: string;
}
/* @figmaId 5752:5567 */
export const CourseGrub: FC<Props> = memo(function CourseGrub(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <CourseGrub2
        className={classes.courseGrub}
        classes={{
          rectangle39: classes.rectangle39,
          rectangle41: classes.rectangle41,
          rectangle30: classes.rectangle30,
          rectangle29: classes.rectangle29,
        }}
        text={{
          nhanTin: <div className={classes.nhanTin}>Nhắn tin</div>,
          nhomLop6A1: <div className={classes.nhomLop6A1}>Nhóm lớp 6A1</div>,
        }}
      />
    </div>
  );
});
