import { useState } from 'react';

import CloseIcon from '~/assets/images/icons/close-icon.svg?react';
import { Modal } from '~/components/components.js';
import cities from '~/data/cities.json';

import styles from './styles.module.css';

const AddTripModal = ({ isOpen, onSave, onClose }) => {
  const [currentTrip, setCurrentTrip] = useState({
    city: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentTrip({ ...currentTrip, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

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
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>Create trip</h3>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formBody}>
            <label className={styles.label}>
              <p>
                <span>*</span> City
              </p>
              <select name="city" required onChange={handleChange}>
                <option value="" hidden>
                  Select a city
                </option>
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
          </div>
          <div className={styles.formFooter}>
            <button className={styles.cancelBtn} type="reset">
              Cancel
            </button>
            <button className={styles.saveBtn} type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export { AddTripModal };
