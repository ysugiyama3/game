const gameData = {
    "1": {
        "topic" : "Browser issue",
        "text" : "A student has trouble accessing an ebook from their laptop from their residential college. They get routed to a 404 error message. But you cannot replicate the problem. What would you suggest them do first?",
        "linktext" : "",
        "link" : "",
        "image" : "smaller_images/1.PNG",
        "answer" : "",
"choices": {    
            "Reboot the laptop": [2,["Jalapeno","Bok Choy"]],
            "Clear cache and cookies": [2,["Broccoli", "Garlic", "Pumpkin"]],
            "Request ILL": [2,["Potato", "Leek", "Tomato"]],
            "Contact IT": [2, ["Green Bean", "Carrot"]]
        }
    },
    "2": {
        "text": "One of the first troubleshooting steps is to clear their browser’s cache and cookies. If a user prefers not to clear their browser’s cache and cookies, they can use incognito or private mode as an alternative. Incognito or private mode does not store browsing history, cache, or cookies, so each session starts fresh.",
        "linktext" : "More about browser cache and cookies",
        "link" : "https://ask.library.yale.edu/faq/174879",    
        "image" : "",
        "answer" : "Clear cache and cookies",
"choices": {
             "Continue": [3, []]
        }
    },
    "3": {
        "topic" : "Simultaneous user limit",
        "text": "A professor has difficulty accessing a French newspaper, Le Monde, though Eureka.cc. But you are not able to replicate the problem. This database is known to be:",
        "linktext" : "",
        "link" : "",
        "image" : "smaller_images/3.PNG",
        "answer" : "",
"choices": {
            "Aggregator database": [4,["Garlic"]],
            "Limited to 3 simultaneous users": [4,["Green Bean", "Bok Choy", "Pumpkin"]],
            "Limited to valid NetID holders of Yale University and walk-in users": [4,["Leek", "Carrot"]],
            "All of the above": [4,[ "Broccoli", "Tomato"]]
        }
    },
    "4": {
        "text": "Eureka.cc is an aggregator database of Canadian and European newspapers and other publications. Access is limited to 3 users at a time. When the user tried to access the resource, the limit may have been reached, and there may have been no available sessions. The problem should be resolved once other users log off. ",
        "linktext" : "More about Eureka.cc",
        "link" : "https://search.library.yale.edu/databases/12923859",
        "image" : "smaller_images/having_beach_fun.png",
        "answer" : "All of the above",
"choices": {
            "Continue": [5,[]]
        }
    },
    "5": {
        "topic" : "Not starting the search from the library site",
        "text": "A graduate student reported that they could not read full-text of the current issue of the Harvard Business Review magazine at https://hbr.org/magazine.",
        "linktext" : "",
        "link" : "",
        "image" : "smaller_images/5.PNG",
        "answer" : "",
"choices": {
            "hbr.org is temporarily unavailable due to site upgrade": [6,["Garlic"]],
            "Yale’s access to the current issue is through Business Source Complete only": [6,["Green Bean", "Bok Choy", "Pumpkin"]],
            "Yale does not have access to Harvard Business Review at all": [6,["Leek", "Carrot"]]
        }
    },
    "6": {
        "text": "When users know that their institution subscribes to a specific journal, they may go directly to the publisher’s website, such as hbr.org, rather than starting their search on the library catalog or E-journal A-Z page. While search engines like Google can find resources, they do not connect the users to the institution’s subscription, often resulting in a paywall. Searches via the library catalog direct users to the appropriate subscription and provide important information like access method, simultaneous user limit, content coverage, and embargo periods.",
        "linktext" : "Harvard Business Review",
        "link" : "https://search.library.yale.edu/catalog/12026052",
        "image" : "smaller_images/having_beach_fun.png",
        "answer" : "Yale’s access to the current issue is through Business Source Complete only",
"choices": {
            "Continue": [7,[]]
        }
    },
    "7": {
        "topic" : "EZProxy",
        "text": "Which is the correct YUL EZProxy prefix?",
        "linktext" : "",
        "link" : "",
        "image" : "smaller_images/beach_disaster.png",
        "answer" : "",
"choices": {
            "https://yale.ezproxy.org/login?url=": [8,["Garlic"]],
            "https://yale.oclc.org/login?url=": [8,["Green Bean", "Bok Choy", "Pumpkin"]],
            "https://yale.idm.oclc.org/login?url=": [8,["Leek", "Carrot"]],
            "https://yale.ezproxy.oclc.org/login?url=": [8,["Carrot"]]
        }
    },
    "8": {
        "text": "The YUL EZProxy Prefix is “https://yale.idm.oclc.org/login?url=.” The prefix is used with a link to a resource that allows remote access through IP authentication. For example, Yale’s proxied link to JSTOR is https://yale.idm.oclc.org/login?url=https://www.jstor.org/search",
        "linktext" : "More about EZProxy",
        "link" : "https://guides.library.yale.edu/ezproxy/atyul",
        "image" : "smaller_images/having_beach_fun.png",
        "answer" : "https://yale.idm.oclc.org/login?url=",
"choices": {
            "Continue": [9,[]]
        }
    },
    "9": {
        "topic" : "Major newspapers/magazines",
        "text": "To which websites/apps can current faculty, student, and staff sign up for a free digital subscription?",
        "linktext" : "",
        "link" : "",
        "image" : "smaller_images/beach_disaster.png",
        "answer" : "",
"choices": {
            "Economist (www.economist.com)": [10,["Garlic"]],
            "Financial Times (www.ft.com)": [10,["Green Bean", "Bok Choy", "Pumpkin"]],
            "New York Times (www.nytimes.com)": [10,["Leek", "Carrot"]],
            "The Atlantic (www.theatlantic.com)": [10,["Carrot"]],
            "Wall street Journal (www.wsj.com)": [10,["Garlic"]],
            "Washington Post (www.washingtonpost.com)": [10,["Green Bean", "Bok Choy", "Pumpkin"]],
            "All of the above": [10,["Jalapeno","Bok Choy"]]
        }
    },
    "10": {
        "text": "Yale offers current faculty, staff, and students access to several major newspapers and magazines. Use your @yale.edu email address to set up an account. Please note that authorized users do not include affiliates of Yale New Haven Hospital. Use Quicksearch to access each resource.",
        "linktext" : "Use Quicksearch to register for and access them",
        "link" : "https://search.library.yale.edu/",
        "image" : "smaller_images/having_beach_fun.png",
        "answer" : "All of the above",
"choices": {
            "Continue": [100,[]]
        }
    },
    "100": {
        "text": "Last question! After a night of good rest, the next morning you:",
        "image" : "smaller_images/another_day.png",
"choices" : {
            "Go to a cafe to finally read that book": [0,["Napa Cabbage", "Potato", "Carrot"]],
            "Head to work, get that bag": [0,["Tomato", "Leek"]],
            "Organize a community clean up day": [0,["Pumpkin", "Green Bean", "Garlic"]],
            "Go on a veggie run": [0, ["Jalapeno", "Bok Choy"]]
        } 
    }
};
const personalities = { 
    "Onion": 0,
    "Broccoli": 0,
    "Garlic": 0, // The Leader
    "Jalapeno": 0, // The Adventurer
    "Tomato": 0, // The Analyst
    "Green Bean": 0, // The Connector
    "Pumpkin": 0, // The Caregiver
    "Carrot": 0, // The Visionary
    "Potato": 0, // The Realist
    "Napa Cabbage": 0, // The Harmonizer
    "Bok Choy": 0, // The Performer
    "Leek": 0 // The Investigator
};

