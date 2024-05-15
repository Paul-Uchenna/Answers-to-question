import { TypeAnimation } from "react-type-animation";

function TextEffect() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Building frontend interfaces",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Developing scalable backend systems",
        1500,
        "Working with databases",
        1500,
        "Deploying applications to the cloud",
        1500,
      ]}
      // wrapper="span"
      speed={50}
      // style={{ fontSize: "2em", display: "inline-block" }}
      className="text-[1.5rem] md:text[3rem] text-[#55e6a5] my-6 font-bold uppercase"
      repeat={Infinity}
    />
  );
}

export default TextEffect;
