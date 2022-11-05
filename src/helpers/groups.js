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
        "skills": ["habilidad 6"]

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

* Determines the groups ammount according to participans per group and total of participants

* @param {integer} totalParticipants Total amount of participants to split in groups

* @param {integer} participantsPerGroup Desired amount of participants by group

* @return {integer} Return the amount of groups to be created

*/
const cantGroupsFromParticipants = (totalParticipants, participantsPerGroup) => {
    return Math.floor(totalParticipants/participantsPerGroup);
}

/**

* This function search all participants with a specific skill

* @param {Array} participants Array of participants in wich search the skill

* @param {String} skillToSearch Skill to be Found

* @return {Array} Return an array, with all the participants who has the specified skill

*/
const findBySkill = (participants, skillToSearch) => {    
    if((participants.length > 0) && skillToSearch.trim() !==''){
        const searchResult = participants.filter(participant => (participant.skills.find(skill => skill === skillToSearch)));
        console.log("tiene valores", searchResult);
        console.log("lo que quedo en el Array", participants);
        return searchResult;
    }else{
        const searchResult = [];
        //console.log("no entro a la busqueda");
        return searchResult;
    }    
}

/**

* Create the final groups distribution acording to stablished parameters 

* @param {array} participants Total amount of participants to split in groups

* @param {integer} groupsQty Quantioty of groups to be created

* @param {String} skillDesired The principal skill to split in group

* @return {array} Return an array of arrays with groups information

*/
const createGroups = (participants, groupsQty, skillDesired) => {
    const headsOfGroups = findBySkill(participants, skillDesired);
    if(headsOfGroups.length >= groupsQty){
        console.log("Hay suficientes participantes con la habilidad principal");
        // se comensaria con la reparticion de participantes por grupo
    }else{
        console.log("No alcanzan los participantes con la habilidad requerida");
        // aca habria que consultar si quiere reducir la cantidad de grupos segun los head o groups o seguir igual
    }
}

createGroups(Participants, 3, 'habilidad 4');
//console.log("Resultado:", findBySkill() (Participants, "habilidad 7"));
//consol.log(cantGroupsFromParticipants(43,5))
