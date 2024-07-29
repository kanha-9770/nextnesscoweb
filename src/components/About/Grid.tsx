import Image from 'next/image';
import  Style  from './about.module.css';

const images = [
  { src: '/assets/about/oldmen.webp', alt: 'Image 1', style: 'top-36 left-[35%] w-[10%] h-[20%] ' },
  { src: '/assets/about/oldwomen.jpg', alt: 'Image 2', style: 'top-[35%] left-[87%] w-[6%] h-[12%]  ' },
  { src: '/assets/about/palace.jpeg', alt: 'Image 3', style: 'top-[58%] left-2 w-[7%] h-[11%] ' },
  { src: '/assets/about/wheel.jpg', alt: 'Image 4', style: 'top-[30%] left-16 w-[20%] h-[25%] ' },
  { src: '/assets/about/palace.jpeg', alt: 'Image 5', style: 'top-[50%] left-[22%] w-[28%] h-[36%] image-scale-up ' },
  { src: '/assets/about/oldwomen.jpg', alt: 'Image 6', style: 'top-[70%] left-[8%] w-[6%] h-[19%]' },
  { src: '/assets/about/palace.jpeg', alt: 'Image 7', style: 'top-[57%] left-[56%] w-[15%] h-[15%] image-translate-up' },
  { src: '/assets/about/wheel.jpg', alt: 'Image 8', style: ' top-[75%] left-[68%] w-[7%] h-[12%]' },
  { src: '/assets/about/banner3.jpg', alt: 'Image 9', style: 'w-[26%] h-[23%] left-[55%] top-40' },
  { src: '/assets/about/palace2.webp', alt: 'Image 8', style: ' top-[55%] left-[83%] w-[13%] h-[25%] image-translate-up' },
  // Add more images with appropriate styles as necessary
];

const Grid = () => {
  return (
    <div className="relative h-screen bg-black">
      <div className="absolute inset-0 grid grid-cols-10 p-14 -ml-16  ">
        <div className="border border-gray-600 mt-16"></div>
        <div className="border border-gray-600 mt-16 col-span-3"></div>
        <div className="border border-gray-600 mt-16 col-span-3"></div>
        <div className="border border-gray-600 mt-16 col-span-2 -mr-10"></div>
        <div className="border border-gray-600 mt-16 ml-10 -mr-16"></div>
      </div>
      <h1 className=' relative text-6xl z-30 top-72 ml-20 font-poppins justify-center text-center flex flex-col text-white font-bold'>Gallery</h1>
      <button className=" relative z-30 bg-black font-poppins top-72 text-white px-2 py-2 text-lg rounded-2xl ml-[49%] mt-2">
        View Gallery
      </button>
      {images.map((img, idx) => (
 <div key={idx} className={`absolute ${img.style} z-20 ${img.style.includes('image-scale-up') ? Style.imageScaleUp : ''} ${img.style.includes('image-translate-up') ? Style.imageTranslateUp : ''} z-20 ${img.style}`}>        
   <Image
            src={img.src}
            alt={img.alt}
            layout="fill"
            objectFit="cover"
            className=" duration-100 rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
}

export default Grid;
