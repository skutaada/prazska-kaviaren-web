export default function About() {
  return (
    <div className="w-1/3 h-1/2 p-12 backdrop-blur-2xl mx-auto mt-20 rounded-lg border-0 text-center flex flex-col gap-6">
      <p>
        Pražská kaviareň je krajanský spolok registrovaný v Českej republike
        združujúci Slovákov a Slovenky, ktorí/é žijú a pôsobia v Prahe, ktorí/é
        sa aktívne zaujímajú o dianie na Slovensku a pomáhajú Slovensku aj
        napriek tomu, že žijú v zahraničí.
      </p>
      <p>
        Účelom spolku je združovanie občanov za účelom podpory a rozvoja
        občianskeho, spoločenského a kultúrneho diania a vzdelávania v
        Slovenskej republike a v Českej republike.
      </p>
      <p>
        Členov spolku spája aktívny prístup k životu a presvedčenie, že je
        potrebné a možné meniť veci k lepšiemu. Ide nám o snahu o pozitívnu
        zmenu na Slovensku.
      </p>
      <p>
        Sme členom{" "}
        <a
          href="https://www.predemokraciu.sk/"
          className="underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          Platformy za demokraciu
        </a>
        .
      </p>
    </div>
  );
}
