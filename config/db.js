import mongoose from 'mongoose';
import Color from 'colors';


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL)
        console.log('MongoDB connected'.bgMagenta.white.bold);
    } catch (error) {
        console.log('MongoDB connection error'.bgRed.white.bold);
        throw error;
    }
}

export default connectDB;