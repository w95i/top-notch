"use client";

import React, { useState } from "react";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import axiosInstance from "@/lib/axios";
import { toast } from "react-hot-toast";

export default function AppointmentSection() {
    const [form, setForm] = useState({
        date: "",
        time: "",
        name: "",
        email: "",
        companyName: "",
        services: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const services = [
        "Bookkeeping",
        "Payroll",
        "Tax Returns",
        "Business Registration",
        "Business Management",
        "Single Touch Payroll",
    ];

    const handleChange = (field: keyof typeof form, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await axiosInstance.post("/Appointment", form);
            toast.success("Your appointment request was sent!");
            // reset form
            setForm({
                date: "",
                time: "",
                name: "",
                email: "",
                companyName: "",
                services: "",
                message: "",
            });
            console.log("Appointment requested:", res.data);
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="booking-bg py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold uppercase">Book An Appointment</h2>
                <p className="mt-4 text-gray-600 font-alex">
                    Please fill the form below and click submit. One of our customer
                    service team will be in contact with you shortly via email or phone.
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
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        className="w-full h-12 px-3 py-3 mt-1 text-gray-600 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Time */}
                <div>
                    <Label htmlFor="time">Time</Label>
                    <input
                        id="time"
                        type="time"
                        value={form.time}
                        onChange={(e) => handleChange("time", e.target.value)}
                        className="w-full h-12 px-3 py-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Name */}
                <div>
                    <Label htmlFor="name">Name</Label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Full name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="w-full h-12 px-3 py-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Email */}
                <div>
                    <Label htmlFor="email">Email</Label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email address"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full h-12 px-3 py-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Company */}
                <div>
                    <Label htmlFor="company">Company Name</Label>
                    <input
                        id="company"
                        type="text"
                        placeholder="Brand/Company/Product Name"
                        value={form.companyName}
                        onChange={(e) => handleChange("companyName", e.target.value)}
                        className="w-full h-12 px-3 py-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Service */}
                <div>
                    <Label htmlFor="service">Services</Label>
                    <select
                        id="service"
                        value={form.services}
                        onChange={(e) => handleChange("services", e.target.value)}
                        className="w-full h-12 px-3 py-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
                    >
                        <option value="" disabled className="text-gray-300">
                            What are you looking for?
                        </option>
                        {services.map((svc) => (
                            <option key={svc} value={svc}>
                                {svc}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="w-full h-24 px-3 py-3 mt-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-[#0B63E5] text-white rounded-lg"
                    >
                        {isLoading ? "Loading…" : "Request A Quote"}
                    </Button>
                </div>
            </form>
        </section>
    );
}
