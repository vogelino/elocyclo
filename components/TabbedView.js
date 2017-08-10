import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TabsNavItem = ({ currentTabIndex, onTabClick, tabTitle, tabIndex }) => (
	<li
		className={currentTabIndex === tabIndex ? 'active' : ''}
		onClick={() => onTabClick(tabIndex)}
	>
		<a className="simple-button gradient tab-button">
			{tabTitle}
		</a>
	</li>
);

TabsNavItem.propTypes = {
	currentTabIndex: PropTypes.number.isRequired,
	tabIndex: PropTypes.number.isRequired,
	tabTitle: PropTypes.string.isRequired,
	onTabClick: PropTypes.func.isRequired,
};

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

TabsNav.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.shape({
		...TabsNavItem.propTypes,
		currentTabIndex: undefined,
		onTabClick: undefined,
	})).isRequired,
	currentTabIndex: TabsNavItem.propTypes.currentTabIndex,
	onTabClick: TabsNavItem.propTypes.onTabClick,
};

const Tab = ({ tabContent, tabId, style }) => (
	<div
		className="tab-zone white-box"
		id={tabId}
		style={style}
	>
		<section className="tab-content">
			{tabContent}
		</section>
	</div>
);

Tab.defaultProps = {
	style: {},
};

Tab.propTypes = {
	tabContent: PropTypes.element.isRequired,
	tabId: PropTypes.string.isRequired,
	style: PropTypes.object,
};

class TabbedView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentTabIndex: 0,
		};
	}
	setTabIndex(newTabIndex) {
		this.setState({ currentTabIndex: newTabIndex });
	}
	render() {
		const { tabs, className, id } = this.props;
		const { currentTabIndex } = this.state;
		const currentTab = tabs.find(({ tabIndex }) => tabIndex === currentTabIndex);
		return (
			<section className={`tabs ${className}`} id={id}>
				<TabsNav
					tabs={tabs}
					currentTabIndex={currentTabIndex}
					onTabClick={(tabIndex) => this.setTabIndex(tabIndex)}
				/>
				<Tab {...currentTab} />
			</section>
		);
	}
}

TabbedView.defaultProps = {
	id: '',
	className: '',
};

TabbedView.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.shape({
		tabTitle: TabsNavItem.propTypes.tabTitle,
		tabIndex: TabsNavItem.propTypes.tabIndex,
		tabContent: Tab.propTypes.tabContent,
		style: PropTypes.object,
	})).isRequired,
	className: PropTypes.string,
	id: PropTypes.string,
};

export default TabbedView;
