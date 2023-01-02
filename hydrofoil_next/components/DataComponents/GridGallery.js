import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

function GridGallery({ element }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(element.images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <>
    <div class="text-center mb-12 mt-12">
        <h1 class="text-4xl md:text-6xl text-gray-700 font-semibold">{element.title}</h1>
    </div>
    <div className="grid grid-cols-2 gap-1">
      {element.images &&
        element.images.map((imageUrl, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <GridGalleryCard
              imageUrl={imageUrl}
              show={imagesShownArray[index]}
            />
          </VisibilitySensor>
        ))}
    </div>
    </>
  );
}

function GridGalleryCard({ imageUrl, show }) {
  return (
    <div
      className={`relative transition ease-in duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
          {imageUrl.text}
        </div>
      </div>
      <img className="w-full h-full" src={process.env.IMAGES_STRAPI_URL + imageUrl.image.data.attributes.url} alt="" />
    </div>
  );
}

export default GridGallery;