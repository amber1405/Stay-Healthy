import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM','12:00 PM','1:00 PM', '2:00 PM', '3:00 PM','4:00 PM','5:00 PM'];
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
    const handleDateSelection = (date) => {
        setSelectedDate(date);
      };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (!name || !phoneNumber || !selectedSlot || !selectedDate) {
        alert('Please fill out all fields before submitting.');
        return;
      }
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
      setSelectedSlot(null);
      setSelectedDate(null);
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="selectedSlot">Select Time Slot:</label>
        {/* Assume slots are passed as props from parent component */}
        <select
          id="selectedSlot"
          value={selectedSlot}
          onChange={(e) => handleSlotSelection(e.target.value)}
          required
        >
          <option value="" disabled>Select a time slot</option>
          {/* Map over the available time slots and create options */}
          {/* For example, assuming timeSlots is an array of available slots */}
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="selectedDate">Select Date:</label>
        {/* Assume dates are passed as props from parent component */}
        <input
          type="date"
          id="selectedDate"
          value={selectedDate}
          onChange={(e) => handleDateSelection(e.target.value)}
          required
        />
      </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
