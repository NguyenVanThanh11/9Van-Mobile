import { memo, SVGProps } from 'react';

const ClarityBookLineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M6.93333 3.46667H19.4133V4.5H6.93333V3.46667Z' fill='#4F4F4F' />
    <path
      d='M19.1102 5.75H6.67296C6.50713 5.74774 6.34349 5.7132 6.19192 5.64846C6.04035 5.58372 5.90398 5.49012 5.79104 5.37331C5.67809 5.25651 5.59092 5.11891 5.53477 4.96881C5.47862 4.81872 5.45465 4.65924 5.46432 4.5C5.46351 4.1831 5.58788 3.87773 5.81226 3.64567C6.03664 3.41361 6.34428 3.27218 6.67296 3.25H19.1102C19.2825 3.25 19.4478 3.18415 19.5697 3.06694C19.6915 2.94973 19.76 2.79076 19.76 2.625C19.76 2.45924 19.6915 2.30027 19.5697 2.18306C19.4478 2.06585 19.2825 2 19.1102 2H6.67296C5.99949 2.02269 5.36151 2.29606 4.89357 2.76246C4.42562 3.22887 4.1643 3.85184 4.16471 4.5C4.15843 4.60199 4.15843 4.70426 4.16471 4.80625C4.15845 4.85607 4.15845 4.90643 4.16471 4.95625V19.5C4.1643 20.1482 4.42562 20.7711 4.89357 21.2375C5.36151 21.7039 5.99949 21.9773 6.67296 22H19.1102C19.2825 22 19.4478 21.9342 19.5697 21.8169C19.6915 21.6997 19.76 21.5408 19.76 21.375V6.53125V6.475V6.41875C19.7604 6.24871 19.6934 6.08492 19.5727 5.96069C19.452 5.83646 19.2866 5.76112 19.1102 5.75V5.75ZM18.4604 20.75H6.67296C6.34428 20.7278 6.03664 20.5864 5.81226 20.3543C5.58788 20.1223 5.46351 19.8169 5.46432 19.5V6.71875C5.83379 6.91479 6.25118 7.01192 6.67296 7H18.4604V20.75Z'
      fill='#4F4F4F'
    />
  </svg>
);

const Memo = memo(ClarityBookLineIcon);
export { Memo as ClarityBookLineIcon };