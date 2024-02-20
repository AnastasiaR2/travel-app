import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';

import styles from './styles.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  const handleEscapePress = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.documentElement.style.overflowY = 'hidden';
    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.documentElement.style.overflowY = '';
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [handleEscapePress]);

  return isOpen ? (
    <div className={styles.modal} onClick={handleClickOutside}>
      {children}
    </div>
  ) : null;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export { Modal };
