function pattern5(n){
	for(let i=n;i>0;i--){
		let s=''
		for(let j=1;j<=i;j++){
			s+='*'
		}
		console.log(s)
	}
}

// function pattern5(n){
// 	for(let i=0;i<n;i++){
// 		let s=''
// 		for(let j=0;j<n-i;j++){
// 			s+='*'
// 		}
// 		console.log(s)
// 	}
// }


pattern5(5)