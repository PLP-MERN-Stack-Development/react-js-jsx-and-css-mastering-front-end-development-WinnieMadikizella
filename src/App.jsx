import Layout from "./layout/Layout.jsx";
import TaskManager from "./components/TaskManager.jsx";
import Posts from "./components/Posts.jsx";

function App() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <TaskManager />
        <Posts />
      </div>
    </Layout>
  );
}

export default App;
