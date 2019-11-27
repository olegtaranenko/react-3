import React                                                        from 'react'
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import * as style                                                   from './wareCard.module.sass';

const WareCard = ({item}) => {
  const {name, country, price, description, url} = item;
  return (
    <Card>
      <CardImg className={style.ware_card} top src={url} alt={name}/>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{country}</CardSubtitle>
        <CardSubtitle>{price}</CardSubtitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  )
};

export default WareCard;