// Pattern 3: Debouncing with nextTick
class Debouncer {
    constructor(callback) {
        this.callback = callback;
        this.scheduled = false;
        this.args = null;
    }

    call(...args) {
        this.args = args;

        if (!this.scheduled) {
            this.scheduled = true;

            process.nextTick(() => {
                this.scheduled = false;
                this.callback(...this.args);
            });
        }
    }
}

// Usage
const debouncer = new Debouncer((data) => {
    console.log("Processing:", data);
});

// Multiple calls in same tick
debouncer.call("data1");
debouncer.call("data2");
debouncer.call("data3");

// Output: "Processing: data3" (only once!)