import { memo, SVGProps } from 'react';

const BatteryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect opacity={0.35} x={0.786652} y={0.333334} width={22.66} height={11.3333} rx={2} stroke='black' />
    <path
      opacity={0.4}
      d='M24.7067 4V5.42046C24.7067 6.65358 26.0878 7.23313 26.0878 6V6C26.0878 5.12687 25.5436 4.33878 24.7067 4'
      fill='#181818'
    />
    <rect x={2.86664} y={2.33333} width={18.72} height={7.33333} rx={2} fill='#263238' />
  </svg>
);

const Memo = memo(BatteryIcon);
export { Memo as BatteryIcon };
