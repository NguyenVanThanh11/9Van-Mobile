import { memo, SVGProps } from 'react';

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.8333 6H0.166667M0.166667 6L6 11.8333M0.166667 6L6 0.166667'
      stroke='#667085'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowLeftIcon);
export { Memo as ArrowLeftIcon };
