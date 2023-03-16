const ButtonSubmit = ({ title, name, type = "text", className, onClick }) => {
    return (
      <>
        <button
          className={`button-component ${className}`}
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
  