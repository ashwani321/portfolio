// import { Button, Typography } from "@mui/material";
// import React from "react";
// import "./Projects.css";
// import { AiOutlineProject } from "react-icons/ai";
// import { Delete } from "@mui/icons-material";
// import { FaRegSmileWink } from "react-icons/fa";
// import { deleteProject, getUser } from "../../actions/user";
// import { useDispatch } from "react-redux";

// export const ProjectCard = ({
//   url,
//   projectImage,
//   projectTitle,
//   description,
//   technologies,
//   isAdmin = false,
//   id,
// }) => {
//   const dispatch = useDispatch();

//   const deleteHandler = async (id) => {
//     await dispatch(deleteProject(id));
//     dispatch(getUser());
//   };

//   return (
//     <>
//       <a href={url} className="projectCard" target="black">
//         <div>
//           <img src={projectImage} alt="Project" />
//           <Typography variant="h5">{projectTitle}</Typography>
//         </div>
//         <div>
//           <Typography variant="h4"> About Project</Typography>
//           <Typography>{description}</Typography>
//           <Typography variant="h6">Tech Stack: {technologies}</Typography>
//         </div>
//       </a>

//       {isAdmin && (
//         <Button
//           style={{ color: "rgba(40,40,40,0.7)" }}
//           onClick={() => deleteHandler(id)}
//         >
//           <Delete />
//         </Button>
//       )}
//     </>
//   );
// };

// const Projects = ({ projects }) => {
//   return (
//     <div className="projects">
//       <Typography variant="h3">
//         Projects <AiOutlineProject />
//       </Typography>

//       <div className="projectsWrapper">
//         {projects.map((item) => (
//           <ProjectCard
//             id={item._id}
//             key={item._id}
//             url={item.url}
//             projectImage={item.image.url}
//             projectTitle={item.title}
//             description={item.description}
//             technologies={item.techStack}
//           />
//         ))}
//       </div>

//       <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
//         All The Projects Shown Above Are Made By Me <FaRegSmileWink />
//       </Typography>
//     </div>
//   );
// };



// const ProjectCard=({
//     url,projectImage,projectTitle,description,technologies,isAdmin=false,
// })=>{
//     return (<>
//     <a href="url " className="projectCard" target="black">
//     <div>
//         <img src={projectImage} alt="project"/>
//     </div>
//     <div>
//     <Typography variant="h4">
//                 About Project
//             </Typography>
//             <Typography >
//                 {description}
//             </Typography>
//             <Typography variant="h6">
//                Tech Stack: {technologies}
//             </Typography>
//     </div>
//     </a>
//             {isAdmin && (
//         <Button  style={{ color: "rgba(40,40,40,0.7)" }}>
//           {/*onClick={() => deleteHandler(id)} */}
        
//           <Delete />
//         </Button>
//       )} 

//     </>);
// };
// const Projects=()=>{
//     const projects=[2,3,5];
//     return(
//         <div className="projects">
//             <Typography variant="h3">
//                 projects<AiOutlineProject/>
//             </Typography>
//                   <div className="projectsWrapper">
//          {projects.map((project,index) => (
//            <ProjectCard
//              id="ABC"
//              key="RAbi"
//              url="https://www.google.com/search?q=6+pack+programmer&rlz=1C1VDKB_enIN988IN988&sxsrf=ALiCzsY3kPRTFGyZkdbLkLwfli_22jjYbg:1652517305377&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiLiOPXyt73AhXO63MBHd5pBJ8Q_AUoAnoECAEQBA&biw=1366&bih=657&dpr=1"
//              projectImage="data:image/jpeg;base64,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"
//              projectTitle="my title"
//              description="This is the best project"
//              technologies="html,css,jsx"
//            />
//          ))}
         
//        </div>
//        <Typography variant="h3" style={{font:"100 1.2rem 'Ubuntu Mono'"}}>
//              All the project shown are made by me <FaRegSmileWink />
//          </Typography>
//         </div>
//     )
// }
// export default Projects;
import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            id={item._id}
            key={item._id}
            url={item.url}
            projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            technologies={item.techStack}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;