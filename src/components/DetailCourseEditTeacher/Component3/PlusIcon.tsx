import { memo, SVGProps } from 'react';

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6 0.166667V11.8333M0.166667 6H11.8333'
      stroke='#667085'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(PlusIcon);
export { Memo as PlusIcon };
