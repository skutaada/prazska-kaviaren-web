import { Link } from "wouter";
import { CiFacebook, CiMail, CiInstagram, CiCircleInfo } from "react-icons/ci";

function NavBar() {
  return (
    <>
      <div className="hidden lg:flex justify-center items-center gap-x-20 pt-8 pb-8 pl-44 pr-24 text-xl">
        <Link href="/prazska-kaviaren-web/about">Kto sme</Link>
        <a
          href="https://www.krajan.sk/krajan.php?id_krajan=2527"
          target="_blank"
          rel="noreferrer noopener"
        >
          Kalendár udalostí
        </a>
        <Link href="/prazska-kaviaren-web">
          <img
            src="https://utfs.io/f/HW6YhTL3UhDxUxMRp3BwQ3NtvmajxBO81EyfdVSurn2DcFGz"
            alt=""
            width={88}
            height={88}
          />
        </Link>
        <a
          href="https://www.krajan.sk/prihlaska_za_clena_spolku_PK_pro_fyz_osobu.docx"
          target="_blank"
          rel="noreferrer noopener"
        >
          Chcem sa pridať
        </a>
        <div className="flex gap-x-5">
          <a
            href="https://www.instagram.com/prazskakaviaren/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <CiInstagram size={24}></CiInstagram>
          </a>
          <a
            href="https://www.facebook.com/prazskakaviaren/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <CiFacebook size={24}></CiFacebook>
          </a>
          <a href="mailto:prazska@kaviaren.org">
            <CiMail size={24}></CiMail>
          </a>
          <Link href="/prazska-kaviaren-web/contact">
            <CiCircleInfo size={24}></CiCircleInfo>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center pt-8 lg:hidden">
        <Link href="/">
          <img src="/logo.png" alt="" width={88} height={88} />
        </Link>
        <div className="border-0 rounded-md blur-xl flex-1 block text-xl mt-4">
          <Link href="/about">Kto sme</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
