import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
export const StoryRing = props => (
  <Svg
    width={90}
    height={90}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 63C49.1208 63 63 49.1208 63 32C63 14.8792 49.1208 1 32 1C14.8792 1 1 14.8792 1 32C1 49.1208 14.8792 63 32 63Z"
      stroke="url(#paint0_linear_0_1699)"
      strokeWidth={2}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_0_1699"
        x1={34.021}
        y1={77.2361}
        x2={76.8159}
        y2={31.447}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FBAA47" />
        <Stop offset={0.519909} stopColor="#D91A46" />
        <Stop offset={1} stopColor="#A60F93" />
      </LinearGradient>
    </Defs>
  </Svg>
);
