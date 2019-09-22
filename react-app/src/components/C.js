import React, { Component } from 'react';

const C = ({match}) => {
  return (
    <div>
      page C
      <p>{match.params.id}</p>
      <p>{match.params.name}</p>
    </div>
  )
}

export default C;