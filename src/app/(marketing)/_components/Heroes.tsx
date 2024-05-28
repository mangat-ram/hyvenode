import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center w-full">
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
          <Image src="/1.jpg" alt="one" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
