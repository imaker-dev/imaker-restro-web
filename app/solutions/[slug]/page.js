import { notFound } from "next/navigation";
import { getSolutionById } from "../../data/solutions";
import SolutionDetailsPage from "../../views/solution-details/solution-details-page";

export default async function Page({ params }) {
  const { slug } = await params;

  const solution = await getSolutionById(slug);

  if (!solution) notFound();

  console.log(solution);
  return <SolutionDetailsPage solution={solution} />;
}
