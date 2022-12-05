import React from "react";
import Carousel from "react-multi-carousel";
import CELESTIAL_TALES from "./celestial-tales-images";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

class CelestialTalesCarousel extends React.Component {
  state = { additionalTransfrom: 0 };

  toggleModal = (selectedIndex) => {
    console.log(selectedIndex);
  };

  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
            (this.Carousel.state.totalItems -
              this.Carousel.state.slidesToShow) +
            150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform } = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={(e) => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide,
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
    return (
      <Carousel
        focusOnSelect={true}
        shouldResetAutoplay={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={2000}
        ssr={false}
        infinite={true}
        ref={(el) => (this.Carousel = el)}
        partialVisible={true}
        customButtonGroup={<CustomSlider />}
        itemClass="slider-image-item"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-this.state.additionalTransfrom}
        beforeChange={(nextSlide) => {
          if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
            this.setState({ additionalTransfrom: 0 });
          }
          if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
            this.setState({ additionalTransfrom: 0 });
          }
        }}
      >
        {CELESTIAL_TALES &&
          CELESTIAL_TALES.map((item) => (
            <div
              class="image-container"
              key={item.id}
              onClick={() => this.toggleModal(item)}
            >
              <div class="image-container-text"></div>
              <img
                draggable={false}
                style={{ cursor: "pointer" }}
                src={item.image}
              />
            </div>
          ))}
      </Carousel>
    );
  }
}

export default CelestialTalesCarousel;