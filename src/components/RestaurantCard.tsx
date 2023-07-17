import React, { useEffect, useState } from "react";
import {
  CardWrapper,
  CardLeft,
  CardRight,
  CardImage,
  RestaurantName,
} from "../styles/RestaurantCard.style";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  phone: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  image,
  rating,
  phone,
}) => {
  const [stars, setStars] = useState({
    fullStars: 0,
    halfStar: false,
    unfilledStars: 0,
  });

  const handleCountStars = () => {
    let fullStars = Math.floor(rating);
    let halfStar = rating % 1 !== 0;
    let unfilledStars = 0;
    if (5 - rating > 0.5) {
      unfilledStars = Math.floor(5 - rating);
    }
    setStars({ fullStars, halfStar, unfilledStars });
  };

  useEffect(() => {
    handleCountStars();
  }, [rating]);

  const handleShowStars = () => {
    let starsArr = [];

    for (let i = 0; i < stars.fullStars; i++) {
      starsArr.push(<StarIcon />);
    }

    if (stars.halfStar) {
      starsArr.push(<StarHalfIcon />);
    }

    for (let i = 0; i < stars.unfilledStars; i++) {
      starsArr.push(<StarBorderIcon />);
    }

    return starsArr;
  };

  return (
    <CardWrapper>
      <CardLeft>
        <CardImage src={image} alt="restaurant" />
      </CardLeft>
      <CardRight>
        <RestaurantName>{name}</RestaurantName>
        {handleShowStars().map((star) => star)}
        <p>Contact: {phone ? phone : "n/a"}</p>
      </CardRight>
    </CardWrapper>
  );
};

export default RestaurantCard;
