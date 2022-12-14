import React from 'react';

import logo from '../../assets/images/logo.svg';
import { Container, Content } from './styles';

export function Header() {
	return (
		<Container>
			<Content>
				<div className="page-details">
					<h1>Pedidos</h1>
					<h2>Acompanhe os pedidos dos clients</h2>
				</div>
			</Content>
			<img src={logo} alt="waiterapp" />
		</Container>
	);
}

