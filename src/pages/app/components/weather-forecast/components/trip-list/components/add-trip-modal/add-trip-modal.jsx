import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CloseIcon from '~/assets/images/icons/close-icon.svg?react';
import { Modal } from '~/components/components.js';
import cities from '~/data/cities.json';

import { calculateDateRange } from './helpers/helpers.js';
import styles from './styles.module.css';

const NUMBER_OF_DAYS = 15;

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
      const { startDate, endDate, city } = currentTrip;
      const selectedCity = cities.find((item) => item.title === city);
      const { image } = selectedCity;

      const finalTrip = {
        id: uuidv4(),
        city,
        image,
        startDate,
        endDate,
        createdAt: new Date().toISOString(),
      };

      onSave(finalTrip);
    } else {
      form.reportValidity();
    }
  };

  const { minDate, maxDate } = calculateDateRange(NUMBER_OF_DAYS);

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
                min={minDate}
                max={maxDate}
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
                min={minDate}
                max={maxDate}
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

AddTripModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { AddTripModal };
