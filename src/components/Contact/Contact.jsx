import "./Contact.css";

export default function Contact() {
  return (
    <div className="w-1/2 h-1/2 p-12 backdrop-blur-2xl mx-auto mt-20 rounded-lg border-0 text-center flex flex-col gap-6">
      <h1 className="header">Sídlo</h1>
      <p>U Uranie 1583/23, Holešovice (Praha 7), 170 00 Praha</p>
      <h1 className="header">Členovia</h1>
      <p>
        Andrej Probst (predseda), Adela Klepáková (Podpredseda), Čopová Denisa,
        Pavlovský Jakub, Piussi Zuzana, Račko Lukáš, Zubo Samuel
      </p>
      <p>Platby z ČR: 2401413120 / 2010 (FIO ČR)</p>
      <p>Platby zo SR: SK9583300000002401413120</p>
      <a
        href="https://ib.fio.cz/ib/transparent?a=2401413120"
        className="underline"
        target="_blank"
        rel="noreferrer noopener"
      >
        Transparentný účet
      </a>
    </div>
  );
}
