import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div
  className="hero min-h-[50vh]"
  style={{
    backgroundImage: "url(/ella-bg-tint-black.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">SCHS ELLA</h1>
      <p className="mb-5">
        Silver Creek High School - English Language Learner Advocates (ELLA)
      </p>
    </div>
  </div>
</div>
<div className="w-3/4 flex flex-col mb-20 justify-center mx-auto">
  <h1 className="text-6xl text-main  text-center my-12 font-bold">Mission</h1>
  <p className=" text-lg text-center">Our mission is to empower our English Language Learners, <b className="text-main">especially our Latino students and families</b> at Silver Creek High School by establishing a bridge of communication, trust, and engagement between students and families, school staff (administrators, counselors, teachers) at Silver Creek by developing their leadership skills.

</p>
<h1 className="text-6xl text-main  text-center m-8 my-12 font-bold">Vision</h1>
  <div className=" text-lg text-center">
   <ol className="list-decimal mx-auto text-left">
    <li className="m-2">Support our Silver Creek High School English Language Learner population while targeting Latino students.</li>
    <li className="m-2">Organize and sponsor the English Learner and Latino Community of the school regarding issues related to the educational environment and their academic needs. The Committee will sponsor and coordinate workshops and initiatives to positively influence the educational environment and educational outcomes of target students.</li>
    <li className="m-2">Develop parent agency and leadership to create a word-of-mouth invitation for other parents to join our meetings.</li>
    <li className="m-2">Create a support group for students to provide them with tools for academic awareness and success such as:
      <ol className="">
        <li className="m-2">
        --> How to navigate through the US educational system
        </li>
        <li className="m-2">
        --> Understanding ESUHSD graduation and A-G requirements
        </li>
        <li className="m-2">
        --> College systems knowledge
        </li>
      </ol>
    </li>
    
   </ol>



  </div>
</div>

    </div>
  );
}
