import { useState } from 'react';
import Logo from "../components/logo";
import Footer from "../components/footer";

const data = {
  active: {
    title: 'Active',
    items: [
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
        id        : 'mesohub',
        link      : 'https://www.mesotheliomahub.com/',
        linkTitle : 'Visit Mesothelioma Hub',
        image     : 'mesohub.jpg',
        name      : 'Mesothelioma Hub',
        desc      : 'Online guide for mesothelioma and other asbestos-related illnesses',
        year      : '2018',
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
        id        : 'rocommunity',
        link      : 'https://rickowens.community/',
        linkTitle : 'Visit the Rick Owens community database',
        image     : 'rocommunity.jpg',
        name      : 'Rick Owens Community',
        desc      : 'Online community for everything Rick Owens (Coming Soon)',
        year      : '2024',
      },
    ],
  },
  legacy: {
    title: 'Legacy',
    items: [
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
        link      : 'https://club.knighthacks.org/',
        linkTitle : 'Visit the Knight Hacks hackathon website',
        image     : 'knighthacks.png',
        name      : 'Knight Hacks',
        desc      : 'Annual hackathon hosted at UCF',
        year      : '2016',
      },
      {
        id        : 'udoit',
        link      : 'https://cdl.ucf.edu/teach/accessibility/udoit/',
        linkTitle : 'Visit the UDOIT project',
        image     : 'udoit.png',
        name      : 'UDOIT',
        desc      : 'Application for validating online course accessibility',
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
        id        : 'onlineUcf',
        link      : 'https://online.ucf.edu',
        linkTitle : 'Visit the Online@UCF website',
        image     : 'onlineucf.png',
        name      : 'Online@UCF',
        desc      : 'Website for UCF online resources',
        year      : '2014',
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
    ],
  },
};

const Projects = () => {
  const [tab, setTab] = useState('active');

  function handleTabChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setTab(event.currentTarget.href.split('#')[1]);
  }

  return (
    <section className="relative flex flex-col flex-1 text-neutral-800 -mt-[30px] -mb-[22px]">
      <header className="relative z-20 flex flex-col items-center justify-center sm:flex-row sm:items-end sm:justify-between">
        <Logo />

        <div className="flex items-end sm:pr-4">
          <h2 className="pb-1 pr-2 text-base font-black leading-none tracking-wider uppercase">
            Projects:
          </h2>

          {Object.keys(data).map((category) => (
            <a
              key={category}
              className={
                (tab == category)
                  ? 'active relative block px-3 pt-2 pb-1 text-white text-base font-black leading-none tracking-wider uppercase bg-gray-500 border-[#252525] border-b-0 bit-border-step3-tab'
                  : 'inactive relative block px-3 pt-2 pb-1 text-black text-base font-black leading-none tracking-wider uppercase bg-gray-600 border-[#252525] border-b-0 bit-border-step3-tab'
              }
              href={`#${category}`}
              onClick={handleTabChange}
            >
              {data[category].title}
            </a>
          ))}
        </div>
      </header>

      <div className="relative mb-3 z-10 flex flex-col py-3 px-2 flex-1 bg-gray-500 border-[#252525] bit-border-step3">
        {Object.keys(data).map((category) => (
          <div
            className="w-full max-w-full"
            key={category}
            style={(tab == category) ? { display: 'block' } : { display: 'none' }}
          >
            <div className="p-2 bg-gray-600 border-[#252525] bit-border-step2">
              <div className="pb-1 pr-1 overflow-y-scroll max-h-80">
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 w-max">
                  {data[category].items.map((item) => (
                    <li
                      key={item.id}
                      className="relative block border-[#252525] bit-border-step1"
                    >
                      <a
                        className="relative flex flex-col h-40 overflow-hidden text-center text-white bg-gray-400 w-72 after:absolute after:block after:inset-0 after:shadow-inset-pixelated-alt aspect-video group"
                        href={item.link}
                        title={item.linkTitle}
                        rel="nofollow noreferrer noopener"
                        target="_blank"
                      >
                        <figure className="relative h-full overflow-hidden">
                          <img
                            className="absolute inset-0 object-cover object-top w-full h-full"
                            src={`/assets/images/projects/${item.image}`}
                            alt={item.name}
                          />
                          <figcaption className="absolute bottom-0 z-20 flex flex-col items-center justify-center w-full p-4 mt-auto transition-opacity duration-300 ease-linear bg-black/50 sm:mt-0 sm:h-full sm:opacity-0 sm:group-hover:opacity-100">
                            <p className="mb-2 text-base font-black tracking-wider uppercase">
                              {item.name}
                            </p>
                            <p className="text-base tracking-wide">
                              {item.desc}
                            </p>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </section>
  );
};

export default Projects;