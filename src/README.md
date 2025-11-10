# React useFetch Example

A simple example demonstrating how to create and use a **custom React hook** for fetching data from an API.

## 📘 About `useFetch`
The `useFetch` hook abstracts the logic of fetching data, managing loading states, and handling errors. It can be reused across multiple components with just a URL.

### 🔧 Features
- Fetch data from any API endpoint
- Built-in loading and error handling
- Clean, reusable logic for multiple components

## 🧩 How It Works
1. `useFetch(url)` starts fetching data when the component mounts or when the `url` changes.
2. It returns three values:
   - `data`: The response from the API
   - `loading`: A boolean that indicates if the data is still being fetched
   - `error`: Any error that occurred during the fetch

### Example Usage
```jsx
import React from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

## ⚙️ Hook Implementation
```js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network error");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

## 🧠 Why Use Custom Hooks?
- Keeps components clean and focused
- Promotes reusability
- Reduces duplicated logic

---
**Branch:** `react-custom-hook`  
**Example:** Fetching data with a reusable React hook