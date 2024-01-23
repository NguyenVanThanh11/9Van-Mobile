import { memo, SVGProps } from 'react';

const BatteryIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect opacity={0.35} x={0.786652} y={0.333334} width={22.88} height={11.3333} rx={2.66667} stroke='black' />
    <path
      opacity={0.4}
      d='M24.7067 4V8C25.5436 7.66122 26.0878 6.87313 26.0878 6C26.0878 5.12687 25.5436 4.33878 24.7067 4'
      fill='#181818'
    />
    <rect x={2.86664} y={2.33333} width={18.72} height={7.33333} rx={1.33333} fill='#1B0F0F' />
  </svg>
);

const Memo = memo(BatteryIcon2);
export { Memo as BatteryIcon2 };
