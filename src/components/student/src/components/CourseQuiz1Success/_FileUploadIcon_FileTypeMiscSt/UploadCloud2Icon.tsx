import { memo, SVGProps } from 'react';

const UploadCloud2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.33333 8.66667L7 6M7 6L9.66667 8.66667M7 6V12M12.3333 9.16189C13.1477 8.48936 13.6667 7.47196 13.6667 6.33333C13.6667 4.30829 12.025 2.66667 10 2.66667C9.85432 2.66667 9.71804 2.59066 9.64408 2.46516C8.77471 0.989891 7.16962 0 5.33333 0C2.57191 0 0.333333 2.23858 0.333333 5C0.333333 6.3774 0.890298 7.62472 1.7913 8.52902'
      stroke='#7F56D9'
      strokeWidth={1.33333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(UploadCloud2Icon);
export { Memo as UploadCloud2Icon };
