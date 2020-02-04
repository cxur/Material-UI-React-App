import React, { Component, Fragment } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Exercises from './Exercises/index'
import '../App.css';
import {muscles, exercises} from '../store'

class App extends Component {
  state = {
    exercisesList: exercises,
    category: '',
    exercise:{}
  }

  getExcerciseByMuscle () {
   return Object.entries(this.state.exercisesList.reduce((excerciseByMuscle, exercises) => {
      const {muscles} = exercises;

      excerciseByMuscle[muscles] = excerciseByMuscle[muscles] ?
      [...excerciseByMuscle[muscles], exercises] : [exercises]

      return excerciseByMuscle;
    }, {}));
  };

  handleTabChange = category => {
    this.setState({
      category
    })
  }
  
  excerciseSelected = id => {
    this.setState((prevState) => ({
      exercise: prevState.exercisesList.find(ex => ex.id===id)
    }));
  }

  render() {
    const exercises = this.getExcerciseByMuscle();

    return (
      <Fragment>
        <Header />
        <Exercises 
        exercises={exercises} 
        exercise={this.state.exercise}
        category = {this.state.category}
        onSelect={this.excerciseSelected}/>
        <Footer 
        muscleCategories = {muscles} 
        onSelect={this.handleTabChange} 
        category={this.state.category}
        />
      </Fragment>
    );
  }
}

export default App;
