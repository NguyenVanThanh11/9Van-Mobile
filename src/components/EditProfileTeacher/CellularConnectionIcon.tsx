import { memo, SVGProps } from 'react';

const CellularConnectionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.5733 0.666668H16.536C15.9631 0.666668 15.4987 1.11438 15.4987 1.66667V10.3333C15.4987 10.8856 15.9631 11.3333 16.536 11.3333H17.5733C18.1462 11.3333 18.6107 10.8856 18.6107 10.3333V1.66667C18.6107 1.11438 18.1462 0.666668 17.5733 0.666668ZM11.6951 3H12.7325C13.3054 3 13.7698 3.44772 13.7698 4V10.3333C13.7698 10.8856 13.3054 11.3333 12.7325 11.3333H11.6951C11.1222 11.3333 10.6578 10.8856 10.6578 10.3333V4C10.6578 3.44772 11.1222 3 11.6951 3ZM7.89157 5.33333H6.85424C6.28133 5.33333 5.8169 5.78105 5.8169 6.33333V10.3333C5.8169 10.8856 6.28133 11.3333 6.85424 11.3333H7.89157C8.46447 11.3333 8.9289 10.8856 8.9289 10.3333V6.33333C8.9289 5.78105 8.46447 5.33333 7.89157 5.33333ZM3.05068 7.33333H2.01335C1.44044 7.33333 0.976013 7.78105 0.976013 8.33333V10.3333C0.976013 10.8856 1.44044 11.3333 2.01335 11.3333H3.05068C3.62358 11.3333 4.08801 10.8856 4.08801 10.3333V8.33333C4.08801 7.78105 3.62358 7.33333 3.05068 7.33333Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(CellularConnectionIcon);
export { Memo as CellularConnectionIcon };
