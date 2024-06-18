import React, { useState } from 'react';
import PawBackground from "../../assets/Untitled design.png";

function EnquiryForm() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        service: 'Dog Boarding',
        behavior: 'Friendly',
        breed: '',
        age: '',
        startdate: '',
        enddate: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    return (
        <div className="flex justify-center" style={{ backgroundImage: `url(${PawBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full max-w-3xl bg-white bg-opacity-75 p-8 rounded-lg">
                <div className="text-3xl font-bold text-center mb-8">Quick Enquiry</div>
                <hr className="mb-8" />
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                        <div>
                            <label htmlFor="fullname" className="block mb-2 font-bold">Full Name:</label>
                            <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 font-bold">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 font-bold">Phone:</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="service" className="block mb-2 font-bold">Service Required:</label>
                            <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
                                <option value="Dog Boarding">Dog Boarding</option>
                                <option value="Daycare">Daycare</option>
                                <option value="Boarding Plus Pickup-Drop">Boarding Plus Pickup-Drop</option>
                                <option value="Dog Walk">Dog Walk</option>
                                <option value="Looking for a Furry Friend">Looking for a Furry Friend</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="behavior" className="block mb-2 font-bold">Dog Behaviour:</label>
                            <select id="behavior" name="behavior" value={formData.behavior} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required>
                                <option value="Friendly">Friendly</option>
                                <option value="Aggressive">Aggressive</option>
                                <option value="Not Sure">Not Sure</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="breed" className="block mb-2 font-bold">Dog Breed:</label>
                            <input type="text" id="breed" name="breed" value={formData.breed} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="age" className="block mb-2 font-bold">Dog Age:</label>
                            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="startdate" className="block mb-2 font-bold">Start Date:</label>
                            <input type="date" id="startdate" name="startdate" value={formData.startdate} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="enddate" className="block mb-2 font-bold">End Date:</label>
                            <input type="date" id="enddate" name="enddate" value={formData.enddate} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 font-bold">Message:</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default EnquiryForm;
