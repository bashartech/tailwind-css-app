import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="#about flex justify-center items-center w-screen  bg-no-repeat bg-cover bg-center lg:h-screen  bg-slate-100" id="about">
      <div className="box p-10 ml-10 lg:w-3/4 w-4/4 h-3/4">
        <div className="heading text-3xl font-bold text-black">ABOUT US</div>
        <div className="subheading text-2xl mt-2  text-black">At Bashar Tech we are a seasoned technology company dedicated to empowering businesses through innovative solutions. With expertise spanning web development digital marketing cyber security IT consulting and data analytics our team crafts tailored strategies to drive growth enhance productivity and safeguard operations.From startups to enterprises we partner with businesses across industries including finance healthcare and e-commerce. Our commitment to excellence has earned us recognition as a trusted technology leader.Join forces with us to transform your business operations elevate customer engagement and stay ahead in the digital landscape. Discover how Bashar Tech  can empower your business excellence through technology. Contact us today." </div>
        <div className="button mt-5  h-10 flex ">
        <Link href={"#contact"}>
        <button className="text-xl w-44  bg-blue-950 hover:bg-gray-900 rounded-3xl p-2  text-white">Contact Us</button>
            </Link>
            
        </div>
      </div>
    </div>
  )
}
