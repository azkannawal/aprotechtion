import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PageLoading = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div data-aos="zoom-out-up">
        <img src="./logo.png" className="w-48"/>
      </div>
    </main>
  );
};

export default PageLoading;
