export default function Navbar({ toggle }) {
  return (
    <div className="bg-blue-500 shadow">
      <div className="mx-auto container h-20 flex justify-center items-center lg:justify-start">
        {/* On Click allows forms to reset */}
        <h1
          className="text-3xl text-gray-100 hover:cursor-pointer"
          onClick={toggle}
        >
          Compress<span className="text-yellow-400">URL</span>
        </h1>
      </div>
    </div>
  );
}
