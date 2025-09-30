export const CompanyIntro = () => {
  return (
    <section className="py-20 bg-white border-b border-black pb-5 mb-5" id="ueber-rossin">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/images/rossin.png" 
            alt="Rossin Logo" 
            className="h-11 w-auto"
          />
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg leading-relaxed mb-6">
            Seit 60 Jahren steht rossin für das Streben nach gutem Design im Objekt- und Privatbereich. Gutes Design bedeutet für uns nicht nur Formschönheit, sondern vor allem Wohlbefinden. Nach diesem Prinzip, gestalten wir Polstermöbel für all jene Menschen, die täglich auf und mit unseren Möbeln leben. Egal ob im Hotel, Restaurant, Flughafen, Konzertsaal, in der Universität, oder Zuhause
          </p>
        </div>

      </div>
    </section>
  );
};
