import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _9Van } from './_9Van/_9Van.js';
import classes from './SignIn.module.css';
import { SocialButtonGroups_StyleButton } from './SocialButtonGroups_StyleButton/SocialButtonGroups_StyleButton.js';

interface Props {
  className?: string;
}
/* @figmaId 5546:13298 */
export const SignIn: FC<Props> = memo(function SignIn(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame1}>
        <SocialButtonGroups_StyleButton
          className={classes.socialButtonGroups}
          text={{
            text: <div className={classes.text}>Đăng nhập với Google</div>,
            text2: <div className={classes.text2}>Đăng nhập với Facebook</div>,
            text3: <div className={classes.text3}>Đăng nhập với Apple </div>,
          }}
        />
        <div className={classes.bangCachNhapVaoAngKyAngNhapVoi}>
          <div className={classes.textBlock}>
            Bằng cách nhấp vào Đăng ký, Đăng nhập với Apple, Đăng nhập với Google hoặc Đăng nhập với Facebook, bạn đồng
            ý với Điều khoản dịch vụ Trò chuyện thoại, Chính sách quyền riêng tư và Chính sách cookie.
          </div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
          <div className={classes.textBlock3}>
            <p></p>
          </div>
        </div>
      </div>
      <_9Van
        className={classes._9Van2}
        text={{
          _9Van: <div className={classes._9Van}>9Văn</div>,
        }}
      />
    </div>
  );
});
