/* https://stackoverflow.com/questions/18990441/innerhtml-br-breaking */

const gameData = {
    "1": {
        "topic" : "Browser issue",
        "text" : "A student is encountering a 404 error when trying to access an ebook from their residential college, but you are unable to replicate the issue. What would you recommend they do first?",
        "image" : "smaller_images/NotFound.png",
        "answer" : "",
"choices": {    
            "Reboot the laptop": [2,["OA"]],
            "Clear cache and cookies": [2,["Database"]],
            "Request ILL": [2,["Video", "Audio"]],
            "Contact IT": [2, ["Ebook"]]
        }
    },
    "2": {
        "text": "One of the first e-resource troubleshooting steps is to clear the browser's cache and cookies. If users prefer not to do this, they can alternatively use an incognito or private window. For more information, please visit <a href='https://ask.library.yale.edu/faq/174879' target='_blank'>here</a>.",
        "image" : "smaller_images/DeleteBrowsingData.png",
        "answer" : "Clear cache and cookies",
"choices": {
             "Continue": [3, []]
        }
    },
    "3": {
        "topic" : "Simultaneous user limit",
        "text": "A professor reported having trouble accessing the French newspaper, Le Monde, through the Eureka.cc database last night. But you are unable to replicate the issue. This database is known to be:",
        "image" : "smaller_images/NoAccess.png",
        "answer" : "",
"choices": {
            "Aggregator database": [4,["Ebook"]],
            "Limited to 3 simultaneous users": [4,["Ejournal"]],
            "Limited to valid NetID holders of Yale University and walk-in users": [4,["OA", "Audio"]],
            "All of the above": [4,[ "Database", "Video"]]
        }
    },
    "4": {
        "text": "<a href='https://library.yale.edu/eresources/access/access-eurekacc' target='_blank'>Eureka.cc</a> is an aggregator of Canadian and European newspapers and publications, with access limited to 3 users at a time. The user may have encountered the access limit if all sessions were occupied. The issue should resolve once other users log off.",
        "image" : "smaller_images/Eureka.png",
        "answer" : "All of the above",
"choices": {
            "Continue": [5,[]]
        }
    },
    "5": {
        "topic" : "Not starting the search from the library site",
        "text": "A graduate student reported that they could not read full-text of the current issue of the Harvard Business Review magazine at https://hbr.org/magazine.",
        "image" : "smaller_images/Paywall.png",
        "answer" : "",
"choices": {
            "hbr.org is temporarily unavailable due to site upgrade": [6,["OA"]],
            "Yale’s access to the current issue is through EBSCOhost Business Source Complete, not through hbr.org": [6,["Database", "Ebook", "Video"]],
            "Yale does not have access to Harvard Business Review at all": [6,["Audio", "Ejournal"]]
        }
    },
    "6": {
        "text": "When users know their institution subscribes to a particular journal, they might directly visit the publisher’s website, such as hbr.org, instead of using the library catalog. But most of Yale's journal subscriptions are accessed through aggregator platforms rather than directly from publishers. Always use the <a href='https://articles.library.yale.edu/permalink/01YALE_INST/1df2v8b/alma991010351927208651' target='_blank'>library catalog</a> to ensure you locate the correct subscription platforms and obtain essential details such as access methods, simultaneous user limit, content coverage, and embargo periods.",
        "image" : "smaller_images/HBR.png",
        "answer" : "Yale’s access to the current issue is through EBSCOhost Business Source Complete, not through hbr.org",
"choices": {
            "Continue": [7,[]]
        }
    },
    "7": {
        "topic" : "EZProxy",
        "text": "Which is the correct EZProxy prefix for Yale Library?",
        "image" : "smaller_images/EZProxyLogo.png",
        "answer" : "",
"choices": {
            "https://yale.ezproxy.org/login?url=": [8,["Ejournal"]],
            "https://yale.library.edu/login?url=": [8,["Audio"]],
            "https://yale.idm.oclc.org/login?url=": [8,["Ebook"]]
        }
    },
    "8": {
        "text": "The EZProxy prefix is used with a resource link that allows remote access through IP authentication. Visit <a href='https://guides.library.yale.edu/ezproxy' target='_blank'>here</a> to learn more about EZProxy.",
        "image" : "smaller_images/EZProxy.png",
        "answer" : "https://yale.idm.oclc.org/login?url=",
"choices": {
            "Continue": [9,[]]
        }
    },
    "9": {
        "topic" : "Access Method",
        "text": "What is the access method for Kanopy?",
        "image" : "smaller_images/StreamingVideo.png",
        "answer" : "",
"choices": {            
            "Username/Password": [10,["Ebook", "OA"]],
            "Internet Protocol (IP) authentication": [10,["Database", "Ejournal", "Video"]],
            "Single Sign-On (SSO)": [10,["Audio"]]
        }
    },
    "10": {
        "text": "<a href='https://search.library.yale.edu/databases/99127780633408651' target='_blank'>Kanopy</a> is accessible through IP authentication including EZProxy and/or VPN, allowing users to access streaming videos remotely if their device is connected from one of Yale's approved IP addresses. Details about remote access are provided in the local note for each catalog record on the Database AZ List. Although IP authentication is the most common access method, Yale Library also uses Username/Password and Single Sign-On (SSO) for certain e-resources.",
        "image" : "smaller_images/Kanopy.png",
        "answer" : "Internet Protocol (IP) authentication",
"choices": {
            "Continue": [11,[]]
        }
    },    
    "11": {
        "topic" : "E-book Access",
        "text": "O’Reilly books (formerly Safari books) are unlimited access.",
        "image" : "smaller_images/ThreeUsers.png",
        "answer" : "",
"choices": {            
            "True": [12,["Database", "Ebook", "Ejournal", "Video"]],
            "False": [12,["OA", "Audio"]]
        }
    },
    "12": {
        "text": "<a href='https://library.yale.edu/eresources/access/access-safari-books-online' target='_blank'>O’Reilly</a> titles offer unlimited access. Please note they are part of a subscription package, meaning libraries do not have control over the content. Titles may be added or removed without warning.",
        "image" : "smaller_images/OReilly.png",
        "answer" : "True",
"choices": {
            "Continue": [13,[]]
        }
    },
    "13": {
        "topic" : "Patron affiliation",
        "text": "Which of the following methods would NOT allow a Harvard University student to access many of Yale's licensed e-resources?",
        "image" : "smaller_images/Harvard.png",
        "answer" : "",
"choices": {            
            "An e-resource link that includes Yale's EZProxy prefix while on Harvard's campus": [14,["Ebook", "Audio"]],        
            "A public workstation or other computer connected to Yale's ethernet on Yale's campus": [14,["Video"]],
            "A device connected to the Eduroam Wi-Fi network on Yale's campus": [14,["Ejournal", "Database"]]    
        }
    },
    "14": {
        "text": "Harvard University students cannot access Yale's licensed e-resources through Yale's proxied link from Harvard's campus, as these links require authentication with a Yale NetID and password, which they do not have. However, they can access many of Yale's licensed e-resources while on Yale's campus by using a public workstation or another computer connected to Yale's ethernet, or by connecting their device to the Eduroam Wi-Fi network, as Harvard is an Eduroam participating institution. For more details on connecting from on campus, visit <a href='https://library.yale.edu/find-request-and-use/use/using-e-resources/connecting-e-resources' target='_blank'>here</a>",
        "image" : "smaller_images/OnCampus.png",
        "answer" : "An e-resource link that includes Yale's EZProxy prefix while on Harvard's campus",
"choices": {
            "Continue": [15,[]]
        }
    },   
    "15": {
        "topic" : "Major newspapers/magazines",
        "text": "To which websites/apps can current faculty, student, and staff sign up for a digital subscription with their @yale.edu email address?",
        "image" : "smaller_images/9.png",
        "answer" : "",
"choices": {            
            "The Atlantic (www.theatlantic.com)": [16,["Database"]],
            "The Economist (www.economist.com)": [16,["OA"]],        
            "Financial Times (www.ft.com)": [16,["Audio"]],
            "New York Times (www.nytimes.com)": [16,["Audio", "Ejournal"]],
            "Wall Street Journal (www.wsj.com)": [16,["Ejournal"]],
            "Washington Post (www.washingtonpost.com)": [16,["Video"]],
            "All of the above": [16,["Ebook","Video"]]
        }
    },
    "16": {
        "text": "Yale Library offers current faculty, staff, and students access to many major newspapers and magazines. Use your @yale.edu email address to set up a personal account. Please note that authorized users do not include affiliates of Yale New Haven Hospital. Check the links below to create accounts:<br /><a href='https://library.yale.edu/eresources/access/access-the-atlantic' target='_blank'>The Atlantic</a><br /><a href='https://library.yale.edu/eresources/access/access-economist' target='_blank'>The Economist</a><br /><a href='https://library.yale.edu/eresources/access/access-financial-times' target='_blank'>Financial Times</a><br /><a href='https://library.yale.edu/eresources/access/access-nytcom' target='_blank'>New York Times</a><br /><a href='https://library.yale.edu/eresources/access/access-wall-street-journal' target='_blank'>Wall Street Journal</a><br /><a href='https://library.yale.edu/eresources/access/access-washington-post' target='_blank'>Washington Post</a>",
        "image" : "",
        "answer" : "All of the above",
"choices": {
            "Continue": [100,[]]
        }
    },
    "100": {
        "text": "Last question! How often do you use e-resources licensed by Yale Library?",
        "image" : "smaller_images/Quicksearch.png",
"choices" : {
            "Always!": [0,["Ejournal", "Ejournal", "Ejournal", "Ejournal"]],
            "Often": [0,["Video", "Video", "Video", "Video", "OA", "OA", "OA", "OA"]],
            "Sometimes": [0,["Ebook", "Ebook", "Ebook", "Ebook"]],
            "Rarely": [0, ["Database", "Database", "Database"]],
            "Never": [0,["Audio", "Audio", "Audio", "Audio"]]
        } 
    }
};
const personalities = { 
    "Audio": 0,
    "Database": 0,
    "Ebook": 0, 
    "Ejournal": 0, 
    "OA": 0,
    "Video": 0 
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
        resultText.textContent = `Correct! The answer is '${answer}'.`;
        sessionStorage.clear();
    } else if (!answer) {
        resultText.innerHTML = "";
        sessionStorage.clear();
    } else {
        resultText.textContent = `Incorrect. The correct answer is '${answer}'.`;
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
    // Get all personality keys and randomly select one
    const personalityKeys = Object.keys(personalities);
    const randomIndex = Math.floor(Math.random() * personalityKeys.length);
    const maxVeggie = personalityKeys[randomIndex];

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image'; 


    // Create and add credits text
    const creditsText = document.createElement('p');
    creditsText.className = 'subtitle';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "Drumroll... here is your E-Resource ID! Thank you for playing the game!";
        text.appendChild(img);

        // Create and add credits text
        // const creditsText = document.createElement('p');
        // creditsText.className = 'subtitle';
        creditsText.innerHTML = '';
        text.appendChild(creditsText);

    };
}


/*
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

    // Create and add credits text
    const creditsText = document.createElement('p');
    creditsText.className = 'subtitle';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "Drumroll... here is your E-Resource ID! Thank you for playing the game!";
        text.appendChild(img);

        // Create and add credits text
        // const creditsText = document.createElement('p');
        // creditsText.className = 'subtitle';
        creditsText.innerHTML = '<small>Special thanks to: Angela, Jennifer, XXX, XXX, and XXX!</small>';
        text.appendChild(creditsText);
    };
}
*/


function startGame() {
    window.scrollTo(0, 0);
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.subtitle').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
