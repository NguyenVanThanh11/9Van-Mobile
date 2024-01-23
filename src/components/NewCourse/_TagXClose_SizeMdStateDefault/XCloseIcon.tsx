import { memo, SVGProps } from 'react';

const XCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M6 0L0 6M0 0L6 6' stroke='#98A2B3' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(XCloseIcon);
export { Memo as XCloseIcon };
