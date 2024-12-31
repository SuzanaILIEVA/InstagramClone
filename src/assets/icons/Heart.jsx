import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Heart = props => (
  <Svg
    width={24}
    height={22}
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.8725 3.15889L11.2175 2.39329C8.58142 -0.242748 4.37761 -0.0631158 1.74157 2.57292C-0.894471 5.20896 -0.387159 10.3053 2.24888 12.9413C3.31874 14.0112 4.92092 15.4925 7.05542 17.3853L8.85115 18.965L10.8681 20.7158C11.4234 21.1951 12.2439 21.2024 12.8077 20.7331L14.4416 19.3632C17.3029 16.9451 19.4262 15.0404 20.8115 13.6492L21.171 13.2825L21.4939 12.9413C23.9489 10.2939 24.5798 5.14766 22.005 2.57292L21.8185 2.39329C19.1711 -0.0616901 15.179 -0.181445 12.6042 2.39329L11.8725 3.15889ZM2.80223 3.63358C4.88666 1.54915 8.11137 1.45143 10.118 3.41561L11.8111 5.39427L13.6886 3.42966C15.6145 1.50434 18.6838 1.53217 20.7986 3.49317L20.9645 3.65336C22.7839 5.47316 22.4744 9.6779 20.394 11.9214L20.0815 12.2515L19.7348 12.605C18.5864 13.7575 16.8845 15.3016 14.6405 17.2245L13.4734 18.2175L11.8481 19.5802L9.83442 17.8323L8.39319 16.5662C6.36239 14.7714 4.79575 13.3358 3.69885 12.2651L3.30954 11.8807C1.138 9.70913 0.866398 5.56941 2.80223 3.63358Z"
      fill="#262626"
    />
  </Svg>
);