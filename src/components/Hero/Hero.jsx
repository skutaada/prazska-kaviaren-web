import { GoArrowDownRight } from "react-icons/go";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <div className="mt-64 flex pt-24 pb-12 px-20 gap-10 justify-between">
        <h1 className="main border-0 rounded-md backdrop-blur-lg p-6">
          Nieje žiadna hanba, <br /> že ťa tvoje srdce volá.
        </h1>
        <div className="flex flex-col gap-y-10 justify-end backdrop-blur-lg p-6 border-0 rounded-md subtext">
          <GoArrowDownRight size={30}></GoArrowDownRight>
          <p>
            Pražská kaviareň je krajanský spolok združujúci Slovákov a Slovenky,
            ktorí žijú a pôsobia v Prahe.
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-6">
        <a
          href="https://www.kudyznudy.cz/?utm_source=kzn&utm_medium=partneri_kzn&utm_campaign=banner"
          target="_blank"
        >
          <img
            src="https://www.kudyznudy.cz/getmedia/fc5f14ae-5cc6-4aab-9303-1cdfb20659d2/1012102023-online-bannery-hq-234x60.jpg.aspx"
            width="234"
            height="60"
            alt="Kudyznudy.cz"
            className="rounded-md"
          />
        </a>
      </div>
    </div>
  );
}

export default Hero;
