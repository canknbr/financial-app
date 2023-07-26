import React from "react";
import "./index.css";
import user1 from "../images/user1.jpeg";
import user2 from "../images/user2.jpeg";
import user3 from "../images/user3.jpeg";

const users = [
  {
    id: 1,
    image: user1,
    name: "John Doe",
    title: "CEO",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    image: user2,
    name: "Jane Doe",
    title: "CTO",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 3,
    image: user3,
    name: "John Smith",
    title: "COO",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="line"></div>
        <div className="content">
          {users.map((user) => (
            <Card key={user.id} {...user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const Card = ({ image, name, title, quote }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p>{quote}</p>
      <p>
        <span>{name}</span>
      </p>
      <p>{title}</p>
    </div>
  );
};
