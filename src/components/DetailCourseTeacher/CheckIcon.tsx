import { memo, SVGProps } from 'react';

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M8 0L2.5 5.5L0 3' stroke='#717BBC' strokeWidth={1.6666} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(CheckIcon);
export { Memo as CheckIcon };
