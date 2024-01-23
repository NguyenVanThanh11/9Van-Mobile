import { memo, SVGProps } from 'react';

const BxBxTimeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.48415 1.08333C4.58568 1.08333 1.41402 3.51325 1.41402 6.5C1.41402 9.48675 4.58568 11.9167 8.48415 11.9167C12.3826 11.9167 15.5543 9.48675 15.5543 6.5C15.5543 3.51325 12.3826 1.08333 8.48415 1.08333ZM8.48415 10.8333C5.36552 10.8333 2.82805 8.88929 2.82805 6.5C2.82805 4.11071 5.36552 2.16667 8.48415 2.16667C11.6028 2.16667 14.1402 4.11071 14.1402 6.5C14.1402 8.88929 11.6028 10.8333 8.48415 10.8333Z'
      fill='#4F4F4F'
    />
    <path d='M9.19116 3.79167H7.77713V7.04167H12.0192V5.95834H9.19116V3.79167Z' fill='#4F4F4F' />
  </svg>
);

const Memo = memo(BxBxTimeIcon);
export { Memo as BxBxTimeIcon };
