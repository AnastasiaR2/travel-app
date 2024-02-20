import { useState } from 'react';

import CloseIcon from '~/assets/images/icons/close-icon.svg?react';
import { Modal } from '~/components/components.js';
import cities from '~/data/cities.json';

import styles from './styles.module.css';

const AddTripModal = ({ trip, onSave, onClose }) => {
  const [currentTrip, setCurrentTrip] = useState(trip);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCurrentTrip({ ...currentTrip, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target.form;

    if (form.checkValidity()) {
      const tripId = Math.random();
      const { startDate, endDate, city } = currentTrip;

      const finalTrip = {
        tripId,
        startDate,
        endDate,
        city,
      };

      onSave(finalTrip);
    } else {
      form.reportValidity();
    }
  };

  return (
    <Modal isOpen={Boolean(currentTrip)} onClose={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <h3>Create trip</h3>
          <button>
            <CloseIcon />
          </button>
        </div>
        <form className={styles.form}>
          <label className={styles.label}>
            <p>
              <span>*</span> City
            </p>
            <select name="city" required onChange={handleChange}>
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city.title} value={city.title}>
                  {city.title}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            <p>
              <span>*</span> Start Date
            </p>
            <input
              type="date"
              name="startDate"
              required
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            <p>
              <span>*</span> End Date
            </p>
            <input
              type="date"
              name="endDate"
              required
              onChange={handleChange}
            />
          </label>
          <div>
            <button>Cancel</button>
            <button onClick={handleSubmit}>Save</button>
          </div>
        </form>
        {/* <div>
          <button>Cancel</button>
          <button onClick={handleSubmit}>Save</button>
        </div> */}
      </div>
    </Modal>
  );
};

export { AddTripModal };
