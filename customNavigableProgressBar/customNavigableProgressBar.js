import { LightningElement, api } from 'lwc';

export default class CustomNavigableProgressBar extends LightningElement {
    @api steps = [];
    @api currentIndex = 0;
    @api isDisabled = false;
    @api showCompletedSteps = "false";

    get totalSteps() {
        return this.steps.length;
    }

    get ariaValueNow() {
        return Math.min(this.currentIndex + 1, this.totalSteps);
    }

    get computedSteps() {
        return this.steps.map((label, index) => {
            let state = 'inactive';
            if (index < this.currentIndex && this.showCompletedSteps=="true") {
                state = 'completed';
            }
            else if (index === this.currentIndex) {
                state = 'active';
            }
            return {
                label,
                index,
                indexPlusOne: index + 1,
                circleClass: `step-circle ${state}`,
                ariaCurrent: state === 'active' ? 'step' : null
            };
        });
    }

    handleClick(event) {
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