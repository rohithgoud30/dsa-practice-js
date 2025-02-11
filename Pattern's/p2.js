function pattern2(n){
	for(let i=1;i<=n;i++){
		let s=''
		for(let j=0;j<i;j++){
			s+="*"
		}
		console.log(s)
	}
}

pattern2(5)