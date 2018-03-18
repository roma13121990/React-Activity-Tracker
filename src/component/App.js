import React,{ Component } from 'react'
import { ActiveDaysList } from './ActiveDaysList'
import { ActivityCount } from './ActivityCount'
import { AddDayCount } from './AddDayCount'
import { Menu } from './Menu'
export class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            allActivityDays :[{
                'place': 'Aditi garden',
                'date': "2018-02-02",
                'running': true,
                'cycling': false

            }]
    }
    this.addDay = this.addDay.bind(this)
    }
    getCount(filter){
        const { allActivityDays } = this.state;
        return allActivityDays.filter((day) => (filter) ? day[filter] : day).length

    }

    addDay(newDay){
        this.setState({
            allActivityDays: [
                ...this.state.allActivityDays,
                newDay
            ]
        })
    }

    render(){
      return(
          <div className="App">
              <Menu />
              {
                  (this.props.location.pathname === "/") ?
                      <ActivityCount total={this.getCount()}
                                     running={this.getCount(
                                         "running"
                                     )}
                                     cycling={this.getCount(
                                         "cycling"
                                     )} /> :
                  (this.props.location.pathname  === "/add-days") ?
                        <AddDayCount onNewDay={this.addDay}/> : <ActiveDaysList days={this.state.allActivityDays} />

              }
          </div>
      )
    }
}





