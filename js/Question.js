class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
  this.input2 = createInput("answer here....")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
  this.question=createElement("h3")
  this.opt2=createElement("h4")
  this.opt3=createElement("h4")
  this.opt1=createElement("h4")
  this.opt4=createElement("h4")

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
   this.message.html("thanks for answering your answer is recorded....")
   this.message.position(425,200)

    //Create html() and position() for each question, input and answers.
this.question.html("What is the largest ocean ?")
this.question.position(150,80)
this.opt1.html("Atlantic ocean")
this.opt1.position(150,100)
this.opt2.html("Southern ocean")
this.opt2.position(150,110)
this.opt3.html("Pacific ocean")
this.opt3.position(150,120)
this.opt4.html("Indian ocean")
this.opt4.position(150,130)

    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
  this.message
    })


  }
}
