import React, { useState } from 'react';
import './form.css';
import Logo from '../logo/logo';
import Heading from '../heading/heading';
import StaticDatePickerLandscape from './datePicker';
import TimePicker from './timePicker';
import ColorPicker from './colorPicker';
import { FaCaretLeft } from 'react-icons/fa';
import { FaCaretRight } from 'react-icons/fa';
import wheatNoodles from './formAssets/wheatNoodles.png';
import glassNoodles from './formAssets/glassNoodles.png';

function Form() {
	const [page, setPage] = useState(1);

	function NextPage() {
		if (page === 4) return;
		setPage((page) => page + 1);
	}
	function PrevPage() {
		if (page === 4) return;
		setPage((page) => page - 1);
	}

	function BoardOne() {
		return (
			<form>
				<div className="labelContainer">
					<input
						className="inputText"
						type="text"
						placeholder="Twoje imie"
						required
					></input>
				</div>
				<div className="labelContainer">
					<input
						className="inputText"
						type="text"
						placeholder="Twoje nazwisko"
						required
					></input>
				</div>
				<div className="streetdetailsBox">
					<div className="labelContainer">
						<input
							className="inputText"
							type="text"
							placeholder="Ulica"
							required
						></input>
					</div>
					<div className="labelContainer small">
						<input
							className="inputText"
							type="text"
							placeholder="Numer lokalu"
							required
						></input>
					</div>
				</div>
				<div className="labelContainer">
					<input
						className="inputText"
						type="text"
						placeholder="Miejscowość"
						required
					></input>
				</div>
				<div className="labelContainer">
					<input
						className="inputText"
						type="text"
						placeholder="Numer telefonu"
						required
					></input>
				</div>
			</form>
		);
	}
	/////////////////////////////////////////////////////////////////
	function BoardTwo() {
		return (
			<form>
				<div className="labelContainer firstLabel">
					<h3 className="hContainer">Wybierz datę dostarczenia zamówienia</h3>
				</div>
				<StaticDatePickerLandscape />
				<div className="labelContainer firstLabel">
					<h3 className="hContainer">Wybierz czas dostarczenia zamówienia</h3>
				</div>
				<TimePicker />
				<div className="labelContainer firstLabel">
					<h3 className="hContainer">Wybierz kolor pudełka</h3>
				</div>
				<ColorPicker />
			</form>
		);
	}
	////////////////////////////////////////////////////////////////////
	function BoardThree() {
		return (
			<form>
				<div className="labelContainer firstLabel">
					<h3 className="hContainer">Wybierz noodle</h3>
				</div>
				<div className="optionContainer">
					<div className="optionOne">
						<img className="noodles" alt="wheat noodles" src={wheatNoodles} />
						<p>Noodle pszenne</p>
						<input className="inputCheckbox" type="radio" name="a" />
					</div>
					<div className="optionOne">
						<img className="noodles" alt="wheat noodles" src={glassNoodles} />
						<p>Noodle glass</p>
						<input className="inputCheckbox" type="radio" name="a" />
					</div>
				</div>
			</form>
		);
	}
	////////////////////////////////////////////////////////////////////
	function BoardFour() {
		return (
			<div>
				<div className="labelContainer">
					<input type="text" placeholder="Twoje imie" required></input>
				</div>
				<div className="labelContainer">
					<input type="text" placeholder="Twoje nazwisko" required></input>
				</div>
				<div className="streetdetailsBox">
					<div className="labelContainer">
						<input type="text" placeholder="Ulica" required></input>
					</div>
					<div className="labelContainer small">
						<input type="text" placeholder="Numer lokalu" required></input>
					</div>
				</div>
				<div className="labelContainer">
					<input type="text" placeholder="Miejscowość" required></input>
				</div>
			</div>
		);
	}
	return (
		<div className="formBox">
			<div className="logoContainer">
				<Logo />
				<Heading />

				{}
				<div>
					{page === 1 && <BoardOne />}
					{page === 2 && <BoardTwo />}
					{page === 3 && <BoardThree />}
					{page === 4 && <BoardFour />}
					{page !== 4 && page !== 1 && (
						<button className="btn" onClick={PrevPage}>
							<FaCaretLeft />
						</button>
					)}
					{page !== 4 && (
						<button className="btn" onClick={NextPage}>
							<FaCaretRight />
						</button>
					)}
					{page === 4 && <button className="btn" type="submit"></button>}
				</div>
			</div>
		</div>
	);
}

export default Form;
