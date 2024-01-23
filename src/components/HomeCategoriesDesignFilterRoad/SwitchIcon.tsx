import { memo, SVGProps } from 'react';

const SwitchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 55' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_6270_207105)'>
      <path
        d='M9.00181 55.0004C13.9688 55.0004 18 50.8937 18 45.8337V36.6671H9.00181C4.0348 36.6671 0.00360489 40.7737 0.00360489 45.8337C0.00360489 50.8937 4.0348 55.0004 9.00181 55.0004Z'
        fill='#0ACF83'
      />
      <path
        d='M0.00360489 27.5002C0.00360489 22.4402 4.0348 18.3335 9.00181 18.3335H18V36.6668H9.00181C4.0348 36.6668 0.00360489 32.5602 0.00360489 27.5002Z'
        fill='#A259FF'
      />
      <path
        d='M0.00370026 9.16686C0.00370026 4.10686 4.0349 0.000195503 9.00191 0.000195503H18.0001V18.3335H9.00191C4.0349 18.3335 0.00370026 14.2269 0.00370026 9.16686Z'
        fill='#F24E1E'
      />
      <path
        d='M18 0H26.9983C31.9653 0 35.9965 4.10666 35.9965 9.16666C35.9965 14.2267 31.9653 18.3333 26.9983 18.3333H18V0Z'
        fill='#FF7262'
      />
      <path
        d='M35.9965 27.5002C35.9965 32.5602 31.9653 36.6668 26.9983 36.6668C22.0313 36.6668 18 32.5602 18 27.5002C18 22.4402 22.0313 18.3335 26.9983 18.3335C31.9653 18.3335 35.9965 22.4402 35.9965 27.5002Z'
        fill='#1ABCFE'
      />
    </g>
    <defs>
      <clipPath id='clip0_6270_207105'>
        <rect width={36} height={55} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(SwitchIcon);
export { Memo as SwitchIcon };
