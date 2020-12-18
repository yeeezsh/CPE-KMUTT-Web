import React from 'react';
import { Card } from './styled';
import { CardProps } from './types';

// Example components
const Cards: React.FC<CardProps> = (props) => {
  return (
    <Card>
      <div className="card-title">{props.title}</div>
      <div className="card-discription">{props.description}</div>
      <div className="card-date">{props.date}</div>
    </Card>
  );
};

export default Cards;
