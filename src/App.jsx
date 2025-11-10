import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="container">
      <h1 className="title">📬 Latest Posts</h1>

      {loading && <div className="loading">Loading...</div>}

      {error && <div className="error">❌ {error.message}</div>}

      {!loading && !error && data && (
        <div className="posts">
          {data.slice(0, 6).map((post) => (
            <div key={post.id} className="card">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
            </div>
          ))}
        </div>
      )}

      <footer className="footer">Made with ❤️ using React Custom Hook</footer>
    </div>
  );
}

export default App;
