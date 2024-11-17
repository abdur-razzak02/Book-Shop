import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="bg-white p-5 sm:p-10 sm:w-2/3 sm:mx-auto sm:my-10 rounded-xl mx-5 ">
      <Helmet>
        <title>About | Noble Readers </title>
      </Helmet>
      <h1 className="text-4xl text-center font-bold mb-5 text-[#9538E2]">
      Noble Readers
      </h1>
      <p className="text-lg mb-3 font-thin ">
        <b>Noble Readers</b> is more than a store - it’s a gathering place for book lovers of all ages and backgrounds. Our mission is to share our love for books and create a space where every reader can find stories that speak to them. We offer a thoughtfully curated selection, including fiction, non-fiction, children’s literature, and academic texts, all carefully chosen to spark curiosity and foster knowledge. Whether you’re looking for a quiet read or a community of fellow book enthusiasts, you’ll find it here at Noble Readers. Let’s celebrate the magic of books together!
      </p>
      <h2 className="font-medium">
        Location: 132/5 Noble Readers <br /> Andarkilla, Chittagong
      </h2>
      <h3 className=" font-medium">Contact: +88 01645 995231</h3>

      <div className="">
        <div className="card-body px-0 space-y-3">
          <input placeholder="Email" className="input input-bordered" />

          <textarea
            name="Message"
            id=""
            className="border p-5 rounded-md"
            placeholder="Your Message"
          ></textarea>
          <label className="label cursor-pointer">
            Submit to newsletter
            <input type="checkbox" className="toggle" />
          </label>
          <button className="btn bg-[#9538E2] text-white hover:text-black w-40 mx-auto">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default About;
