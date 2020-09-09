
function addingEventListener() {
  //node that is listening for the click event is being stored in input 
  const input = document.getElementById('input');
  input.addEventListener('click', function(event) {
    alert('I was clicked!');
  });
}
