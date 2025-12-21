// Pattern 2: Batch Processing
function batchProcess(items, batchSize = 100) {
  let index = 0;

  function processBatch() {
    const end = Math.min(index + batchSize, items.length);

    // Process batch
    for (let i = index; i < end; i++) {
      function processItem(item) {
        // Simulate processing
        console.log(`Saving item ${item} to database`);
      }

      // Heavy computation
      processItem(items[i]);
    }

    index = end;

    if (index < items.length) {
      // Schedule next batch
      setImmediate(processBatch);
    } else {
      console.log('All items processed!');
    }
  }

  processBatch();
}

// Process 10,000 items in batches of 100
const items = new Array(10000).fill(0);
batchProcess(items, 100);

// Other operations can still happen between batches!
