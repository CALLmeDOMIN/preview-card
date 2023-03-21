import { type NextPage } from "next";
import Image from "next/image";
import perfumePicD from '../../public/image-product-desktop.jpg';
import perfumePicM from '../../public/image-product-mobile.jpg';

const Home: NextPage = () => {
  return (
    <>
      <title>Frontendmentor coding challenge</title>
      <div className="w-screen h-screen md:flex items-center justify-center bg-orange-50">
        <main className="m-4 max-w-xl md:flex bg-white shadow-xl rounded-xl">
          <div className="overflow-hidden md:w-1/2 rounded-t-xl md:rounded-l-xl md:rounded-none">
            <Image className="md:hidden" src={perfumePicM} alt="Picture of the perfumes"></Image>
            <Image className="hidden md:block" src={perfumePicD} alt="Picture of the perfumes"></Image>
          </div>

          <div className="p-4 md:px-6 md:h-full md:w-1/2">
            <h1 className="md:my-3 text-xs font-Montserrat uppercase tracking-[0.2rem]">perfume</h1>

            <h2 className="my-2 md:mr-7 md:my-4 font-Fraunces text-3xl">Gabrielle Essence Eau De Parfum</h2>

            <p className="my-2 md:mr-3 font-Montserrat text-sm ">
              A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.
            </p>

            <div className="md:my-6 flex items-center">

              <h1 className="w-1/2 text-3xl md:mr-4 text-emerald-700 font-bold font-Fraunces">$149.99</h1>

              <h1 className="line-through">$169.99</h1>

            </div>

            <button className="w-full flex items-center justify-center p-4 font-Montserrat text-sm text-white font-semibold bg-emerald-700 rounded-md">
              <Image src={'/icon-cart.svg'} alt="Cart picture" width={24} height={24}></Image>
              <h1 className="ml-3">Add to Cart</h1>
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
