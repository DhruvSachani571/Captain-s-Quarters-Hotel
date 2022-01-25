import React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";


function Loader(){
    let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

    return(
        <div style={{marginTop:'150px'}} >
            <div className="sweet-loading text-center">
      

      <PuffLoader color={'#000'} loading={loading} css='' size={80} />
    </div>

        </div>
    )

}

export default Loader