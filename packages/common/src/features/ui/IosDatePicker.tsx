import './IosDatePicker.css';
import styles from './IosDatePicker.module.css';

function IosDatePicker() {
  console.log(styles);

  return (
    <div
      className={styles.root}
      style={{
        color: 'blue',
      }}
    >
      IosDatePicker
    </div>
  );
}

export default IosDatePicker;
