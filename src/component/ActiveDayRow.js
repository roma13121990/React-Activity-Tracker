import React from 'react'
import MdDone from 'react-icons/lib/md/done';

export const ActiveDayRow = ({place = "garden", date = new Date('3/15/2018'), running = true, cycling = true}) => (
	<tr>
		<td>{place}</td>
		<td>{date}</td>
		<td>{(running) ? <MdDone /> : null}</td>
		<td>{(cycling) ? <MdDone /> : null}</td>
	</tr>
)

ActiveDayRow.defaultProps = {
	place : "garden",
	date : new Date('3/15/2018'),
	running : true,
	cycling:true
}

