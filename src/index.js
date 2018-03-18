import React from 'react'
import { render } from 'react-dom'
import { App } from './component/App'
import { Router, Route, hashHistory } from 'react-router'
import { PageNotFound } from "./component/PageNotFound"
import './stylesheets/ui.scss'

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="add-days" component={App} />
		<Route path="list-days" component={App} />
		<Route path="*" component={PageNotFound} />
	</Router>,
	document.getElementById("root")
)