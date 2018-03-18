import React from 'react'
import { ActiveDayRow } from './ActiveDayRow'

export const ActiveDaysList = ({days}) => (
	<table>
		<thead>
			<tr>
				<th>Place</th>
				<th>Date</th>
				<th>Running</th>
				<th>Cycling</th>
			</tr>
		</thead>
		<tbody>
			{days.map((day, i) =>
					<ActiveDayRow key={i} {...day} />
				)}
		</tbody>
	</table>
)
