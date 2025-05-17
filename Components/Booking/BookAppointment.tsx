"use client"
import {useState} from 'react'
import {Label} from '@/Components/ui/label'
import {Button} from '@/Components/ui/button'
import {CalendarIcon, ClockIcon, ChevronDownIcon} from 'lucide-react'

export default function AppointmentSection() {
    const [form, setForm] = useState({
        date: '',
        time: '',
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
    })

    const services = [
        'Bookkeeping',
        'Payroll',
        'Tax Returns',
        'Business Registration',
        'Business Management',
        'Single Touch Payroll',
    ]

    const handleChange = (
        field: keyof typeof form,
        value: string
    ) => {
        setForm((prev) => ({...prev, [field]: value}))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Submitting:', form)
    }

    return (
        <section className="booking-bg py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold uppercase">
                    Book An Appointment
                </h2>
                <p className="mt-4 text-gray-600 font-alex">
                    please fill the form below and click on submit booking.
                    One of our customer service team will be in contact with
                    you shortly via email or phone.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 font-alex"
            >
                {/* Date */}
                <div>
                    <Label htmlFor="date">Date</Label>
                    <input
                        type="date"
                        placeholder="mm/dd/yyyy"
                        className="w-full h-12 px-3 py-3 mt-1 text-gray-600 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <Label htmlFor="time">Time</Label>
                    <input
                        type="time"
                        placeholder="mm/dd/yyyy"
                        className="w-full h-12 px-3 py-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <Label htmlFor="name">Name</Label>
                    <input
                        type="text"
                        placeholder="Full name"
                        className="w-full h-12 px-3 py-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full h-12 px-3 py-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <Label htmlFor="company">Company Name</Label>
                    <input
                        type="text"
                        placeholder="Brand/Company/Product Name"
                        className="w-full h-12 px-3 py-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <Label htmlFor="service">Services</Label>
                    <select
                        className="w-full h-12 px-3 py-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
                    >
                        <option value="" disabled selected className='text-gray-300'>What are you looking for:</option>
                        {services.map((service) => (
                            <option key={service}>{service}</option>
                        ))}
                    </select>
                </div>

                <div className="md:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="w-full h-24 px-3 py-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={4}
                    >

                    </textarea>
                </div>

                <div className="md:col-span-2">
                    <button type="submit" className="w-full py-4 bg-[#0B63E5] text-white rounded-lg">
                        Request A Quote <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </form>
        </section>
    )
}
