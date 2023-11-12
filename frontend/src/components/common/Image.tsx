import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Image: React.FC<{ alt?: any, height?: any, src?: any, width?: any, placeholderSrc?: any, }> = ({ placeholderSrc, alt, height, src, width }) => {
    return (

        <LazyLoadImage
            alt={alt}
            height={height}
            src={src}
            placeholderSrc={placeholderSrc}
            effect="blur"
            width={width} />



    )
}

export default Image