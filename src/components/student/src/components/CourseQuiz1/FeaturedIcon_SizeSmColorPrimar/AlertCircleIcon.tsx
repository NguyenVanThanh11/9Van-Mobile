import { memo, SVGProps } from 'react';

const AlertCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7 4.33333V7M7 9.66667H7.00667M13.6667 7C13.6667 10.6819 10.6819 13.6667 7 13.6667C3.3181 13.6667 0.333333 10.6819 0.333333 7C0.333333 3.3181 3.3181 0.333333 7 0.333333C10.6819 0.333333 13.6667 3.3181 13.6667 7Z'
      stroke='#7F56D9'
      strokeWidth={1.33333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(AlertCircleIcon);
export { Memo as AlertCircleIcon };
