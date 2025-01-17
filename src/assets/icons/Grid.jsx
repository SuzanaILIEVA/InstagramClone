import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Grid = props => (
  <Svg
    width={23}
    height={23}
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 22.5H22.5V0H0V22.5ZM7 21H1.5V15.5H7V21ZM14 15.5H8.5V21H14V15.5ZM15.5 15.5H21V21H15.5V15.5ZM7 8.5H1.5V14H7V8.5ZM8.5 8.5H14V14H8.5V8.5ZM21 8.5H15.5V14H21V8.5ZM21 1.5V7H15.5V1.5H21ZM7 1.5H1.5V7H7V1.5ZM8.5 1.5H14V7H8.5V1.5Z"
      fill="#262626"
    />
  </Svg>
);
