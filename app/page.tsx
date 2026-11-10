export default function Home() {
  return (
    <>
      <header>
        <div className="banner">
          <h2 className="lemon">Want to make this??</h2>
          <img src="/static/pipe cleaner flowers.jpg"/>
          <h1 className="title">
            Bend! Twist! <span>BLOOM!</span>
          </h1>
        </div>
        <div className="subtitle">
          Feel your dorm could use a bit of a makeover?<br/>
          Why not make a bouquet that never wilts!
        </div>
      </header>
      <hr/>
      <main>
        <section>
          <span className="accent">
            <div className="left">°❀⋆. ᭄᭡ ͏ ͏ ͏</div>
            <div className="right">°❀⋆. ꫂ ၴႅ༘</div>
          </span>
          <h2>Deets</h2>
          <ul>
            <li>
              🗓️ 12 Nov (this Thursday)
            </li>
            <li>
              🕖 7pm to 8:30pm
            </li>
            <li>
              📍 Campus Centre (Building 2)
            </li>
            <li>
              🧃 Free Snacks!
            </li>
          </ul>
        </section>
        <hr/>
        <section>
          <span className="accent">
            <div className="left">𑁍ࠬܓ °❀.ೃ࿔*</div>
            <div className="right">ꫂ❁ °❀.ೃ࿔*</div>
          </span>
          <h2>Booths</h2>
          <p>
            All materials provided...
            but you gotta earn it!
          </p>
          <div className="carousel">
            <div>
              <h3>Trivia Wheel</h3>
              Transform your knowledge into craft materials with this revolutionary booth!
            </div>
            <div>
              <h3>Knock Down</h3>
              Like a door hanger design? Throw for it! But aim with care, or you'll get a surprise...
            </div>
            <div>
              <h3>Free Snacks!</h3>
              Wang Wang Biscuits + Packet Drinks for everyone :)
            </div>
          </div>
        </section>
        <hr/>
        <section>
          <span className="accent">
            <div className="left">⚘.⋆˚࿔ 𓂃✿˖</div>
            <div className="right">⚘.⋆˚࿔ 𓂃✿˖</div>
          </span>
          <h2>Tutorial</h2>
          <p>
            Not sure how to begin? Ask our friendly maker guides!
          </p>
          <br/>
          <p>
            Or if you wanna learn at your own pace...
          </p>
          <div className="video-container">
              <iframe
                  src="https://www.youtube-nocookie.com/embed/luUFN4FQfcU"
                  title="Pipe Cleaner Flower Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  >
              </iframe>
          </div>
          <p>
            If the video doesn't load, <a href="https://www.youtube.com/watch?v=luUFN4FQfcU" target="_blank">
                watch it on YouTube here!
            </a>
          </p>
        </section>
      </main>
      <hr/>
      <footer>
        made by EnROOT Group 9 💖
      </footer>
      <br/>
    </>
  );
}
