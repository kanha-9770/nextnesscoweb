// pages/news.tsx

import { FC } from 'react';

const NewsCard: FC<{ title: string; content: string; image: string }> = ({ title, content, image }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs h-auto">
    <img src={image} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
    <h3 className="text-lg font-bold mt-2">{title}</h3>
    <p className="text-gray-700 mt-1">{content}</p>
  </div>
);

const Newsblog: FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex flex-row items-center space-y-4 bg-red-500">
        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 h-[30rem] max-w-7xl ">
          <h1 className="text-2xl font-bold ">Latest News</h1>
          <p className="text-gray-700">
            Welcome to the news blog page. Here you will find the latest news and updates.
          </p>
        </div>

        {/* News Cards */}
        <div className="flex flex-col justify-end items-end space-x-4 ml-20">
          <NewsCard
            title="Breaking News 1"
            content="This is the content for the first news card. It's a short description of the news."
            image="/path/to/image1.jpg"
          />
          <NewsCard
            title="Breaking News 2"
            content="This is the content for the second news card. It's a short description of the news."
            image="/path/to/image2.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsblog;
