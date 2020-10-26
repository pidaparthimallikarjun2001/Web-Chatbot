know = {
    "hello" : "Hi there!",
    "who are you?" : "I am a Chatbot",
    "how are you?" : "I am fine",
    "what can you do?" : "I can give you information related to COVID - 19 like sympyoms, vaccine, precautions etc.,",
    "symptoms" : "MOST COMMON SYMPTOMS:<br>->fever<br>->dry cough<br>->tiredness<br>LESS COMMON SYMPTOMS:<br>->aches and pains<br>->sore throat<br>->diarrhoea<br>->conjunctivitis<br>->headache<br>->loss of taste or smell<br>->a rash on skin, or discolouration of fingers or toes<br>->Serious symptoms:<br>->difficulty breathing or shortness of breath<br>->chest pain or pressure<br>->loss of speech or movement<br>Seek immediate medical attention if you have serious symptoms.<br>Always call before visiting your doctor or health facility.People with mild symptoms who are otherwise healthy should manage their symptoms at home.On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.",
    "vaccine" : "To date, there is no specific medicine recommended to prevent or treat the new Coronavirus. Specific treatments are under investigation and will be tested through clinical trials. For now, wear a face mask and follow social distancing",
    "how does this virus spread?" : "Current evidence suggests that COVID-19 spreads between people through direct, indirect (through contaminated objects or surfaces), or close contact with infected people via mouth and nose secretions. These include saliva, respiratory secretions or secretion droplets.",
    "precautions" : "wear a mask, follow social distancing, avoid direct contact with frequently touuched objects, always carry a sanitizer, wash your hands frequently, avoid going to crowded places",
    "i am afraid" : "Hey! Don't worry!<br> Follow these precautions and think positively. You'll be fine",
    "thank you" : "You're welcome!"
};

function talk() {
    var userInput = document.getElementById("userBox").value;
    document.getElementById("userBox").value = "";
        document.getElementById("chatLog").innerHTML += "YOU : " +  userInput + "<br>";

    userInput = userInput.toLowerCase();

    if(userInput in know) {
        document.getElementById("chatLog").innerHTML += "BOT : " +  know[userInput] + "<br><br>";
    }
    else {
        document.getElementById("chatLog").innerHTML += " BOT : Sorry! I don't know about it!" + "<br>";
    }

}


