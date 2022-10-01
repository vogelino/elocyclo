import { useState } from "react";

const TabsNavItem = ({ currentTabIndex, onTabClick, tabTitle, tabIndex }) => (
  <li
    className={currentTabIndex === tabIndex ? "active" : ""}
    onClick={() => onTabClick(tabIndex)}
  >
    <a className="simple-button gradient tab-button">{tabTitle}</a>
  </li>
);

const TabsNav = ({ tabs, currentTabIndex, onTabClick }) => (
  <ul className="tab-nav">
    {tabs.map((tab) => (
      <TabsNavItem
        {...tab}
        key={tab.tabIndex}
        currentTabIndex={currentTabIndex}
        onTabClick={onTabClick}
      />
    ))}
  </ul>
);

const Tab = ({ tabContent, tabId, style = {} }) => (
  <div className="tab-zone white-box" id={tabId} style={style}>
    <section className="tab-content">{tabContent}</section>
  </div>
);

function TabbedView({ tabs, className = "", id = "" }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const currentTab = tabs.find(({ tabIndex }) => tabIndex === currentTabIndex);
  return (
    <section className={`tabs ${className}`} id={id}>
      <TabsNav
        tabs={tabs}
        currentTabIndex={currentTabIndex}
        onTabClick={(tabIndex) => setCurrentTabIndex(tabIndex)}
      />
      <Tab {...currentTab} />
    </section>
  );
}

export default TabbedView;
