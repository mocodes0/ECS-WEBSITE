import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Details,
  Footer,
  Header,
  Heading,
  Navbar,
  SubHeading,
} from "../components";

function About() {
  return (
    <div>
      <Header />
      <Navbar />
      <Heading text="About" />
      <Container>
        <Details>
          <div className="my-6">
            <SubHeading text="Who We are" />
            <div className="my-5">
              <h3 className="font-semibold text-xl text-[#FFFFFFb3]">
                ECS is an integrated marketing solutions company that fully
                leverages detailed information about individuals to dramatically
                improve marketing effectiveness through personalized, cost
                effective, and culturally sensitive campaign design, execution &
                optimization.
              </h3>
              <div className="my-4">
                <h4 className="font-medium	text-lg">
                  We identify highly qualified prospects, combining client data
                  with one of the largest network data bases in the US to
                  surface information and insights about customers far beyond
                  traditional profile data.
                </h4>
                <ul className="list-disc my-2	pl-4 text-[#FFFFFFb3] text-base">
                  <li>
                    ECS is a data-driven technology company, applying the most
                    innovative marketing technologies across the entire
                    marketing value chain
                  </li>
                  <li>
                    Our platform enables true 1:1 marketing for acquisition and
                    retention of our client’s “best customers.” This “Clone
                    Modeling” methodology ensures that we are selecting the best
                    segments for an offer
                  </li>
                  <li>
                    Our marketing platform generates unprecedented conversion of
                    high performance customers, while reducing costs, producing
                    improved ROI
                  </li>
                </ul>
                <div>
                  <ul className="list-decimal pl-4 my-4 text-[#FFFFFFb3] text-base">
                    <li>
                      <span className="font-semibold text-white">
                        {" "}
                        Drive UP
                      </span>{" "}
                      new customers and existing customer share of wallet – Mkt.
                      Share
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        {" "}
                        Drive UP
                      </span>{" "}
                      revenue and profits at scale across your marketing
                      programs
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        {" "}
                        Drive UP
                      </span>{" "}
                      personalization and localization – 1:1
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        {" "}
                        Drive DOWN
                      </span>{" "}
                      cost of targeting, creative and distribution
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="my-6">
            <SubHeading text="What We Do and why it works" />
            <div className="my-5">
              <h3 className="font-semibold text-xl text-[#FFFFFFb3]">
                We help our clients to deliver a highly personalized customer
                experience through our integrated marketing platform.
              </h3>
              <div className="my-4">
                <h4 className="font-medium	text-base">
                  What’s behind the solution?
                </h4>
                <ul className="list-disc my-2	pl-4 text-[#FFFFFFb3] text-base">
                  <li>
                    Proven methodology to{" "}
                    <span className="font-semibold text-white">
                      {" "}
                      identify the best prospects and customers{" "}
                    </span>{" "}
                    for target marketing
                  </li>
                  <li>
                    Personalization engine that{" "}
                    <span className="font-semibold text-white">
                      {" "}
                      presents the most compelling, relevant offer, message and
                      creative{" "}
                    </span>{" "}
                    to motivate and activate the target audience
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      {" "}
                      Engagement engine analyzes and recommends{" "}
                    </span>{" "}
                    integrated marketing channels and contact strategy through
                    mobile & digital, print and contact center
                  </li>
                  <li>
                    Ensure the highest level of accuracy and depth in
                    understanding the customer
                  </li>
                  <li>
                    Use the most innovative technologies to reduce cost and
                    cycle time across the value chain from data through to
                    delivery of your communications
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-6">
            <SubHeading text="What We Deliver" />
            <div className="my-5">
              <h3 className="font-semibold text-xl text-[#FFFFFFb3]">
                ECS creates campaigns that target consumers that match a
                company’s best-customers in their likeness, language, interests
                and preference
              </h3>
              <div className="my-4">
                <h4 className="font-medium	text-base">
                  Improve Customer Acquisition and Loyalty
                </h4>
                <p className="mb-2 text-[#FFFFFFb3] text-base">
                  The ECS 1:1 marketing solution delivers conversion rates of
                  50% to 200% better than current programs by, targeting
                  prospects in their likeness, language, interests and
                  preferences.
                </p>
              </div>

              <div className="my-4">
                <h4 className="font-medium	text-base">
                  Generate High Performance Customers
                </h4>
                <p className="mb-2 text-[#FFFFFFb3] text-base">
                  The ECS 1:1 intelligent marketing approach is designed to
                  target prospects that match a company’s best customers who
                  reflect those that spend more and remain the most loyal. Once
                  these new customers are acquired, they will outperform those
                  acquired through traditional marketing programs.
                </p>
              </div>

              <div className="my-4">
                <h4 className="font-medium	text-base">Revenue Enablement</h4>
                <p className="mb-2 text-[#FFFFFFb3] text-base">
                  The ECS 1:1 intelligent marketing approach provides companies
                  with the ability to focus efforts to close and grow business
                  with a selected audience of consumers who have a reason to
                  purchase and achieve a higher life time value.
                </p>
              </div>

              <div className="my-4">
                <h4 className="font-medium	text-base">
                  Reduction in Marketing Costs
                </h4>
                <p className="mb-2 text-[#FFFFFFb3] text-base">
                  ECS leverages a network of printers to deliver print more cost
                  effectively through a supply chain of commercial & digital
                  print technologies that provide the best fit for each job
                  along with the aggregation of print volumes from our pool of
                  customers. Our “Data Optimization for Postage” capability
                  generates postage savings that is transferred directly to our
                  customers.
                </p>
              </div>
            </div>
          </div>

          <div className="my-6">
            <SubHeading text="Minority Business Enterprises" />
            <div className="my-5">
              <h3 className="font-semibold text-xl text-[#FFFFFFb3]">
                ECS is an integrated marketing solutions company that fully
                leverages detailed information about individuals to dramatically
                improve marketing effectiveness through personalized, cost
                effective, and culturally sensitive campaign design, execution &
                optimization.
              </h3>
              <div className="my-4">
                <h4 className="font-medium	text-lg">
                  We identify highly qualified prospects, combining client data
                  with one of the largest network data bases in the US to
                  surface information and insights about customers far beyond
                  traditional profile data.
                </h4>
                <p className=" my-2 text-[#FFFFFFb3] text-base">
                  ECS is a Certified Minority Business. We value our MBE
                  Certification as a valuable asset that helps ECS’s continual
                  growth that builds our resources and our opportunity for new
                  businesses.
                  <br />
                  For more information about our certification, please fill out
                  our{" "}
                  <span className="text-[#6366F1]">
                    <Link to={"/contact"}> contact form </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="my-6">
            <SubHeading text="CEO's Message" />
            <div className="my-5">
              <div className="my-4">
                <p className=" my-5 text-[#FFFFFFb3] text-base">
                  For decades, advertisers and company marketing teams have
                  continually developed and deployed a vast array of marketing
                  tools and technologies to reach prospective customers. This
                  has created a “paradox of choice” that day after day bombards
                  consumers with a mixed bag of “messages” that often leave
                  consumers confused and frustrated. As a result, companies
                  looking to turn prospective new leads into valued customers
                  fail to communicate in a consistent, clear and concise manner
                  and fall short in the eyes of consumers. The key to marketing
                  success in 2020 is the ability to maximize one’s conversion
                  rates; turning leads into loyal customers.
                </p>
                <p className=" my-5 text-[#FFFFFFb3] text-base">
                  In the recent survey “State of Inbound” corporate
                  decision-makers were asked, “What are your company’s top
                  marketing priorities over the next 12 months? A resounding 70%
                  stated “converting leads into customers.” To state this in a
                  different way, “only 22% of businesses are satisfied with
                  their conversion rates.” (Econsultancy, 2016). If your company
                  is interested in increased conversion rates, finding people
                  who look like your “best” customers, clients whom stay and
                  become profitable, Enterprise Content Solutions has the next
                  generation solution.
                </p>
                <p className=" my-5 text-[#FFFFFFb3] text-base">
                  Enterprise Content Solutions end-to-end marketing platform
                  allows companies to identify, communicate with and capture the
                  most desirable customers and prospects in less than 90 days.
                  Our 1:1 Data Driven Platform and clone modeling technology
                  increases a company’s ability to improve its conversion rates
                  by ensuring prospective clients don’t receive unwanted, poorly
                  directed marketing messages that do not meet their needs.
                  We’ve applied next-generation tools and technologies to the
                  traditional “marketing supply chain” and created an efficient
                  platform that reduces costs while increasing conversion rates.
                </p>
                <p className=" my-5 text-[#FFFFFFb3] text-base">
                  Enterprise Content Solution’s innovative technology helps to
                  deliver the promise of engagement with prospective consumers
                  from their preference in purchases, to the lifestyles they
                  lead and in their preferred language. Our technology, when
                  applied across your company’s supply chain, can reduce your
                  costs and increase speed-to-market. This is stuff marketers
                  and advertisers have dreamed of for decades! As you plan your
                  next marketing campaign, looking to create a more meaningful
                  dialogue at every touch-point, we welcome the opportunity to
                  share the specifics of our 1:1 intelligent, data-driven clone
                  modeling platform.
                </p>
                <p className="my-5 text-[#FFFFFFb3] text-base">
                  Best Regards,
                  <br />
                </p>
                <p className="my-5 text-[#FFFFFFb3] text-base">
                  Keith Elzia, CEO
                  <br />
                  Enterprise Content Solutions
                </p>
              </div>
            </div>
          </div>

          <div className="my-6">
            <SubHeading text="Meet The Team" />
            <div className="my-5 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>
                <h1 className="text-[#6366F1] font-bold text-lg my-0 py-0">
                  Keith Elzia
                </h1>
                <h6 className="my-0 py-0 text-[#FFFFFFb3]">President</h6>
                <p className="mt-4">
                  As President of ECS, Keith is responsible for overall company…
                  <br />
                </p>
                <span className="text-[#6366F1] underline		decoration-[#6366F1] cursor-pointer">
                  View Profile
                </span>
              </div>

              <div>
                <h1 className="text-[#6366F1] font-bold text-lg my-0 py-0">
                  Tommie Braddock
                </h1>
                <h6 className="my-0 py-0 text-[#FFFFFFb3]">
                  Operations Executive
                </h6>
                <p className="mt-4">
                  As ECS’ Operations Executive, Tommie has overall
                  responsibility for campaign…
                  <br />
                </p>
                <span className="text-[#6366F1] underline		decoration-[#6366F1] cursor-pointer">
                  View Profile
                </span>
              </div>

              <div>
                <h1 className="text-[#6366F1] font-bold text-lg my-0 py-0">
                  Al Brown
                </h1>
                <h6 className="my-0 py-0 text-[#FFFFFFb3]">
                  Chief Process and Innovation Officer
                </h6>
                <p className="mt-4">
                  As Chief Process and Innovation Officer, Al is responsible
                  for…
                  <br />
                </p>
                <span className="text-[#6366F1] underline		decoration-[#6366F1] cursor-pointer">
                  View Profile
                </span>
              </div>

              <div>
                <h1 className="text-[#6366F1] font-bold text-lg my-0 py-0">
                  Tom Grover
                </h1>
                <h6 className="my-0 py-0 text-[#FFFFFFb3]">Finance</h6>
                <p className="mt-4">
                  As Senior Finance Executive, Tom provides executive insight
                  and experience…{" "}
                </p>
                <span className="text-[#6366F1] underline		decoration-[#6366F1] cursor-pointer">
                  View Profile
                </span>
              </div>
            </div>
          </div>
        </Details>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
