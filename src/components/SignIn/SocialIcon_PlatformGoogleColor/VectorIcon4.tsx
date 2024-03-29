import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.24 4.74966C12.9508 4.7232 14.6043 5.36697 15.8433 6.54867L19.2694 3.12262C17.1 1.0855 14.2207 -0.034466 11.24 0.000808666C6.70277 0.000808666 2.55359 2.55822 0.516479 6.61481L4.50252 9.70575C5.45052 6.86173 8.10935 4.74966 11.24 4.74966V4.74966Z'
      fill='#EA4335'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
