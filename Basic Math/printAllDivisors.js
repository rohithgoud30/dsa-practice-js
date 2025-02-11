function printAllDivisors(n){
	let s=[]
	for(let i=1;i<=Math.sqrt(n);i++){
		if(n%i===0){
			s.push(i)
			if(i!==n/i){
				s.push(n/i)
			}
		}
	}
	console.log(s.sort((a,b)=>a-b).join(' '))
}

printAllDivisors(36)