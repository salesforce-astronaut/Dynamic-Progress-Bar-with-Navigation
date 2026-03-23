import { LightningElement } from 'lwc';
export default class GenericParentComponent extends LightningElement {

    stepRefs = [
        'ref1',
        'ref2',
        'ref3',
        'ref4'
    ];

    stepLabels = [
        'Account Information',
        'Contact Information',
        'Opportunities',
        'Quotes'
    ];

    _stepIndex=0;
    get stepIndex() {
        return this._stepIndex;
    }
    set stepIndex(value) {
        this._stepIndex = value;
        for (const [index, refKey] of this.stepRefs.entries()) {
            const ref = this.refs[refKey];
            console.log(JSON.stringify(ref))
            if (!ref) {
                continue;
            }
            ref.style.display = index === value ? 'block' : 'none';
        }
    }

    handleStepChange(event){
        this.stepIndex = event.detail.index;
    }

    get currentStepLabel(){        
        return this.stepLabels[this.stepIndex];
    }

    loremIpsum1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt, nisi et tincidunt feugiat, lacus massa vestibulum libero, eu dignissim orci dui et sapien. Nam finibus tempus eros, at commodo nulla posuere quis. Morbi scelerisque pellentesque iaculis. Donec nulla nunc, vestibulum id sapien suscipit, aliquam pellentesque libero. Mauris luctus sagittis velit, accumsan aliquet felis egestas vel. Pellentesque blandit eros dui, ac viverra odio vestibulum at. Ut convallis, est eu tincidunt dignissim, nunc tellus venenatis tellus, quis laoreet felis arcu in nibh. Proin non ipsum sed dui accumsan finibus eleifend nec risus. Curabitur elementum varius hendrerit. Etiam varius mollis rutrum. Sed fringilla eros non placerat condimentum. Mauris faucibus interdum nunc, sed imperdiet lectus tincidunt et.';
    loremIpsum2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt, nisi et tincidunt feugiat, lacus massa vestibulum libero, eu dignissim orci dui et sapien. Nam finibus tempus eros, at commodo nulla posuere quis. Morbi scelerisque pellentesque iaculis. Donec nulla nunc, vestibulum id sapien suscipit, aliquam pellentesque libero. Mauris luctus sagittis velit, accumsan aliquet felis egestas vel. Pellentesque blandit eros dui, ac viverra odio vestibulum at.';
}