import React from 'react';
import SearchForm from './SearchForm'
import './MenuBar.css'

const MenuBar = (props) => (<div className="menu-bar"><SearchForm
inputMessage="Search videos"
buttonTitle="Search"
onSend={value => props.onSearch(value)} /></div>)

export default MenuBar;
