class Box {
  width: number
  height: number = 500
  volume: number | undefined
  _content: string | undefined

  constructor(width: number, volume?: number, content?: string) {
    this.width = width
    this.volume = volume
    this._content = content
  }

  calculateVolume():void {
    if (!this.volume) {
      this.volume = this.width * this.height
      console.log(`Объем посылки: ${this.volume}`)
    } else {
      console.log(`Объем посылки: ${this.volume}`)
    }
  }

  checkBoxSize(transport: number): string
  checkBoxSize(transport: number[]): string
  checkBoxSize(transport: number | number[]): string {
    if (typeof transport === 'number') {
      return transport >= this.width ? 'Ok' : 'Not ok'
    } else {
      return transport.some(t => t >= this.width) ? 'Ok' : 'Not ok'
    }
  }

  // get content() {
  //   return this._content
  // }
  //
  // set content(value) {
  //   this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`
  // }

  async content(value: string) {
    const date = await new Date().toTimeString()
    this._content = `Date: ${date}, Content: ${value}`
    console.log(this._content)
    // return this._content
  }
}

const firstBox = new Box(250)
firstBox.calculateVolume()
firstBox.volume = 5000

class PresentBox extends Box {
  wrap: string
  height: number = 600

  constructor(wrap: string, width: number) {
    super(width)
    this.wrap = wrap
  }

  override async content(value: string, text?: string) {
    const date = await new Date().toTimeString()

    if (!text) {
      super.content(value)
    } else {
      this._content = `Date: ${date}, Content: ${value}, Text: ${
        text ? text : 'No text'
      }`
    }

    console.log(this._content)
    // return this._content
  }
}

new PresentBox('red',500).content('TV', 'Gift')