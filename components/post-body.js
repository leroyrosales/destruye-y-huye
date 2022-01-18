import markdownStyles from "./markdown-styles.module.css";
import MapBox from "./MapBox.component";

export default function PostBody({ coords, content }) {
  const [lat, lng] = coords.split(",");

  const location = { lng, lat };

  return (
    <>
      <section className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
        <div>
           <MapBox coordinates={location} />
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>
    </>
  );
}
