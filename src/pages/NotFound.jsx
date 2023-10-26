//components
import NotFoundButton from "../components/notFoundButton/NotFoundButton";
function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
      }}
    >
      {/* 404 image */}
      <img src="/404.png" alt="404" />
      {/* 404 button */}
      <NotFoundButton />
    </div>
  );
}

export default NotFound;
