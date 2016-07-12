import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { MainLayout } from './layout/MainLayout.jsx';
import HomePage from './home/HomePage.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<HomePage />)
		})
	}
});
