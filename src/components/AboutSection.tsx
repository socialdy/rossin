export const AboutSection = () => {
  const benefits = [
    "<strong>60 Jahre Designkultur</strong>: Seit 1964 steht Rossin für exzellentes Design im Objekt- und Privatbereich, mit einem tiefen Verständnis für Formschönheit und Wohlbefinden.",
    "<strong>Innovation und Auszeichnungen</strong>: Rossin hat zahlreiche Design-Awards gewonnen, darunter Red Dot Design Award, Good Design Award und den Interior Innovation Award, was die Innovationskraft und Designexzellenz unterstreicht.",
    "<strong>International anerkannte Qualität</strong>: Mit Präsenzen im Mittleren Osten und in den USA, sowie internationalen Messebeteiligungen, beweist Rossin seine globale Relevanz und Qualität.",
    "<strong>Nachhaltige Materialien</strong>: Rossin legt Wert auf umweltfreundliche und hochwertige Materialien, wie POLIMEX® und feuerhemmenden Polyurethan-Schaumstoff, für langlebige und komfortable Möbel.",
  ];

  return (
    <section className="py-20 border-b border-black pb-5 mb-5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="shadow-xl rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/L-K7dmM3_SA"
              title="Rossin Image Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 inline-block">Warum Rossin wählen?</h2>
            <p className=" mb-8">
              Rossin steht für Wohlfühloasen, die Funktion und Stil in Einklang bringen. Unsere Polstermöbel schaffen Komfort und Eleganz in jedem Raum, sei es im Hotel, Restaurant, Büro oder Zuhause.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 ">
                  <span dangerouslySetInnerHTML={{ __html: benefit }}></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
