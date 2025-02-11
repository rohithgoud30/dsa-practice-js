function pattern21(n){
	for(let i=0;i<n;i++){
		let s=''
		for(let j=0;j<n;j++){
			s+= i===0||i===n-1||j===0||j===n-1?"*":' '
		}
		console.log(s)
	}
}

pattern21(5)