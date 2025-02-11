function pattern7(n){
	for(let i=0;i<n;i++){
		let s=''
		//space
		for(let j=0;j<n-i-1;j++){
			s+=' '
		}
		//stars
		for(let k=0;k<2*i+1;k++){
			s+='*'
		}
		console.log(s)
	}
}

pattern7(5)