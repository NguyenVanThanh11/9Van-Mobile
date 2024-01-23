import { memo, SVGProps } from 'react';

const Edit2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16 8L12 4M0.499972 19.5L3.88434 19.124C4.29783 19.078 4.50458 19.055 4.69782 18.9925C4.86926 18.937 5.03242 18.8586 5.18286 18.7594C5.35243 18.6475 5.49952 18.5005 5.7937 18.2063L19 5C20.1046 3.89543 20.1046 2.10457 19 0.999998C17.8954 -0.10457 16.1046 -0.104572 15 0.999996L1.7937 14.2063C1.49952 14.5005 1.35243 14.6475 1.24061 14.8171C1.1414 14.9676 1.06299 15.1307 1.00749 15.3022C0.944928 15.4954 0.921956 15.7021 0.876013 16.1156L0.499972 19.5Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Edit2Icon);
export { Memo as Edit2Icon };
