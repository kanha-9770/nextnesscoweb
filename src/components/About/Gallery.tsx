import Image from 'next/image';

const images = [
  { src: '/assets/about/oldmen.webp', alt: 'Image 1', style: 'top-0 left-1/3 w-[10%] h-[10%]' },
  { src: '/assets/about/oldwomen.jpg', alt: 'Image 2', style: 'top-[-5%] left-[87%] w-[7%] h-auto' },
  { src: '/assets/about/palace.jpeg', alt: 'Image 3', style: 'top- left-[1%] w-[10%] h-auto' },
  { src: '/assets/about/wheel.jpg', alt: 'Image 4', style: ' top-[50%] left-[4%] w-[20%] h-[20%]' },
  { src: '/assets/about/nessco-team.webp', alt: 'Image 1', style: 'top-10 left-[15%] w-[20%] h-[20%]' },
  { src: '/assets/about/oldwomen.jpg', alt: 'Image 2', style: 'top-1/2 left-[60%] w-[10%] h-[10%]' },
  { src: '/assets/about/palace.jpeg', alt: 'Image 3', style: 'top-1/3 left-3/4 w-1/5 h-auto' },
  { src: '/assets/about/wheel.jpg', alt: 'Image 4', style: ' left-[55%] w-[15%] h-[10%]' },
  { src: '/assets/about/banner3.jpg', alt: 'Image 4', style: ' w-[20%] h-auto left-[37%] top-48' },

  // Add more images with appropriate styles as necessary
];

export default function Gallery() {
  return (
    <div
    className="bg-cover bg-center text-white flex flex-col items-center top-5"
    style={{ backgroundImage: 'url("/assets/about/bg.png")' }} 
  >
  
      <h1 className=' relative text-8xl z-50 top-72 ml-20 font-bold font-montserrat justify-center text-center flex flex-col'>Gallery</h1>
      <button className=" relative z-50 bg-black font-montserrat top-72 text-white px-10 py-2 text-xl rounded-2xl ml-48">
        View Gallery
      </button>
      
      <div className="relative w-full h-[80vh]">
        {images.map((img, idx) => (
          <div key={idx} className={`absolute p-2 ${img.style}`}>
            <Image
              src={img.src}
              alt={img.alt}
              layout="responsive"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
