import { Link } from "react-router-dom";
// import Banner from "./Banner";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      {/* <Banner /> */}
      <h1>Dashboard</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
};

export default Dashboard;
