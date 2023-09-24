import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default function Footer() {
  return (
    <div className="Footer">
      <span>
        {" "}
        <a
          href="https://github.com/mbellorin2/my-react-weather-app"
          target="_blank"
          rel="noreferrer"
          className="repo"
        >
          Open-code project
        </a>{" "}
      </span>
      developed by
      <span>
        {" "}
        <strong>
          <a
            href="https://www.linkedin.com/in/mbellorin2/"
            target="_blank"
            rel="noreferrer"
            className="author"
          >
            Mariana B.A.
          </a>
        </strong>
      </span>
    </div>
  );
}
