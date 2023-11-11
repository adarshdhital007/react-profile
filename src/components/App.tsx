import "./App.css";
import { ProfileData } from "../types/types";
import jsonData from "./data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";

function App() {
  const profileData: ProfileData | undefined = jsonData[0];

  if (!profileData) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex flex-col gap-5 max-w-7xl mx-auto">
      <div className="image1"></div>
      <div className="profilesection">
        <div className="picture w-32 h-32 md:w-60 md:h-60 relative mr-5 ml-7">
          <img
            className=" border-black border-4 rounded-full"
            src={profileData.profile.picture}
            alt="Adarsh"
          />
        </div>
        <div className="info">
          <div className="infomore">
            <h1 className="text-xl md:text-3xl ml-2 flex items-center">
              {" "}
              {profileData.profile.name}
              <span className="text-sm ml-1 p-1 text-white bg-purple-900 rounded-full flex items-center justify-center shadow-lg">
                <i className="fa fa-diamond " aria-hidden="true"></i>
              </span>
              <span className="ml-1  p-1 text-sm bg-green-500 text-black rounded-full flex items-center justify-center shadow-lg">
                <i className="fa fa-check" aria-hidden="true"></i>
              </span>
            </h1>
            <div className="followersection">
              <div className="flex flex-col items-center justify-center">
                <div className="followers border text-black border-black rounded flex align-center justify-center p-2">
                  {profileData.profile.followers}
                </div>
                <div>
                  <p className="demo text-black">Followers</p>
                </div>
              </div>

              <div>
                <div className="following border text-black border-black rounded flex align-center justify-center p-2">
                  {profileData.profile.following}
                </div>
                <p className=" text-black">Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="role break-words">
        <p className="ml-10 text-black">{profileData.profile.role}</p>
        <a
          className="ml-10 text-blue-600"
          href="http://instagram.com/adarshdhital007"
        >
          http://instagram.com/adarshdhital007
        </a>
      </div>

      <div className="icons flex flex-row mb-4 ml-10  flex-wrap">
        <p className="flex items-center">
          <FontAwesomeIcon
            className="bg-blue-500 text-white rounded-full p-1 ml-2"
            icon={faStar}
          />
          <span className="ml-1">165</span>
        </p>

        <p className="flex items-center">
          <FontAwesomeIcon
            className="bg-yellow-400 text-white rounded-full p-1 ml-2"
            icon={faThumbsUp}
          />
          <span className="ml-1">9K</span>
        </p>

        <p className="flex items-center">
          <FontAwesomeIcon
            className="bg-gray-400 rounded-full text-white  ml-2 p-1"
            icon={faEye}
          />
          <span>10K</span>
        </p>

        <p className="flex items-center ml-2">
          <FontAwesomeIcon
            className="bg-red-500 text-white rounded-full p-1"
            icon={faHeart}
          />
          <span className="ml-1">31.9K</span>
        </p>
      </div>

      <div>
        <div className="flex items-center">
          <div className=" rounded  mr-3">
            <h1 className="text-xl text-blue-600">
              {profileData.profile.postcount} Posts
            </h1>
          </div>
        </div>
        <div className="border-2 rounded mb-4">
          {Object.values(profileData.postdescription.posts).map(
            (post, index) => (
              <div key={index} className="mb-1 mt-3">
                <div className="flex items-center mb-2 ml-3">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <div className="ml-auto mr-10">
                    <FontAwesomeIcon
                      className="text-blue-500"
                      icon={faThumbsUp}
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-2 ml-3  mr-3 break-words">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center mb-2 ml-3">
                  <p className="text-gray-600 mr-4 mb-2 md:mb-0">
                    <span className="font-semibold text-emerald-500">
                      {post.category}
                    </span>{" "}
                    by{" "}
                    <span className="font-bold">
                      {profileData.profile.name}
                    </span>
                  </p>
                  <p className="text-gray-600 mr-4 mb-2 md:mb-0">
                    {post.datepublished}
                  </p>
                  <p className="text-gray-600 mr-4 mb-2 md:mb-0">
                    {post.timetoread}
                  </p>
                  <p className="text-gray-600 mr-4 mb-2 md:mb-0">
                    {post.views}
                    <span>&nbsp;views</span>
                  </p>
                </div>
                <hr />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
