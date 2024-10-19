import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="main  w-screen" id="services">
      <div className="box w-full p-10">
        <div className="heading text-4xl lg:w-2/4 lg:mt-10">All Your Tech Needs in a
        Single Bashar Tech Workspace</div>
      </div>
        <div className="sec flex lg:p-10 justify-center items-center w-full h-full">
      <div className="section sm:w-[500px] lg:mt-5 lg:w-full lg:p-15 lg:flex gap-5 justify-center items-center">
        <div className="box1 hover:h-[402px] hover:lg:w-[652px] hover:w-[402px] flex justify-center items-center rounded-xl bg-[url('https://static.wixstatic.com/media/c837a6_d3c06672bdc54a15a26a7259bb9e6872~mv2.jpg/v1/fill/w_875,h_655,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/E.jpg')] bg-cover bg-center w-[400px] lg:w-[650px] h-[400px]  border-2 border-white">
        <div className="content p-5 ">
        <div className="text1 text-xl font-bold">WEB DEVELOPMENT</div>
        <div className="para1 mt-2">We craft dynamic, scalable websites that drive engagement and conversion. Transforming digital landscapes with innovative web solutions.</div>
        <div className="button mt-5 ">
        <Link href={"#contact"}>
        <button className="border-2 border-white p-1 rounded-lg hover:bg-gray-700">Get Started</button>
            </Link>
        </div>
             
        </div>
        </div>
        <div className="box2 hover:h-[405px] hover:lg:w-[302px] flex justify-center items-center rounded-xl bg-gray-800 mt-5 w-[400px] lg:w-[300px] h-[400px] border-2 border-white">
            <div className="content p-5 ">
<div className="text2 text-xl font-bold">GRAPHIC DESIGN</div>
<div className="para2 mt-2">Elevating brand presence through striking visual identities.
Creative design solutions that inspire and captivate.

</div><div className="button mt-5">
<Link href={"#contact"}>
<button className="border-2 border-white p-1 rounded-lg hover:bg-gray-700">Get Started</button>
            </Link>
           </div> 
        </div>
            </div>
        <div className="box3 hover:h-[405px] hover:lg:w-[302px] flex justify-center items-center rounded-xl bg-gray-800 mt-5 w-[400px] lg:w-[300px] h-[400px]  border-2 border-white">
            <div className="content p-5 ">
          <div className="text3 text-xl font-bold">VIDEO EDITING</div>
          <div className="para3 mt-2">Transforming raw footage into captivating visual stories. Expert video editors crafting compelling narratives.</div> 
          <div className="button mt-5">
          <Link href={"#contact"}>
            <button className="border-2 border-white p-1 rounded-lg hover:bg-gray-700">Get Started</button>
            </Link>         
            </div> 
        </div>
        </div>
            </div>
      </div>
    </div>
  )
}
