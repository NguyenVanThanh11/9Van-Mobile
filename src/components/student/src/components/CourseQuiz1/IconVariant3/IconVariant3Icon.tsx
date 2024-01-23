import { memo, SVGProps } from 'react';

const IconVariant3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13 14L18 9M18 9L13 4M18 9H6M9 14C9 14.93 9 15.395 8.89778 15.7765C8.62038 16.8117 7.81173 17.6204 6.77646 17.8978C6.39496 18 5.92997 18 5 18H4.5C3.10217 18 2.40326 18 1.85195 17.7716C1.11686 17.4672 0.532843 16.8831 0.228361 16.1481C-9.53674e-07 15.5967 -9.53674e-07 14.8978 -9.53674e-07 13.5V4.5C-9.53674e-07 3.10217 -9.53674e-07 2.40326 0.228361 1.85195C0.532843 1.11687 1.11687 0.532843 1.85195 0.228361C2.40326 0 3.10217 0 4.5 0H5C5.92997 0 6.39496 0 6.77646 0.102223C7.81173 0.379624 8.62038 1.18827 8.89778 2.22354C9 2.60504 9 3.07003 9 4'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(IconVariant3Icon);
export { Memo as IconVariant3Icon };
