import mongoose from 'mongoose';

const ideaSchema = new mongoose.Schema({
  title: 'String'
});

export default mongoose.model('Idea', ideaSchema);
