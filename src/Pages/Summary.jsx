import React, { createRef } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import SummaryHeader from "../Components/summary/SummaryHeader";
import SummaryBody from "../Components/summary/SummaryBody";

function Summary() {

  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = "Loan_Amount", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);


  return (
    <div  className="home ">
      <div  className="inner_home ">
        <div ref={ref}className="top background2">
          <SummaryHeader download={downloadScreenshot}/>
        </div>
        <div className="bottom background1">
          <SummaryBody  />
        </div>
      </div>
    </div>
  );
}

export default Summary;
