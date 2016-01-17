var app = app || {}; // Global name space

app.TaskInputView = Backbone.View.extend({
  el: "#taskForm", //Referenceing an exsiting element

  events: { // ad a bunch of  events, and tell Backbone what fucntions to call
    'click button': 'createTask',
    'keypress textarea': 'checkForEnter'

  },

  checkForEnter: function(event){
    app.ENETR_KEY = 13; // 13 is the keyCode on most computers
    if ( event.which === app.ENETR_KEY ){
      // event.which tells us which the key was pressed
      event.preventDefault(); // This 
      this.createTask();
    } 
  },

  createTask: function(){
    var task = new app.Task(); // Creare a new "instance"
    var currentTask = this.$el.find('textarea').val();

    if ( currentTask.length === 0 ){
      return;
    }

    // Find the textarea whithin the el, and saves its value
    task.set({ content: currentTask });
    // On the instance of the secret, store the content
    task.save(); // send this to the server

    app.tasks.add( task ); //Add this secret to the main collection

    // clear and focus in the textarea
    this.$el.find( 'textarea' ).val('').focus();
    // Find the textarea and remove all the text, ane then pick our cursor in there

  },

  render: function(){
    // select an elment with the ID of secretInputViewTemplate
    var taskInputViewTemplate = $('#taskInputViewTemplate').html();
    // and put that inside his views element
    this.$el.html( taskInputViewTemplate );
    //default focusing in the textarea.
    this.$el.find('textarea').focus();

  }

});

// <textarea></textarea>
// <button>submit</button>  