import { SiteHeader, SiteFooter } from "@/components/site-header";
export const metadata = { title: "About Sarah | Sarah’s adventures" };
export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#about">Skip to content</a>
      <SiteHeader active="about" />
      <main id="about" className="about-layout">
        <aside className="margin-note"><span className="eyebrow">A little introduction</span><p>Seattle, Washington</p><div className="location-rule" /><p className="interests">On foot.<br />On two wheels.<br />In the water.</p></aside>
        <article className="story">
          <h1>Hi, I’m Sarah<span>.</span></h1>
          <p className="lead">I’m based in Seattle, Washington where I’m lucky to have mountains, water, and plenty of quiet roads and trails close to home. I’ve always been happiest outside and on the move—hiking somewhere new, spending a long day on my bike, swimming in a lake or the ocean, or heading out on a trip with a trail (or two) planned along the way.</p>
          <p>That’s also how I tend to travel. I’m much more interested in experiencing the space <em>between</em> places than checking destinations off a list. I love trips that give you a reason to slow down and pay attention: walking from one mountain town to the next, cycling between cities, or driving through a new landscape and stopping whenever something looks worth exploring.</p>
          <p>Some of my favorite adventures have taken me hiking through the Swiss Alps, cycling across the Japanese Alps from Tokyo to Kyoto, and road-tripping around Iceland. What I remember most from those trips isn’t necessarily the big landmarks, though. It’s usually the smaller things—the tiny café you stumble into after a long day, a surprisingly beautiful stretch of road, jumping into cold water, getting caught in bad weather (always memorable), or sitting somewhere at the end of the day wondering how your legs are going to do it all again tomorrow.</p>
          <p>I grew up as a competitive swimmer, which probably explains at least some of my enthusiasm for long days and endurance-based adventures. There’s something I love about settling into a rhythm and slowly making your way somewhere under your own power. These days, swimming has been joined by hiking and cycling, but I still love being in the water whenever I get the chance.</p>
          <p>The natural world has also shaped a lot of my life beyond travel. I studied biology, environmental studies, and marine affairs, and that background has made me endlessly curious about the landscapes and ecosystems I move through. I love learning about what makes a place unique—its wildlife, geography, communities, and environmental history—and I try to travel in a way that feels thoughtful and respectful of the places I’m lucky enough to visit.</p>
          <p>When I’m home in Seattle, life is usually a mix of reading, riding my bike, hiking, hanging out with my pup Ruby, swimming, spending time with friends and family, and inevitably thinking about where I might go next.</p>
          <p>This site is a place for me to keep track of it all: the trips I’ve taken, the routes I’ve loved, the photographs I keep coming back to, and the things I learned along the way. You’ll find stories and practical details here, but also the little observations and moments that made each adventure feel like its own.</p>
          <p>And if something here makes you want to lace up your hiking shoes, get on your bike, jump in the water, or finally start planning that trip you’ve had in the back of your mind, even better.</p>
          <p className="closing">Thanks for being here—and for following along.</p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
