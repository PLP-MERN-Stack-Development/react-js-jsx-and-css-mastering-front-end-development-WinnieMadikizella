import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 5)); // only first 5 posts
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch posts");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-blue-500">Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mt-6 p-4 border rounded-lg bg-white shadow">
      <h2 className="text-xl font-semibold mb-3">Latest Posts</h2>
      <ul className="list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <strong>{post.title}</strong>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
