import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
const Testimonial = () => {
  return (
    <section
      style={{
        background: "url(assets/images/homepage/testimonial/bg.png)",
        height: "400px",
      }}
      className="w-full h-full flex justify-end"
    >
      <div
        style={{
          background: "rgba(255,255,255,0.8)",
        }}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="customContainer">
          <p className="text-5xl font-light">Testimonials</p>
          <OwlCarousel loop items={2}>
            <div className="w-4/5  h-3/4 flex flex-col justify-center items-start">
              <p className="text-base h-48  italic leading-8 py-4">
                We were first time home buyers in need of a house before our
                apartment lease expired in a month. We found Awaasonline from a
                referral of a friend. The amount of time they had spent in
                helping us make our own informative decisions is praiseworthy.
              </p>

              <div className="flex justify-start items-center">
                <img
                  className="w36 h-32 object-cover rounded-full shadow-2xl mr-8 "
                  src="/assets/images/vastu/1.jfif"
                  alt=""
                />
                <div className="-mt-4">
                  <p className="text-base">Product manager</p>
                  <p className="text-sm italic">Happy Customer</p>
                </div>
              </div>
            </div>{" "}
            <div className="w-4/5  h-3/4 flex flex-col justify-center items-start">
              <p className="text-base italic h-48 leading-8 py-4">
                We moved from a different state to Panipat and Awaasonline did
                an amazing job in helping us choose a neighborhood and the right
                house for us. They’re very knowledgeable about the different
                neighborhoods in Panipat. They were very responsive to all of
                our questions.
              </p>

              <div className="flex justify-start items-center">
                <img
                  className="w36 h-32 object-cover rounded-full shadow-2xl mr-8 "
                  src="/assets/images/vastu/2.jfif"
                  alt=""
                />
                <div className="-mt-4">
                  <p className="text-base">Product manager</p>
                  <p className="text-sm italic">Happy Customer</p>
                </div>
              </div>
            </div>{" "}
            <div className="w-4/5  h-3/4 flex flex-col justify-center items-start">
              <p className="text-base italic h-48 leading-8 py-4">
                Awaasonline are ultimate real estate professionals. They were
                well informed, patient and receptive. They were able to walk us
                through every aspect of buying a home. Their expertise made it
                so much easier to focus on the actual move. I would highly
                recommend their services to anyone looking for a realtor.
              </p>

              <div className="flex justify-start items-center">
                <img
                  className="w36 h-32 object-cover rounded-full shadow-2xl mr-8 "
                  src="/assets/images/vastu/3.jfif"
                  alt=""
                />
                <div className="-mt-4">
                  <p className="text-base">Product manager</p>
                  <p className="text-sm italic">Happy Customer</p>
                </div>
              </div>
            </div>{" "}
            <div className="w-4/5  h-3/4 flex flex-col justify-center items-start">
              <p className="text-base italic h-48 leading-8 py-4">
                Awaasonline has been helping me with my house purchase. I've
                found their service excellent, they are professional, so
                helpful. From my experience, they always seem to put their
                customers first. I would definitely recommend them to all home
                buyers.
              </p>

              <div className="flex justify-start items-center">
                <img
                  className="w36 h-32 object-cover rounded-full shadow-2xl mr-8 "
                  src="/assets/images/vastu/4.jfif"
                  alt=""
                />
                <div className="-mt-4">
                  <p className="text-base">Product manager</p>
                  <p className="text-sm italic">Happy Customer</p>
                </div>
              </div>
            </div>{" "}
            <div className="w-4/5  h-3/4 flex flex-col justify-center items-start">
              <p className="text-base italic h-48 leading-8 py-4">
                Awaasonline was a great realtor company with a great team. They
                listened to our needs and found us a house in our budget in a
                great location. A few of my family members have used them as
                well and you will not be disappointed with their service and
                quality.
              </p>

              <div className="flex justify-start items-center">
                <img
                  className="w36 h-32 object-cover rounded-full shadow-2xl mr-8 "
                  src="/assets/images/vastu/1.jfif"
                  alt=""
                />
                <div className="-mt-4">
                  <p className="text-base">Product manager</p>
                  <p className="text-sm italic">Happy Customer</p>
                </div>
              </div>
            </div>{" "}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
