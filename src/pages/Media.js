import React from "react";
import {
  Container,
  Details,
  Footer,
  Header,
  Heading,
  Navbar,
  SubHeading,
} from "../components";

function Media() {
  return (
    <div>
      <Header />
      <Navbar />
      <Heading text="Our Media"/>
      <Container>
        <Details>
          <SubHeading text="Case Studies" />
          <div className="my-5">
            <h3 className="font-semibold text-xl text-[#FFFFFFb3]">
              National Electronics Retailer.
            </h3>
            <div className="my-4">
              <h4 className="font-medium	text-lg">Problem</h4>
              <p className="text-[#FFFFFFb3] text-base">
                The past 4 years had produced extremely low conversion rates for
                NEW customer acquisition. This National Electronics Retailer’s
                traditional approach to Direct Marketing was a single contact
                methodology – with the same content for all prospects. Their
                list of prospects had been derived from major “List” providers
                based on their National Electronics Retailer Profiles. They were
                looking for “innovative” approaches to improve their LIFT in
                customer acquisition. They sought to increase their
                Multicultural customer base, which was less than 5% of their
                ~65M customers.
              </p>
            </div>
            <div className="my-4">
              <h4 className="font-medium	text-lg">Solution</h4>
              <p className="text-[#FFFFFFb3] text-base">
                Delivery of a 1:1 Intelligent Data Driven Multicultural
                Marketing program focused on cloning their best “Consumer
                Electronics” customers and targeting individuals matching the
                clone in the{" "}
                <span className="text-white font-semibold">
                  African American, Latino-English, Latino-Spanish, Korean-
                  English and Korean-Korean language segments.
                </span>{" "}
                This multi-touch, multichannel engagement approach includes the
                delivery of 4 direct mail pieces and 2 e-Videos customized based
                on clone model insights and attributes.
              </p>
            </div>

            <div className="my-4">
              <h4 className="font-medium	text-lg">Benefits</h4>
              <ul className="list-disc	pl-4 text-[#FFFFFFb3] text-base">
                <li>
                  Acquisition of new customers for first time in the African
                  American, Latino English, Latino Spanish Korean English &
                  Korean Korean segments
                </li>
                <li>Significantly higher Conversion Rates</li>
                <li>Digital Integration with Printed Media</li>
                <li>Significantly Higher Gross Margin Customers</li>
                <li>Lower cost per delivered piece</li>
                <li>
                  Customized communications of{" "}
                  <span className="font-semibold text-white">36</span> versions
                  for a cost less than their traditional direct marketing
                  methods
                </li>
              </ul>
            </div>

            <div className="py-4 border-b ">
              <h4 className="font-medium	text-lg">Results</h4>
              <h5>Program Target</h5>
              <p className="text-[#FFFFFFb3] text-base">
                Conversion rate – 2.5%
              </p>
              <h5>Program Final Results</h5>
              <p className="text-[#FFFFFFb3] text-base">9.4%</p>
            </div>
          </div>

          <div className="my-5">
            <h3 className="font-semibold text-xl text-[#FFFFFFb3]">
              National Insurance Provider.
            </h3>
            <div className="my-4">
              <h4 className="font-medium	text-lg">Problem</h4>
              <p className="text-[#FFFFFFb3] text-base">
                With declining conversion rates, competitive pressures and a
                one-size fits all mass-marketing approach, This National
                Insurance provider sought new marketing approaches to attracting
                and retaining new customers.
              </p>
            </div>
            <div className="my-4">
              <h4 className="font-medium	text-lg">Solution</h4>
              <p className="text-[#FFFFFFb3] text-base">
                Delivery of a 1:1 Intelligent Data Driven Marketing program
                focused on cloning their best multi-line customers and targeting
                individuals matching the clone in the General Market, African
                American, Latino English and Latino Spanish segments. This
                multi-touch, multichannel engagement approach includes the
                delivery of 4 DM pieces and 2 e-Videos customized based on clone
                model insights and attributes.
              </p>
            </div>

            <div className="my-4">
              <h4 className="font-medium	text-lg">Benefits</h4>
              <ul className="list-disc	pl-4 text-[#FFFFFFb3] text-base">
                <li>
                  Acquisition of net new customers in every segment targeted.
                </li>
                <li>Significantly higher sales ratio</li>
                <li>Lower cost per printed piece</li>
                <li>Lower cost per delivered piece</li>
                <li>Increased speed to market (2 weeks vs 8 weeks)</li>
                <li>Full Brand Integration</li>
              </ul>
            </div>

            <div className="py-4">
              <h4 className="font-medium	text-lg">Results</h4>
              <ul className="list-disc	pl-4 text-[#FFFFFFb3] text-base">
                <li>Conversion Performance</li>
                <li>General Market: 514% increase</li>
                <li>General Market: 514% increase</li>
                <li>Latino English: 336% increase</li>
                <li>Latino English: 336% increase</li>
              </ul>
            </div>
          </div>
        </Details>
      </Container>
      <Footer />
    </div>
  );
}

export default Media;
