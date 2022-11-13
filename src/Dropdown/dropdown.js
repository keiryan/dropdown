import { useState } from "react";
import {
  DropDownContainer,
  DropDownHeaderContainer,
  DropDownHeader,
  DropDownList,
  DropDownItem,
  Arrow,
} from "./dropdown.styles";

function DropDown(props) {
  const [toggled, setToggled] = useState(false);
  const [value, setValue] = useState("");

  const handleToggle = () => {
    setToggled(!toggled);
  };

  const handleItemClick = ({ target }) => {
    setValue(target.innerText);
    props.handleToggle(target.innerText);
  };
  return (
    <DropDownContainer>
      <DropDownHeaderContainer onClick={handleToggle}>
        <DropDownHeader toggled={toggled}>
          {value || "Value"}
          <Arrow toggled={toggled} />
        </DropDownHeader>

        <DropDownList toggled={toggled}>
          {props.list.map((item, index) => (
            <DropDownItem
              key={Math.random()}
              onClick={handleItemClick}
              toggled={toggled}
            >
              {index + 1}
            </DropDownItem>
          ))}
        </DropDownList>
      </DropDownHeaderContainer>
    </DropDownContainer>
  );
}

export default DropDown;
