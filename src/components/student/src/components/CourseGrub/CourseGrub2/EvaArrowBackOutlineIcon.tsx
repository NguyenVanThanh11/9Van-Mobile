import { memo, SVGProps } from 'react';

const EvaArrowBackOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.75 10.7152H5.925L10.4625 5.10999C10.6747 4.84745 10.7768 4.50898 10.7463 4.16903C10.7158 3.82909 10.5553 3.51551 10.3 3.2973C10.0447 3.07908 9.71563 2.9741 9.3851 3.00544C9.05456 3.03678 8.74967 3.20188 8.5375 3.46443L2.2875 11.178C2.24545 11.2394 2.20785 11.3038 2.175 11.3709C2.175 11.4351 2.175 11.4737 2.0875 11.538C2.03084 11.6854 2.00118 11.8423 2 12.0008C2.00118 12.1593 2.03084 12.3162 2.0875 12.4636C2.0875 12.5279 2.0875 12.5665 2.175 12.6307C2.20785 12.6978 2.24545 12.7622 2.2875 12.8236L8.5375 20.5372C8.65503 20.6823 8.8022 20.799 8.96856 20.879C9.13491 20.959 9.31636 21.0003 9.5 21C9.79207 21.0006 10.0751 20.896 10.3 20.7043C10.4266 20.5964 10.5312 20.4638 10.6079 20.3143C10.6846 20.1647 10.7318 20.001 10.7469 19.8326C10.762 19.6643 10.7447 19.4945 10.6959 19.333C10.6471 19.1715 10.5678 19.0215 10.4625 18.8916L5.925 13.2864H20.75C21.0815 13.2864 21.3995 13.151 21.6339 12.9099C21.8683 12.6688 22 12.3418 22 12.0008C22 11.6598 21.8683 11.3328 21.6339 11.0917C21.3995 10.8507 21.0815 10.7152 20.75 10.7152Z'
      fill='#181818'
    />
  </svg>
);

const Memo = memo(EvaArrowBackOutlineIcon);
export { Memo as EvaArrowBackOutlineIcon };