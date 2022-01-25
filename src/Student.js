import React from 'react';

export default function Student({prop1, prop2})
{
  return (
    <div className="Student">
        <h1>Hello {prop1 + " " + prop2}</h1>
    </div>
  );
}