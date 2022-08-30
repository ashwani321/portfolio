import { Button, Typography } from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
//import { deleteYoutube, getUser } from "../../actions/user";
import "./YoutubeCard.css";
const YoutubeCard = ({
  url = "https://youtube.com/6packprogrammer",
  title = "Title Here",
  image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAACCCAMAAABsOuS/AAAAkFBMVEX/AAD/////RUX/7Ozs7Oz/BQX/oaH/Fxf/np7/vLz/m5v/MjL/+/v/29v/19f/qan/JSX/8/P/e3v/Ozv/Kyv/a2vr8vL/EBD/lZX/y8v/g4P/0ND/c3P/SUn/ICD/xsb/tLT/X1//iYn/Vlb/ZWXvzs7p/v7xvb3z3d3yoaHr5OT1///zrKz1tLTyyMj/5eWO37IeAAAES0lEQVR4nOWd6XaiMBhACVAUDCpaES2OVKtW2inv/3aTgFoXhADJZLt/Pcfz3ZOVL5sBKgky3/Um20HvxRCOl95gO/FcPwuqHYyK3zI3+vjDW6SePx+Rm7VSXMerOe/oSZmv4nVTRcsZ8w67KWPHaqDoe9KU3zVzzydUhNGUd7BtmUaQRHFh8g60C+aiVtHa8A6yK5v7JnmnOHznHWF33odVim6Pd3w06LlPFeGId3C0GMFyRdjnHRk9+rBU0eMdF028MkWFyhDTf1R0ecdEG/de0ZduTlrH2L9VDKSdsz1nGtwoLnnHw4LlteKadzRsWP8qWlvewbBha10UHd6xsMI5KwavvENhxWtwUlS2EItixIq842BJoZjwDoMlSa444x0GS2ZY8U3Zzgbz+oYUlfkOLmcEDDjhHQRbJtCwBrT/dBqLVPUHluFT/1Mz8DcCfbj4Bv1PYdPCSwbCrNa5Bv2MjZlPfq1IkHU7z4ip/6d5SkdbkRBLB7Gxov6f5iXj/nkUIF2yMugHYV4tKqQO9/z62KC/knitCL7CPv160oi5Qb/nM2+Xhr7Sb65tkkXXbt6vfiFJQXpXWjwoAhDuE1OYgZICJYoAopJUYOnyTJkiLsn0r0DTum48UQQwDA9TKbeCPPBMERVkGH4rkWN4rogl04MCeekqRQDtMNxJ37tWKuaS+0Mst2SNYi5pH6Ruk7WKqEkiyZ3E4ySBIgA2qq4/EwG+tVpBpIhqK+p4fpZyjpNkioWkvZOyTZIq5pL2Pp2IlJMkg1wRN0k8Tm5ka5NNFAtJeyfZFtFmirkkslzKVF2bKuZN0t5/SrRfu7FiIYnaZF+WaV0LxXNttTfcc5JEtFIsJO0wjTjnJIloqVg0STv8PIrf8bRVvEjaR9HbZHtF/AmSS4aO2KmBLoqXkkyPIrfJboonRyR5EHec7KgITiNIeqC+C4Ea3RUBVLui5opKdzeIwFF50EBkjspDPy5BMfZA1NBBEao9Dcf7kXiHTkpLxSwSdxy8p5ViIFUeroXiUPH0FBKUbUNHQ8UslqcNnmmiCIeKJ/zBQtJd28SKb7Fsif4zhItvMt+SQKII1/S3+v5HCBRdKTuZX+oU4ULxTSmBK/YHPRGVionkVbSgQnE9kL2KFjxTtFz5ZmpPKFcMEonHwXtKFUcypGSIeVS0Rlx3EDE/xACyhOvixAvroygA8M4azhkfKLJEOFDE8lhYNhIgY7FiebhvI0QvGutwRJPRQdtImJmay+i4tEBTNZ/FofeZSIntgaXD1QUaXEChwzUiGlwGAxLeYbAk0eViJh2u19LgkjR1i/Fy1Z0OFxZqcO2kDpeH6nAFrAYX+epwHbMOl2or5vhrqOoF9075BfcaPFMAlHls4va1Iu2eDNHh4RegwfM9QIdHmADehy5lt9MjfkoLo/yDaDkLuZ61e2yD9Yp4o0w0k6Awx7PIrdqwVaUI1Hhi8h/IVDp8x7kn5wAAAABJRU5ErkJggg=="
  
}) => {
  const dispatch = useDispatch();

  // const deleteHandler = async (id) => {
  //   await dispatch(deleteYoutube(id));
  //   dispatch(getUser());
  // };

  return (
    <div className="youtubeCard">
      <a href={url} target="blank">
        <img src={image} alt="Video" />
        <Typography>{title}</Typography>
      </a>
      {/*isAdmin && (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
          onClick={() => deleteHandler(id)}
        >
          <FaTrash />
        </Button>
        )*/}
    </div>
  );
};

export default YoutubeCard;