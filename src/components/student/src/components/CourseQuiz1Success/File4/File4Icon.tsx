import { memo, SVGProps } from 'react';

const File4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 0.26946V4.4C10 4.96005 10 5.24008 10.109 5.45399C10.2049 5.64215 10.3578 5.79513 10.546 5.89101C10.7599 6 11.0399 6 11.6 6H15.7305M16 7.98822V15.2C16 16.8802 16 17.7202 15.673 18.362C15.3854 18.9265 14.9265 19.3854 14.362 19.673C13.7202 20 12.8802 20 11.2 20H4.8C3.11984 20 2.27976 20 1.63803 19.673C1.07354 19.3854 0.614601 18.9265 0.32698 18.362C0 17.7202 0 16.8802 0 15.2V4.8C0 3.11984 0 2.27976 0.32698 1.63803C0.614601 1.07354 1.07354 0.614601 1.63803 0.32698C2.27976 0 3.11984 0 4.8 0H8.01178C8.74555 0 9.11243 0 9.4577 0.0828902C9.7638 0.15638 10.0564 0.277593 10.3249 0.442079C10.6276 0.627605 10.887 0.887032 11.4059 1.40589L14.5941 4.59411C15.113 5.11297 15.3724 5.3724 15.5579 5.67515C15.7224 5.94356 15.8436 6.2362 15.9171 6.5423C16 6.88757 16 7.25445 16 7.98822Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(File4Icon);
export { Memo as File4Icon };