import React from 'react';
import { mount } from 'react-mounter';
import ReactDOM from 'react-dom';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { MainLayout } from './layout/MainLayout.jsx';
import LoginAccount from './users/LoginAccount.jsx';
import NavBar from './home/NavPage.jsx';
import FooterPage from './home/FooterPage.jsx';
import HomePage from './home/HomePage.jsx';

FlowRouter.route("/", {
	action() {
		mount(MainLayout, {
			content: (<HomePage />),
			navbar: (<NavBar/>),
			footer: (<FooterPage />)
		})
	}
});

FlowRouter.route("/login", {
	action(params) {
		mount(MainLayout, {
			content: (<LoginAccount/>),
			navbar: (<NavBar/>),
			footer: (<FooterPage />)
		})
	}
});
