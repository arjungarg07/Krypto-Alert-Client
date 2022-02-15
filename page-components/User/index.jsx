import styles from './User.module.css';
import UserHeader from './UserHeader';

export const User = (props) => {
  console.log("inside user", props);
  return (
    <div className={styles.root}>
      <UserHeader user={props.user} />
    </div>
  );
};
