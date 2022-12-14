import mainTheme from "../../styles/mainTheme.js";

const { spacings, colors } = mainTheme;

const buttonStyle = `
  button {
    cursor: pointer;
    user-select: none;
    font: inherit;
    outline: none;
    border: none;
  }

  .button {
    display: flex;
    justify-content: center;
    padding: 0.8rem 1.8rem;
    border-radius: ${spacings.small};
    border: 1px solid transparent;
    width: fit-content;

    font-weight: bold;
    letter-spacing: 0.6px;
    background-color: ${colors.typography};
    color: ${colors.primary};

    transition: 0.3s ease;
  }

  .button:hover {
    background-color: transparent;
    color: ${colors.typography};
    border-color: ${colors.typography};
  }

  .button:active {
    transform: scale(0.9);
  }
  
`;

export default buttonStyle;
