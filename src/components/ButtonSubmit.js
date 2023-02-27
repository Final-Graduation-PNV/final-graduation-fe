const ButtonSubmit = ({ title, name, type = "text", className, onClick }) => {
    return (
      <>
        <button
          className={`button-submit ${className}`}
          type={type}
          name={name}
          onClick={onClick}
        >
          {title}
        </button>
      </>
    );
  };
  export default ButtonSubmit;
  