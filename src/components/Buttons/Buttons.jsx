
import React from "react"
import { ButtonList, Button } from './buttons.styled'
export const Buttons = ({ state, onClick }) => {
	return (<ButtonList>
		{[...Object.keys(state)].map(item => {
			return <li key={item}>
				<Button type="button" name={item} onClick={onClick}>{item}</Button>
			</li>
		})}
	</ButtonList>
	)
}
