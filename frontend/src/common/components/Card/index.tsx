import React from 'react';
import {
  Card,
  CardBodyStyled,
  CardTitle,
  CardDiscription,
  CardDate,
  CardNextBtn,
} from './styled';
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
        <CardTitle>{props.title}</CardTitle>
        <CardDiscription>{props.description}</CardDiscription>
        <CardDate>{props.date}</CardDate>
        <CardNextBtn hidden={!props.primary} />
      </CardBodyStyled>
    </Card>
  );
};

export default Cards;
