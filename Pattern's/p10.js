function pattern11(n){
	for(let i=0;i<2*n-1;i++){
		let s=''
		if(i<n){
			for(let j=0;j<i+1;j++){
				s+='*'
			}
		}
		else{
			for(let k=0;k<2*n-i-1;k++){
				s+='*'
			}
		}
		console.log(s)
	}
}

pattern11(5)