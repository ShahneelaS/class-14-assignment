import Link from "next/link";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">All Posts</h1>
      <p className="text-lg mb-6 text-center text-gray-200">
        Total Posts: {posts.length}
      </p>
      <ul className="space-y-4">
        {posts.map((post: { id: number; title: string }, index: number) => (
          <li
            key={post.id}
            className="bg-teal-50 p-4 rounded-lg shadow-md border-2 border-teal-200 hover:bg-teal-100 hover:border-teal-500 transition-all duration-300"
          >
            <div className="flex items-center">
              <Link
                href={`/${post.id}`}
                className="text-xl font-semibold text-teal-800 hover:text-teal-600 mr-4 transition-colors duration-300"
              >
                {index + 1}
              </Link>
              <Link
                href={`/${post.id}`}
                className="text-lg text-teal-900 hover:text-teal-600 transition-colors duration-300"
              >
                {post.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
