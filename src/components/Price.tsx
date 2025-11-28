import React from 'react';

interface PriceProps {
  readonly num: number;
}

function Price({ num }: PriceProps) {
    return (
      <>
        <span className="text-xl">{num}</span>DZD
      </>
    )
  }
  
export default Price