import { Card } from "flowbite-react";

const cardData = [
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

export default function jobOpportunity() {
  return (
    <>
      <section className=" container mx-auto">
        <h1 className="uppercase text-3xl font-extrabold pl-48 mb-4">
          Useful Content{" "}
        </h1>
        <div className="grid grid-cols-3">
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
      </section>
    </>
  );
}
