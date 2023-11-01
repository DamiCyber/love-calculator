const clickIn = ()=>{
    let see = nameMe.value
    let seek = lover.value
    if(see==""&&seek==""){
        error.innerHTML=`<p style="color:white; text-aling:center;">Fill the inputs </p>`
    }
    else{
        error.innerHTML=""
        nameMe.value=""
        lover.value=""
        let randme = Math.random()*100
        let seg = Math.round(randme)
        result.innerHTML=`<p style="color:white; text-transform: uppercase;">Love score for ${see} and ${seek}: ${seg}%</p>`

        if(seg < 50){
            com.innerHTML=`<p style="color:white;  text-transform: uppercase;">both of you are not compatible in life </p>`
          }else if(seg >50){
            com.innerHTML=`<p style="color:white;  text-transform: uppercase;"> congratulations both of you are compatible `
          }
    } 
}