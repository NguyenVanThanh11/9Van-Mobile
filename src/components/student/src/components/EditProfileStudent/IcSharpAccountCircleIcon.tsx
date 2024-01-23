import { memo, SVGProps } from 'react';

const IcSharpAccountCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.48 2C6.7392 2 2.08 6.48 2.08 12C2.08 17.52 6.7392 22 12.48 22C18.2208 22 22.88 17.52 22.88 12C22.88 6.48 18.2208 2 12.48 2ZM12.48 5C14.2064 5 15.6 6.34 15.6 8C15.6 9.66 14.2064 11 12.48 11C10.7536 11 9.36 9.66 9.36 8C9.36 6.34 10.7536 5 12.48 5ZM12.48 19.2C11.2443 19.2 10.0279 18.906 8.93909 18.3441C7.85031 17.7823 6.92305 16.9701 6.24 15.98C6.2712 13.99 10.4 12.9 12.48 12.9C14.5496 12.9 18.6888 13.99 18.72 15.98C18.037 16.9701 17.1097 17.7823 16.0209 18.3441C14.9321 18.906 13.7157 19.2 12.48 19.2Z'
      fill='#4C6ED7'
    />
  </svg>
);

const Memo = memo(IcSharpAccountCircleIcon);
export { Memo as IcSharpAccountCircleIcon };
