import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */
export const Drawer = props => (
  <Svg
    width={25}
    height={25}
    viewBox="0 -5 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <G id="icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G
        id="ui-gambling-website-lined-icnos-casinoshunter"
        transform="translate(-2294.000000, -159.000000)"
        fill="#1C1C1F"
        fillRule="nonzero">
        <G id={1} transform="translate(1350.000000, 120.000000)">
          <Path
            d="M974,57 C975.104569,57 976,57.8954305 976,59 C976,60.1045695 975.104569,61 974,61 L946,61 C944.895431,61 944,60.1045695 944,59 C944,57.8954305 944.895431,57 946,57 L974,57 Z M974,48 C975.104569,48 976,48.8954305 976,50 C976,51.1045695 975.104569,52 974,52 L946,52 C944.895431,52 944,51.1045695 944,50 C944,48.8954305 944.895431,48 946,48 L974,48 Z M974,39 C975.104569,39 976,39.8954305 976,41 C976,42.1045695 975.104569,43 974,43 L946,43 C944.895431,43 944,42.1045695 944,41 C944,39.8954305 944.895431,39 946,39 L974,39 Z"
            id="menu"
          />
        </G>
      </G>
    </G>
  </Svg>
);
