function pattern19(n){
	for(let i=0;i<n;i++){
		let s=''
		//stars
		for(let j=0;j<n-i;j++){
			s+='*'
		}
		//space
		for(let k=0;k<2*i;k++){
			s+=' '
		}
		//stars
		for(let j=0;j<n-i;j++){
			s+='*'
		}
		console.log(s)
	}

	for(let i=0;i<n;i++){
		let s=''
		//stars
		for(let j=0;j<i+1;j++){
			s+='*'
		}
		//space
		for(let k=0;k<2*n-2*i-2;k++){
			s+=' '
		}
		//stars
		for(let j=0;j<i+1;j++){
			s+='*'
		}
		console.log(s)
	}
}

pattern19(5)