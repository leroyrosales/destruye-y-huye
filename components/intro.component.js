import { CMS_NAME } from "../lib/constants";

export default function Intro() {
  return (
    <section id="content" className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
      <p className="text-gray-700 text-4xl md:leading-relaxed">
        <strong>East: Sun - Rise AR Intervention</strong> is an augmented reality experience/project that uses archival photographic material and a web-based application to plot markers in the neighborhoods of East Austin.
      </p>
      </div>
      <div>
      <p>
      <strong>East: Sun - Rise AR Intervention</strong> blurs notions of art in public places by virtually layering archival photographic material over public places in East Austin using Augmented Reality (AR) technology. The images' main protagonists, BIPOC (Black, Indigenous, and People of Color), are documented celebrating everyday life–playing sports, having a parade, demonstrating, standing outside of a school or just having a walk in the neighborhood. The physical markers–a street corner, a public swimming pool, a baseball field, or an iconic moon tower light, while trace in a virtual and a physical tour-like experiences that relate to history, origin, and labor.
      </p>
      </div>
    </section>
  );
}
