import React from "react";

const Map = () => {
  return (
    <div className="row ">
      <div className="col-sm-12 col-12 rounded-md">
        <iframe
          title="CamJustice Law Firm"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.28469547376434!2d104.90059000130314!3d11.58371619051593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951ce0b8c490f%3A0x40b175161afae10f!2sCamJustice%20Law%20Firm!5e0!3m2!1sen!2skh!4v1737824604868!5m2!1sen!2skh"
          width="100%"
          height="350"
          style={{
            borderRadius: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
