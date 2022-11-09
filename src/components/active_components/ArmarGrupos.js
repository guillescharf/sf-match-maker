import { useState } from "react";
import DetalleGrupo from "./DetalleGrupo";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ArmarGrupos = () =>{

    const MySwal = withReactContent(Swal);

        // Datos hardcodeados para pruebas
    const skills = [
        {
            "id": "001",
            "description": "Metodologías Ágiles",
        },
        {
            "id": "002",
            "description": "Diseño Responsive",
        },
        {
            "id": "003",
            "description": "Lógica de programación",
        }
    ]
    const Participants = [
        {
            "id": "asd6a89s7d6asd86",
            "name": "nombre del 1",
            "email": "asdasd@asd.com",
            "skills": ["Metodologías Ágiles", "Diseño Responsive"]

        },
        {
            "id": "asd6a89s7dsdf6asd86",
            "name": "nombre del 2",
            "email": "asdasd@asd.com",
            "skills": ["Metodologías Ágiles"]

        },
        {
            "id": "asd6a8asdf6asd86",
            "name": "nombre del 5",
            "email": "asdasd@asd.com",
            "skills": ["Lógica de programación"]

        },
        {
            "id": "asd6a89s7dsdasdasdasdf6asd86",
            "name": "nombre del 6",
            "email": "asdasd@asd.com",
            "skills": []

        },
        {
            "id": "asd6a89ssdfsdf7d6asd86",
            "name": "nombre del 3",
            "email": "asdasd@asd.com",
            "skills": ["Diseño Responsive"]

        },
        {
            "id": "asd6asdfsdaf89s7d6asd86",
            "name": "nombre del 4",
            "email": "asdasd@asd.com",
            "skills": []

        }
    ]

    const [instanceName, setInstanceName] = useState('');
    const [cant, setCant] = useState(1);
    const [skillSelected, setSkillSelected] = useState('');
    const [cantOf, setCantOf] = useState('groups');
    const [groupsList, setGroupsList] = useState([]);
    //const [generateGroups, setGenerateGroups] = useState(false);

    /**
    
    * Randomize an array
    
    * @param {array} inputArray Array to be randomized
    
    */
    function shuffleArray(inputArray) {
        inputArray.sort(() => Math.random() - Math.random());
    }

    /**
    
    * Determines the groups ammount according to participans per group and total of participants
    
    * @param {integer} totalParticipants Total amount of participants to split in groups
    
    * @param {integer} participantsPerGroup Desired amount of participants by group
    
    * @return {integer} Return the amount of groups to be created
    
    */
    const cantGroupsFromParticipants = (totalParticipants, participantsPerGroup) => {
        return Math.ceil(totalParticipants / participantsPerGroup);
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
        if ((participants.length > 0) && skillToSearch.trim() !== '') {
            participants.forEach(participant => {
                if (participant.skills.find(skill => skill === skillToSearch)) {
                    participantsWithSkill = [...participantsWithSkill, participant];
                } else {
                    participantsWitoutSkill = [...participantsWitoutSkill, participant];
                }
            });
            return [participantsWithSkill, participantsWitoutSkill];
        } else {
            return [[], participants];
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
        for (let i = 0; i < groupsQty; i++) {
            finalGroups[i] = [];
        }
        shuffleArray(restOfParticipants);
        const allParticipants = [...headsOfGroups, ...restOfParticipants];
        let actualGroup = 0;
        while (allParticipants.length > 0) {
            finalGroups[actualGroup].push(allParticipants.shift());
            actualGroup++;
            (actualGroup === (groupsQty)) && (actualGroup = 0);
        }
        console.log("distributeParticipants:", finalGroups );
        return finalGroups;
    }

    /**
    
    * Create the final groups distribution acording to stablished parameters 
    
    * @param {array} participants Total amount of participants to split in groups
    
    * @param {integer} groupsQty Quantioty of groups to be created
    
    * @param {String} skillDesired The principal skill to split in group (Allow empty string to generate ranom groups)
    
    * @return {array} Return an array with groups information
    
    */
    const createGroups = (participants, groupsQty, skillDesired = '') => {

        const [headsOfGroups, restOfParticipants] = findBySkill(participants, skillDesired);
        // Evaluate if there are enought head of group for the groups quantity desired

        if ((headsOfGroups.length < groupsQty) &&  (skillDesired !=='')) {
            confirmGroupsWithoutSkill(headsOfGroups, restOfParticipants, parseInt(groupsQty));
            return([]);
                      
        } else{
            return distributeParticipants(headsOfGroups, restOfParticipants, parseInt(groupsQty)) ;       
        }
        //console.log(generateGroups);

        
        
    }

    const handleChange = (ev) => {
        const { name, value } = ev.target;

        switch(name){
            case 'InstanceName':{
                setInstanceName(value);
                break;
            }
            case 'cant':{
                setCant(value);
                break;
            }
            case 'cantOf':{
                setCantOf(value);
                break;
            }
            case 'skillSelected':{
                setSkillSelected(value);
                break;
            }
        }
      };

    const handleSubmit = (e) => {
            e.preventDefault();
            const groupsQty = (cantOf ==='groups')? cant: cantGroupsFromParticipants(Participants.length, cant);
            setGroupsList(createGroups(Participants, groupsQty, skillSelected));
           
    }

    const  confirmGroupsWithoutSkill = (headsOfGroups, restOfParticipants, groupsQty) => {//Funcion para usar sweet alert con boton de cancelar y de aceptar
        MySwal.fire({
            title: 'No hay tantos integrantes con la habilidad deseada!',
            text: `Solo hay ${headsOfGroups.length} participantes con la habilidad seleccionada! \n Desea continuar de todas formas?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, continuar!'
        }).then((result) => {
            if (result.isConfirmed) {
                setGroupsList(distributeParticipants(headsOfGroups, restOfParticipants, parseInt(groupsQty)) ); 
            }else{
                return false;
            }
        })
    }    

    let groupNumber = 1;

    return(
        <div className="container">
                <form>
                    <div className="form-row">
                        <h2>Crear Grupos</h2>
                        <div className="col-md-4 mb-3">
                        <label htmlFor="instanceName" >Nombre de la instancia/trabajo</label> 
                            <input className="form-control" type="text" placeholder='Ej: Trabajo práctico 1, Práctica de maquetado, etc' id='instanceName'  name="InstanceName"  value={instanceName} onChange={handleChange} />
                             </div>           
                             <div className="col-md-4 mb-3">
                        <label htmlFor="cant">Cantidad de :</label>
                        <input  type="number" name="cant" id="cant" onChange={handleChange}  /> &nbsp;
                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={handleChange} name="cantOf" value={cantOf}>
                            <option value="groups">Grupos</option>
                            <option value="persons">Integrantes por grupo</option>
                        </select>
                        </div>
                        <br />
                        <h5>Seleccione que habilidad quiere distribuir en los grupos: </h5>
                        <fieldset onChange={handleChange}>
                        <input type="radio" key="skill_0" name="skillSelected" value=""  /> <span> Ninguna </span><br />
                        {
                            skills.map((skill) => { 
                                return(
                                    <>
                                        <input type="radio" key={skill.id} name="skillSelected" value={skill.description} /> <span> {skill.description} </span><br />
                                    </>
                                )                            
                            })
                        }
                        </fieldset>
                        <button className="btn btn-success" onClick={handleSubmit}> Generar grupos </button>
                    </div> 
                </form>
                <div>  

                </div>
                {
                    groupsList.map((CurrentGroup) => {                        
                        return(
                            <div className="card text-white bg-primary mb-3 mt-3" >
                                <div className="card-header text-center">Grupo numero: {groupNumber++} </div>                                
                                <DetalleGrupo group={CurrentGroup}  />
                            </div>
                        )
                        })
                }
        </div>
    )
}
export default ArmarGrupos;