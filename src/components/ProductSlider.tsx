import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "cleo metal soft Lounge Sessel niederer Rücken",
    image: "/images/csm_cleo_metal_soft.jpg", // Placeholder image
    description: "Gestell in POLIMEX® – patentiertes Polymermaterial, umweltfreundlich, ultraleicht, flammhemmend. Kufengestell oder Kreuzfuß fix schwarz lackiert; fixer Bezug; Sitz abziehbar.",
    details: "Maße: B104 x T90 x H88 x SH43 cm",
    collection: "cleo metal soft",
  },
  {
    id: 2,
    name: "coco sessel lounge",
    image: "/images/coco sessel lounge.png", // Placeholder image, replace with actual image later
    description: "Schale mit fixem Bezug; Kissen in feuerhemmenden Polyurethan-Schaumstoff überzogen mit Wattevlies und fixem Bezug. Metalluntergestell Hochglanz verchromt oder schwarz lackiert",
    details: "Maße: B80 x H74 x T74 x SH43 cm",
    collection: "coco",
  },
  {
    id: 3,
    name: "tonic wood lounge sessel",
    image: "/images/csm_rossin_tonic_wood.png", // Actual image for tonic wood lounge sessel
    description: "Gestell in Schichtholz überzogen mit feuerhemmendem Polyurethanschaum und Wattevlies; fixer Bezug, nur Sitzkissen abziehbar. Untergestell: Buche massiv natur lackiert oder gebeizt",
    details: "Maße: B75 x H77 x T75 x SH43",
    collection: "tonic wood",
  },
  {
    id: 4,
    name: "kamal wood ohrensessel",
    image: "/images/csm_kamal_wood_Sessel.jpg", 
    description: "Gestell aus Massiv- und Schichtholz; flammhemmender Polyurethan-Schaumstoff überzogen mit Wattevlies; fixer Bezug, Nierenkissen abziehbar; Füße in Eiche natur oder gebeizt.", 
    details: "Maße: B83 x T95 x H109 x SH46 cm", 
    collection: "kamal wood", 
  },
  {
    id: 5,
    name: "cleo chaiselongue",
    image: "/images/csm_rossin_cleo_wood_chaiselongue.png",
    description: "Metallrahmen mit Gurtenbespannung und feuerhemmende Kaltschaumformteile; fixer Bezug, Sitzkissen abziehbar; gestepptes Rückenkissen mit Innenleben in Wattevlies; Untergestell: Esche massiv natur lackiert oder gebeizt",
    details: "Maße: B97 x T160 x H80 x SH40 cm",
    collection: "cleo wood",
  },
  {
    id: 6,
    name: "elba chaiselongue",
    image: "/images/csm_rossin_elba_chaiselongue.png",
    description: "Chaiselongue, Metallgestell Bronze matt lackiert; fix gepolstert mit Stoff, Leder oder Kunstleder",
    details: "Maße: B150 x T77 x H80 x SH42 cm",
    collection: "elba",
  },
  {
    id: 7,
    name: "luc soft Stuhl",
    image: "/images/csm_luc_soft.png", // Placeholder for luc soft Stuhl
    description: "Stuhl mit Schale in BAYDUR 110, gepolstert mit flammhemmendem Schaumstoff und fix Bezug gesteppt; 4 Fußvarianten: 4 Holzfüße mit Metallverstrebung - 4 elliptische Metallfüße - Kufengestell - drehbares Säulengestell.",
    details: "Maße: B52 x H86 x T56 x SH45 cm",
    collection: "luc",
  },
  {
    id: 8,
    name: "luc Stuhl",
    image: "/images/csm_rossin_luc.png",
    description: "Stuhl mit Schale in BAYDUR 110 lackiert oder gepolstert mit flammhemmendem Schaumstoff und fix gezogen; 4 Fußvarianten: 4 Holzfüße mit Metallverstrebung - 4 elliptische Metallfüße - Kufengestell - drehbares Säulengestell; Stuhlkissen mit Wattefüllung und Wattefüllung und abziehbarem Bezug.",
    details: "Maße: B52 x H86 x T56 x SH45 cm",
    collection: "luc",
  },
  {
    id: 9,
    name: "preziosa Sofa",
    image: "/images/csm_rossin_living.png",
    description: "Bezug: mit Stoff gepolstert komplett abziehbar; mit Leder gepolstert nicht abziehbar; Struktur/Federung: Holzgestell, Unterfederung mit elastischen überlappenden Gurten; Polsterung: Sitz aus Polyurethan-Schaumstoff mit unterschiedlicher Dichte; Rücken mit Daunenfüllung;",
    details: "Maße: Elemente in verschiedenen Maßen erhältlich",
    collection: "preziosa",
  },
  {
    id: 10,
    name: "alexa Sofa",
    image: "/images/csm_rossin_living_sofa.png",
    description: "Bezug: Stoff komplett abziehbar gepolstert; Leder Struktur nicht abziehbar; Struktur/Federung: Holzgestell, Unterfederung mit elastischen überlappenden Gurten; Polsterung: Sitz Füllung aus Daunen und unverformbarem Polyurethan-Schaumstoff; Rückenkissen Mischung aus Daunen und Polyesterfaser",
    details: "Maße: Elemente in verschiedenen Maßen erhältlich",
    collection: "alexa",
  },
  {
    id: 11,
    name: "nido sofa nieder",
    image: "/images/csm_rossin_nido_Sofa.png",
    description: "Gestell aus Massiv- und Schichtholz; feuerhemmender Polyurethan-Schaumstoff überzogen mit Wattevlies; Gestell mit fixem Bezug; Sitz und Rücken mit fixem Bezug; 7 lose Rückenkissen (3 x 60 x 45 cm, 2 x 50 x 38 cm, 2 x 40 x 30 cm);",
    details: "Maße: B162 x T98 x H98 x SH39 cm",
    collection: "nido",
  },
  {
    id: 12,
    name: "picco hocker",
    image: "/images/csm_rossin_picco_hocker.png",
    description: "Gestell aus Massiv- und Schichtholz; flammhemmender Polyurethan-Schaumstoff überzogen mit Wattevlies; fixer Bezug; Füße in Metall lackiert schwarz.",
    details: "Maße: B85 x T78 x SH44 cm",
    collection: "picco",
  },
  {
    id: 13,
    name: "diana hocker",
    image: "/images/csm_rossin_diana_hocker.png",
    description: "Gestell aus Massiv- und Schichtholz; Gurtenbespannung und Polyurethan-Schaumstoff überzogen mit Watteflies, fixer Bezug.",
    details: "Maße: B45 x T45 x SH42 cm",
    collection: "diana",
  },
  {
    id: 14,
    name: "cleo hocker",
    image: "/images/csm_rossin_cleo_wood_hocker.png",
    description: "Feuerhemmende Kaltschaumformteile auf Metallrahmen, fixer Bezug; Untergestell: Esche massiv natur lackiert oder gebeizt",
    details: "Maße: B55 x T55 x H45 cm",
    collection: "cleo wood",
  },
  {
    id: 15,
    name: "samurai barhocker",
    image: "/images/csm_rossin_samurai.png",
    description: "Gestell aus Massiv- und Schichtholz; flammhemmender Polyurethan-Schaumstoff überzogen mit Wattevlies; fixer Bezug; Gestelle in Metall lackiert schwarz;",
    details: "Maße: B52 x T55 x H104 x SH80 cm",
    collection: "samurai",
  },
  {
    id: 16,
    name: "rail bank niederer rücken",
    image: "/images/csm_rossin_rail.png",
    description: "Gestell aus Massiv- und Schichtholz; flammhemmender Polyurethan-Schaumstoff überzogen mit Wattevlies; fixer Bezug; Füße in Kunststoff schwarz",
    details: "Maße: B106 x T66 x H88 x SH46 cm",
    collection: "rail",
  },
  {
    id: 17,
    name: "aris wall auf Maß",
    image: "/images/csm_rossin_aris_wall_sofa.png",
    description: "Gestell aus Schichtholz; Polyurethan-Schaumstoff überzogen mit Watteflies: Füße aus Buche massiv, fixer Bezug",
    details: "Maße:",
    collection: "aris",
  },
  {
    id: 18,
    name: "aris tisch, 2 säulen",
    image: "/images/csm_rossin_aris_dining_tisch.png",
    description: "Bodenplatte und Säule schwarz lackiert; höhenverstellbare Kunststoffgleiter; Tischplatte MDF lackiert, furniert oder laminatbeschichtet, sowie HPL",
    details: "Maße: B120 x H75 x T80 cm",
    collection: "aris",
  },
  {
    id: 19,
    name: "tonic metal tisch",
    image: "/images/csm_rossin_tonic_metal_tisch.png",
    description: "Tische: Platte und Untergestell zerlegt; Tischplatte Schichtholz furniert oder kunststoffbeschichtet; Untergestell schwarz lackiert.",
    details: "Maße: Ø 80 x H75",
    collection: "tonic metal",
  },
  {
    id: 20,
    name: "mayu Couchtisch",
    image: "/images/csm_rossin_living__mayu.png",
    description: "Couchtisch; Tischplatte in Compact HPL.",
    details: "Maße: B88xH36xT81 oder B85xH40xT82 cm",
    collection: "mayu",
  },
  {
    id: 21,
    name: "crown Schlafsofa",
    image: "/images/csm_rossin_living_97_crown_sofa_bed.png",
    description: "Holz- oder Metallfüsse; robuster und wartungsfreier Bettbeschlag; mit hochwertiger Kaltschaummatratze H13 cm; Bezug: Stoff komplett abziehbar, Leder teilweise abziehbar;",
    details: "Maße: B286xH76xT96xSH40 cm",
    collection: "crown",
  },
  {
    id: 22,
    name: "venezia Bett",
    image: "/images/csm_rossin_living_89_venezia_bed.png",
    description: "Bett mit Lattenrost-Unterfederung; inklusive aufgesetztem Kopfteil in U-Formglatt bezogen; Metallfüße; fix gepolstert mit Stoff oder Leder.",
    details: "Maße: Elemente in verschiedenen Maßen erhältlich",
    collection: "venezia",
  },
  {
    id: 23,
    name: "provence Bett",
    image: "/images/csm_rossin_living_87_provence_bed.png",
    description: "Bett mit Lattenrostfederung oder Federkern; bodenlange Husse; inklusive Kopfteil; abnehmbar gepolstert mit Stoff oder Leder.",
    details: "Maße: Elemente in verschiedenen Maßen erhältlich",
    collection: "provence",
  },
  {
    id: 24,
    name: "ella Sessel",
    image: "/images/csm_rossin_living_28_ella_armchair.png",
    description: "Bezug: in Stoff komplett abziehbar gepolstert; in Leder nicht abziehbar gepolstert; Struktur/Federung: Holzgestell, Unterfederung mit elastischen überlappenden Gurten; Polsterung: Sitz Füllung aus Daunen und unverformbarem Polyurethan-Schaumstoff; Rückenkissen: Daunenfüllung;",
    details: "Maße: B87xH90xT106XSH40 cm",
    collection: "ella",
  },
];



