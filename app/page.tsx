import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="title">
          Flowers Blooms in Your Heart!
        </h1>
        <ul>
          <li>
            Date: 12 Nov
          </li>
          <li>
            Time: 7:00pm to 9:00pm
          </li>
          <li>
            Venue: Campus Centre (Building 2)
          </li>
          <li>
            Snacks: Provided!
          </li>
          <li>
            <Link href="/tutorial">Tutorial</Link>
          </li>
        </ul>
      </header>
      <main>
      </main>
    </>
  );
}
