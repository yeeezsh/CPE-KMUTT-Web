import React from 'react';
import { Card, CardBodyStyled } from './styled';
import { CardProps } from './types';
import { HiOutlineArrowRight } from 'react-icons/hi';

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
        <div className="card-next" hidden={!props.primary}>
          <HiOutlineArrowRight />
        </div>
      </CardBodyStyled>
    </Card>
  );
};

export default Cards;
