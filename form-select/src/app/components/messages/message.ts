export default class Message {
    constructor(public value: string = '', public style: string = '') {
    }
    toString() {
        return `Message[value: ${this.value}, style: ${this.style}]`;
    }
}
