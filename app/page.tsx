import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <img src="/static/pipe cleaner flowers.jpg"/>
        <h1 className="title">
          Flower-Making Workshop!
        </h1>
      </header>
      <hr/>
      <main>
        <h2>Deets</h2>
        <ul>
          <li>
            🗓️ 12 Nov (this Thursday)
          </li>
          <li>
            🕖 7:00pm to 9:00pm
          </li>
          <li>
            📍 Campus Centre (Building 2)
          </li>
          <li>
            🧃 Snacks Provided!
          </li>
          <li>
            ❓ <Link href="/tutorial">Tutorial</Link>
          </li>
        </ul>
      </main>
      <footer>
        made by EnROOT Group 9 &lt;3
      </footer>
    </>
  );
}
