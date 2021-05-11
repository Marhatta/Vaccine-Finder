import React from 'react';
import {
  PinpoinxSwiper,
  ImageContainer,
  Image,
  Dot,
  ActiveDot,
  ActiveInnerDot,
} from './Swiper.styles';

export const Swiper = ({images, imageRoundedBottom, ...props}) => (
  <PinpoinxSwiper
    pagingEnabled={true}
    showsPagination={true}
    horizontal={true}
    dot={<Dot />}
    activeDot={
      <ActiveDot>
        <ActiveInnerDot />
      </ActiveDot>
    }
    {...props}>
    {images.map(item => (
      <ImageContainer key={item}>
        <Image
          source={{uri: item}}
          resizeMode="stretch"
          imageRoundedBottom={imageRoundedBottom}
        />
      </ImageContainer>
    ))}
  </PinpoinxSwiper>
);
