import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
        maxLength: 60,
    },
    address :{
        type: String,
        required: true,
        maxLength: 200,
    },
    phoneNumber: {
        type: Number,
        maxLength: 12,
        
    },
    total: {
        type: Number,
        require: true
    }
    
},
  {timestamps: true}
)
export default mongoose.models.Order || mongoose.model('Order', OrderSchema)