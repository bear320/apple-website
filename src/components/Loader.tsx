import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[10vw] w-[10vw] rounded-full">Loading...</div>
      </div>
    </Html>
  );
};

export default Loader;
