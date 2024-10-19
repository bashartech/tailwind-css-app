import Link from "next/link"

export default function Section3() {
  return (
    <div className="main flex justify-center items-center h-72 w-screen mt-10 bg-slate-500 ">
        <div className="box lg:w-[70%]  w-3/4">
            <div className="heading text-4xl text-black ">Ready To Get Started?</div>
            <div className="subheading text-2xl text-black  mt-2">Expert Web Development, Video Editing, and Graphic Design solutions. Transform your digital presence.</div>
            <div className="button mt-2 flex  items-center
             h-10">
                <Link href={"#contact"}>
                <button className=" p-2 bg-white w-44 text-black  rounded-3xl  hover:bg-slate-900 hover:text-white "> Contact us </button>
            </Link>
            </div>
        </div>
    </div>
  )
}
