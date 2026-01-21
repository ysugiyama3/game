/* https://stackoverflow.com/questions/18990441/innerhtml-br-breaking */

const gameData = {
    "1": {
        "topic" : "Browser issue",
        "text" : "A student is encountering a 404 error when trying to access an ebook from their residential college, but you are unable to replicate the issue. What would you recommend they do first?",
        "image" : "smaller_images/NotFound.png",
        "imageAlt": "An illustration of a bear wearing a navy Yale University hoodie, looking sad to see a 404 Not Found error message displayed on a web browser page on a laptop",
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
        "imageAlt": "A screenshot example of Chrome settings displaying the options to delete browsing data",
        "answer" : "Clear cache and cookies",
        "choices": {
             "Continue": [3, []]
        }
    },
    "3": {
        "topic" : "Simultaneous user limit",
        "text": "A professor reported having trouble accessing the French newspaper, Le Monde, through the Eureka.cc database last night. But you are unable to replicate the issue. This database is known to be:",
        "image" : "smaller_images/NoAccess.png",
        "imageAlt": "An illustration of a cat looking confused to see a NO Access message displayed on a web browser page on a laptop",
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
        "imageAlt": "A screenshot of the Eureka.cc landing page",
        "answer" : "All of the above",
        "choices": {
            "Continue": [5,[]]
        }
    },
    "5": {
        "topic" : "Not starting the search from the library site",
        "text": "A graduate student reported that they could not read full-text of the current issue of the Harvard Business Review magazine at https://hbr.org/magazine.",
        "image" : "smaller_images/Paywall.png",
        "imageAlt": "An illustration of a confused bunny looking at a PAYWALL message displayed on a web browser page on a laptop",
        "answer" : "",
        "choices": {
            "hbr.org is temporarily unavailable due to site upgrade": [6,["OA"]],
            "Yale's access to the current issue is through EBSCOhost Business Source Complete, not through hbr.org": [6,["Database", "Ebook", "Video"]],
            "Yale does not have access to Harvard Business Review at all": [6,["Audio", "Ejournal"]]
        }
    },
    "6": {
        "text": "When users know their institution subscribes to a particular journal, they might directly visit the publisher's website, such as hbr.org, instead of using the library catalog. But most of Yale's journal subscriptions are accessed through aggregator platforms rather than directly from publishers. Always use the <a href='https://articles.library.yale.edu/permalink/01YALE_INST/1df2v8b/alma991010351927208651' target='_blank'>library catalog</a> to ensure you locate the correct subscription platforms and obtain essential details such as access methods, simultaneous user limit, content coverage, and embargo periods.",
        "image" : "smaller_images/HBR.png",
        "imageAlt": "Yale Library catalog entry for Harvard Business Review showing access information and platform details",
        "answer" : "Yale's access to the current issue is through EBSCOhost Business Source Complete, not through hbr.org",
        "choices": {
            "Continue": [7,[]]
        }
    },
    "7": {
        "topic" : "EZProxy",
        "text": "Which is the correct EZProxy prefix for Yale Library?",
        "image" : "smaller_images/EZProxyLogo.png",
        "imageAlt": "EZProxy logo",
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
        "imageAlt": "Diagram showing how EZProxy connects Yale remote users to library resources through authentication",
        "answer" : "https://yale.idm.oclc.org/login?url=",
        "choices": {
            "Continue": [9,[]]
        }
    },
    "9": {
        "topic" : "Access Method",
        "text": "What is the access method for Kanopy?",
        "image" : "smaller_images/StreamingVideo.png",
        "imageAlt": "An illustration of a panda looking at a visual image displayed on a web browser page on a laptop",
        "answer" : "",
        "choices": {            
            "Username/Password": [10,["Ebook", "OA"]],
            "Internet Protocol (IP) authentication": [10,["Database", "Ejournal", "Video"]],
            "Single Sign-On (SSO)": [10,["Audio"]]
        }
    },
    "10": {
        "text": "<a href='https://search.library.yale.edu/databases/99127780633408651' target='_blank'>Kanopy</a> is accessible through IP authentication such as EZProxy and VPN, allowing users to access streaming videos remotely if their device is connected from one of Yale's approved IP addresses. Details about remote access are provided in the local note for each catalog record on the Database AZ List. Although IP authentication is the most common access method, Yale Library also uses Username/Password and Single Sign-On (SSO) for certain e-resources.",
        "image" : "smaller_images/Kanopy.png",
        "imageAlt": "A screenshot of a local note found on Yale Library's catalog page for Kanopy",
        "answer" : "Internet Protocol (IP) authentication",
        "choices": {
            "Continue": [11,[]]
        }
    },    
    "11": {
        "topic" : "E-book Access",
        "text": "O'Reilly books (formerly Safari books) are unlimited access.",
        "image" : "smaller_images/ThreeUsers.png",
        "imageAlt": "An illustration of a raccoon, a bear, and a koala, lined up horizontally, each using their own laptop",
        "answer" : "",
        "choices": {            
            "True": [12,["Database", "Ebook", "Ejournal", "Video"]],
            "False": [12,["OA", "Audio"]]
        }
    },
    "12": {
        "text": "<a href='https://library.yale.edu/eresources/access/access-safari-books-online' target='_blank'>O'Reilly</a> titles offer unlimited access. Please note they are part of a subscription package, meaning libraries do not have control over the content. Titles may be added or removed without warning.",
        "image" : "smaller_images/OReilly.png",
        "imageAlt": "A screenshot of Yale Library's access page for O'Reilly books",
        "answer" : "True",
        "choices": {
            "Continue": [13,[]]
        }
    },
    "13": {
        "topic" : "Patron affiliation",
        "text": "Which of the following methods would NOT allow a Harvard University student to access many of Yale's licensed e-resources?",
        "image" : "smaller_images/Harvard.png",
        "imageAlt": "An illustration of a confused squirrel wearing a burgundy Harvard University sweater, looking at a laptop",
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
        "imageAlt": "A screenshot of Yale Library's Connecting to E-resources page",
        "answer" : "An e-resource link that includes Yale's EZProxy prefix while on Harvard's campus",
        "choices": {
            "Continue": [15,[]]
        }
    },   
    "15": {
        "topic" : "Major newspapers/magazines",
        "text": "To which websites/apps can current faculty, student, and staff sign up for a digital subscription? Select only one answer.",
        "image" : "smaller_images/Newspaper.png",
        "imageAlt": "An illustration of a happy Boston Terrier, looking at an iPhone",
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
        "text": "Yale Library offers current faculty, staff, and students access to many major newspapers and magazines. Use your @yale.edu email address or Yale CAS information to set up a personal account. Please note that authorized users do not include affiliates of Yale New Haven Hospital. Check the links below to create accounts:<br /><a href='https://library.yale.edu/eresources/access/access-the-atlantic' target='_blank'>The Atlantic</a><br /><a href='https://library.yale.edu/eresources/access/access-economist' target='_blank'>The Economist</a><br /><a href='https://library.yale.edu/eresources/access/access-financial-times' target='_blank'>Financial Times</a><br /><a href='https://library.yale.edu/eresources/access/access-nytcom' target='_blank'>New York Times</a><br /><a href='https://library.yale.edu/eresources/access/access-wall-street-journal' target='_blank'>Wall Street Journal</a><br /><a href='https://library.yale.edu/eresources/access/access-washington-post' target='_blank'>Washington Post</a>",
        "image" : "smaller_images/Phone.png",
        "imageAlt": "An illustration of a mobile phone screen with app icons",
        "answer" : "All of the above",
        "choices": {
            "Continue": [17,[]]
        }
    },
    "17": {
        "text": "Last question! How often do you use e-resources licensed by Yale Library?",
        "image" : "smaller_images/Quicksearch.png",
        "imageAlt": "Logos of Yale Library's three discovery tools: Quicksearch, Articles+, and E-Journal Search",
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
    "Audio": {
        count: 0,
        imageAlt: "E-Resource ID card showing an Audio resource type with headphones icon"
    },
    "Database": {
        count: 0,
        imageAlt: "E-Resource ID card showing a Database resource type with database icon"
    },
    "Ebook": {
        count: 0,
        imageAlt: "E-Resource ID card showing an Ebook resource type with digital book icon"
    },
    "Ejournal": {
        count: 0,
        imageAlt: "E-Resource ID card showing an E-journal resource type with journal icon"
    },
    "OA": {
        count: 0,
        imageAlt: "E-Resource ID card showing an Open Access resource type with open lock icon"
    },
    "Video": {
        count: 0,
        imageAlt: "E-Resource ID card showing a Video resource type with play button icon"
    }
};

let currentState = 1;

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const progressBarBg = progressBar.parentElement;
    
    if (currentState === 0) {
        progressBar.parentElement.parentElement.style.display = 'none';
        return;
    }
    
    // Calculate progress based on all states from 1 to 16 (excluding 0 and 100)
    const totalStates = 17;
    const progress = ((currentState) / totalStates) * 100;
    
    progressBar.style.width = progress + '%';
    progressText.textContent = Math.round(progress) + '%';
    
    // Update ARIA attributes
    progressBarBg.setAttribute('aria-valuenow', Math.round(progress));
}

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
    
    // Update progress bar
    updateProgressBar();
    
    // Track score for questions with answers
    if (retrievedResponse === answer && answer) {
        resultText.innerHTML = `<span class="correct-icon" aria-hidden="true">✓</span> Correct! The answer is '${answer}'.`;
        resultText.className = 'story-text result-correct';
        // Increment score
        let currentScore = parseInt(sessionStorage.getItem("score") || "0");
        sessionStorage.setItem("score", currentScore + 1);
        sessionStorage.removeItem("response");
    } else if (!answer) {
        resultText.innerHTML = "";
        resultText.className = 'story-text';
        sessionStorage.removeItem("response");
    } else if (answer) {
        resultText.innerHTML = `<span class="incorrect-icon" aria-hidden="true">✗</span> Incorrect. The correct answer is '${answer}'.`;
        resultText.className = 'story-text result-incorrect';
        sessionStorage.removeItem("response");
    }
        
    storyText.innerHTML = gameData[state].text.replace(
        "target='_blank'", 
        "target='_blank' rel='noopener noreferrer' aria-label='opens in new tab'"
    );
    
    choicesContainer.innerHTML = '';

    // Create fieldset to group the choices
    const fieldset = document.createElement('fieldset');
    fieldset.style.border = 'none';
    fieldset.style.padding = '0';
    fieldset.style.margin = '0';

    // Create legend (can be visually hidden but still read by screen readers)
    const choiceEntries = Object.entries(gameData[state].choices);
    const isSingleContinueButton = choiceEntries.length === 1 && choiceEntries[0][0] === 'Continue';
    
    // Only add legend if it's not a single "Continue" button
    if (!isSingleContinueButton) {
        const legend = document.createElement('legend');
        legend.className = 'sr-only';
        legend.textContent = 'Select your answer';
        fieldset.appendChild(legend);
    }
    
    // Create buttons and add to fieldset
    for (const [choice, info] of Object.entries(gameData[state].choices)) {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice-button';
        button.type = 'button'; // Prevent form submission behavior
        
        // Set appropriate aria-label based on button type
        const ariaLabel = choice === 'Continue' ? `Proceed with: ${choice}` : `Select answer: ${choice}`;
        button.setAttribute('aria-label', ariaLabel);
        
        let nextState = info[0];
        
        button.onclick = () => {
            // Disable all buttons immediately
            const allButtons = choicesContainer.querySelectorAll('.choice-button');
            allButtons.forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = '0.5';
                btn.style.cursor = 'not-allowed';
            });
            
            // Add visual feedback to clicked button
            button.setAttribute('aria-pressed', 'true');
            button.style.backgroundColor = '#f3dba7';
            
            sessionStorage.setItem("response", choice);
            
            // Brief delay for feedback, then change state
            setTimeout(() => {
                changeState(nextState, info[1]);
            }, 200);  
        }

        fieldset.appendChild(button); // Add to fieldset instead of directly to choicesContainer
    }

    // Add the complete fieldset to the choices container
    choicesContainer.appendChild(fieldset);
    
    // Move focus to the result text if there is one, otherwise to story text
    if (resultText.innerHTML) {
        resultText.focus();
    } else {
        storyText.focus();
    }
    
    // Handle image loading separately - page works even if image fails
    if (gameData[state].image) {
        // Hide image while loading to prevent flicker
        storyImage.style.opacity = '0';
        const img = new Image();
        img.src = gameData[state].image;        
        img.onload = () => {
            storyImage.src = img.src;
            storyImage.alt = gameData[state].imageAlt || 'Game image';
            storyImage.style.display = 'block';
            // Fade in the new image smoothly
            storyImage.style.opacity = '1';
        };
        
        img.onerror = () => {
            // Keep the alt text accessible by using a blank SVG as placeholder
            storyImage.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
            storyImage.alt = gameData[state].imageAlt || 'Image unavailable';
            storyImage.style.opacity = '1';
            console.warn(`Failed to load image: ${gameData[state].image}`);
        };
    } else {
        // No image specified, hide the image element
        storyImage.style.display = 'none';
        storyImage.style.opacity = '1';
        storyImage.alt = '';
    }
}

