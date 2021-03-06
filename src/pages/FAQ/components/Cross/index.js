/* eslint-disable max-len */
import React from 'react';
import useMobileWidth from '../../../../utils/hooks/useMobileWidth';

const Cross = () => {
  const isMobile = useMobileWidth();

  return (
    <div className="faq__content-panel-status">
      <svg
        width={isMobile ? 10 : 12}
        height={isMobile ? 10 : 12}
        viewBox="0 0 612 612"
      >
        <path
          d="M612 36.004L576.521.603 306 270.608 35.478.603 0 36.004l270.522 270.007L0 575.997l35.478 35.4L306 341.411l270.521 269.986 35.479-35.4-270.541-269.986z"
          style={{ stroke: '#3e403d', strokeWidth: '75px' }}
          fill="#3e403d"
        />
      </svg>
    </div>
  );
};

export default Cross;
