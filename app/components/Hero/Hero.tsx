import Link from "next/link"
export default function Hero() {
  return (
    <div>
      <div className="hero w-screen h-[100vh]  ">
        <div className="main h-full w-full bg-no-repeat bg-cover bg-center bg-[url('https://static.wixstatic.com/media/c837a6_aacefcd51da746cfabdd1b8d03f7ae34~mv2.jpg/v1/fill/w_1899,h_698,fp_0.49_0.44,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_aacefcd51da746cfabdd1b8d03f7ae34~mv2.jpg')] ">
        <div className="box w-full h-full flex items-center p-5">
            <div className="content mt-10 ml-5  w-3/4 ">
            <div className="heading text-6xl font-bold">
            {/* EXPERT SOLUTION FOR A COMPLEX WORLD  */}
        SIMPLIFYING TECHNOLOGY, AMPLIFYING BUSINESS
            </div>
            <div className="button mt-7 ">
            <Link href={"#services"}>
            <button className="bg-white text-black p-2 w-40 rounded-3xl hover:bg-slate-400  ">Get Started</button>
            </Link>
       </div>
            <div className="subheading mt-4 text-xl  w-3/4 ">
            Empowering businesses in the digital landscape. Our expert team crafts innovative tech solutions, simplifying operations, amplifying productivity & fueling growth.
            </div>
            </div>
        </div>
            
        </div>
      </div>
    </div>
  )
}
