import CatAvatar from '~/assets/images/cat-avatar.png';

import styles from './styles.module.css';

const mockedUser = {
  name: 'Cat',
  email: 'cat@gmail.com',
  image: CatAvatar,
};

const HeaderAvatar = () => {
  return (
    <div className={styles.avatar}>
      <img src={mockedUser.image} alt={mockedUser.name} />
    </div>
  );
};

export { HeaderAvatar };
