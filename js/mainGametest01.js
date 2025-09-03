/* https://stackoverflow.com/questions/18990441/innerhtml-br-breaking */

const gameData = {
    "1": {
        "topic" : "Browser issue",
        "text" : "A student has trouble accessing an ebook from their residential college. They get the 404 error message. But you cannot replicate the problem. What would you suggest them to do first?",
        "image" : "smaller_images/1.png",
        "answer" : "",
"choices": {    
            "Reboot the laptop": [2,["Jalapeno","Bok Choy"]],
            "Clear cache and cookies": [2,["Broccoli", "Garlic", "Pumpkin"]],
            "Request ILL": [2,["Potato", "Leek", "Tomato"]],
            "Contact IT": [2, ["Green Bean", "Carrot"]]
        }
    },
    "2": {
        "text": "One of the first e-resource troubleshooting steps is to clear browser cache and cookies. If users prefer not to do it, they can use an incognito or private window as an alternative. Visit <a href='https://ask.library.yale.edu/faq/174879' target='_blank'>here</a> for more information.",
        "image" : "smaller_images/2.png",
        "answer" : "Clear cache and cookies",
"choices": {
             "Continue": [3, []]
        }
    },
    "3": {
        "topic" : "Simultaneous user limit",
        "text": "A professor has difficulty accessing a French newspaper, Le Monde, through the Eureka.cc database. But you cannot replicate the problem. This database is known to be:",
        "image" : "smaller_images/3.png",
        "answer" : "",
"choices": {
            "Aggregator database": [4,["Garlic"]],
            "Limited to 3 simultaneous users": [4,["Green Bean", "Bok Choy", "Pumpkin"]],
            "Limited to valid NetID holders of Yale University and walk-in users": [4,["Leek", "Carrot"]],
            "All of the above": [4,[ "Broccoli", "Tomato"]]
        }
    },
    "4": {
        "text": "<a href='https://library.yale.edu/eresources/access/access-eurekacc' target='_blank'>Eureka.cc</a> is an aggregator database of Canadian and European newspapers and other publications. Access is limited to 3 users at a time. When the user tried to access the resource, the limit may have been reached and there may have been no available sessions. The problem should be resolved once other users log off.",
        "image" : "smaller_images/4.png",
        "answer" : "All of the above",
"choices": {
            "Continue": [5,[]]
        }
    },
    "5": {
        "topic" : "Not starting the search from the library site",
        "text": "A graduate student reported that they could not read full-text of the current issue of the Harvard Business Review magazine at https://hbr.org/magazine.",
        "image" : "smaller_images/5.png",
        "answer" : "",
"choices": {
            "hbr.org is temporarily unavailable due to site upgrade": [6,["Garlic"]],
            "Yale’s access to the current issue is through EBSCOhost Business Source Complete, not through hbr.org": [6,["Green Bean", "Bok Choy", "Pumpkin"]],
            "Yale does not have access to Harvard Business Review at all": [6,["Leek", "Carrot"]]
        }
    },
    "6": {
        "text": "When users know their institution subscribes to a particular journal, they might directly visit the publisher’s website, such as hbr.org, instead of using the library catalog. But most of Yale's journal subscriptions are accessed through aggregator platforms rather than directly from publishers. Always use the library catalog to ensure you locate the correct subscription platforms and obtain essential details such as access methods, simultaneous user limit, content coverage, and embargo periods.",
        "image" : "",
        "answer" : "Yale’s access to the current issue is through EBSCOhost Business Source Complete, not through hbr.org",
"choices": {
            "Continue": [7,[]]
        }
    },
    "7": {
        "topic" : "EZProxy",
        "text": "Which is the correct EZProxy prefix for Yale Library?",
        "image" : "smaller_images/7.png",
        "answer" : "",
"choices": {
            "https://yale.ezproxy.org/login?url=": [8,["Garlic"]],
            "https://yale.library.edu/login?url=": [8,["Green Bean", "Bok Choy", "Pumpkin"]],
            "https://yale.idm.oclc.org/login?url=": [8,["Leek", "Carrot"]]
        }
    },
    "8": {
        "text": "The EZProxy prefix for Yale Library is <strong>https://yale.idm.oclc.org/login?url=</strong>. The prefix is used with a resource link that allows remote access through IP authentication. Visit <a href='https://guides.library.yale.edu/ezproxy' target='_blank'>here</a> to learn more about EZProxy.",
        "image" : "smaller_images/7.png",
        "answer" : "https://yale.idm.oclc.org/login?url=",
"choices": {
            "Continue": [9,[]]
        }
    },
    "9": {
        "topic" : "Access Method",
        "text": "What is the access method for Kanopy?",
        "image" : "",
        "answer" : "",
"choices": {            
            "Username/Password": [10,["Carrot"]],
            "Internet Protocol (IP) address": [10,["Carrot"]],
            "Single Sign-On (SSO)": [10,["Garlic"]]
        }
    },
    "10": {
        "text": "Kanopy is accessible through IP authentication, allowing users to access streaming videos if their device is connected from one of Yale's approved IP addresses via the YaleSecure network, EZproxy, or VPN. While IP authentication is the most commonly used access method, Yale Library also employs other methods such as Username/Password and Single Sign-On (SSO) depending on the specific e-resources.",
        "image" : "",
        "answer" : "Internet Protocol (IP) address",
"choices": {
            "Continue": [11,[]]
        }
    },    
    "11": {
        "topic" : "E-book Access",
        "text": "O’Reilly Technical Books (formerly Safari) are unlimited access.",
        "image" : "",
        "answer" : "",
"choices": {            
            "True": [12,["Carrot"]],
            "False": [12,["Garlic"]]
        }
    },
    "12": {
        "text": "O’Reilly titles are unlimited access. They are subscriptions only, so they could disappear from the platform without warning. See the <a href='https://guides.library.yale.edu/eraccess' target='_blank'>list of E-book suppliers</a>",
        "image" : "",
        "answer" : "True",
"choices": {
            "Continue": [13,[]]
        }
    },
    "13": {
        "topic" : "Patron affiliation",
        "text": "A Harvard University student can access many of Yale’s licensed e-resources if they use the followings EXCEPT:",
        "image" : "",
        "answer" : "",
"choices": {            
            "An e-resource link which includes the Yale Library EZProxy prefix": [14,["Carrot"]],     
            "A public workstation or other computer connected to Yale’s ethernet": [14,["Carrot"]],
            "A device that is connected to the YaleSecure wi-fi network": [14,["Garlic"]],
            "A device that is connected to the Eduroam wi-fi network": [14,["Carrot"]]    
        }
    },
    "14": {
        "text": "Harvard University students cannot access Yale’s licensed e-resources through Yale's proxied link. This is because proxied links prompt users to authenticate using their Yale NetID and password, which Harvard University students do not possess. However, Harvard University students can access many of Yale’s licensed e-resources on the Yale campus by using a public workstation or another computer connected to Yale’s ethernet, or by connecting their device to the YaleSecure or Eduroam wi-fi networks. For more details on connecting from on campus, visit <a href='https://library.yale.edu/find-request-and-use/use/using-e-resources/connecting-e-resources' target='_blank'>here</a>",
        "image" : "",
        "answer" : "An e-resource link which includes the Yale Library EZProxy prefix",
"choices": {
            "Continue": [15,[]]
        }
    },   
    "15": {
        "topic" : "Major newspapers/magazines",
        "text": "To which websites/apps can current faculty, student, and staff sign up for a free digital subscription?",
        "image" : "smaller_images/9.png",
        "answer" : "",
"choices": {            
            "The Atlantic (www.theatlantic.com)": [16,["Carrot"]],
            "The Economist (www.economist.com)": [16,["Garlic"]],        
            "Financial Times (www.ft.com)": [16,["Green Bean", "Bok Choy", "Pumpkin"]],
            "New York Times (www.nytimes.com)": [16,["Leek", "Carrot"]],
            "Wall Street Journal (www.wsj.com)": [16,["Garlic"]],
            "Washington Post (www.washingtonpost.com)": [16,["Green Bean", "Bok Choy", "Pumpkin"]],
            "All of the above": [16,["Jalapeno","Bok Choy"]]
        }
    },
    "16": {
        "text": "Yale Library offers current faculty, staff, and students access to several major newspapers and magazines. Use your @yale.edu email address to set up a personal account. Please note that authorized users do not include affiliates of Yale New Haven Hospital. Check the links below to create accounts:<br /><a href='https://library.yale.edu/eresources/access/access-the-atlantic' target='_blank'>The Atlantic</a><br /><a href='https://library.yale.edu/eresources/access/access-economist' target='_blank'>The Economist</a><br /><a href='https://library.yale.edu/eresources/access/access-financial-times' target='_blank'>Financial Times</a><br /><a href='https://library.yale.edu/eresources/access/access-nytcom' target='_blank'>New York Times</a><br /><a href='https://library.yale.edu/eresources/access/access-wall-street-journal' target='_blank'>Wall Street Journal</a><br /><a href='https://library.yale.edu/eresources/access/access-washington-post' target='_blank'>Washington Post</a>",
        "image" : "",
        "answer" : "All of the above",
"choices": {
            "Continue": [100,[]]
        }
    },
    "100": {
        "text": "Last question! How often do you use e-resources licensed by Yale Library?",
        "image" : "smaller_images/another_day.png",
"choices" : {
            "Always!": [0,["Napa Cabbage", "Potato", "Carrot"]],
            "Often": [0,["Tomato", "Leek"]],
            "Sometimes": [0,["Pumpkin", "Green Bean", "Garlic"]],
            "Rarely": [0, ["Jalapeno", "Bok Choy"]],
            "Never": [0,["Tomato", "Leek"]]
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
    // Scroll to top of page when rendering new state
    window.scrollTo(0, 0);
    
    const resultText = document.getElementById('result-text');
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    
    const choicesContainer = document.getElementById('choices');
    
    const answer = gameData[state].answer;
    let retrievedResponse = sessionStorage.getItem("response"); 
    console.log(retrievedResponse); 
    
    // Update the page content immediately, regardless of image loading
    if (retrievedResponse === answer) {
        resultText.textContent = "CORRECT!";
        sessionStorage.clear();
    } else if (!answer) {
        resultText.innerHTML = "";
        sessionStorage.clear();
    } else {
        resultText.textContent = "INCORRECT.";
        sessionStorage.clear();
    }
    
    storyText.innerHTML = gameData[state].text;
    storyText.innerHTML = storyText.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    
    choicesContainer.innerHTML = '';

    for (const [choice, info] of Object.entries(gameData[state].choices)) {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice-button';
        let nextState = info[0];
        button.onclick = () => {
            sessionStorage.setItem("response", choice);
            changeState(nextState, info[1]);
        }                    
        choicesContainer.appendChild(button);
    }
    
    // Handle image loading separately - page works even if image fails
    if (gameData[state].image) {
        // Hide image while loading to prevent flicker
        storyImage.style.opacity = '0';
        
        const img = new Image();
        img.src = gameData[state].image;
        
        img.onload = () => {
            storyImage.src = img.src;
            storyImage.style.display = 'block';
            // Fade in the new image smoothly
            storyImage.style.opacity = '1';
        };
        
        img.onerror = () => {
            // Hide image if it fails to load, or show a placeholder
            storyImage.style.display = 'none';
            storyImage.style.opacity = '1';
            console.warn(`Failed to load image: ${gameData[state].image}`);
        };
    } else {
        // No image specified, hide the image element
        storyImage.style.display = 'none';
        storyImage.style.opacity = '1';
    }
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
    
        text.textContent = "Drumroll... here is your E-Resource ID! Thank you for playing the game!";
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
    window.scrollTo(0, 0);
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
