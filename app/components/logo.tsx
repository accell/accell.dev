const Logo = () => {
  return (
    <h1 className="flex items-center pl-2 mb-3 text-base font-black leading-none tracking-wider uppercase bg-gray-300">
      <img
        className="block mx-auto min-w-16 min-h-14"
        src="/assets/images/logo.png"
        alt="Eric Colon"
        width="64"
        height="58"
      />
      <span className="flex-1 block ml-2">
        <span className="block">
          Accell
        </span>
        <hr className="block my-1 border border-gray-500"/>
        <span className="block text-xs font-bold tracking-wider uppercase whitespace-nowrap">
          Builds nice things
        </span>
      </span>
    </h1>
  );
};

export default Logo;