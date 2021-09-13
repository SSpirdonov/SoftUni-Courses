function solve(input){
    let n = Number(input.shift())
    let plants = {}
    for(i =0;i<n;i++)
    {
        let pl = Object.keys(plants)[0] ;
        let pL = Object.keys(plants)[i-1] ; // Така се достъпва име на ключ в обект
        let [plantName, plantRarity] = input.shift().split('<->')
        
        if(plants[plantName]===undefined)
        {
            plants[plantName]={Rarity: Number(plantRarity), Rating:[]}
        }
        else
        {
            plants[plantName].Rarity = Number(plantRarity)
        }
    }
    let cmd = input.shift()
    while(cmd!='Exhibition')
    {
        let [command, plant] = cmd.split(': ')
        switch(command)
        {
            case 'Rate':
                {
                let [plantName, rating] = plant.split(' - ')
                if(plants[plantName]!=undefined)
                {
                    plants[plantName].Rating.push(Number(rating))
                }
                else
                {
                    console.log('error')
                }
            
                break;
            }
            case 'Update':
            {
                let [plantName, rarity] = plant.split(' - ')
 
                if(plants[plantName]!=undefined)
                {
                    plants[plantName].Rarity = Number(rarity)
                }
                else
                {
                    console.log('error')
                }
            }
            break;
            case 'Reset':
            {
 
                if(plants[plant]!=undefined)
                {
                    plants[plant].Rating = []
                }
                else
                {
                    console.log('error')
                }
                break;
            }
        }
        cmd = input.shift()
    }
    
    for(let [plantName,plantAttributes] of Object.entries(plants))
    {
        
        if(plantAttributes.Rating.length>=1)
        {
            let totalSum = 0
           
            for(let x of plantAttributes.Rating)
            {
                totalSum+=x
            }
            plants[plantName].averageRating = totalSum/plantAttributes.Rating.length
        }
        else
        {
            plants[plantName].averageRating = plantAttributes.Rating
        }
 
       
    }
    let sorted = Object.entries(plants).sort((a,b)=>{return b[1].Rarity-a[1].Rarity || b[1].averageRating-a[1].averageRating})
 
 
    console.log(`Plants for the exhibition:`)
    for(let [plantName, plantData] of sorted)
    {
        if(plantData.averageRating.length<=0)
        {
            console.log(`- ${plantName}; Rarity: ${plantData.Rarity}; Rating: 0.00`)
            
        }
        else
        {
            console.log(`- ${plantName}; Rarity: ${plantData.Rarity}; Rating: ${plantData.averageRating.toFixed(2)}`)
 
        }
    }
    
}

solve(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);