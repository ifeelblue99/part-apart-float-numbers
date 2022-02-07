function obj(number) {
  this.number = number

  this.num = []
  
  this.divide = function() {
    let before = this.number.toString().substring(0,this.number.toString().indexOf("."))
    this.num.push(`before-dot:${before}`)

    let after = this.number.toString().substring(this.number.toString().indexOf(".")+1,this.number.length)
    this.num.push(`after-dot:${after}`)
      
    console.log(this.num)
  }
}
let num = new obj(15.97)

num.divide()