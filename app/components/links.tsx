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
    url:  'http://accell.dev/assets/files/ericcolon_resume.pdf',
  },
  {
    name: 'Email',
    url:  'mailto:me@ericcolon.com',
  },
];

const Links = () => {
  const linkNodes = data.map((link) => {
    return (
      <li key={link.name}>
        <a
          className="relative block py-1 px-0.5 transition-all ease-linear bg-gray-500 border-[#252525] bit-border-step3 hover:bg-gray-600"
          href={link.url}
          title={link.name}
        >
          <img
            className="block mx-auto w-8 h-8 min-h-8 min-w-8 [image-rendering:pixelated]"
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
    <ul className="flex flex-row items-center gap-3 px-2 bg-gray-300">
      {linkNodes}
    </ul>
  );
};

export default Links;