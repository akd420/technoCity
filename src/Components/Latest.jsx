import { useEffect, useState } from "react";

const Latest = () => {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    fetch("/post.json")
      .then((response) => response.json())
      .then((data) => setLatest(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto p-4 mb-10">
      <div className="flex justify-between">
        <h1 className="text-2xl md:text-5xl italic font-semibold">
          Latest <span className="text-rose">Posts</span>
        </h1>
        <h1 className="text-2xl md:text-5xl italic font-semibold">
          View <span className="text-rose hover:underline">All &gt; </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center mt-12">
        {latest.map((post) => (
          <article
            key={post.id}
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          >
            <img
              alt="Office"
              src={post.img}
              className="h-56 w-full object-cover"
            />

            <div className="bg-base-200 p-4 sm:p-6">
              <time
                dateTime={post.date}
                className="block text-xs"
              >
                10th Oct 2022
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg">
                  {post.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed">
                {post.short_description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Latest;
