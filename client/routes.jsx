import React from 'react';
import { mount } from 'react-mounter';
import ReactDOM from 'react-dom';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { MainLayout } from './layout/MainLayout.jsx';
import LoginAccount from './users/LoginAccount.jsx';
import HomePage from './home/HomePage.jsx';

FlowRouter.route("/", {
	action() {
		mount(MainLayout, {
			content: (<HomePage />)
		})
	}
});

FlowRouter.route("/login", {
	action(params) {
		mount(MainLayout, {
			content: (<LoginAccount/>)
		})
	}
});
