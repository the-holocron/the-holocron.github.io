/* Bad */
class PerformanceReview {
    constructor(employee) {
        this.employee = employee;
    }
    getPeerReviews() { ... }
    perfReview() {
        this.getPeerReviews();
        this.getSelfReview();
    }
    getSelfReview() { ... }
}

/* Good */
class PerformanceReview {
    constructor(employee) {
        this.employee = employee;
    }
    perfReview() {
        this.getPeerReviews();
        this.getSelfReview();
    }
    getPeerReviews() { ... }
    getSelfReview() { ... }
}
