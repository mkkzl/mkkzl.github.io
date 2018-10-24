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
            "q": "Who was the first president?",
            "a": [
                {"option": "John Adams",      "correct": false},
                {"option": "Thomas Jefferson",     "correct": false},
                {"option": "George Washington",      "correct": true},
                {"option": "James Madison",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> </p>",
            "incorrect": "<img src='../Assets/Washorange.png' width='200px' height='200px' /><p><span>No, sorry</span>Remember <strong> Wash a ton</strong> for Washington</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "One of these presidents is not in the right order, who is it?: 6. John Quincy Adams, 7. Andrew Jackson, 8. Martin Van Buren, 9. James Polk",
            "a": [
                {"option": "6. John Quincy Adams",      "correct": false},
                {"option": "7. Andrew Jackson",     "correct": false},
                {"option": "8. Martin Van Buren",      "correct": false},
                {"option": "9. James Polk",     "correct": true} // no comma here
            ],
            "correct": "<p><span>You're so smart!</span> </p>",
            "incorrect": "<img src='../Assets/Polkorange.png' width='200px' height='200px' /><p><span>That one was tough</span>Remember <strong> polk a dots</strong> comes after Tyler</p>" // no comma here
        },
        { // Question 3 
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
        { // Question 4
            "q": "Who came before William Henry Harrison?",
            "a": [
                {"option": "Thomas Jefferson",           "correct": false},
                {"option": "John Tyler",                  "correct": false},
                {"option": "Martin Van Buren",  "correct": true},
                {"option": "Millard Fillmore",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span></p>",
            "incorrect": "<img src='../Assets/VanBorange.png' width='200px' height='200px' /><p><span>Not Quite.</span> Picture the hairy <b> van </b></p>" // no comma here
        },
        { // Question 5 
            "q": "Fill in the blank: John Adams, ________, James Madison",
            "a": [
                {"option": "Thomas Jefferson",           "correct": true},
                {"option": "John Tyler",                  "correct": false},
                {"option": "John Quincy Adams",  "correct": false},
                {"option": "James Monroe",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Perfection!</span></p>",
            "incorrect": "<img src='../Assets/Jefforange.png' width='200px' height='200px' /><p><span>Aww.</span> Picture the <b> chef's son </b></p>" // no comma here
        },
        { // Question 6
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
        { // Question 7
            "q": "<img src='../Assets/Pierceorange.png' width='200px' height='200px' />Select any of the presidents that came after Franklin Pierce (hint there are more than one!)",
            "a": [
                {"option": "Buchanan",    "correct": true},
                {"option": "Lincoln",     "correct": true},
                {"option": "Taylor",      "correct": false},
                {"option": "Jackson",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Wowza!</span>  Correct!</p>",
            "incorrect": "<img src='../Assets/Buchorange.png' width='200px' height='200px' /><img src='../Assets/Lincorange.png' width='200px' height='200px' class='second' /><p><span>Aw man.</span> No. Franklin was the 14th president followed by Buchanan and Lincoln.  Taylor was 12th and Jackson was 7th.</p>" // no comma here
        },
        { // Question 8
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
