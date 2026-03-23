import { LightningElement, api } from 'lwc';
export default class GenericNavigableProgressBar extends LightningElement {

    @api steps = [];
    @api currentIndex = 0;
    @api disableNavigation = false;
    @api showCompletedSteps = false;

    get maxValue() {
        return this.steps.length;
    }

    get computedSteps() {
        return this.steps.map((label, index) => {
            let state = '';
            let buttonState = '';
            let isComplete = false;
            if (index < this.currentIndex) {
                state = 'slds-is-completed';
                buttonState = 'slds-progress__marker_icon';
                isComplete = true;
            }
            else if (index === this.currentIndex) {
                state = 'slds-is-active';
            }
            return {
                label,
                index,
                listClass: `slds-progress__item ${state}`,
                buttonClass: `slds-progress__marker ${buttonState}`,
                isComplete: isComplete
            };
        });
    }

    get progressPercent(){
        let percentCompletion = (100/(this.maxValue-1))*this.currentIndex;
        return `width:${percentCompletion}%`;
    }

    handleNavigation(event) {
        const index = Number(event.currentTarget.dataset.index);
        this.dispatchEvent(
            new CustomEvent('stepchange', {
                detail: { index },
                bubbles: true,
                composed: true
            })
        );
    }

}