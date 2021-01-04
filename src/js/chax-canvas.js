// 获取 DOM 元素
const $chaxCanvas = $('#chax-canvas')
const $uploadButton =  $('.upload-button')
const $clearButton = $('.clear-button')

// 获取 canvas 的 2d 上下文
const ctx = $chaxCanvas[0].getContext("2d")

// 画一张照片到 canvas 上
function drawImg(path){
	let imgObj = new Image()
	imgObj.src = path
	imgObj.onload = function(){
		ctx.drawImage(this,10,10)
	}
}

// 画一张本地电脑的照片
function drawLocalImg(){
	$uploadButton.change(function(){
		let file = this.files[0]
		if(/image\/\w+/.test(file.type)){
			let reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = function(e){
				let path = e.target.result
				drawImg(path)
			}
		}else{
			alert('请确保文件为图像类型')
		}
	})
}

// 清空画板
function clearPainting(){
	$clearButton.click(function(){
		ctx.clearRect(0,0,$chaxCanvas.width(),$chaxCanvas.height())
	})
}
$chaxCanvas.mousedown(function(e){
	console.log(e.offsetX,e.offsetY)
})

function isWhere(){

}


// 画一张本地静态资源的照片到 canvas 上
drawImg('../assets/images/1.jpg')
// 画一张网络图片到 canvas 上
drawImg('https://thirdwx.qlogo.cn/mmopen/0uqb5iaV5Biakm2wX94ZhlBDWuLtgMgfevEbR8A1WEtt9T3GkVH2ZSq5iaTjicQMCOSLMQH37ibgQaQKUB8OxHN0AxeCytysdibqJQ/132')
// 画一张本地电脑的照片
drawLocalImg()
//清空画板事件
clearPainting()

// 定义图片类，接收两个参数：
// 1.一个包含图片的宽、高、路径的对象
// 2.canvas对象
class dragImg{
	constructor(img,canvas) {
		this.w = img.width
		this.h = img.height
		this.path = img.path
		this.ctx = canvas
		this.x = 30
		this.y = 30
		this.rotate = 0
		this.selected = true
	}
}
