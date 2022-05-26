import React from "react";

const Footer = () => {
  return (
    <section className="">
      <div className=" bg-red-500">
        <div className=" py-10 flex justify-between">
          <div className="flex flex-col justify-between">
            <div className="text-white">
              <p className="text-2xl mb-2">MNTN</p>
              <p className="text-[12px]">
                Get out there &amp; discover your next slope, mountain &amp;
                destination!
              </p>

              <div className="mt-11 text-[8px]">
                Copyright 2019 MNTN, Inc. Terms &amp; Privacy
              </div>
            </div>
          </div>

          <div>More on The Blog</div>
          <div>More on MNTN</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
