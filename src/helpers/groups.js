const skills = [
    {
        "id": "123",
        "description": "habilidad 1",
    },
    {
        "id": "234",
        "description": "habilidad 2",
    },    
    {
        "id": "345",
        "description": "habilidad 3",
    }        
]
const Participants = [
    {
        "id": "asd6a89s7d6asd86",
        "name": "nombre del 1",
        "email": "asdasd@asd.com",
        "skills": ["habilidad 1", "habilidad 2"]

    },
    {
        "id": "asd6a89s7dsdf6asd86",
        "name": "nombre del 2",
        "email": "asdasd@asd.com",
        "skills": ["habilidad 1", "habilidad 4"]

    },
    {
        "id": "asd6a89s7dsdf6asd86",
        "name": "nombre del 5",
        "email": "asdasd@asd.com",
        "skills": ["habilidad 5", "habilidad 4"]

    },
    {
        "id": "asd6a89s7dsdf6asd86",
        "name": "nombre del 6",
        "email": "asdasd@asd.com",
        "skills": ["habilidad 3", "habilidad 4"]

    },        
    {
        "id": "asd6a89ssdfsdf7d6asd86",
        "name": "nombre del 3",
        "email": "asdasd@asd.com",
        "skills": ["habilidad 2"]

    },
    {
        "id": "asd6asdfsdaf89s7d6asd86",
        "name": "nombre del 4",
        "email": "asdasd@asd.com",
        "skills": []

    }            
]

console.log("participantes:", Participants);
console.log("habilidades:", skills);


/**

* [cantGroupsFromParticipants descripción]

* @param {[integer]} totalParticipants [Total amount of participants to plit in groups]

* @param {[integer]} participantsPerGroup [Desired amount of participants by group]

* @return {[integer]} [Return the amount of groups to be created]

*/
const cantGroupsFromParticipants = (totalParticipants, participantsPerGroup) => {
    return Math.floor(totalParticipants/participantsPerGroup);
}

/**

* [findBySkill descripción]

* @param {[Array]} participants [Array of participants in wich search the skill]

* @param {[String]} skillToSearch [Skill to be Found]

* @return {[integer]} [Return an array, with all the participants who has the specified skill]

*/
const findBySkill = (participants, skillToSearch) => {    
    if((participants.length > 0) && skillToSearch.trim() !==''){
        const searchResult = participants.filter(participant => (participant.skills.find(skill => skill === skillToSearch)));
        //console.log("tiene valores", searchResult);
        return searchResult;
    }else{
        const searchResult = [];
        //console.log("no entro a la busqueda");
        return searchResult;
    }

    
}

console.log("Resultado:", findBySkill(Participants, "habilidad 4"));

//alert(cantGroupsFromParticipants(43,5))
