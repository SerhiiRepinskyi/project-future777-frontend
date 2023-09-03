import React from 'react';

const WelcomePageImage = () => {
  return (
    <picture>
      <source
        srcSet="https://res.cloudinary.com/djskgpjj4/image/upload/v1693243919/tablet-1x.png 1x, https://res.cloudinary.com/djskgpjj4/image/upload/v1693243961/tablet-2x.png 2x,"
        type="image/jpeg"
        media="(min-width:768px)"
      />
      <source
        srcSet="https://res.cloudinary.com/djskgpjj4/image/upload/v1693243639/mobile-1x.png 1x, https://res.cloudinary.com/djskgpjj4/image/upload/v1693243669/mobile-2x.png 2x,"
        type="image/jpeg"
        media="(max-width:767px)"
      />
      <img
        src="https://res.cloudinary.com/djskgpjj4/image/upload/v1693243639/mobile-1x.png"
        alt="a person works at a computer"
      />
    </picture>
  );
};

export default WelcomePageImage;
