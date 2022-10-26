import styled from "styled-components";

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 150px;
  :hover {
    cursor: pointer;
  }
  -webkit-tap-highlight-color: transparent;
`;

export const DropDownHeaderContainer = styled.div`
  width: 100%;
  background-color: #21252b;
  border-radius: 8px;
  padding: 15px 30px;
  color: #fff;
  font-weight: bold;
  text-align: left;
  position: relative;
`;

export const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const DropDownList = styled.div`
  width: 100%;
  background-color: #21252b;
  border-radius: 8px;
  padding: 10px;
  color: #fff;
  padding-top: ${(props) => (props.toggled ? "15px" : "0px")};
  position: absolute;
  left: 0;
  top: 75%;
  border-top-left-radius: -20px;
  height: ${(props) => (props.toggled ? "200px" : "0px")};
  transition: all 0.2s ease-in-out;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const DropDownItem = styled.div`
  opacity: ${(props) => (props.toggled ? "1" : "0")};
  transition: background-color 0.2s ease-in-out;
  border-radius: 8px;
  padding: 10px;
  color: #fff;
  :hover {
    background-color: #f5f5f5;
    color: #000;
    cursor: pointer;
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const Arrow = styled.div`
  width: 0px;
  height: 0px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid white;
  border-radius: 4px;
  transform: rotate(${(props) => (props.toggled ? "180deg" : "0deg")})
    translateY(${(props) => (props.toggled ? "-1px" : "1px")});
  transition: all 0.2s ease-in-out;
`;
