export const customSourceStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    cursor: "pointer",
    fontFamily: "Prompt",
  }),
  control: (baseStyles: any, state: any) => ({
    // none of react-select's styles are passed to <Control />
    ...baseStyles,
    width: "50px",
    padding: 0,
    margin: 0,

    border: 0,
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#22262e",
    color: "white",
    fontSize: "15px"
  }),
  menu: (styles: any) => ({ ...styles, width: "90px" }),
  input: (styles: any) => ({ ...styles, color: "white", fontFamily: "Prompt" }),
  singleValue: (styles: any) => ({
    ...styles,
    color: "white",
    fontFamily: "Prompt",
  }),

};

export const customTranslationStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    cursor: "pointer",
    fontFamily: "Prompt",
  }),
  control: (baseStyles: any, state: any) => ({
    // none of react-select's styles are passed to <Control />
    ...baseStyles,
    width: "100%",
    padding: 0,
    margin: 0,
    border: 0,
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#2c3139",
    color: "white",
  }),
  menu: (styles: any) => ({ ...styles, width: "100%" }),
  input: (styles: any) => ({ ...styles, color: "white", fontFamily: "Prompt" }),

  multiValueLabel: (styles: any) => ({
    ...styles,
    backgroundColor: "gray",
    width: "75px",
    color: "white",
    fontFamily: "Prompt",
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: "white",
    fontFamily: "Prompt",
  }),
};
