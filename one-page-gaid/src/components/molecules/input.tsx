import styles from "./input.module.css";

interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, placeholder, label, onChange, name, ...rest }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        id={name}
        name={name}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

export default Input;