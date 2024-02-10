const Home = () => {
    const items = [
      { id: 1, label: 'Grocery', image: './images/grocery.webp' },
      { id: 2, label: 'Mobiles', image: './images/mobile.webp' },
      { id: 3, label: 'Fashion', image: './images/fashion.webp' },
      { id: 4, label: 'Electronics', image: './images/electronic.webp' },
      { id: 5, label: 'Home & Furniture', image: './images/home.webp' },
      { id: 6, label: 'Appliances', image: './images/appliance.webp' },
      { id: 7, label: 'Travel', image: './images/travel.webp' },
      { id: 8, label: 'Beauty, Toy & More', image: './images/Beauty.webp' },
      { id: 9, label: 'Two Wheelers', image: './images/bike.webp' },
    ];
  
    return (
      <div className="flex overflow-x-auto p-4 px-15 py-1  shadow-md shadow-lg border">
        <div className="flex space-x-8 justify-between w-full px-12">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center px-9">
              <img src={item.image} alt={item.label} className="w-20 h-20 object-cover" />
              <label className="mt-2 text-sm font-bold">{item.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;
  