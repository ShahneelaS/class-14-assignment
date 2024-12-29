import { notFound } from "next/navigation";

async function fetchPostById(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) return undefined;
  return response.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchPostById(params.id);

  if (!post) {
    return notFound();
  }

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.body}</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Posts
      </a>
    </div>
  );
}
