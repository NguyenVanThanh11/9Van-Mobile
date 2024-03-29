import { memo, SVGProps } from 'react';

const Film2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 20V2.86736e-08M5 20V15M5 5V2.86736e-08M15 20V15M15 5V2.86736e-08M2.86732e-08 5H20M2.86732e-08 15H20M20 15.2V4.8C20 3.11984 20 2.27976 19.673 1.63803C19.3854 1.07354 18.9265 0.6146 18.362 0.32698C17.7202 -7.15256e-07 16.8802 -6.69419e-07 15.2 -5.95977e-07L4.8 -1.41378e-07C3.11984 -6.79364e-08 2.27976 -2.98023e-08 1.63803 0.32698C1.07354 0.614601 0.6146 1.07354 0.32698 1.63803C-2.08616e-07 2.27976 -1.92582e-07 3.11984 -1.1914e-07 4.8L3.35458e-07 15.2C4.089e-07 16.8802 4.47035e-07 17.7202 0.326981 18.362C0.614601 18.9265 1.07354 19.3854 1.63803 19.673C2.27976 20 3.11984 20 4.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Film2Icon);
export { Memo as Film2Icon };
