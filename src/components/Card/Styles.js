import styled from "styled-components";

export default styled.div`
  font-family: sans-serif;

  h1 {
    text-align: center;
    color: #222;
  }

  h2 {
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
    margin-bottom: 10px;
  }

  p {
    max-width: 500px;
    margin: 10px auto;
    & > a {
      display: inline;
    }
  }
  input,
  & > .downshift > input,
  & > select,
  & > textarea {
    margin-top: 10px;
    flex: 1;
    padding: 6px 9px;
    font-size: 0.9em;
    border: 1px solid #ccc;
    border-radius: 3px;
    &[disabled] {
      background: #eee;
    }
  }
  .loading {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin: 50px;
  }

  .downshift-options {
    border: 1px solid #ddd;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    & > div {
      padding: 3px 5px;
    }
  }
`;
