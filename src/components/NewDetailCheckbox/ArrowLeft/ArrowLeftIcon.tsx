import { memo, SVGProps } from 'react';

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M14 7H0M0 7L7 14M0 7L7 0' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(ArrowLeftIcon);
export { Memo as ArrowLeftIcon };
