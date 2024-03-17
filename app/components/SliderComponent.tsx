import { Card, Carousel } from "flowbite-react";

const SliderComponent = () => {
  const cardData = [
    {
      image:
        "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
      title: "Flutter Mobile Development",
    },
    {
      image:
        "https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png",
      title: "Flutter Mobile Development",
    },
    {
      image:
        "https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png",
      title: "Flutter Mobile Development",
    },
    {
      image:
        "https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg",
      title: "Flutter Mobile Development",
    },
  ];
  return (
    <>
      <section className="h-[50vh] container mx-auto">
        <h1 className="uppercase text-3xl font-extrabold pl-48 mb-4">
          USEFUL CONTENTS
        </h1>
        <Carousel>
          <div className="flex w-full justify-evenly gap-2">
            {cardData.map((card, index) => (
              <Card
                key={index}
                className="h-[400px] w-[400px] shadow-lg rounded-lg overflow-hidden"
                renderImage={() => (
                  <img
                    src={card.image}
                    alt={`image ${index + 1}`}
                    className="object-cover w-full h-[200px]"
                  />
                )}
              >
                <div className="p-6">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                    {card.title}
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Some description about the card...
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex w-full justify-evenly gap-2">
            <Card
              className="h-[400px] w-[400px]"
              renderImage={() => (
                <img
                  src="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png"
                  alt="image 1"
                  className="object-cover overflow-hidden h-[400px]"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Flutter Mobile Development
              </h5>
            </Card>
            <Card
              className="h-[400px] w-[400px]"
              renderImage={() => (
                <img
                  src="https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png"
                  alt="image 1"
                  className="object-cover overflow-hidden h-[400px]"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Flutter Mobile Development
              </h5>
            </Card>
            <Card
              className="h-[400px] w-[400px]"
              renderImage={() => (
                <img
                  src="https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png"
                  alt="image 1"
                  className="object-cover overflow-hidden h-[400px]"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Flutter Mobile Development
              </h5>
            </Card>
            <Card
              className="h-[400px] w-[400px]"
              renderImage={() => (
                <img
                  src="https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg"
                  alt="image 1"
                  className="object-cover overflow-hidden h-[400px]"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Flutter Mobile Development
              </h5>
            </Card>
          </div>
          <div className="flex w-full justify-evenly gap-2">
            {cardData.map((card, index) => (
              <Card
                key={index}
                className="h-[400px] w-[400px] shadow-lg rounded-lg overflow-hidden"
                renderImage={() => (
                  <img
                    src={card.image}
                    alt={`image ${index + 1}`}
                    className="object-cover w-full h-[200px]"
                  />
                )}
              >
                <div className="p-6">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                    {card.title}
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Some description about the card...
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex w-full justify-evenly gap-2">
            {cardData.map((card, index) => (
              <Card
                key={index}
                className="h-[400px] w-[400px] shadow-lg rounded-lg overflow-hidden"
                renderImage={() => (
                  <img
                    src={card.image}
                    alt={`image ${index + 1}`}
                    className="object-cover w-full h-[200px]"
                  />
                )}
              >
                <div className="p-6">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                    {card.title}
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Some description about the card...
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default SliderComponent;
