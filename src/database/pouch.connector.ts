import PouchDB from 'pouchdb';

const db = new PouchDB('myBook', { adapter: 'websql' });

export const addCall = async (type: string, callerNumber: string, callerId = 'Unknown') => {
    try {
        const id = new Date().toISOString();  // Generate a unique ID based on the current date and time
        const doc = {
            _id: id,
            type,
            name: callerId,
            telephone: callerNumber
        };

        const response = await db.put(doc);
        console.log('Document added successfully', response);
    } catch (error) {
        console.error('Error adding document', error);
    }
};