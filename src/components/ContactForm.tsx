/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const ContactForm = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" }); // Namespace auf 30min ändern
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#1E1E1E" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="py-20 bg-white border-b border-black pb-5 mb-5" id="beratung">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-center mb-4 text-3xl font-bold">Buchen Sie jetzt Ihren Termin!</h2>
          <p className="text-gray-600 mb-7">
            Lassen Sie uns Ihre Traumküche planen! Füllen Sie das Formular aus und buchen Sie einen Termin, der Ihnen passt.
          </p>
          <Cal
            namespace="30min" // Namespace hier ebenfalls auf 30min setzen
            calLink="kuechenstudiobergheim/30min" // Link entsprechend anpassen
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          ></Cal>
        </div>
      </div>
    </section>
  );
};
