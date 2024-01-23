import { memo, SVGProps } from 'react';

const BatteryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect opacity={0.35} x={0.889771} y={0.333334} width={22.8213} height={11.3333} rx={2.66667} stroke='black' />
    <path
      opacity={0.4}
      d='M24.7484 4V8C25.5832 7.66122 26.1261 6.87313 26.1261 6C26.1261 5.12687 25.5832 4.33878 24.7484 4'
      fill='#181818'
    />
    <rect x={2.96445} y={2.33333} width={18.672} height={7.33333} rx={1.33333} fill='#1B0F0F' />
  </svg>
);

const Memo = memo(BatteryIcon);
export { Memo as BatteryIcon };
