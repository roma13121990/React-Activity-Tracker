import React from 'react'
import '../stylesheets/ui.scss'
import  { Redirect } from 'react-router-dom'

export const AddDayCount = ({ place, date, running, cycling, onNewDay}) => {
    const submit = (e) => {
        e.preventDefault();
        onNewDay({
            place: _place.value,
            date: _date.value,
            running: _running.value,
            cycling: _cycling.value
        });
        _place.value= "";
        _date.value= "";
        _running.value= "";
        _cycling.value= "";
    
    };

    let _place,_date,_running,_cycling;
    return (
        <form onSubmit={submit} className="add-day">
            <label>Place</label>
            <input type="text"
                   required
                   ref={input => _place = input}
                   defaultValue={place}/>

            <label>Date</label>
            <input type="date"
                   required
                   ref={input => _date = input}
                   defaultValue={date}/>

            <div>
                <input type="checkbox"
                       ref={input => _running = input}
                       defaultChecked={running}/>
                <label>Running</label>
            </div>

            <div>
                <input type="checkbox"
                       ref={input => _cycling = input}
                       defaultChecked={cycling}/>
                <label>Cycling</label>
            </div>
            <button>Add day</button>
        </form>
    )
}

AddDayCount.defaultProps = {
    place : "Aditi garden",
    date : "2018-02-12",
    running: true,
    cycling: false
}