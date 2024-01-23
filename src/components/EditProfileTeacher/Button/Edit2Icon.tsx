import { memo, SVGProps } from 'react';

const Edit2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.25 5.25L7.75 2.75M0.562483 12.4375L2.67771 12.2025C2.93614 12.1738 3.06536 12.1594 3.18614 12.1203C3.29329 12.0856 3.39526 12.0366 3.48929 11.9746C3.59527 11.9047 3.6872 11.8128 3.87106 11.6289L12.125 3.375C12.8154 2.68464 12.8154 1.56536 12.125 0.874999C11.4346 0.184643 10.3154 0.184643 9.625 0.874998L1.37106 9.12892C1.1872 9.31278 1.09527 9.40472 1.02538 9.5107C0.963378 9.60472 0.914367 9.70669 0.879679 9.81385C0.84058 9.93462 0.826223 10.0638 0.797508 10.3223L0.562483 12.4375Z'
      stroke='#98A2B3'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Edit2Icon);
export { Memo as Edit2Icon };
