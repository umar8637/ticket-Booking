import React, { useState } from "react";
import "./TicketBooking.css";

const TicketBooking = () => {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [tickets, setTickets] = useState([]);
  const [editTicket, setEditTicket] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: Date.now(),
      name: name,
      from: from,
      destination: destination,
      time: time,
      date: date,
    };

    setTickets([...tickets, newTicket]);

    setName("");
    setFrom("");
    setDestination("");
    setTime("");
    setDate("");
    alert(`Dear Cutomer ${name} your Seat has been booked`);
  };

  const handleDeleteTicket = (id) => {
    const filtered = tickets.filter((ticket) => ticket.id !== id);
    setTickets(filtered);
  };

  const handleEditTicket = (editTicketIndex) => {
    const ticketToEdit = tickets[editTicketIndex];
    setEditTicket(editTicketIndex);

    setName(ticketToEdit.name);
    setFrom(ticketToEdit.from);
    setDestination(ticketToEdit.destination);
    setTime(ticketToEdit.time);
    setDate(ticketToEdit.date);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    const updatedTickets = [...tickets];
    updatedTickets[editTicket] = {
      ...updatedTickets[editTicket],
      name: name,
      from: from,
      destination: destination,
      time: time,
      date: date,
    };

    setTickets(updatedTickets);
    setEditTicket(null);
    setName("");
    setFrom("");
    setDestination("");
    setTime("");
    setDate("");
    alert(`Dear Cutomer ${name} changes has been made`);
  };
  return (
    <>
      <div className="ticket-booking-container">
        <h1 style={{ textAlign: "center" }}>Ticket Booking</h1>
        <form onSubmit={handleSubmit} className="ticket-form">
          <input
            type="text"
            placeholder="Your Name"
            name="personName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Departure Address"
            name="name"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Destination Address"
            name="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />

          <input
            type="time"
            placeholder="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <input
            type="date"
            placeholder="Date"
            name="time"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          {editTicket === null ? (
            <button type="submit">Confirm</button>
          ) : (
            <button type="button" onClick={handleSaveChanges}>
              Confirm Changes
            </button>
          )}
        </form>
      </div>

      <div className="ticket-list">
        <ul>
          {tickets.map((ticket, index) => (
            <li className="ticket-card" key={ticket.id}>
              <div className="ticket-details">
                <span>
                  <h4 style={{ textAlign: "center" }}>
                    Ticket Holder: {ticket.name}
                  </h4>
                </span>
                <span>From: {ticket.from}</span>
                <span>To: {ticket.destination}</span>
                <span>Time: {ticket.time}</span>
                <span>Date: {ticket.date}</span>
                <button
                  className="edit-button"
                  onClick={() => handleEditTicket(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteTicket(ticket.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TicketBooking;
