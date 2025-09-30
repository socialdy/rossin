import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 7,
      name: "Sophie L.",
      role: "Studentin",
      quote: "Mein Luc Soft Stuhl ist super praktisch. Ich kann ihn leicht verschieben, und er ist viel bequemer, als er aussieht! Perfekt für lange Lernsessions oder wenn Freunde zu Besuch kommen.",
      product: "luc soft Stuhl",
      image: "/images/csm_luc_soft.png",
    },
    {
      id: 8,
      name: "Michael B.",
      role: "Gastwirt",
      quote: "Die Luc Stühle in unserem Café sind einfach unschlagbar. Robust, stylisch und meine Gäste lieben sie. Sie haben schon so viel mitgemacht und sehen immer noch top aus!",
      product: "luc Stuhl",
      image: "/images/csm_rossin_luc.png",
    },
    {
      id: 9,
      name: "Julia K.",
      role: "Privatkundin",
      quote: "Unser Preziosa Sofa ist der absolute Mittelpunkt unseres Wohnzimmers. So bequem, dass man am liebsten gar nicht mehr aufstehen möchte. Die Qualität ist jeden Cent wert!",
      product: "preziosa Sofa",
      image: "/images/csm_rossin_living.png",
    },
    {
      id: 10,
      name: "Herr Schmidt",
      role: "Hotelier",
      quote: "Wir haben die Alexa Sofas für unsere Suiten gewählt, und die Resonanz ist fantastisch. Die Eleganz und der Komfort sind genau das, was unsere anspruchsvollen Gäste erwarten. Ein echtes Qualitätsmöbel.",
      product: "alexa Sofa",
      image: "/images/csm_rossin_living_sofa.png",
    },
    {
      id: 11,
      name: "Familie Meier",
      role: "Familienhaushalt",
      quote: "Das Nido Sofa ist super für unsere Familie. Genug Platz für alle, und die Kissen sind so gemütlich. Endlich ein Sofa, auf dem man wirklich entspannen kann.",
      product: "nido sofa nieder",
      image: "/images/csm_rossin_nido_Sofa.png",
    },
    {
      id: 12,
      name: "Carina W.",
      role: "Interior Designerin",
      quote: "Der Picco Hocker ist ein echtes Multitalent. Ich setze ihn gerne in meinen Projekten ein, weil er so vielseitig ist und jedem Raum einen modernen Akzent verleiht. Und er ist erstaunlich stabil!",
      product: "picco hocker",
      image: "/images/csm_rossin_picco_hocker.png",
    },
    {
      id: 13,
      name: "Dirk E.",
      role: "Architekt",
      quote: "Die Diana Hocker haben unser kleines Foyer perfekt ergänzt. Sie sind nicht aufdringlich, aber bieten bei Bedarf bequeme Sitzgelegenheiten. Schlicht, aber sehr wirkungsvoll.",
      product: "diana hocker",
      image: "/images/csm_rossin_diana_hocker.png",
    },
    {
      id: 14,
      name: "Lisa V.",
      role: "Büroangestellte",
      quote: "Die Cleo Hocker in unserer Kreativzone sind toll. Man kann sie leicht hin- und herschieben und sie sind echt bequem für kurze Brainstorming-Sessions. Modern und funktional.",
      product: "cleo hocker",
      image: "/images/csm_rossin_cleo_wood_hocker.png",
    },
    {
      id: 15,
      name: "Roberto G.",
      role: "Barbesitzer",
      quote: "Unsere Samurai Barhocker sind der Renner! Sie sehen super stylish aus und bieten den Gästen tollen Halt. Die Gäste fühlen sich wohl und der Look passt perfekt zu unserer Bar.",
      product: "samurai barhocker",
      image: "/images/csm_rossin_samurai.png",
    },
    {
      id: 16,
      name: "Sabine H.",
      role: "Veranstalterin",
      quote: "Für unsere Event-Lounge ist die Rail Bank mit niederem Rücken ideal. Sie ist super komfortabel, wenn man mal kurz entspannen möchte, und das Design ist modern und unaufdringlich.",
      product: "rail bank niederer rücken",
      image: "/images/csm_rossin_rail.png",
    },
    {
      id: 17,
      name: "Markus Z.",
      role: "Unternehmer",
      quote: "Das Aris Wall Sofa ist genial für unser Großraumbüro. Es schafft gemütliche Ecken für kurze Besprechungen oder einfach zum Durchatmen. Die Anpassung an unsere Wand war perfekt.",
      product: "aris wall auf Maß",
      image: "/images/csm_rossin_aris_wall_sofa.png",
    },
    {
      id: 18,
      name: "Evelyn G.",
      role: "Catering-Service",
      quote: "Die Aris Tische mit zwei Säulen sind so praktisch für unsere Veranstaltungen. Stabil, elegant und lassen sich super kombinieren. Die unterschiedlichen Größen sind auch sehr hilfreich.",
      product: "aris tisch, 2 säulen",
      image: "/images/csm_rossin_aris_dining_tisch.png",
    },
    {
      id: 19,
      name: "Thomas K.",
      role: "Café-Besitzer",
      quote: "Unsere Tonic Metal Tische sind seit Jahren im Einsatz und sehen immer noch aus wie neu. Sie sind absolut unempfindlich und passen perfekt zum modernen Industriestil unseres Cafés.",
      product: "tonic metal tisch",
      image: "/images/csm_rossin_tonic_metal_tisch.png",
    },
    {
      id: 20,
      name: "Nadine R.",
      role: "Privatkundin",
      quote: "Der Mayu Couchtisch ist ein echter Hingucker! Er ist so schlicht und elegant, aber gleichzeitig super praktisch. Er macht unser Wohnzimmer viel moderner.",
      product: "mayu Couchtisch",
      image: "/images/csm_rossin_living__mayu.png",
    },
    {
      id: 21,
      name: "Herr und Frau Huber",
      role: "Gästehausbesitzer",
      quote: "Das Crown Schlafsofa ist eine Sensation in unseren Gästezimmern. Tagsüber ein schönes Sofa, nachts ein bequemes Bett. Unsere Gäste sind begeistert, wie gut sie darauf schlafen.",
      product: "crown Schlafsofa",
      image: "/images/csm_rossin_living_97_crown_sofa_bed.png",
    },
    {
      id: 22,
      name: "Lena B.",
      role: "Hotelmanagerin",
      quote: "Die Venezia Betten in unseren Deluxe-Zimmern sind einfach traumhaft. Der Komfort ist exzellent und das Design sehr ansprechend. Ein echtes Plus für unser Hotel.",
      product: "venezia Bett",
      image: "/images/csm_rossin_living_89_venezia_bed.png",
    },
    {
      id: 23,
      name: "Klaus M.",
      role: "Pensionär",
      quote: "Unser Provence Bett ist super bequem und sieht toll aus. Die bodenlange Husse gibt ihm eine elegante Optik und der Federkern ist genau richtig für uns. Absolut zufrieden damit.",
      product: "provence Bett",
      image: "/images/csm_rossin_living_87_provence_bed.png",
    },
    {
      id: 24,
      name: "Lea S.",
      role: "Privatkundin",
      quote: "Der Ella Sessel ist mein neuer Lieblingsplatz. Ich kann stundenlang darin lesen oder einfach entspannen. Der Stoff ist so angenehm und das Design ist zeitlos schön.",
      product: "ella Sessel",
      image: "/images/csm_rossin_living_28_ella_armchair.png",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-black pb-5 mb-5" id="referenzen">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-center mb-16 text-3xl font-bold">Referenzen</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4 bg-white">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-white p-8 h-full animate-fade-in shadow-lg rounded-lg overflow-hidden">
                  <div className="flex flex-col h-full justify-between">
                    <p className="text-lg mb-8 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-black">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -left-12 z-10 hover:bg-white/20 text-black" />
          <CarouselNext className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 -right-12 z-10 hover:bg-white/20 text-black" />
        </Carousel>
      </div>
    </section>
  );
};
