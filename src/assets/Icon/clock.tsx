import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockIcon = (props : any) => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 0.5C5.4 0.5 0 5.9 0 12.5C0 19.1 5.4 24.5 12 24.5C18.6 24.5 24 19.1 24 12.5C24 5.9 18.6 0.5 12 0.5ZM16.2 14.9C15.84 15.5 15.12 15.62 14.52 15.38L11.4 13.58C11.04 13.34 10.8 12.98 10.8 12.5V6.5C10.8 5.78 11.28 5.3 12 5.3C12.72 5.3 13.2 5.78 13.2 6.5V11.78L15.72 13.22C16.32 13.58 16.44 14.3 16.2 14.9Z"
      fill="#696C88"
      fillOpacity={0.65}
    />
  </Svg>
);

export default ClockIcon;
