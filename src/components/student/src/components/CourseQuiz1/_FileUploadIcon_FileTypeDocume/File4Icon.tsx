import { memo, SVGProps } from 'react';

const File4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.33333 0.512974V3.26667C7.33333 3.64004 7.33333 3.82672 7.406 3.96933C7.46991 4.09477 7.5719 4.19676 7.69734 4.26067C7.83995 4.33333 8.02663 4.33333 8.4 4.33333H11.1537M11.3333 5.65882V10.4667C11.3333 11.5868 11.3333 12.1468 11.1153 12.5746C10.9236 12.951 10.6176 13.2569 10.2413 13.4487C9.81349 13.6667 9.25344 13.6667 8.13333 13.6667H3.86667C2.74656 13.6667 2.18651 13.6667 1.75869 13.4487C1.38236 13.2569 1.0764 12.951 0.884654 12.5746C0.666667 12.1468 0.666667 11.5868 0.666667 10.4667V3.53333C0.666667 2.41323 0.666667 1.85318 0.884654 1.42535C1.0764 1.04903 1.38236 0.743067 1.75869 0.55132C2.18651 0.333333 2.74656 0.333333 3.86667 0.333333H6.00785C6.49703 0.333333 6.74162 0.333333 6.9718 0.388594C7.17587 0.437587 7.37096 0.518396 7.5499 0.628053C7.75174 0.751737 7.92469 0.924688 8.27059 1.27059L10.3961 3.39607C10.742 3.74198 10.9149 3.91493 11.0386 4.11676C11.1483 4.29571 11.2291 4.4908 11.2781 4.69487C11.3333 4.92504 11.3333 5.16964 11.3333 5.65882Z'
      stroke='#7F56D9'
      strokeWidth={1.33333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(File4Icon);
export { Memo as File4Icon };