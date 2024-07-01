import { useTelephoneStore } from "../stores";

export function AddTelephoneComponent() {

    const setIp = useTelephoneStore(state => state.setIP);
  
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newIP = event.target.elements['ip-address'].value;
        console.log('IP Address submitted:', newIP );
        setIp(newIP);
      };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-6 text-center">Add IP Address</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="ip-address" className="block text-sm font-medium text-gray-700">
                    IP Address
                    </label>
                    <input
                    type="text"
                    id="ip-address"
                    name="ip-address"
                    placeholder="Enter IP address"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Submit
                </button>
                </form>
            </div>
        </div>
    )
}