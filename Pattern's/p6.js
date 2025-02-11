// function pattern6(n){
// 	for(let i=n;i>0;i--){
// 		let s=''
// 		for(let j=1;j<=i;j++){
// 			s+=j
// 		}
// 		console.log(s)
// 	}
// }


function pattern6(n){
	for(let i=0;i<n;i++){
		let s=''
		for(let j=1;j<=n-i;j++){
			s+=j
		}
		console.log(s)
	}
}

pattern6(5)