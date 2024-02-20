import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react';
import DatePicker from 'react-datepicker';

import CalendarIcon from '~/assets/images/icons/calendar-icon.svg?react';
import CloseIcon from '~/assets/images/icons/close-icon.svg?react';
import { Modal } from '~/components/components.js';

import styles from './styles.module.css';

const AddTripModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null,
  });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
              <span>*</span> Start Date
            </p>
            <CalendarIcon />
            <DatePicker
              closeOnScroll={true}
              selected={formData.startDate}
              onChange={(date) => setFormData({ ...formData, startDate: date })}
              dateFormat="dd.MM.yyyy"
              placeholderText="Select date"
              required
              popperPlacement="bottom-start"
              showPopperArrow={false}
              popperClassName={styles.popper}
            />
          </label>
          <label className={styles.label}>
            <p>
              <span>*</span> End Date
            </p>
            <CalendarIcon />
            <DatePicker
              selected={formData.endDate}
              onChange={(date) => setFormData({ ...formData, endDate: date })}
              dateFormat="dd.MM.yyyy"
              placeholderText="Select date"
              required
              popperPlacement="bottom-start"
              showPopperArrow={false}
            />
          </label>
        </form>
        <div>
          {/* <button>Cancel</button>
          <button>Save</button> */}
        </div>
      </div>
    </Modal>
  );
};

export { AddTripModal };