let currentState = 1;

function renderState(state) {
    const resultText = document.getElementById('result-text');
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const link = document.getElementById('link');
    const choicesContainer = document.getElementById('choices');
    
    const linkText = gameData[state].linktext;
    const answer = gameData[state].answer;
    let retrievedResponse = sessionStorage.getItem("response"); 
    console.log(retrievedResponse); 
    
    
    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;

        if (retrievedResponse === answer) {
            resultText.textContent = "Correct!";
            sessionStorage.clear();
        } else if (!answer) {
            resultText.innerHTML = '';
            sessionStorage.clear();
        } else {
            resultText.textContent = "Incorrect.";
            sessionStorage.clear();
        }
        
        storyText.textContent = gameData[state].text; 
        
        if (linkText) {
            const a = document.createElement('a');
            a.href = gameData[state].link;
            a.textContent = linkText;
            link.appendChild(a);
        } else {
            link.innerHTML = '';
        }
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => {
                sessionStorage.setItem("response", choice);
                changeState(nextState, info[1]); /*each time you change state you update the personalities dictionary*/
            }                    
            choicesContainer.appendChild(button);
        }
    };
}


function changeState(newState, selectedPersonalities) { 
    // console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedVegetable() {
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share the game with Friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "Drumroll... here is your Veggie ID! Don't lose it! (Right click or hold the image to save)";
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `Check out my Veggie ID! You can create yours at https://sophie006liu.github.io/vegetal/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    };
}


function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