function changeState(newState, selectedPersonalities) { 
    selectedPersonalities.forEach(personality => {
        personalities[personality].count++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}

function getScoreMessage(score, total) {
    const percentage = (score / total) * 100;
    
    if (percentage === 100) {
        return "Perfect score! You're an e-resource troubleshooting expert! 🌟";
    } else if (percentage >= 75) {
        return "Great job! You have strong knowledge of e-resource troubleshooting! 💪";
    } else if (percentage >= 50) {
        return "Good work! You're on your way to becoming an e-resource pro! 👍";
    } else if (percentage >= 25) {
        return "Nice try! Keep learning about e-resources and you'll improve! 📚";
    } else {
        return "Thanks for playing! There's lots to learn about e-resource troubleshooting! 🎓";
    }
}

function revealMostSelectedVegetable() {
    // Hide progress bar on final screen
    const progressContainer = document.querySelector('.progress-container');
    if (progressContainer) {
        progressContainer.style.display = 'none';
    }

    // Get final score
    const finalScore = parseInt(sessionStorage.getItem("score") || "0");
    const totalQuestions = 8;
    
    // Get score message based on performance
    const scoreMessage = getScoreMessage(finalScore, totalQuestions);
    
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
    img.alt = personalities[maxVeggie].imageAlt;

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        // Create score display
        const scoreHeader = document.createElement('h2');
        scoreHeader.className = 'score-header';
        scoreHeader.textContent = `You got ${finalScore} out of ${totalQuestions}!`;
        
        const scoreText = document.createElement('p');
        scoreText.className = 'score-message';
        scoreText.textContent = scoreMessage;
        
        const resultIntro = document.createElement('p');
        resultIntro.textContent = "Drumroll... here is your E-Resource ID!";

        // Clear and rebuild text content
        text.innerHTML = '';
        text.appendChild(scoreHeader);
        text.appendChild(scoreText);
        text.appendChild(resultIntro);
        text.appendChild(img);

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'final-buttons';
        
        // Play Again button
        const playAgainButton = document.createElement('button');
        playAgainButton.textContent = 'Play Again';
        playAgainButton.className = 'choice-button';
        playAgainButton.onclick = () => {
            sessionStorage.clear();
            location.reload();
        };
        
        // Send Feedback button
        const feedbackButton = document.createElement('button');
        feedbackButton.textContent = 'Send Feedback';
        feedbackButton.className = 'choice-button';
        feedbackButton.onclick = () => {
            const emailSubject = encodeURIComponent('What E-resource Are You Feedback');
            const mailtoLink = `mailto:yukari.sugiyama@yale.edu?subject=${emailSubject}`;
            window.open(mailtoLink);
        };
        
        buttonContainer.appendChild(playAgainButton);
        buttonContainer.appendChild(feedbackButton);
        text.appendChild(buttonContainer);
    };
}

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
