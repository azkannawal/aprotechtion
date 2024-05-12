import { useEffect, useState } from "react";
import PageLoading from "./../components/pageLoader/index";
import Slider from "react-slick";
import Images from "../dummy/caraousel";
import GlowCursor from "./../components/cursor/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImagesTeam from "../dummy/team";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      {loading ? (
        <PageLoading />
      ) : (
        <main className="flex flex-col items-center min-h-screen relative">
          <header
            className={`flex justify-between items-center w-full fixed z-20 px-12 py-4 ${
              scrolled ? "bg-four duration-300 shadow" : "duration-300"
            }`}
          >
            <img src="./logo.png" className="w-20 pb-2" alt="img" />
            <button
              className="group h-20 w-20 rounded-lg lg:hidden"
              onClick={toggleMenu}
            >
              <div className="grid justify-items-center gap-1.5">
                <span
                  className={`h-1 w-8 rounded-full bg-two ${
                    isOpen
                      ? "rotate-45 translate-y-2.5 transition"
                      : "transition"
                  }`}
                ></span>
                <span
                  className={`h-1 w-8 rounded-full bg-two ${
                    isOpen ? "scale-x-0 transition" : "transition"
                  }`}
                ></span>
                <span
                  className={`h-1 w-8 rounded-full bg-two ${
                    isOpen
                      ? "-rotate-45 -translate-y-2.5 transition"
                      : "transition"
                  }`}
                ></span>
              </div>
            </button>
            <div
              className={`sidebar bg-four pt-24 px-12 pb-6 shadow lg:hidden ${
                isOpen ? "open" : ""
              }`}
            >
              <ul className="gap-y-4 text-lg font-medium text-two flex flex-col">
                <li className="hoverline">
                  <a href="#">Home</a>
                </li>
                <li className="hoverline">
                  <a href="#about">Team</a>
                </li>
                <li className="hoverline">
                  <a href="#about">Product</a>
                </li>
                <li className="hoverline">
                  <a href="#about">Contact</a>
                </li>
              </ul>
            </div>
            <ul className="hidden text-lg gap-x-8 font-medium text-two lg:flex">
              <li className="hoverline">
                <a href="#">Home</a>
              </li>
              <li className="hoverline">
                <a href="#about">Team</a>
              </li>
              <li className="hoverline">
                <a href="#about">Product</a>
              </li>
              <li className="hoverline">
                <a href="#about">Contact</a>
              </li>
            </ul>
          </header>
          <section id="caraousel" className="w-full overflow-hidden relative">
            <Slider {...settings}>
              {Images.map((item) => (
                <div key={item.id}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-screen w-full object-cover"
                  />
                </div>
              ))}
            </Slider>
            <div className="flex flex-col w-96 justify-center items-center top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
              <img src="./logo.png" className="w-full" alt="img" />
              <h1 className="text-xl">
                Protech Your Skin with AProTechtion!!!
              </h1>
            </div>
          </section>
          <section
            id="about"
            className="flex flex-col lg:flex-row w-full justify-center items-center gap-x-4 gap-y-6 p-16"
          >
            <img src="./logo.png" className="w-full lg:w-3/5" alt="img" />
            <p className="w-full lg:w-2/5  text-lg">
              Memiliki kandungan SPF 50 PA++++ yang mampu melindungi kulit
              selama 500 menit atau sekitar 8 jam. Dibuat dari bahan alami yaitu
              ekstrak kulit apel khas Malang Raya. Membuat Anda tampil percaya
              diri di bawah terik sinar matahari dengan berbagai kesibukan dan
              aktivitas yang Anda lakukan.
            </p>
          </section>
          <section className="flex flex-col items-center w-full bg-gradient-to-b from-four to-three py-4">
            <h1 className="text-3xl text-two font-bold pb-2">Struktur Usaha</h1>
            <div className="flex flex-wrap gap-x-6 gap-y-6 w-full justify-center px-20 lg:px-48">
              {ImagesTeam.map((item) => (
                <div
                  key={item.id}
                  className="hover01 column w-72 flex flex-col gap-y-2.5"
                >
                  <div className="border-4 border-two rounded-xl hover:rounded-2xl hover:transition-transform hover:ease-in-out hover:duration-300 overflow-hidden  bg-white">
                    <figure className="w-full">
                      <img src={item.src} alt={item.alt} />
                    </figure>
                  </div>
                  <h1 className="w-full text-center text-lg text-two font-medium">
                    {item.name}
                  </h1>
                  <h2 className="w-full text-center">{item.post}</h2>
                </div>
              ))}
            </div>
          </section>
          <footer className="w-full flex flex-col bg-two gap-y-8 py-20 px-16 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 justify-between text-white">
              <div className="bg-white w-32 h-32 flex justify-center self-center lg:self-start items-center rounded-full">
                <img src="./logo.png" alt="img" className="w-28 pb-2" />
              </div>
              <div className="flex flex-col">
                <h1 className="pb-3 font-bold underline decoration-four underline-offset-8">
                  Jam kerja
                </h1>
                <p className="font-extralight">Lorem ipsum dolor sit.</p>
              </div>
              <div className="flex flex-col">
                <h1 className="pb-3 font-bold underline decoration-four underline-offset-8">
                  Bantuan
                </h1>
                <p className="font-extralight">Lorem ipsum dolor sit.</p>
              </div>
              <div className="flex flex-col">
                <h1 className="pb-3 font-bold underline decoration-four underline-offset-8">
                  Tautan
                </h1>
                <p className="font-extralight">Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className="flex text-white">
              <h1>©️2024 Aprotechtion. All rights reserved</h1>
            </div>
          </footer>
          <section className=" fixed bottom-8 right-8 ">
            <div className="flex rounded-xl py-3 p-4 bg-two justify-center items-center">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/qiscus-sdk/public/qismo/img/icon-qiscus-widget-default.svg"
                alt=""
                className="w-8 pr-2"
              />
              <h1 className="text-sm text-white">Hubungi kami</h1>
            </div>
          </section>
          <GlowCursor />
        </main>
      )}
    </>
  );
};

export default Home;
