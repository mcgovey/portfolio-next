//action to indicate that our call for projects has started
export let startProjectPull = () => {
  return {
      type : 'Start_Project_Pull'
  }
}

//action to indicate we have received all our data from the api
export let endProjectPull = (projArray) => {
  return {
      type : 'End_Project_Pull',
      projArray
  }
}


//fetch the list of our developers
export let fetchProjs = () => {
  return (dispatch) => {
      dispatch(startProjectPull())

      let reader = new FileReader();
      reader.onload = function(e) {
      // Use reader.result
      alert(reader.result)
      }
      reader.readAsText('../resources/projects.csv');

      console.log('reader', reader);

      dispatch(endProjectPull( ))

  }
}

export function selectProject(e) {
  return {
    type: 'SELECT_PROJ',
    payload: e.currentTarget.dataset.id,
  }
}

export function openDrawer() {
	return {
		type: 'OPEN_DRAWER',
		payload: true,
	}
}

export function closeDrawer() {
	return {
		type: 'CLOSE_DRAWER',
		payload: false,
	}
}