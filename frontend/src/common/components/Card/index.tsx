import React from 'react';
import { Card } from './styled';
import { CardProps } from './types';

// Example components
const Cards: React.FC<CardProps> = ({ ...props }) => {
  const mode = props.primary ? 'card-primary' : 'card-normal';
  return (
    <Card>
      <div
        className="card-picture"
        hidden={!props.primary}
        style={{
          backgroundImage: 'url(/images/thumbnail.png)',
        }}></div>
      <div className={['card-body', mode].join(' ')}>
        <div className="card-title">{props.title}</div>
        <div className="card-discription">{props.description}</div>
        <div className="card-date">{props.date}</div>
        <div className="card-next" hidden={!props.primary}></div>
      </div>
    </Card>
  );
};

export default Cards;
