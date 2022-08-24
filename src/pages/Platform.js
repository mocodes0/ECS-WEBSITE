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

function Platform() {
  return (
    <div>
      <Header />
      <Navbar />
      <Heading text="Our Platforms" />
      <Container>
        <Details>
          <div className="my-6">
            <SubHeading text="Targeting - Data and Insight" />
            <div className="my-4">
              <p className="my-2 text-[#FFFFFFb3] text-base">
                The ECS database provides the most in-depth view of individuals
                that is comprised of 264 separate source/transactional
                databases, 630MM records, 280MM individuals that can be
                described by over 931 specific attributes.
              </p>
              <img className="my-3" src="./testing.jpg" alt="testing" />
              <img className="my-3" src="./testing2.jpg" alt="testing2" />
            </div>
          </div>

          <div className="my-6">
            <SubHeading text="Data Driven Creative and Personalization" />
            <div className="my-4">
              <p className="text-[#FFFFFFb3] text-base">
                We are solution providers that enable our customers to benefit
                from our unique delivery platform.
              </p>
              <ul className="list-disc my-2	pl-4 text-[#FFFFFFb3] text-base">
                <li>
                  Our unique “Clone Model” development, exploratory data
                  analysis and advanced algorithms are run against one of the
                  largest network data bases in the USA yielding information and
                  insight about our client`s customers far beyond traditional
                  profile data.
                </li>
                <li>
                  ECS is a Data Driven Technology Company with an innovative and
                  proprietary marketing platform
                </li>
                <li>
                  Our platform enables true 1:1 marketing for acquisition and
                  retention of our client’s “best customers”
                </li>
                <li>
                  We are experts in majority and multicultural marketing,
                  creative, print, eVideo and postage
                </li>
                <li>
                  Our marketing platform generates unprecedented conversion of
                  high performance customers, while reducing traditional
                  marketing spend and driving greater results and ROI
                </li>
              </ul>
              <div>
                <ul className="list-decimal pl-4 my-4 text-[#FFFFFFb3] text-base">
                  <li>
                    <span className="font-semibold text-white"> Drive UP</span>{" "}
                    “Net New Customers” – Mkt. Share
                  </li>
                  <li>
                    <span className="font-semibold text-white"> Drive UP</span>{" "}
                    Scalable Revenue and Profits
                  </li>
                  <li>
                    <span className="font-semibold text-white"> Drive UP</span>{" "}
                    Personalization/Localization – 1:1
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      {" "}
                      Drive DOWN
                    </span>{" "}
                    Related Costs/Expenses
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-6">
            <SubHeading text="Marketing Channel Optimization" />
            <div className="my-4">
              <p className="text-[#FFFFFFb3] text-base">
                The ECS network of 70 printers utilizing the latest in
                commercial and digital technology throughout the US are
                networked to the platform to deliver data driven printing
                functionality. They provide the level of quality expected at a
                cost lower than traditional printing.
              </p>
              <img src="./marketing.png" alt="marketing" />
              <ul className="list-disc my-2	pl-4 text-[#FFFFFFb3] text-base">
                <li>Digital Printer Technology….high quality….Litho</li>
                <li>Print to Post Office</li>
                <li>Personalized production “on the fly”</li>
                <li>Nationwide/Worldwide production network</li>
              </ul>
            </div>
          </div>

          <div className="my-6">
            <SubHeading text="Distribution-Innovating Through Technology" />
            <div className="my-4">
              <p className="my-2 text-[#FFFFFFb3] text-base">
                ECS delivers Data-Driven-Creative in both print and eVideo built
                on the attributes of a best-customer clone and customized to
                each individual or micro-segment in imagery, messaging and video
                that is conveyed in the likeness, language and interests with
                relevant offers that change behavior and generate conversion.
              </p>
              <img
                className="my-2"
                src="./distribution.jpg"
                alt="distribution"
              />

              <div className="my-2">
                <h4 className="font-medium	text-lg">Digital DirectTARGETING</h4>
                <p className="my-2 text-[#FFFFFFb3] text-base">
                  We provide marketers a direct, one-to-one, online relationship
                  to selected households by pinpointing the exact geographic
                  location of each home’s web entry point (IP address).
                  <br />
                  Our direct household online targeting means your marketing
                  message finds every intended target every time they go online,
                  so you get 100% reach and zero wasted budget.
                  <br />
                  Exact reach gives you the confidence to deliver
                  extraordinarily relevant online display ads that lead to
                  higher conversion and revenue
                </p>
              </div>

              <div className="my-2">
                <h4 className="font-medium	text-lg">Why others miss the mark</h4>
                <p className="my-2 text-[#FFFFFFb3] text-base">
                  <span className="text-white font-semibold">
                    {" "}
                    Tracking Cookies
                  </span>{" "}
                  – Cookies expire or get deleted to protect privacy—they lose
                  track of the household.
                  <br />
                  <span className="text-white font-semibold">
                    {" "}
                    Zip Codes{" "}
                  </span>{" "}
                  – Zip and Zip+4 can only target a broad swath of
                  households—not the specific household.
                  <br />
                  <span className="text-white font-semibold">IP Zones </span> –
                  Other so-called IP targeting relies on ISP data, but that only
                  finds the ISP location—not the household location.
                </p>
              </div>

              <div className="my-3">
                <h4 className="font-medium	text-lg text-center">
                  Our Digital DirectTargeting Difference is 0ne of the Most
                  Precise Targeting on the Web.
                </h4>
                <p className="my-2 text-[#FFFFFFb3] text-base">
                  <span className="text-white font-semibold">
                    {" "}
                    MORE Accurate
                  </span>{" "}
                  1:1 reach enables higher relevance and conversion.
                  <br />
                  <span className="text-white font-semibold">
                    {" "}
                    MORE Reliable{" "}
                  </span>{" "}
                  Reach 100% or your intended targets 100% of the time.
                  <br />
                  <span className="text-white font-semibold">
                    MORE Responsible{" "}
                  </span>{" "}
                  Protect privacy far beyond any other targeting method.
                </p>
                <img src="./distribution2.png" alt="distribution2" />
              </div>

              <div className="my-3">
                <h4 className="font-medium	text-lg text-center">
                  How we can impact Your Digital DirectTARGETING
                </h4>
                <p className="my-2 text-[#FFFFFFb3] text-base">
                  <span className="text-white font-semibold">
                    Display Advertising.{" "}
                  </span>{" "}
                  Deliver hyper-targeted display ads only to matched prospects
                  <br />
                  <span className="text-white font-semibold">
                    {" "}
                    Display + Email Marketing.{" "}
                  </span>{" "}
                  Improve results through coordinated dual-channel exposure.
                  <br />
                  <span className="text-white font-semibold">
                    Expired Cookie Retargeting.{" "}
                  </span>{" "}
                  Revolutionary method enables incredibly valuable remarketing.
                  <br />
                  <span className="text-white font-semibold">
                    CRM Remarketing.{" "}
                  </span>{" "}
                  Powerfully efficient way to acquire ideal new customers.
                  <br />
                  <span className="text-white font-semibold">
                    Data Append.{" "}
                  </span>{" "}
                  Create online targeting segments that greatly expand your
                  reach.
                </p>
                <div className="my-3">
                  <button className="py-4 px-6 bg-[#6366F1]">
                    <Link to={"/contact"}>CONTACT US</Link>
                  </button>{" "}
                  <span className="ml-3 font-light">
                    to learn more from one of our subject matter
                    experts.
                  </span>
                </div>
              </div>

              <div className="my-3">
                <p className="my-2 text-[#FFFFFFb3] text-base">
                  The ECS Data Optimization for Postage leverages postal
                  attributes to capitalize on USPS discounting, ensure 98%
                  delivery to the home or business, provide full service
                  tracking and transfer postage savings directly to our
                  customers.
                </p>
                <img src="./distribution3.jpg" alt="distribution3" />

                <p className="my-2 text-[#FFFFFFb3] text-base">
                  Compliant with 2014 postal standards
                  <br />
                  Qualified for USPS Full-Service option/discount
                  <br />
                  Bar-code tracking for delivery confirmation
                  <br />
                  98% Deliverability
                </p>
              </div>
            </div>
          </div>

          <div className="my-6">
            <SubHeading text="Performance Analytics" />
            <div className="my-4">
              <p className="my-2 text-[#FFFFFFb3] text-base">
                The ECS Performance Analytics System provides real-time
                reporting including; mail delivery date, email views, opens,
                click through rates, time spent on the video, video/email
                sharing, links to client site(s) and exact match-back of sales
                to target prospect list for accurate conversion rate and ROI
                determination.
              </p>
              <img src="./performance1.jpg" alt="performance" />
              <div className="my-2">
                <h4 className="font-medium	text-lg">Acquisition</h4>
                <ul className="list-disc my-2	pl-4 text-[#FFFFFFb3] text-base">
                  <li>Total orders</li>
                  <li>Orders by segment</li>
                  <li>Leads and Lead performance</li>
                </ul>

                <h4 className="font-medium	text-lg">Consumer Interaction</h4>
                <ul className="list-disc my-2	pl-4 text-[#FFFFFFb3] text-base">
                  <li>#800 contacts</li>
                  <li>Click to call</li>
                </ul>

                <h4 className="font-medium	text-lg">eVideo Interaction</h4>
                <ul className="list-disc my-2	pl-4 text-[#FFFFFFb3] text-base">
                  <li># of views</li>
                  <li>Time per view</li>
                  <li>Viral impact</li>
                </ul>

                <h4 className="font-medium	text-lg">Ethnicity</h4>
                <ul className="list-disc my-2	pl-4 text-[#FFFFFFb3] text-base">
                  <li>Targeted consumers by deciles</li>
                  <li>Targeted consumers by revenue</li>
                  <li>Targeted consumers by purchase</li>
                </ul>

                <h4 className="font-medium	text-lg">Territory Performance</h4>
                <ul className="list-disc my-2	pl-4 text-[#FFFFFFb3] text-base">
                  <li>Sales by territory and region</li>
                  <li>Interaction by territory and region</li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </Details>
      </Container>
      <Footer />
    </div>
  );
}

export default Platform;
