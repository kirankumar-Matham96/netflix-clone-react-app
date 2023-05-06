import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./index.css";

const Featured = () => {
  return (
    <div className="featured">
      <img
        src="https://res.cloudinary.com/do4v7miwh/image/upload/v1642074096/cld-sample.jpg"
        alt="userProfile"
        className=" "
        width="100%"
      />
      <div className="info">
        <img
          src="https://res.cloudinary.com/do4v7miwh/image/upload/v1642074096/cld-sample.jpg"
          alt="userProfile"
        />
        <span className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          suscipit blanditiis veritatis exercitationem sequi aspernatur tenetur
          veniam ullam? Sit amet deleniti delectus velit repellendus cumque
          atque iusto quaerat totam recusandae.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
          </button>
          <button className="more">
            <InfoOutlinedIcon />
          </button>
          <span>Info</span>
          {/* TODO: 34min continue... */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
