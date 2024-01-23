import { memo, SVGProps } from 'react';

const ClarityBookLineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M6.66667 3.46667H18.6667V4.5H6.66667V3.46667Z' fill='#4F4F4F' />
    <path
      d='M18.3752 5.75H6.4163C6.25685 5.74774 6.09951 5.7132 5.95377 5.64846C5.80803 5.58372 5.6769 5.49012 5.56831 5.37331C5.45971 5.25651 5.37588 5.11891 5.32189 4.96881C5.2679 4.81872 5.24486 4.65924 5.25416 4.5C5.25338 4.1831 5.37296 3.87773 5.58871 3.64567C5.80446 3.41361 6.10027 3.27218 6.4163 3.25H18.3752C18.5409 3.25 18.6998 3.18415 18.817 3.06694C18.9342 2.94973 19 2.79076 19 2.625C19 2.45924 18.9342 2.30027 18.817 2.18306C18.6998 2.06585 18.5409 2 18.3752 2H6.4163C5.76874 2.02269 5.1553 2.29606 4.70535 2.76246C4.25541 3.22887 4.00414 3.85184 4.00453 4.5C3.99849 4.60199 3.99849 4.70426 4.00453 4.80625C3.99851 4.85607 3.99851 4.90643 4.00453 4.95625V19.5C4.00414 20.1482 4.25541 20.7711 4.70535 21.2375C5.1553 21.7039 5.76874 21.9773 6.4163 22H18.3752C18.5409 22 18.6998 21.9342 18.817 21.8169C18.9342 21.6997 19 21.5408 19 21.375V6.53125V6.475V6.41875C19.0004 6.24871 18.936 6.08492 18.8199 5.96069C18.7038 5.83646 18.5448 5.76112 18.3752 5.75V5.75ZM17.7504 20.75H6.4163C6.10027 20.7278 5.80446 20.5864 5.58871 20.3543C5.37296 20.1223 5.25338 19.8169 5.25416 19.5V6.71875C5.60942 6.91479 6.01075 7.01192 6.4163 7H17.7504V20.75Z'
      fill='#4F4F4F'
    />
  </svg>
);

const Memo = memo(ClarityBookLineIcon);
export { Memo as ClarityBookLineIcon };