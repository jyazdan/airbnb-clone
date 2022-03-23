import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";


function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  const newStartDate = format(new Date(startDate), "MMMM dd, yyyy");
  const newEndDate = format(new Date(endDate), "MMMM dd, yyyy");
  const range = `${newStartDate} - ${newEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">
            300+ Stays between {range} for {numOfGuests} Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden md:inline-flex lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="btn">Cancellation Flexibility</p>
            <p className="btn">Type of Place</p>
            <p className="btn">Price</p>
            <p className="btn">Rooms and Beds</p>
            <p className="btn">More Filters</p>
          </div>

          <div className="flex flex-col">
          {searchResults.map(({img, location, title, description, star, price, total}) => (
            <InfoCard 
            key={img}
            img={img}
            location={location}
            title={title}
            description={description}
            star={star}
            price={price}
            total={total}/>
          ))}
          </div>
          
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
