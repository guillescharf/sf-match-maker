const DetalleGrupo = ({group}) => {
   return(
        <div>            
            {
                group.map((participant) => {
                    return(

                        <div className="card-body">
                          <h5 className="card-title">{participant.name}</h5>
                          <p className="card-text">
                            <ul>
                                {participant.skills.map((skill) => {
                                    return(
                                        <li>{skill}</li>
                                    )
                                    
                                })}
                            </ul>
                            </p>
                        </div>

                    )
                    })
            }

        </div>
   )
}

export default DetalleGrupo;