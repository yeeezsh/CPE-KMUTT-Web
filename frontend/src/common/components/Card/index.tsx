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
  const cardMode = () => {
    switch (props.variant) {
      case 'normal':
        return 'card-normal';
      case 'primary':
        return 'card-primary';
      default:
        return 'card-primary';
    }
  };

  const isCardHidden = () => {
    switch (props.variant) {
      case 'normal':
        return true;
      case 'primary':
        return false;
      default:
        return true;
    }
  };

  return (
    <Card>
      <div
        className="card-picture"
        hidden={isCardHidden()}
        style={{
          backgroundImage: `url(${props.links})`,
        }}
      />
      <CardBodyStyled className={cardMode()}>
        <CardTitle>{props.title}</CardTitle>
        <CardDiscription>{props.description}</CardDiscription>
        <CardDate>{props.date}</CardDate>
        <CardNextBtn hidden={isCardHidden()} />
      </CardBodyStyled>
    </Card>
  );
};

export default Cards;
