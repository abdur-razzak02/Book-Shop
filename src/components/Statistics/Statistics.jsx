import { Helmet } from "react-helmet";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const barChartData = [
  { category: "Fiction", books: 6 },
  { category: "Classic", books: 6 },
  { category: "Fantasy", books: 3 },
  { category: "Dystopian", books: 2 },
  { category: "Horror", books: 1 },
  { category: "Historical Fiction", books: 3 },
];

const Statistics = () => {
  return (
    <div className="">
      <Helmet>
        <title>Statistics | Boi Poka </title>
      </Helmet>
      <div className="bg-[#9538E2] text-white py-10 px-5 xl:px-0">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-bold">Statistics</h1>
          <p className="py-6 sm:w-2/3 mx-auto">
            At <b>Boi Poka</b>, our community is united by a love for books and
            storytelling. Each number reflects the heart of our bookshop, from
            the diverse genres on our shelves to the loyal readers who visit us
            every day. Here’s a glimpse into the vibrant world we’ve built
            together, one book at a time!
          </p>
        </div>
      </div>
      <div className="justify-center flex mt-5 sm:mt-10 lg:mt-16">
        <div className="w-full px-5 sm:px-0 mr-5 sm:w-2/3 lg:w-7/12">
          <ResponsiveContainer height={500} width="100%">
            <BarChart data={barChartData}>
              <XAxis dataKey={"category"}></XAxis> <Tooltip></Tooltip>
              <YAxis></YAxis>
              <Bar dataKey={"books"} fill="#8884d8"></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
