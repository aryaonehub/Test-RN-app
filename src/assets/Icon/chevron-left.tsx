import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronLeft = (props :  any) => (
  <Svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15 6.346H3.461l3.8-3.8-1.632-1.632L.676 5.868C.243 6.301 0 6.888 0 7.5c0 .612.243 1.199.676 1.632l4.954 4.954 1.632-1.632-3.8-3.8H15V6.346Z"
      fill="#F7F5FF"
    />
  </Svg>
);

export default ChevronLeft;
