import React from 'react';

function Reciept() {
  return (
    <div className="reciept">
      {/* Possibly redirect to stripe reciept page if one can be generated. */}
      <p>
        Order Number
      </p>
      <p>
        Order Details
      </p>
    </div>
  );
}

export default Reciept;
