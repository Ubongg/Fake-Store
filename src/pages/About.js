import React from "react";
import about from "../assets/main.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-50">
          <div className="text">
            <h2 className="title-text">Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus laudantium a odit ea nisi impedit modi beatae expedita,
            perspiciatis, placeat vitae veniam, reiciendis earum! Totam numquam
            veniam minima cupiditate voluptatum dignissimos accusantium rerum
            natus eos sed beatae molestias hic voluptate voluptates distinctio
            adipisci inventore nisi exercitationem, dolores amet facilis? Veniam
            assumenda, enim ipsam delectus molestiae culpa magni libero eum
            dolor aliquam! Repellat voluptatum qui voluptas assumenda officia
            dolorem excepturi reiciendis aspernatur cupiditate dolorum nemo
            dolor ea, itaque at numquam enim? Aspernatur velit libero unde
            ducimus esse, iusto earum ipsum nobis illo. Quidem voluptatum
            repellendus iure. Dolores sapiente deserunt molestiae consequatur?
          </p>
        </div>
        <div className="col-50">
          <div className="img-bx">
            <img src={about} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
