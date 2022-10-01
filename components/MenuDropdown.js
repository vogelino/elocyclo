import { useState } from "react";

const MenuDropdwonLink = ({ url, text, active }) => (
  <li>
    <a href={url} title={text} className={active ? "active" : ""}>
      {text}
    </a>
  </li>
);

function MenuDropdwon({ dropdownText, links }) {
  const [dropdownOpened, setDropdownVisibility] = useState(false);
  return (
    <div
      className={`
					simple-button
					select-button
					gradient
					${links.find(({ active }) => active) ? "active" : ""}
					${dropdownOpened ? "opened" : "closed"}
				`}
      id="menu-select"
      onMouseOver={() => setDropdownVisibility(true)}
      onMouseOut={() => setDropdownVisibility(false)}
    >
      <span>{dropdownText}</span>
      <section className="simple-button">
        <small className="rotate">&#123;</small>
      </section>
      <ul>
        {links.map((link) => (
          <MenuDropdwonLink key={link.url} {...link} />
        ))}
      </ul>
    </div>
  );
}

export default MenuDropdwon;
