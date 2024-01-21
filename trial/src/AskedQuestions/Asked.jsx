export const Asked=()=>{
    const characters = [
        {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            eye_color: 'blue',
            gender: 'male',
        },
        {
            name: 'Darth Vader',
            height: '202',
            mass: '136',
            eye_color: 'yellow',
            gender: 'male',
        },
        {
            name: 'Leia Organa',
            height: '150',
            mass: '49',
            eye_color: 'brown',
            gender: 'female',
        },
        {
            name: 'Anakin Skywalker',
            height: '188',
            mass: '84',
            eye_color: 'blue',
            gender: 'male',
        },
    ];
    //Add all interview questions
    // count the total letters in arrays name
    let totalword= characters.reduce((acc,character)=> acc+character.name.split(" ").join("").length,0)
    console.log(totalword)
    // sort array use mass
    const arr2=characters.sort((a,b)=> a.mass-b.mass)
    console.log(arr2)
    return(
        <div>Asked</div>
    )
}