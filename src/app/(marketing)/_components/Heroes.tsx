import Image from "next/image"

const Heroes = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="flex items-center">
        <div className="relative content-evenly w-full h-[300px] sm:w-full sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image src="/1.jpg" alt="one" fill/>
        </div>
      </div>
    </div>
  )
}

export default Heroes;