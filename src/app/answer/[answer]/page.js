import Ans from "../../components/ans";
import Script from "next/script";

export const runtime = "edge";

/* -------------------- CONSTANTS -------------------- */
const ONE_YEAR = 60 * 60 * 24 * 365;
export const revalidate = ONE_YEAR;
/* -------------------- EDGE SAFE HTML STRIP -------------------- */
function cleanText(html = "") {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .slice(0, 700)
    .trim();
}

/* -------------------- DATA FETCH -------------------- */
async function fetchAnswerWithQuestion(answerId) {
  try {
    const key = process.env.KEY;

    const ansRes = await fetch(
      `https://api.stackexchange.com/2.3/answers/${answerId}?site=stackoverflow&filter=withbody&key=${key}`,
      {
        next: {
          revalidate: ONE_YEAR,
          tags: [`answer-${answerId}`]
        }
      }
    );

    const ansJson = await ansRes.json();
    const answer = ansJson?.items?.[0];
    if (!answer) return null;

    const qRes = await fetch(
      `https://api.stackexchange.com/2.3/questions/${answer.question_id}?site=stackoverflow&filter=withbody&key=${key}`,
      {
        next: {
          revalidate: ONE_YEAR,
          tags: [`question-${answer.question_id}`]
        }
      }
    );

    const qJson = await qRes.json();
    const question = qJson?.items?.[0];
    if (!question) return null;

    return {
      aid: answer.answer_id,
      created: answer.creation_date,
      modified: answer.last_edit_date ?? answer.creation_date,
      qtitle: question.title,
      qbody: question.body,
      qtags: question.tags,
      abody: answer.body
    };
  } catch {
    return null;
  }
}

/* -------------------- METADATA -------------------- */
export async function generateMetadata({ params }) {
  const data = await fetchAnswerWithQuestion(params.answer);
  if (!data) return {};

  return {
    title: `[SOLVED] ${data.qtitle}`,
    description: `${data.qtitle} ${cleanText(data.qbody)}`,
    keywords: data.qtags.join(", ")
  };
}

/* -------------------- PAGE -------------------- */
export default async function AnswerPage({ params }) {
  const data = await fetchAnswerWithQuestion(params.answer);
  if (!data) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `[SOLVED] ${data.qtitle}`,
    datePublished: new Date(data.created * 1000).toISOString(),
    dateModified: new Date(data.modified * 1000).toISOString(),
    publisher: {
      "@type": "Organization",
      name: "CoderApp",
      logo: {
        "@type": "ImageObject",
        url: "/code.jpg",
        width: 600,
        height: 60
      }
    },
    image: {
      "@type": "ImageObject",
      url: "/code.jpg",
      width: 1200,
      height: 800
    },
    description: `${data.qtitle} ${cleanText(data.qbody)}`,
    url: `/answer/${data.aid}`,
    mainEntityOfPage: `/answer/${data.aid}`
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Ans id={params.answer} ms={data} />
    </>
  );
}
