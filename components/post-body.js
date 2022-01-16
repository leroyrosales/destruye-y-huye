import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }) {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div></div>
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
