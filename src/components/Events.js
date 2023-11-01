import React from 'react';
import { Link } from 'react-router-dom'; // React Router'dan Link bileşenini import ettik
import 'tailwindcss/tailwind.css';


// bu yapıyı daha sonra backendden çekecek ( events değişkenini)
const events = [
  {
    title: 'Etkinlik 1 İstanbul Bayrampaşa',
    date: '25 Ekim 2023',
    location: 'İstanbul, Türkiye',
    id: 1
  },
  {
    title: 'Etkinlik 2 Ankara Gölbaşı',
    date: '30 Ekim 2023',
    location: 'Ankara, Türkiye',
    id: 2
  },
  {
    title: 'Seminer 1 İzmir Karşıyaka ',
    date: '5 Kasım 2023',
    location: 'İzmir, Türkiye',
    id: 3
  },
  {
    title: 'Seminer 1 İzmir Karşıyaka ',
    date: '5 Kasım 2023',
    location: 'İzmir, Türkiye',
    id: 3
  },
  {
    title: 'Seminer 1 İzmir Karşıyaka ',
    date: '5 Kasım 2023',
    location: 'İzmir, Türkiye',
    id: 3
  },
  {
    title: 'Seminer 1 İzmir Karşıyaka ',
    date: '5 Kasım 2023',
    location: 'İzmir, Türkiye',
    id: 3
  },
  {
    title: 'Seminer 1 İzmir Karşıyaka ',
    date: '5 Kasım 2023',
    location: 'İzmir, Türkiye',
    id: 3
  },
  {
    title: 'Seminer 1 İzmir Karşıyaka ',
    date: '5 Kasım 2023',
    location: 'İzmir, Türkiye',
    id: 3
  },
  // daha fazla etkinlik ekleyebileceğim yer
];

const Etkinlikler = () => {
  return (
    <div className=" mt-12  2xl:h-48 2xl:w-[730px] 2xl:pl-36 2xl:font-bold   xl:w-[440px] lg: md:w-80 md:h-36   "  style={{ overflowY: "scroll", maxHeight: "400px" }}>
      <div className='' >
          <h1 className="xl:text-xl font-bold  md:text-left md:w-96 md:text-[15px] mb-2  ">Etkinlikler ve Seminerler</h1>
      </div>
    
      <ul className="list-disc w-full">
        {events.map((event) => (
          <li key={event.id} className="mb-4 w-[400px] xl:text-[10px] md:text-[10px] ">
            {/* Her etkinlik öğesini Link bileşeni içine alarak, tıklamada yönlendirme yapabiliriz */}
            <Link to={`/events/${event.id}`} className="text-sm font-m">
              {event.title}
            </Link>
            <div className="text-gray-600 w-[400px]">{event.date}</div>
            <div className="text-gray-600 w-[400px]">{event.location}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Etkinlikler;
