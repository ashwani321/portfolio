// import React, { useEffect } from "react";
// import "./Home.css";
// import * as THREE from "three";
// import moonImage from "../../Images/moon.jpg";
// import venusImage from "../../Images/venus.jpg";
// import spaceImage from "../../Images/space.jpg";
// import { Typography } from "@mui/material";
// import TimeLine from "../TimeLine/TimeLine";
// import {
//   SiCplusplus,
//   SiReact,
//   SiJavascript,
//   SiMongodb,
//   SiNodedotjs,
//   SiExpress,
//   SiCss3,
//   SiHtml5,
//   SiThreedotjs,
// } from "react-icons/si";
// //import YoutubeCard from "../YoutubeCard/YoutubeCard";
// import { Link } from "react-router-dom";
// import { MouseOutlined } from "@mui/icons-material";

// const Home = ({ timelines, youtubes, skills }) => {
//   useEffect(() => {
//     const textureLoader = new THREE.TextureLoader();

//     const moonTexture = textureLoader.load(moonImage);
//     const venusTexture = textureLoader.load(venusImage);
//     const spaceTexture = textureLoader.load(spaceImage);

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(4, 4, 8);

//     const canvas = document.querySelector(".homeCanvas");
//     const renderer = new THREE.WebGLRenderer({ canvas });

//     const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
//     const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
//     const moon = new THREE.Mesh(moonGeometry, moonMaterial);

//     const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
//     const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
//     const venus = new THREE.Mesh(venusGeometry, venusMaterial);
//     venus.position.set(8, 5, 5);

//     const pointLight = new THREE.PointLight(0xffffff, 1);
//     const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

//     pointLight.position.set(8, 5, 5);
//     pointLight2.position.set(-8, -5, -5);

//     scene.add(moon);
//     scene.add(venus);
//     scene.add(pointLight);
//     scene.add(pointLight2);
//     scene.background = spaceTexture;

//     const constSpeed = 0.01;
//     window.addEventListener("mousemove", (e) => {
//       if (e.clientX <= window.innerWidth / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y += constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y += constSpeed;
//       }

//       if (e.clientX > window.innerWidth / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y -= constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y -= constSpeed;
//       }

//       if (e.clientY > window.innerHeight / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y += constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y += constSpeed;
//       }

//       if (e.clientY <= window.innerHeight / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y -= constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y -= constSpeed;
//       }
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);
//       moon.rotation.y += 0.001;
//       venus.rotation.y += 0.001;
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       renderer.render(scene, camera);
//     };

//     animate();

//     return window.addEventListener("scroll", () => {
//       camera.rotation.z = window.scrollY * 0.001;
//       camera.rotation.y = window.scrollY * 0.003;

//       const skillsBox = document.getElementById("homeskillsBox");

//       if (window.scrollY > 1500) {
//         skillsBox.style.animationName = "homeskillsBoxAnimationOn";
//       } else {
//         skillsBox.style.animationName = "homeskillsBoxAnimationOff";
//       }
//     });
//   }, []);

//   return (
//     <div className="home">
//       <canvas className="homeCanvas"></canvas>

//       <div className="homeCanvasContainer">
//         <Typography variant="h1">
//           <p>A</p>
//           <p>S</p>
//           <p>H</p>
//           <p>W</p>
//           <p>A</p>
//           <p>N</p>
//           <p>I</p>
          
//         </Typography>

//         <div className="homeCanvasBox">
//           <Typography variant="h2">DESIGNER</Typography>
//           <Typography variant="h2">DEVELOPER</Typography>
//           <Typography variant="h2">TEACHER</Typography>
//           <Typography variant="h2">CONTENT CREATOR</Typography>
//         </div>

//         <Link to="/projects">VIEW WORK</Link>
//       </div>

//       <div className="homeScrollBtn">
//         <MouseOutlined />
//       </div>

//       <div className="homeContainer">
//         <Typography variant="h3">TIMELINE</Typography>
//         <TimeLine timelines={timelines} />
//       </div>

//       <div className="homeSkills">
//         <Typography variant="h3">SKILLS</Typography>

//         <div className="homeCubeSkills">
//           <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
//             <img src="data:image/png;base64,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" alt="Face1" />
//           </div>

//           <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
//             <img src="data:image/png;base64,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" alt="Face2" />
//           </div>

//           <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
//             <img src="data:image/png;base64,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" alt="Face3" />
//           </div>

//           <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
//             <img src="data:image/png;base64,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" alt="Face4" />
//           </div>

//           <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
//             <img src="data:image/png;base64,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" alt="Face5" />
//           </div>

//           <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
//             <img src="data:image/png;base64,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"alt="Face6" />
//           </div>
//         </div>

//         <div className="cubeShadow"></div>

//         <div className="homeskillsBox" id="homeskillsBox">
//           <SiCplusplus />
//           <SiHtml5 />
//           <SiCss3 />
//           <SiJavascript />
//           <SiMongodb />
//           <SiExpress />
//           <SiReact />
//           <SiNodedotjs />
//           <SiThreedotjs />
//         </div>
//       </div>

//       <div className="homeYoutube">
//         <Typography variant="h3"> YOUTUBE VIDEOS</Typography>

//         {/* <div className="homeYoutubeWrapper">
//           {youtubes.map((item) => (
//             <YoutubeCard
//               image={item.image.url}
//               title={item.title}
//               url={item.url}
//               id={item._id}
//               key={item._id}
//             />
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
//import YoutubeCard from "../YoutubeCard/YoutubeCard";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, youtubes, skills }) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>A</p>
          <p>S</p>
          <p>H</p>
          <p>W</p>
          <p>A</p>
          <p>N</p>
          <p>I</p>
          <p>K</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">TEACHER</Typography>
          <Typography variant="h2">CONTENT CREATOR</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

          <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src="data:image/png;base64,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" alt="Face1" />
           </div>

           <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
             <img src="data:image/png;base64,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" alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
           <img src="data:image/png;base64,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" alt="Face3" />
           </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src="data:image/png;base64,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" alt="Face4" />
           </div>

           <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src="data:image/png;base64,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" alt="Face5" />
          </div>

//           <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
//             <img src="data:image/png;base64,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"alt="Face6" />
//           </div>
//         </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3"> YOUTUBE VIDEOS</Typography>

        {/* <div className="homeYoutubeWrapper">
           {youtubes.map((item) => (
            <YoutubeCard
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
          ))} 
        </div> */}
      </div>
    </div>
  );
};

export default Home;
