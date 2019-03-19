import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Project from './Project'
import './Projects.css'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    <Project 
                        title={'Gas Stations'} 
                        description={'Using Leaflet API shows gas stations on a map'}
                        github={'https://github.com/florovarelaa/GasStations'}
                        />
                    <Project 
                        title={'Send Email'} 
                        description={'Shows a form to send an email'}
                        github={'https://github.com/florovarelaa/email-sender'}
                        />
                    <Project 
                        title={'Car Insurance Estimation'} 
                        description={'An app that evaluates your car country, year and insurance type and returns an estimation'}
                        github={'https://github.com/florovarelaa/car-insurance-estimation'}
                        />
                    <Project 
                        title={'Name Generator'} 
                        description={'A javascript app, that depending on the inputs entered on a form, returns a list of names from an api with those characteristics.'}
                        github={'https://github.com/florovarelaa/name-generator'}
                    />
                    <Project 
                        title={'Challenge Data Table'} 
                        description={'A simple challenge. Was used to be tested about api calls and css abilities.'}
                        github={'https://github.com/florovarelaa/challenge-data-tablecom'}
                    />
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    <Project 
                        title={'RoboFriends'} 
                        description={'A React app for filtering Card Components'}
                        github={'https://github.com/florovarelaa/RoboFriends'}
                        />
                    <Project 
                        title={'Social Cards'} 
                        description={'A React app used for building personal Social Cards'}
                        github={'https://github.com/florovarelaa/socialCards'}
                        />
                    <Project 
                        title={'Face Recognition'} 
                        description={'A React app used to recognize human faces'}
                        github={'https://github.com/florovarelaa/faceRecognitionBrain'}
                        />
                    <Project 
                        title={'Personal Portfolio'}
                        description={'My personal portfolio'}
                        github={'https://github.com/florovarelaa/portfolio'}
                        />
                </div>
            )      
        }
    }

    render () {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab className="category-tab">Javascript</Tab>
                    <Tab className="category-tab">React</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className='content'>
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;