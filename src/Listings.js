import React from 'react';
import './Listings.scss';

const listings = [
  { id: 1, image: '/placeholder_vinyl.png', title: 'Item 1', description: 'Description for item 1', price: '$10.00' },
  { id: 2, image: '/placeholder_vinyl.png', title: 'Item 2', description: 'Description for item 2', price: '$20.00' },
  { id: 3, image: '/placeholder_shirt.png', title: 'Item 3', description: 'Description for item 3', price: '$30.00' },
  { id: 4, image: '/placeholder_shirt2.png', title: 'Item 4', description: 'Description for item 4', price: '$40.00' },
  { id: 5, image: '/placeholder_shirt.png', title: 'Item 5', description: 'Description for item 5', price: '$50.00' },
  { id: 6, image: '/placeholder_shirt2.png', title: 'Item 6', description: 'Description for item 6', price: '$60.00' },
  { id: 7, image: '/placeholder_shirt2.png', title: 'Item 7', description: 'Description for item 7', price: '$70.00' },
  { id: 8, image: '/placeholder_vinyl.png', title: 'Item 8', description: 'Description for item 8', price: '$80.00' },
];

const Listings = () => {
  return (
    <div className="listings">
        {listings.map((item) => (
        <div className="listing-item" key={item.id}>
          <img src={process.env.PUBLIC_URL + item.image} alt={item.title} className="listing-image" />
          <div className="listing-details">
            <h2 className="listing-title">{item.title}</h2>
            <p className="listing-description">{item.description}</p>
            <p className="listing-price">{item.price}</p>
            <button className="listing-button listing-buynow-button">Buy Now</button>
            <button className="listing-button listing-details-button">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;
