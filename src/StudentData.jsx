function StudentData({name,age ,image}){

    return(

        <div className="demo">
        <h1>{name}</h1>

        <img src={image}></img>
        <h2>{age}</h2>
        
        </div>
    )

}



export default StudentData;