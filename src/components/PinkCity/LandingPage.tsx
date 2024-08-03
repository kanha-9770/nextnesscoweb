import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center h-screen p-6">
     <div className="relative w-full max-w-screen-xl p-6 top-12 h-[68vh] "> {/*  75%  viewport height */}
        <Image
          src="/assets/pinkcity/bgimg.png"
          alt="Jaipur"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
       
      </div>
      <div className=" w-full max-w-screen-xl flex flex-col items-center  ">
        <div className="flex w-full items-center ml-5">
          <div className="flex-1 text-center ml-5 mt-9 ">
            <p className="text-black text-sm font-montserrat">
              Rajasthan is a name of Hindustani origin. It means “The Land of Desert”, a reference to the wide and inhospitable Thar Desert that occupies most of its territory. It also means “The Land of Kings”, because several kingdoms flourished here during the medieval and early modern era.
            </p>
          </div>
          <div className="flex-shrink-0 z-10 -mt-24 ">
            <div className=" text-white   ">
              <Image src="/assets/pinkcity/stickerimg.png" alt="The Pink City" width={420} height={180} />
            </div>
          </div>
          <div className="flex-1 text-center mt-9 ">
            <h2 className="text-5xl font-poppins ">The Land of  <span className='font-alexBrush text-8xl text-red-800'>Maharajas.</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
