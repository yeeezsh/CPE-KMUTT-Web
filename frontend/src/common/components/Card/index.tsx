import React from 'react';
import { Card, CardBodyStyled } from './styled';
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
      <CardBodyStyled className={mode}>
        <div className="title">{props.title}</div>
        <div className="discription">{props.description}</div>
        <div className="date">{props.date}</div>
        <div className="card-next" hidden={!props.primary}></div>
      </CardBodyStyled>
    </Card>
  );
};

export default Cards;