export const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const slidesPerView = isMobile ? 1 : 2;

  const next = () => {
    setCurrentIndex((current) => 
      (current + slidesPerView >= products.length ? 0 : current + slidesPerView)
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      (current - slidesPerView < 0 ? Math.max(0, products.length - slidesPerView) : current - slidesPerView)
    );
  };

  return (
    <section className="py-20 bg-white border-b border-black pb-5 mb-5" id="produkte">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center mb-12 text-3xl font-bold">Produkte</h2>
        {/* <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Entdecken Sie unsere vielfältigen Polstermöbel und Tische für höchste Qualität und Ästhetik.
        </p> */}
        <div className="relative">
          <div className="flex gap-4 md:gap-8">
            {products
              .slice(currentIndex, currentIndex + slidesPerView)
              .map((product) => (
                <div key={product.id} className="flex-1 animate-fade-in">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                    <div className="relative overflow-hidden flex justify-center items-center mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-60 object-contain"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-center">{product.name}</h3>
                    <p className="text-gray-700 text-center mt-2">{product.description}</p>
                    {product.details && <p className="text-gray-600 text-sm text-center mt-1">Maße: {product.details}</p>}
                    {product.collection && <p className="text-gray-600 text-sm text-center">Kollektion: {product.collection}</p>}
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};