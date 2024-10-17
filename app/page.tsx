import Image from 'next/image';
import { socialLinks } from './config';

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Welcome to my portfolio!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I&apos;m a data scientist with a passion for solving complex problems
          and transforming data into actionable insights. With experience
          spanning both startups and consulting, I specialize in applying data
          modeling, machine learning, and distributed computing to drive
          performance, strategy, and predictions. My professional journey began
          at PricewaterhouseCoopers (PwC) and led me to my current role at Swish
          Analytics, where I&apos;ve been able to blend my love for sports with
          cutting-edge data-driven solutions.
        </p>
        <p>
          I grew up with a love for sports, and that passion evolved into a
          career when I realized the power of data to explain, predict, and
          improve what happens on the field. I hold expertise in distributed
          computing, parallel processing, and advanced modeling techniques, with
          a focus on sports analytics. Whether it&apos;s predicting the next big
          play in college football or improving simulations for better in-game
          decision-making, I&apos;ve always been drawn to the intersection of
          technology and athletics.
        </p>
        <p>
          Outside of work, you&apos;ll often find me out and about in Venice,
          California, enjoying the coastal lifestyle with my energetic German
          Shorthaired Pointer, Winston. I&apos;m a marathon runner and a huge
          fan of experimenting in the kitchen (ask me about my bolognese
          recipe). I&apos;m also deeply committed to fitness and a healthy
          lifestyle, always striving to stay active and maintain balance,
          whether it&apos;s through running, hiking, or refining my nutrition.
          These pursuits not only keep me energized but also provide fresh
          perspectives that fuel my creativity and focus in professional
          challenges.
        </p>
        <p>
          At the core of everything I do is a passion for solving complex
          problems, driving innovation, and continuously learning and adapting
          in a rapidly evolving industry. Whether it&apos;s developing
          cutting-edge models or finding creative solutions to business
          challenges, I thrive on the process of turning data into actionable
          insights that make a meaningful impact. I&apos;m motivated by the
          opportunity to push boundaries, challenge the status quo, and stay
          ahead of the curve in the tech world. My goal is to bring the same
          dedication and curiosity to every project, always seeking ways to
          improve and deliver value in a fast-paced, ever-changing environment.
        </p>
      </div>
    </section>
  );
}
