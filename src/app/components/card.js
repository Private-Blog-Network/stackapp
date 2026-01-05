import Link from "next/link";
import Ad1 from "./ad1";
import Ad2 from "./ad2";
import Ad3 from "./ad3";
import Ad4 from "./ad4";

export const runtime = "edge";

/* -------------------- CONSTANTS -------------------- */
const ONE_YEAR = 60 * 60 * 24 * 365;

/* -------------------- PAGE -------------------- */
export default async function Card(props) {
  const tag = props.tag?.params?.tag;
  const data = await fetchQuestions(props.name, tag);

  return (
    <>
      <div className="d-flex justify-content-evenly flex-wrap">
        {/* Ads */}
        <div className="shadow-6 border border-primary rounded m-2 p-2 w-45 sm:w-100">
          <Ad1 />
        </div>

        <div className="shadow-6 border border-primary rounded m-2 p-2 w-45 sm:w-100">
          <Ad3 />
        </div>

        {/* Cards */}
        {data.map((e, i) => (
          <div
            className="shadow-6 border border-primary rounded m-2 p-2 w-45 sm:w-100"
            key={e.question_id ?? i}
          >
            <div className="h4">
              {e.title?.length > 30 ? e.title.slice(0, 30) + "…" : e.title}
            </div>

            <hr />

            <div>
              {i === 5 && <Ad4 />}

              <br />

              {Array.isArray(e.tags) &&
                e.tags.map((tag, idx) => (
                  <Link
                    key={idx}
                    href={`/${tag}`}
                    className="badge badge-primary m-1"
                  >
                    {tag}
                  </Link>
                ))}
            </div>

            <hr />

            {e.accepted_answer_id && (
              <Link
                href={`/answer/${e.accepted_answer_id}`}
                className="btn btn-primary rounded-pill mt-2 mb-2"
              >
                Read More
              </Link>
            )}
          </div>
        ))}
      </div>

      <Ad2 />
    </>
  );
}

/* -------------------- DATA FETCH -------------------- */
async function fetchQuestions(type, tag) {
  try {
    const key = process.env.KEY;

    const url =
      type === "tag" && tag
        ? `https://api.stackexchange.com/2.3/search/advanced?tagged=${tag}&accepted=True&site=stackoverflow&filter=withbody&key=${key}`
        : `https://api.stackexchange.com/2.3/search/advanced?tagged=html;css;javascript&accepted=True&site=stackoverflow&filter=withbody&key=${key}`;

    const res = await fetch(url, {
      next: {
        revalidate: ONE_YEAR,
        tags: ["questions-list"]
      }
    });

    const json = await res.json();
    return json?.items ?? [];
  } catch {
    return [
      {
        question_id: "error",
        title: "Error loading questions",
        tags: ["error"]
      }
    ];
  }
}
