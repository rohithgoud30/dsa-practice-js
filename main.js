// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let s=''
// 		for(let j=0;j<n;j++){
// 			s+='*'
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let s=''
// 		for(let j=0;j<i+1;j++){
// 			s+='*'
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let s=''
// 		for(let j=0;j<i+1;j++){
// 			s+=j+1
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let s=''
// 		for(let j=0;j<i+1;j++){
// 			s+=i+1
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let s=''
// 		for(let j=0;j<n-i;j++){
// 			s+='*'
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let s=''
// 		for(let j=0;j<n-i;j++){
// 			s+=j+1
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let s=''
// 		//space's
// 		for(let j=0;j<n-i;j++){
// 			s+=' '
// 		}
// 		//star's
// 		for(let j=0;j<2*i+1;j++){
// 			s+='*'
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let s=''
// 		//space's
// 		for(let j=0;j<i+1;j++){
// 			s+=' '
// 		}
// 		//star's
// 		for(let j=0;j<2*n-2*i-1;j++){
// 			s+='*'
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let s=''
// 		//space's
// 		for(let j=0;j<n-i;j++){
// 			s+=' '
// 		}
// 		//star's
// 		for(let j=0;j<2*i+1;j++){
// 			s+='*'
// 		}
// 		console.log(s)
// 	}

// 	for(let i=0;i<n;i++){
// 		let s=''
// 		//space's
// 		for(let j=0;j<i+1;j++){
// 			s+=' '
// 		}
// 		//star's
// 		for(let j=0;j<2*n-2*i-1;j++){
// 			s+='*'
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<2*n-1;i++){
// 		let s=''
// 		let stars=n>i?i+1:2*n-i-1
// 		for(let j=0;j<stars;j++){
// 			s+='*'
// 		}

// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let s=''
// 		for(let j=0;j<i+1;j++){
// 			s+=(i+j)%2===0?1:0
// 		}

// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=1;i<=n;i++){
// 		let s=''
// 		//numbers
// 		for(let j=1;j<=i;j++){
// 			s+=j
// 		}
// 		//spaces
// 		for(let j=1;j<=2*n-2*i;j++){
// 			s+=' '
// 		}
// 		//numbers
// 		for(let j=1;j<=i;j++){
// 			s+=i-j+1
// 		}

// 		console.log(s)
// 	}
// }


// function pattern(n){
// 	let count=1
// 	for(let i=0;i<n;i++){
// 		let s=''
// 		for(let j=0;j<i+1;j++){
// 			s+=count
// 			count++
// 		}

// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let val=65
// 		let s=''
// 		for(let j=0;j<i+1;j++){
// 			s+=String.fromCharCode(val)
// 			val+=1
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let val=65
// 		let s=''
// 		for(let j=0;j<n-i;j++){
// 			s+=String.fromCharCode(val)
// 			val+=1
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let val=65
// 		let s=''
// 		for(let j=0;j<i+1;j++){
// 			s+=String.fromCharCode(val+i)
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let val=65
// 		let s=''
// 		//space's
// 		for(let j=0;j<n-i-1;j++){
// 			s+=' '
// 		}
// 		//alphabat's
// 		for(let k=1;k<=2*i+1;k++){
// 			s+=String.fromCharCode(val)
// 			if(k<=(2*i+1)/2){
// 				val+=1
// 			}else{
// 				val-=1
// 			}				
// 		}
// 		console.log(s)
// 	}
// }

// function pattern(n){
// 	for(let i=0;i<n;i++){
// 		let val=63+n
// 		let s=''
// 		//alphabat's
// 		for(let j=1;j<=i+1;j++){
// 			s+=String.fromCharCode(val-i+j)			
// 		}
// 		console.log(s)
// 	}
// }

function pattern(n){
	for(let i=0;i<n;i++){
		let val=63+n
		let s=''
		//alphabat's
		for(let j=1;j<=i+1;j++){
			s+=String.fromCharCode(val-i+j)			
		}
		console.log(s)
	}
}

pattern(5)