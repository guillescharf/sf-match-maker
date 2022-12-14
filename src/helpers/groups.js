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
        "id": "asd6a8asdf6asd86",
        "name": "nombre del 5",
        "email": "asdasd@asd.com",
        "skills": ["habilidad 5", "habilidad 4"]

    },
    {
        "id": "asd6a89s7dsdasdasdasdf6asd86",
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

/**

* Randomize an array

* @param {array} inputArray Array to be randomized

*/
function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - Math.random());
}

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

* @return {Array} Return two arrays, one with participants with the desired skiill, and other with the rest of participants. 

*/
const findBySkill = (participants, skillToSearch) => {    
    let participantsWithSkill = [];
    let participantsWitoutSkill = [];
    if((participants.length > 0) && skillToSearch.trim() !==''){
        participants.forEach(participant => {
            if(participant.skills.find(skill => skill === skillToSearch)){
                participantsWithSkill = [...participantsWithSkill, participant];
            }else{
                participantsWitoutSkill = [...participantsWitoutSkill, participant];
            }
        });
        return [participantsWithSkill, participantsWitoutSkill];
    }else{
        return [[],participants];
    }    
}

/**

* Distribute participants in groups 

* @param {array} headsOfGroups Participants with desired skills

* @param {array} restOfParticipants All other participants to distribute

* @param {integer} groupsQty The amount of groups desired

* @return {array} Return an array with groups distribution

*/
const distributeParticipants = (headsOfGroups, restOfParticipants, groupsQty) => {
    let finalGroups = [];
    for(let i=0; i < groupsQty; i++){
        finalGroups[i] = [];
    }
   shuffleArray(restOfParticipants);
    const allParticipants = [...headsOfGroups,...restOfParticipants];
    let actualGroup = 0;
    while (allParticipants.length>0){
        finalGroups[actualGroup].push(allParticipants.shift());
        actualGroup++;
        (actualGroup === (groupsQty)) && (actualGroup = 0);   
    }
    return finalGroups;
}

/**

* Create the final groups distribution acording to stablished parameters 

* @param {array} participants Total amount of participants to split in groups

* @param {integer} groupsQty Quantioty of groups to be created

* @param {String} skillDesired The principal skill to split in group (Allow empty string to generate ranom groups)

* @return {array} Return an array with groups information

*/
const createGroups = (participants, groupsQty, skillDesired ='') => {

    const [headsOfGroups, restOfParticipants] = findBySkill(participants, skillDesired);
    // Evaluate if there are enought head of group for the groups quantity desired
    if(headsOfGroups.length >= groupsQty){
        console.log("Hay suficientes participantes con la habilidad principal");
        // se comensaria con la reparticion de participantes por grupo
    }else{
        console.log("No alcanzan los participantes con la habilidad requerida");
        // aca habria que consultar si quiere reducir la cantidad de grupos segun los head o groups o seguir igual
    }

    console.log("algo");
    return distributeParticipants(headsOfGroups, restOfParticipants, groupsQty);
}

const finalGroups = createGroups(Participants, 2);
console.log("grupos finales", finalGroups);

//console.log("Resultado:", findBySkill() (Participants, "habilidad 7"));
//consol.log(cantGroupsFromParticipants(43,5))