const data = [
  {
    name: 'Github',
    url:  'https://github.com/accell',
  },
  {
    name: 'LinkedIn',
    url:  'https://linkedin.com/in/ericccolon',
  },
  {
    name: 'Resume',
    url:  'http://accell.dev/assets/docs/ericcolon_resume.pdf',
  },
  {
    name: 'Email',
    url:  'mailto:me@accell.dev',
  },
];

const Links = () => {
  let linkNodes = data.map((link) => {
    return (
      <li>
        <a
          key={link.name}
          className="block p-2 transition-all ease-linear shadow-inset-pixelated bg-[#515151] border-2 border-[#252525] hover:bg-gray-500"
          href={link.url}
          title={link.name}
        >
          <img
            className="block mx-auto w-8 h-8 [image-rendering:pixelated]"
            src={`/assets/images/icons/${link.name.toLowerCase()}.png`}
            alt={link.name}
            width="32"
            height="32"
          />
        </a>
      </li>
    );
  });

  return (
    <ul className="flex flex-row items-center justify-center gap-4 mb-12 text-center">
      {linkNodes}
    </ul>
  );
};

export default Links;