import "tailwindcss/tailwind.css";
import Link from "next/link";

function Container({ children }) {
  return <div className="px-8 py-4 max-w-1400px mx-auto">{children}</div>;
}

export default function Home() {
  // container

  return (
    <>
      <section>
        <Container>
          <div
            className={`flex flex-col lg:flex-row justify-between items-center`}
          >
            <div className="lg:w-1/2">
              <h1 className="mb-8 text-5xl md:text-8xl">
                Catalyzing Innovation for People With Autism
              </h1>
              <p className="mb-8 text-2xl">
                Our intention is to impact the lives of people with autism by
                supporting innovative technologies and surfacing the unmet needs
                of the community.
              </p>
              <p className="mb-8 text-2xl">
                We are an engine for innovation—a global community of dedicated
                families, entrepreneurs, funders, and experts collaborating to
                solve the greatest challenges for people with autism.
              </p>
              <p className=" text-2xl">
                Multiple is a non-profit innovation platform (501c3) for the
                autism community. Our mission is to transform the lives of
                people with autism at scale.
              </p>
              <Link href="">
                <a className="button-primary mt-8 inline-block">
                  Learn About Our Impact
                </a>
              </Link>
            </div>
            <img
              src="/images/home-hero.png"
              alt="swing set"
              className="hidden lg:inline-block w-1/3 max-w-lg"
              // className="hidden lg:inline-block max-w-xl"
            />
          </div>
        </Container>
      </section>
      <section className="bg-[#c4d462]">
        <Container>
          <div className="max-w-1400px mx-auto">
            <div className="lg:w-2/5 pb-16">
              <h2 className="text-xl pb-8">
                Tackling Autism’s Greatest Challenges Together
              </h2>
              <p className="pb-8">
                Transformative technologies can help people with autism live
                great lives, but many innovators are still searching for the
                resources they need to scale their solutions from idea to
                impact.
              </p>
              <p>
                Our strategic initiatives are designed to support autism
                innovation by connecting the community to tackle autism’s
                greatest challenges together.
              </p>
            </div>
            <div className="pb-16 lg:w-1/2 lg:inline-block">
              <h3 className="font-bold pb-8">
                Innovation Hub for the Autism Community
              </h3>
              <p className="pb-8">
                With the world’s most comprehensive database of autism experts,
                funders, and community members, we connect innovators with the
                resources, funding, and contacts that they need to turn their
                ideas into successful ventures that target the needs of people
                with autism.
              </p>
              <Link href="#">
                <a className="button-primary">Learn More</a>
              </Link>
            </div>
            <div className="lg:w-1/2 lg:inline-block">
              <h3 className="font-bold pb-8">Catalyst Programs for Founders</h3>
              <p className="pb-8">
                We’re building a wide range of high-quality innovation programs
                in partnership with leading private and non-profit organizations
                that are working to support people with autism.
              </p>
              <Link href="#">
                <a className="button-primary inline-block">Learn More</a>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <img src="images/home-divider.png" className="pb-16" alt="divider" />
          <div className="lg:flex lg:justify-between lg:items-center">
            <div className="lg:w-1/3">
              <h2 className="pb-8 text-3xl">Who We Serve</h2>
              <p>
                We convene and connect entrepreneurs, investors, and community
                members across the globe in pursuit of the most promising
                innovation for autism.
              </p>
              <div className="border-b border-black my-8"></div>
              <h3 className="font-bold mb-4">Community</h3>
              <p className="mb-8">
                Our organization is shaped and supported by a community of
                people with autism, parents, siblings, philanthropists,
                educators, care providers, and policymakers focused on changing
                the trajectory of autism.
              </p>
              <h3 className="font-bold mb-4">Autism Tech Innovators</h3>
              <p className="mb-8">
                From emerging ventures to established enterprises, we work with
                a variety of brilliant teams who are using cutting-edge
                technology to create new possibilities for people with autism.
              </p>
              <h3 className="font-bold mb-4">Funders</h3>
              <p className="mb-8">
                We share our comprehensive collection of resources with a
                fast-growing suite of impact funds, venture firms, foundations,
                and family offices who are investing in the autism community.
              </p>
            </div>
            <img
              src="images/who-we-serve-section-diagram.jpg"
              alt="diagram of community, innovators, and funders"
              className="lg:w-1/2"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
