import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carousel = ({ images }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 768, min: 464 },
      items: 3
    }
  };

  // DEBUG
  console.log('Images reçues:', images);

  return (
    <div style={{ padding: '20px 0', width: '100%' }}>
      <MultiCarousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        arrows={false}           
        draggable={true}
        showDots={false}         
        ssr={true}              
        keyBoardControl={true}
        containerClass="carousel-container"
        deviceType="desktop"    
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((src, index) => (
          <div key={index} className="carousel-item">
            <img
              src={src}
              alt={`Image ${index}`}
              style={{
                height: 50,
                objectFit: 'contain',
                display: 'block'
              }}
              onError={(e) => console.error('Erreur img:', src)}
            />
          </div>
        ))}
      </MultiCarousel>
    </div>
  );
};

export default Carousel;
