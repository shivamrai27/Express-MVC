import express from 'express';
const app = express();
import productRoutes from './routes/products.js';

const PORT = 8000;

app.use("/api", productRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
