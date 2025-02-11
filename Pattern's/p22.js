function pattern22(n){
	for(let i=0;i<2*n-1;i++){
		for(let j=0;j<2*n-1;j++){
			process.stdout.write(`${4-Math.min(i,j,2*n-2-j,2*n-2-i)}`)
		}
		process.stdout.write("\n")
	}
}

pattern22(4)