"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";


const Table = () => {
  return (
    <>
    <section id="features" className="bg-white dark:text-black py-16 md:py-20 lg:py-28">
        <div className="container dark:text-black">
          <SectionTitle
            title="Job Network"
            paragraph=""
            center
          />
        </div>
        <div className="grid grid-cols-5 gap-4 m-5">
        <div className="h-64 items-center text-center flex flex-col justify-center">
            <div className="rect-text-blue md-4">
                Name
            </div>
            <div className="rect-text-grey md-4">
            Work in Texas.com
            </div>
            <div className="rect-text-grey md-4">
            Texas Workforce Commission
            </div>
            <div className="rect-text-grey md-4">
            Texas Economic Development
            </div>
        </div>
        <div className="h-64 items-center text-center flex flex-col justify-center">
            <div className="rect-text-blue md-4">
                City
            </div>
            <div className="rect-text-grey md-4">
                Austin
            </div>
            <div className="rect-text-grey md-4">
                Austin
            </div>
            <div className="rect-text-grey md-4">
                Austin
            </div>
        </div>
        <div className=" h-64 items-center text-center flex flex-col justify-center">
            <div className="rect-text-blue md-4">
                Address
            </div>
            <div className="rect-text-grey md-4">
            9001 N IH 35 Ste 110A
            </div>
            <div className="rect-text-grey md-4">
            3401 Webberville Rd Bldg 1000
            </div>
            <div className="rect-text-grey md-4">
            2025 W Ben White Blvd
            </div>
        </div>
        <div className="h-64 items-center text-center flex flex-col justify-center">
            <div className="rect-text-blue md-4">
                Phone Number
            </div>
            <div className="rect-text-grey md-4">
            (512) 454 - 9675 
            </div>
            <div className="rect-text-grey md-4">
            (800) 628 - 5115
            </div>
            <div className="rect-text-grey md-4">
            (512) 936 - 0100
            </div>
        </div>
        <div className=" h-64 items-center text-center flex flex-col justify-center">
            <div className="rect-text-blue md-4">
                Email / Website
            </div>
            <div className="rect-text-grey md-4">
                Email
            </div>
            <div className="rect-text-grey md-4">
                Website
            </div>
            <div className="rect-text-grey md-4">
                Website
            </div>
        </div>
        </div>
      </section>
      <style jsx>{`
       
        .rect-text-blue {
          display: inline-block;
          padding: 10px 20px; /* Adjust padding for spacing */
          background-color: #3D6FAA;
          margin-right: 10px;
          color: white; /* Adjust text color */
          text-align: center;
          width: 200px;
          margin-bottom: 20px;
        }
        .rect-text-grey {
          display: inline-block;
          padding: 10px 20px; /* Adjust padding for spacing */
          background-color: #EFEDED;
          color: black;
          width: 200px;
          margin-right: 10px;
          color: #575757; /* Adjust text color */
          margin-bottom: 15px;
        }
       
    `}</style>
    </>
  );
};

export default Table;
