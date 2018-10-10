// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Do you know your presidents?",
        "main":    "<p>How well did you learn the order of the presidents?</p>",
        "results": "",
        "level1":  "Presidential Master",
        "level2":  "A Real Presidential Historian",
        "level3":  "You are getting there!",
        "level4":  "You might want to go through the presidents again",
        "level5":  "Let's try that again" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q":"Who was the first president?",
            "a": [
                {"option": "John Adams",      "correct": false},
                {"option": "Thomas Jefferson",     "correct": false},
                {"option": "George Washington",      "correct": true},
                {"option": "James Madison",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<img src='../Assets/Washorange.png' width='200px' height='200px' /><p><span>No, sorry</span>Remember <strong> Wash a ton</strong> for Washington</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Who came after James Madison?",
            "a": [
                {"option": "John Adams",               "correct": false},
                {"option": "James Monroe",   "correct": true},
                {"option": "John Q Adams",               "correct": false},
                {"option": "Andrew Jackson", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<img src='../Assets/Monroeorange.png' width='200px' height='200px' /><p><span>Mmm...no</span>Maybe this will help: Well, the mad sun has escaped- but he's still hot! He opens his mouth and out flows a boiling river.  In the river is some <em>money row</em>-ing a boat.</p>"// no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Who came before William Henry Harrison",
            "a": [
                {"option": "Thomas Jefferson",           "correct": false},
                {"option": "John Tyler",                  "correct": false},
                {"option": "Martin Van Buren",  "correct": true},
                {"option": "Millard Fillmore",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span></p>",
            "incorrect": "<img src='../Assets/VanBorange.png' width='200px' height='200px' /><p><span>Not Quite.</span> Picture the hairy <b> van </b></p>" // no comma here
        },
        { // Question 4
            "q": "<img src='../Assets/Fillorange.png' width='200px' height='200px' />Who came before and after (in that order) Millard Fillmore?",
            "a": [
                {"option": "Tyler, Pierce",    "correct": false},
                {"option": "Taylor, Pierce",     "correct": true},
                {"option": "Taylor, Buchannon",      "correct": false},
                {"option": "Tyler, Buchannon",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span>  Correct!</p>",
            "incorrect": "<img src='../Assets/Taylororange.png' width='200px' height='200px' /><img src='../Assets/Pierceorange.png' width='200px' height='200px' class='second' /><p><span>Oh no.</span> Sorry. It actually was Taylor and Pierce.</p>" // no comma here
        },
        { // Question 5
            "q": "Who was the 16th president?",
            "a": [
                {"option": "Abraham Lincoln",    "correct": true},
                {"option": "James Madison",    "correct": false},
                {"option": "Andrew Jackson",    "correct": false},
                {"option": "Millard Fillmore",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> </p>",
            "incorrect": "<img src='../Assets/Lincorange.png' width='200px' height='200px' /><p><span>Aww!</span> It's actually Abraham Lincoln</p>" // no comma here
        } // no comma here
    ]
};
