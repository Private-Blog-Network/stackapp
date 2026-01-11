import Script from "next/script"
import Link from "next/link"
import Nav from "./nav"
import Footer from "./footer"
import Load from "./loader"
import Highlight from "./hjs"
import Ad1 from "./ad1"
import Ad2 from "./ad2"
import Ad3 from "./ad3"
import Ad4 from "./ad4"

export const revalidate = 31536000; // 1 year ISR (StackOverflow content is static)

export default async function Ans({ id, ms }) {
  const dt = ms;

  const related = await getRelated(dt?.qtags?.[0]);

  return (
    <>
      <Nav page="page" />
      <Load />

      <div className="container shadow-4 rounded mt-3 mb-3 p-3 border border-primary">

        {/* TAGS */}
        <div className="mb-2">
          {dt?.qtags?.map((tag, i) => (
            <Link
              key={i}
              href={`../${tag}`}
              className="badge badge-primary m-1"
              prefetch={false}
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* TITLE */}
        <h1
          className="h1"
          dangerouslySetInnerHTML={{ __html: dt?.qtitle || "" }}
        />
        <hr />

        <Ad1 />

        {/* QUESTION BODY */}
        <div
          dangerouslySetInnerHTML={{ __html: dt?.qbody || "" }}
        />

        <hr />

        {/* SOLUTION */}
        <h3 className="h3">
          Solution <i className="fa fa-arrow-down" />
        </h3>

        <hr />

        <Ad2 />

        <div
          dangerouslySetInnerHTML={{ __html: dt?.abody || "" }}
        />

        <Ad3 />

        {/* RELATED ANSWERS */}
        {related.length > 0 && (
          <ul className="list-group mt-3">
            {related.map((e) => (
              <li key={e.question_id} className="list-group-item">
                <Link
                  href={`/answer/${e.accepted_answer_id}`}
                  className="text-primary"
                  prefetch={false}
                >
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <Ad4 />
      </div>

      <Footer />

      {/* Scripts */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js"
        strategy="lazyOnload"
      />

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"
        strategy="afterInteractive"
      />

      <Highlight />
    </>
  );
}

/* ----------------------- */
/* API HELPERS             */
/* ----------------------- */

async function getRelated(tag) {
  if (!tag) return [];

  try {
    const res = await fetch(
      `https://api.stackexchange.com/2.3/search/advanced?tagged=${tag}&accepted=True&site=stackoverflow&key=${process.env.KEY}`,
      {
        next: { revalidate: 31536000 }, // cache per tag
      }
    );

    if (!res.ok) return [];

    const data = await res.json();
    return data?.items || [];
  } catch {
    return [];
  }
}
