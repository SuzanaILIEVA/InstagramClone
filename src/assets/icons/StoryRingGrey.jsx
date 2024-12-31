import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const StoryRingGrey = props => (
  <Svg
    width={65}
    height={65}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M63.5 32C63.5 49.397 49.397 63.5 32 63.5C14.603 63.5 0.5 49.397 0.5 32C0.5 14.603 14.603 0.5 32 0.5C49.397 0.5 63.5 14.603 63.5 32Z"
      stroke="#C7C7CC"
    />
  </Svg>
);
