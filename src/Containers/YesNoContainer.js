import React from 'react'
import { yes, no } from '../objects.js'

class YesNoContainer extends React.Component {

    no = { statement: no["no-statement"], image: no["no-image"] }
    yes = { statement: yes["yes-statement"], image: yes["yes-image"] }

    state = {
        statement: this.no.statement,
        image: this.no.image
    }

    clickHandler = () => {
        if (
            this.state.statement === this.no.statement &&
            this.state.image === this.no.image
        ) {
            this.setState({
                statement: this.yes.statement,
                image: this.yes.image,
            })
        } else this.setState ({
            statement: this.no.statement,
            image: this.no.image,
        })
    }
    render() {
        console.log(this.state)
        return (
            <div onClick={this.clickHandler}>
                <h1>{this.state.statement}</h1>
                <img src={this.state.image} />
            </div>
        )
    }
}


export default YesNoContainer