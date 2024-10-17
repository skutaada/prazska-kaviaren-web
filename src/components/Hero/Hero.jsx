import { GoArrowDownRight } from "react-icons/go";
import "./Hero.css"

function Hero() {
    return (
        <div className="mt-80 flex flex-wrap pt-24 pb-24 px-44 gap-10">
            <h1 className="main mr-auto border-0 rounded-md backdrop-blur-lg p-6">Nieje žiadna hanba, <br/> že ťa tvoje srdce volá.</h1>
            <div className="flex flex-col gap-y-10 justify-end backdrop-blur-lg p-6 border-0 rounded-md subtext">
                <GoArrowDownRight size={30}></GoArrowDownRight>
                <p>Pražská kaviareň je krajanský spolok združujúci Slovákov a Slovenky, ktorí žijú a pôsobia v Prahe.</p>
            </div>
        </div>
    )
}

export default Hero