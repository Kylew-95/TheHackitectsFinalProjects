import PhotoCarousel from "./PhotoCarousel.js";
import "./DogProfile.css";
import { BsGenderAmbiguous } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';
import { FaDog } from 'react-icons/fa';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaMapMarkedAlt } from 'react-icons/fa';
// AHAHAAHAHAAHAHAHAHAAHA



function DogProfile() {
  return (
    <div>
      <PhotoCarousel />
      <div className="bannerTagLine">
        <p>Placeholder text</p>
        <p>Placeholder text</p>
      </div>

      <div className="buttons">
      <button className="button1">Adopt Me!</button>
      <button className="button2">How To Care For Me</button>
      </div>

      <div className="dogProfile">
        <p>ID</p>
        <h1>Dog Name: "props"</h1>
        <p> <BsGenderAmbiguous/> Gender: "props"</p>
        <p> <FiClock/> Age: "props"</p>
        <p><FaDog/><FaDog/> Size: "props"</p>
        <p><BsFillBarChartFill/> Activity Level: "props"</p>
        <p><FaMapMarkedAlt/> Location: "props"</p>
        </div>
        

    </div>
  );
}

export default DogProfile;
