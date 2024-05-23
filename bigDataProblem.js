// Handling Large Datasets in JavaScript
// Handling large datasets is a common challenge when working with big data. 
// In JavaScript, there are several practical techniques that can help you manage large datasets effectively. 

// 1.Pagination:

//Pagination is a technique that allows you to divide a large dataset into smaller, more manageable 
//chunks called pages. By fetching and displaying only one page at a time, you can reduce the amount
//of data that needs to be loaded into memory and improve performance.

// Example:

// Define the page size and total number of items
const pageSize = 10;
const totalItems = [];
// Calculate the total number of pages
const totalPages = Math.ceil(totalItems.length / pageSize);
// Fetch and display a specific page of data
function fetchPage(page) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  // Fetch data from the server using startIndex and endIndex
  // Display the fetched data on the page
}

fetchPage(1); // Fetch and display the first page of data

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Lazy Loading:

//Lazy loading is a technique that allows you to load data only when it is needed, rather than loading 
//all the data upfront. This can be particularly useful when working with large datasets, as it helps 
//to reduce the initial load time and improve the overall performance of your application.

//Example:

// Fetch and display data when the user scrolls to the bottom of the page
window.addEventListener('scroll', function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    // Fetch data from the server
    // Display the fetched data on the page
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Data Streaming:

//Data streaming is a technique that allows you to process and display data as it is being received, 
//rather than waiting for the entire dataset to be loaded. This can be particularly useful when 
//working with real-time data or constantly updating datasets.

// Example

// Fetch data from the server and process it as it is being received
fetch('https://api.example.com/stream')
  .then(response => {
    const reader = response.body.getReader();
    
    function processStream(result) {
      if (result.done) {
        // All data has been received
        return;
      }
      
      const chunk = result.value;
      
      // Process the received chunk of data
      // Display the processed data on the page
      
      // Continue processing the next chunk of data
      return reader.read().then(processStream);
    }
    
    return reader.read().then(processStream);
  });


// 4. Pagination from backend side:

app.get('/data', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  MongoClient.connect(url, async (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    const data = await db.collection('data').find().skip(skip).limit(limit).toArray();
    res.send(data);
  });
})