// alert()
const handleQrCodeGenerator = ()=>{
	// console.log('hello boss');
	const url = document.getElementById('input-url').value.trim();
	// console.log(url);
	if(!url){
		return alert('provide valid url')
	}
	document.getElementById('input-url').value = '';
	try {
		new QRCode(document.getElementById('qr-code-container'), {
			text: url,
			width: 200,
			height: 200,
			colorDark: "#000000",
			colorLight: "#ffffff",
		})
	} catch (error) {
		console.log('show error--->',error);
	}
}