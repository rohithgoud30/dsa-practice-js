function pattern17(n){
	for(let i=0;i<n;i++){
		let s=''
		let val=65
		//space
		for(let j=0;j<n-i-1;j++){
			s+=' '
		}
		//alphebets
		for(let k=1;k<=2*i+1;k++){
			if(k<(2*i+1)/2){
				s+=String.fromCharCode(val)
				val+=1
			}
			else{
				s+=String.fromCharCode(val)
				val-=1
			}
		}
		console.log(s)
	}
}

pattern17(5)