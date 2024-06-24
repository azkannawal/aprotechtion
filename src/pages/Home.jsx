import { useEffect, useState } from "react";
import PageLoading from "./../components/pageLoader/index";
import Slider from "react-slick";
import Images from "../dummy/caraousel";
// import GlowCursor from "./../components/cursor/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImagesTeam from "../dummy/team";
import companyLogo from "./../assets/logo_new1.png";
import productImg from "./../assets/product03.jpeg";
import productImg2 from "./../assets/product04.jpeg";
import listItem from "./../assets/image.png";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);

  return (
    <>
      {loading ? (
        <PageLoading />
      ) : (
        <main className="flex flex-col items-center min-h-screen relative">
          <header
            className={`flex justify-between items-center w-full fixed z-20 px-12 py-1.5 lg:py-3.5 ${
              scrolled
                ? "bg-gradient-to-b from-four to-three duration-300 shadow-lg"
                : "duration-300"
            }`}
          >
            <img src={companyLogo} className="w-20" alt="img" />
            <button
              className="group h-20 w-20 rounded-lg lg:hidden"
              onClick={toggleMenu}
            >
              <div className="grid justify-items-end gap-y-1.5">
                <span
                  className={`h-1 w-8 rounded-full bg-white ${
                    isOpen
                      ? "rotate-45 translate-y-2.5 transition"
                      : "transition"
                  }`}
                ></span>
                <span
                  className={`h-1 w-8 rounded-full bg-white ${
                    isOpen ? "scale-x-0 transition" : "transition"
                  }`}
                ></span>
                <span
                  className={`h-1 w-8 rounded-full bg-white ${
                    isOpen
                      ? "-rotate-45 -translate-y-2.5 transition"
                      : "transition"
                  }`}
                ></span>
              </div>
            </button>
            <div
              className={`sidebar bg-gradient-to-b from-four to-three duration-300 shadow-lg pt-24 px-14 pb-6 lg:hidden ${
                isOpen ? "open" : ""
              }`}
            >
              <ul className="gap-y-4 font-medium text-white flex flex-col">
                <li className="hoverline">
                  <a href="#">Home</a>
                </li>
                <li className="hoverline">
                  <a href="#product">Product</a>
                </li>
                <li className="hoverline">
                  <a href="#shop">Shop</a>
                </li>
                <li className="hoverline">
                  <a href="#team">Team</a>
                </li>
              </ul>
            </div>
            <ul className="hidden text-lg gap-x-8 font-medium text-white lg:flex">
              <li className="hoverline">
                <a href="#">Home</a>
              </li>
              <li className="hoverline">
                <a href="#product">Product</a>
              </li>
              <li className="hoverline">
                <a href="#shop">Shop</a>
              </li>
              <li className="hoverline">
                <a href="#team">Team</a>
              </li>
            </ul>
          </header>
          <section id="caraousel" className="w-full overflow-hidden relative">
            <Slider {...settings}>
              {Images.map((item) => (
                <div key={item.id} className="relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-screen w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-two/40"></div>
                </div>
              ))}
            </Slider>
            <div className="flex flex-col-reverse lg:flex-row w-full lg:w-full justify-center items-center top-[50%] left-1/4 lg:gap-x-10 -translate-x-1/4 -translate-y-1/2 absolute lg:px-24">
              <div className="text-xl text-white w-1/2" data-aos="zoom-in-down">
                <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-b from-four to-three inline-block text-transparent bg-clip-text pt-10 lg:pt-0 pb-4">
                  Protect Your Skin with AProTechtion
                </p>
                <p className="lg:text-lg text-base">
                  Perlindungan terbaik untuk kulit Anda yang dirancang
                  menggunakan teknologi nano dengan menggabungkan manfaat alami
                  kulit apel dan daun pegagan. Tidak hanya melindungi kulit Anda
                  dari sinar UVA/UVB berbahaya dari sinar matahari, tetapi juga
                  merangsang keratinisasi untuk mencegah karsinoma sel basal.
                </p>
              </div>
              <img
                src={companyLogo}
                className="w-1/2 max-w-[500px] hidden lg:block"
                alt="img"
                data-aos="zoom-in-down"
              />
            </div>
          </section>
          <section
            id="product"
            className="flex flex-col lg:flex-row px-14 py-10 bg-amber-50 w-full"
          >
            <div className="w-full lg:w-2/5 flex justify-center items-center">
              <img
                src={productImg}
                className="w-full max-w-[250px] rounded-xl"
                alt="img"
                data-aos="zoom-in-up"
              />
            </div>
            <div className="w-full pt-10 flex-col lg:pt-0 lg:w-3/5">
              <h1
                className="bg-two w-fit p-3 text-four font-bold text-3xl rounded-xl"
                data-aos="fade-down"
              >
                Keunggulan Produk
              </h1>
              <ul className="list-inside">
                <li
                  className="pt-6 pb-2 text-lg font-bold text-two flex"
                  data-aos="fade-up"
                >
                  <img src={listItem} alt="" className="w-8 h-8" />
                  <div className="pl-3">
                    <h1>Naturally Based Ingredients</h1>
                    <p className="text-black text-base font-normal">
                      Berbahan dasar kulit apel (Malus domestica) dan daun
                      pegagan (Centella asiatica) menjadikan AProTechtion
                      sebagai sunblock yang mengandung senyawa alami.
                    </p>
                  </div>
                </li>
                <li
                  className="py-2 text-lg font-bold text-two flex"
                  data-aos="fade-up"
                >
                  <img src={listItem} alt="" className="w-8 h-8" />
                  <div className="pl-3">
                    <h1>SPF50 PA++++ 8 Jam Perlindungan UVA + UVB </h1>
                    <p className="text-black text-base font-normal">
                      Durasi jangka panjang seharian sebagai perlindungan untuk
                      mencegah kulit terkena karsinoma sel basal yang berasal
                      dari paparan sinar matahari langsung.
                    </p>
                  </div>
                </li>
                <li
                  className="py-2 text-lg font-bold text-two flex"
                  data-aos="fade-up"
                >
                  <img src={listItem} alt="" className="w-8 h-8" />
                  <div className="pl-3">
                    <h1>Bernano Teknologi untuk Memaksimalkan Perlindungan</h1>
                    <p className="text-black text-base font-normal">
                      Berinovasi menggunakan teknologi nano sebagai inovasi
                      unggulan untuk memaksimalkan dan mengefektifkan penyerapan
                      produk pada kulit.
                    </p>
                  </div>
                </li>
                <li
                  className="py-2 text-lg font-bold text-two flex"
                  data-aos="fade-up"
                >
                  <img src={listItem} alt="" className="w-8 h-8" />
                  <div className="pl-3">
                    <h1>Kulit Segar dan Sehat</h1>
                    <p className="text-black text-base font-normal">
                      Berinovasi menggunakan teknologi nano sebagai inovasi
                      unggulan untuk memaksimalkan dan mengefektifkan penyerapan
                      produk pada kulit.
                    </p>
                  </div>
                </li>
                <li
                  className="py-2 text-lg font-bold text-two flex"
                  data-aos="fade-up"
                >
                  <img src={listItem} alt="" className="w-8 h-8" />
                  <div className="pl-3">
                    <h1>Melembabkan dan Mencerahkan</h1>
                    <p className="text-black text-base font-normal">
                      Memiliki beragam kandungan yang dapat membuat kulit Anda
                      lebih lembab dan tampak lebih cerah.
                    </p>
                  </div>
                </li>
                <li
                  className="py-2 text-lg font-bold text-two flex"
                  data-aos="fade-up"
                >
                  <img src={listItem} alt="" className="w-8 h-8" />
                  <div className="pl-3">
                    <h1>Merangsang Keratinisasi Sel Basal pada Kulit</h1>
                    <p className="text-black text-base font-normal">
                      Kandungan daun pegagan (Centella asiatica) pada
                      AProTechtion mampu merangsang sel basal pada kulit sebagai
                      bentuk pencegahan dari karsinoma sel basal
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section
            id="shop"
            className="w-full flex flex-col-reverse px-14 lg:px-0 lg:flex-row bg-amber-50"
          >
            <div className="flex flex-col w-full lg:w-1/2 lg:pl-14 pl-0 pt-10 lg:pt-0">
              <h1
                className="bg-two w-fit p-3 text-four font-bold text-3xl rounded-xl"
                data-aos="fade-down"
              >
                Review
              </h1>
              <div
                className="flex flex-col bg-two rounded-xl mt-6 p-4"
                data-aos="fade-up"
              >
                <h1 className="font-bold text-lg text-white">Aurel</h1>
                <h2>⭐⭐⭐⭐⭐</h2>
                <p className="text-white">
                  Suka banget sama produk ini, menurut aku rekomen banget sih
                  buat penggunaan keseharian
                </p>
              </div>
              <div
                className="flex flex-col bg-two rounded-xl mt-6 p-4"
                data-aos="fade-up"
              >
                <h1 className="font-bold text-lg text-white">Cindy Gracia</h1>
                <h2>⭐⭐⭐⭐</h2>
                <p className="text-white">
                  Ini produknya gampang banget nyerap dikulit, teksturnya juga
                  ringan. Pokoknya suka deh
                </p>
              </div>
              <div
                className="flex flex-col bg-two rounded-xl mt-6 p-4"
                data-aos="fade-up"
              >
                <h1 className="font-bold text-lg text-white">Safira Keynada</h1>
                <h2>⭐⭐⭐⭐⭐</h2>
                <p className="text-white">
                  Awalnya dulu ragu buat beli ini, terus direkomendasiin sama
                  temen. Ternyata cocok banget. Jadi beli lagi deh wkwk
                </p>
              </div>
              <div
                className="flex flex-col bg-two rounded-xl mt-6 p-4"
                data-aos="fade-up"
              >
                <h1 className="font-bold text-lg text-white">Zein Wicaksono</h1>
                <h2>⭐⭐⭐⭐⭐</h2>
                <p className="text-white">
                  Kirain dikulit kelihatan abu-abu, ternyata bagus banget dan
                  bisa melindungi kulit seharian
                </p>
              </div>
            </div>
            <div
              className="flex flex-col gap-y-5 p-4 justify-center items-center w-full lg:w-1/2 bg-white border-4 border-two rounded-xl mx-0 lg:mx-24"
              data-aos="fade-up"
            >
              <h1
                className="text-two font-bold text-xl lg:text-3xl"
                data-aos="fade-down"
              >
                Beli sekarang
              </h1>
              <img
                src={productImg2}
                data-aos="fade-up"
                className="w-full max-w-[320px] lg:max-w-[480px] rounded-xl"
              />
              <div className="flex flex-row gap-5 w-full justify-center">
                <a href="https://s.lazada.co.id/s.rOJBT" target="_blank">
                  <button
                    className="bg-two font-bold text-white p-4 px-8  lg:px-20 rounded-full"
                    data-aos="fade-down"
                  >
                    Lazada
                  </button>
                </a>
                <a href="https://id.shp.ee/7iwvBm6" target="_blank">
                  <button
                    className="bg-two font-bold text-white p-4 px-8  lg:px-20 rounded-full"
                    data-aos="fade-down"
                  >
                    Shopee
                  </button>
                </a>
              </div>
            </div>
          </section>
          <section
            id="team"
            className="flex flex-col items-center w-full py-12 bg-amber-50"
          >
            <h1
              className="bg-two w-fit p-3 text-four font-bold text-3xl rounded-xl"
              data-aos="fade-down"
            >
              Struktur Usaha
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-6 w-full justify-center pt-6 px-20 lg:px-48">
              {ImagesTeam.map((item) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
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
          <footer className="w-full flex flex-col bg-two gap-y-8 py-14 px-16 lg:px-20">
            <div className="flex flex-col-reverse lg:flex-row gap-y-8 lg:gap-y-0 justify-between text-white">
              <div className="flex flex-col">
                <div
                  className="bg-white w-28 h-28 flex justify-center self-center lg:self-start items-center rounded-full mb-8"
                  data-aos="fade-up"
                >
                  <img src={companyLogo} alt="img" className="w-24 pb-2" />
                </div>
                <h1 className="font-bold self-center lg:self-start">
                  PT APPLE PROTECH MANDIRI
                </h1>
                <h1 className="mb-2 self-center lg:self-start">
                  Malang, Jawa Timur, Indonesia
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="pb-3 font-bold underline decoration-four underline-offset-8">
                  Contact
                </h1>
                <a
                  href="https://wa.me/6285236189714"
                  target="_blank"
                  className="font-extralight mb-2"
                >
                  Email
                </a>
                <a href="" target="_blank" className="font-extralight mb-2">
                  WhatsApp
                </a>
              </div>
              <div className="flex flex-col">
                <h1 className="pb-3 font-bold underline decoration-four underline-offset-8">
                  Social Media
                </h1>
                <a
                  href="https://www.facebook.com/profile.php?id=61558994411643&mibextid=LQQJ4d"
                  target="_blank"
                  className="font-extralight mb-2"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/aprotechtion?igsh=MXVldnF6YW45Y3F4ZQ=="
                  target="_blank"
                  className="font-extralight mb-2"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@aprotechtion_pkmk?_t=8nHBddxmJwe&_r=1 "
                  target="_blank"
                  className="font-extralight mb-2"
                >
                  Tiktok
                </a>
              </div>
              <div className="flex flex-col">
                <h1 className="pb-3 font-bold underline decoration-four underline-offset-8">
                  Online Shop
                </h1>
                <a
                  href="https://s.lazada.co.id/s.rOJBT"
                  target="_blank"
                  className="font-extralight mb-2"
                >
                  Lazada
                </a>
                <a
                  href="https://id.shp.ee/7iwvBm6 "
                  target="_blank"
                  className="font-extralight mb-2"
                >
                  Shopee
                </a>
              </div>
            </div>
          </footer>
          <section
            id="cta"
            className="fixed bottom-4 right-4"
            data-aos="zoom-in-up"
          >
            <div className="flex rounded-xl py-3 pl-4 pr-3  bg-two justify-center items-center">
              <a
                href="https://wa.me/6285236189714"
                target="_blank"
                className="text-sm text-white"
              >
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/qiscus-sdk/public/qismo/img/icon-qiscus-widget-default.svg"
                  alt=""
                  className="w-8 pr-2"
                />
              </a>
            </div>
          </section>
          {/* <GlowCursor /> */}
        </main>
      )}
    </>
  );
};

export default Home;
