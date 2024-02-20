const data = [
  {
    id        : 'addictioncenter',
    link      : 'https://www.addictioncenter.com',
    linkTitle : 'Visit Addiction Center',
    image     : 'addictioncenter.jpg',
    name      : 'Addiction Center',
    desc      : 'Online guide to addiction and recovery',
    year      : '2016',
  },
  {
    id        : 'bazaar',
    link      : 'http://bazaar.tf',
    linkTitle : 'Visit the Bazaar.tf trading platform',
    image     : 'bazaar.png',
    name      : 'Bazaar.tf',
    desc      : 'Digital item trading playform powered by Steam',
    year      : '2012',
  },
  {
    id        : 'avime',
    link      : 'https://avime.com',
    linkTitle : 'Visit the Avime project',
    image     : 'avime.png',
    name      : 'Avime',
    desc      : 'Anime-inspired Web3/NFT dress-up game',
    year      : '2021',
  },
  {
    id        : 'mesohub',
    link      : 'https://www.mesotheliomahub.com/',
    linkTitle : 'Visit Mesothelioma Hub',
    image     : 'mesohub.jpg',
    name      : 'Mesothelioma Hub',
    desc      : 'Online guide for mesothelioma and other asbestos-related illnesses',
    year      : '2018',
  },
  {
    id        : 'bbsny',
    link      : 'https://web.archive.org/web/20190124200815/http://borisbidjansaberiny.com/',
    linkTitle : 'Visit the BBSNY store website archive',
    image     : 'bbsny.jpg',
    name      : 'Boris Bidjan Saberi NY',
    desc      : 'Online storefront for high-fashion brand',
    year      : '2018',
  },
  {
    id        : 'knightHacks',
    link      : 'http://knighthacks.org',
    linkTitle : 'Visit the Knight Hacks hackathon website',
    image     : 'knighthacks.png',
    name      : 'Knight Hacks',
    desc      : 'Annual hackathon hosted at UCF',
    year      : '2016',
  },
  {
    id        : 'revGroup',
    link      : 'http://www.revgroup.com',
    linkTitle : 'Visit the REV Group website',
    image     : 'revgroup.png',
    name      : 'REV Group',
    desc      : 'Large specialty vehicle conglomerate website',
    year      : '2015',
  },
  {
    id        : 'thisOrThat',
    link      : 'https://materia.ucf.edu/widgets/80-this-or-that',
    linkTitle : 'Visit the This or That widget demo',
    image     : 'thisorthat.png',
    name      : 'This or That',
    desc      : 'Interactive educational widget use in online courses at UCF',
    year      : '2014',
  },
  {
    id        : 'udoit',
    link      : 'https://cdl.ucf.edu/teach/accessibility/udoit/',
    linkTitle : 'Visit the UDOIT project',
    image     : 'udoit.png',
    name      : 'UDOIT',
    desc      : 'Application for validating online course accessibility',
    year      : '2014',
  },
  {
    id        : 'onlineUcf',
    link      : 'https://online.ucf.edu',
    linkTitle : 'Visit the Online@UCF website',
    image     : 'onlineucf.png',
    name      : 'Online@UCF',
    desc      : 'Website for UCF online resources',
    year      : '2013',
  },
  {
    id        : 'discovery',
    link      : 'https://www.deviantart.com/radical171/art/IPB-3-0-x-Skin-Discovery-147764783',
    linkTitle : 'View this IP Board skin on DeviantArt',
    image     : 'discovery.png',
    name      : 'Discovery IPB Skin',
    desc      : 'Free skin for the IP Board forum software',
    year      : '2009',
  },
  {
    id        : 'rocommunity',
    link      : 'https://rickowens.community/',
    linkTitle : 'Visit the Rick Owens community database',
    image     : 'rocommunity.jpg',
    name      : 'Rick Owens Community',
    desc      : 'Online community for everything Rick Owens (Coming Soon)',
    year      : '2024',
  },
];

const Projects = () => {
  const projectNodes = data.map((project) => {
    let divStyle = {
      backgroundImage: `url(/assets/images/projects/${project.image})`,
      backgroundPosition: 'center center',
    };

    if (project.id === 'bazaar' || project.id === 'onlineUcf') {
      divStyle.backgroundPosition = 'top left';
    }

    return (
      <li
        key={project.id}
        className="block overflow-hidden border-2 border-gray-500"
      >
        <a
          className="relative flex flex-col text-white bg-gray-400 aspect-video group"
          href={project.link}
          title={project.linkTitle}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          <div
            className="absolute inset-0 overflow-hidden transition-all duration-300 ease-linear bg-no-repeat bg-cover opacity-60 group-hover:blur-sm group-hover:brightness-50"
            style={divStyle}
          ></div>
          <div className="relative z-20 flex flex-col items-center justify-center w-full p-4 mt-auto transition-opacity duration-300 ease-linear bg-black/50 sm:bg-transparent sm:mt-0 sm:h-full sm:opacity-0 sm:group-hover:opacity-100">
            <h2 className="mb-2 text-base font-black tracking-wider uppercase">
              {project.name}
            </h2>
            <p className="text-sm tracking-wide">
              {project.desc}
            </p>
          </div>
        </a>
      </li>
    );
  });

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projectNodes}
    </ul>
  );
};

export default Projects;