import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class SockDisplay extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }
    componentDidMount() {
        attachSharedState(this)
    }
    componentWillUnmount() {
        detachSharedState(this)
    }
    render() {
        return <div>
            {/* whoever works on this can decide if the filter panel and grid display need to be 2 separate components that are displayed through this render function, or if they are just defined here */}
            <h1>Sock Display</h1>
            <div className="col-sm-4">
                Filter Panel
            </div>
            <div className="col-sm-8">
                Grid Display
            </div>
        </div>
    }
}

export default SockDisplay
