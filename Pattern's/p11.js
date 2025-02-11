function pattern11(n){
	for(let i=0;i<n;i++){
		let s=''
		for(let j=0;j<i+1;j++){
			if((i+j)%2===0){
				s+=1
			}
			else{
				s+=0
			}
		}
		console.log(s)
	}
}

pattern11(5)