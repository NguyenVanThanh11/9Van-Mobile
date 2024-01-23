import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { CourseGrub3 } from '../CourseGrub3/CourseGrub3.js';
import classes from './CourseGrub2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 5752:5567 */
export const CourseGrub2: FC<Props> = memo(function CourseGrub2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <CourseGrub3
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
