"use client";

import React, { useState, useEffect } from "react";

interface EnrollButtonProps {
    courseTitle: string;
    coursePrice: number;
}

type PaymentStep = "selection" | "upi" | "card" | "processing" | "success";

export default function EnrollButton({ courseTitle, coursePrice }: EnrollButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<PaymentStep>("selection");
    const [isProcessing, setIsProcessing] = useState(false);

    const handleEnrollClick = () => {
        setIsOpen(true);
        setStep("selection");
    };

    const handlePayment = () => {
        setStep("processing");
        // Simulate payment delay
        setTimeout(() => {
            setStep("success");
        }, 2000);
    };

    useEffect(() => {
        if (step === "success") {
            const timer = setTimeout(() => {
                const searchQuery = encodeURIComponent(courseTitle);
                window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, "_blank", "noopener,noreferrer");
                setIsOpen(false);
                setStep("selection");
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [step, courseTitle]);

    return (
        <>
            <button
                onClick={handleEnrollClick}
                className="rounded-full bg-purple-500 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-purple-500/40 hover:bg-purple-400"
            >
                Enroll now
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
                    <div className="w-full max-w-md scale-100 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl transition-all">

                        {/* Header */}
                        {step !== "success" && step !== "processing" && (
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-slate-50">Secure Checkout</h3>
                                <p className="mt-2 text-sm text-slate-400">
                                    Enrolling in <span className="text-purple-300 font-medium">{courseTitle}</span>
                                </p>
                            </div>
                        )}

                        {/* Step: Selection */}
                        {step === "selection" && (
                            <div className="space-y-6">
                                <div className="rounded-2xl bg-slate-950/50 p-5 border border-slate-800">
                                    <div className="flex justify-between text-sm text-slate-400 mb-1">
                                        <span>Price</span>
                                        <span>₹{coursePrice}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold text-slate-50 pt-2 border-t border-slate-800">
                                        <span>Total Amount</span>
                                        <span className="text-purple-400">₹{coursePrice}</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Select Payment Method</p>
                                    <button
                                        onClick={() => setStep("upi")}
                                        className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-800/50 p-4 transition hover:bg-slate-800 hover:border-purple-500/50"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                                            </div>
                                            <div className="text-left">
                                                <p className="text-sm font-semibold text-slate-50">BHIM UPI</p>
                                                <p className="text-[11px] text-slate-400">Google Pay, PhonePe, Paytm</p>
                                            </div>
                                        </div>
                                        <svg className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                    </button>

                                    <button
                                        onClick={() => setStep("card")}
                                        className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-800/50 p-4 transition hover:bg-slate-800 hover:border-purple-500/50"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400">
                                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                                            </div>
                                            <div className="text-left">
                                                <p className="text-sm font-semibold text-slate-50">Debit / Credit Card</p>
                                                <p className="text-[11px] text-slate-400">Visa, Mastercard, RuPay</p>
                                            </div>
                                        </div>
                                        <svg className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-2 text-sm text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                    Cancel and go back
                                </button>
                            </div>
                        )}

                        {/* Step: UPI QR */}
                        {step === "upi" && (
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 rounded-2xl bg-white p-4 shadow-lg">
                                    {/* Real-looking fake QR */}
                                    <div className="h-48 w-48 relative bg-slate-100 flex items-center justify-center border-2 border-slate-200">
                                        <svg className="h-40 w-40 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 0h2v2h-2v-2zm-3-6h2v2h-2v-2zm0 3h2v2h-2v-2zm0 3h2v2h-2v-2zm3-9h2v2h-2V6zm0 3h2v2h-2V9z" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                            <span className="text-xs font-bold text-slate-900 rotate-12">PAYMENT GATEWAY</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-slate-50 mb-1">Scan QR to Pay</p>
                                <p className="text-xs text-slate-400 mb-6">Use any UPI app like Google Pay, PhonePe or Paytm</p>

                                <div className="flex w-full gap-3">
                                    <button
                                        onClick={() => setStep("selection")}
                                        className="flex-1 rounded-xl border border-slate-800 py-3 text-sm font-semibold text-slate-400 hover:bg-slate-800"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handlePayment}
                                        className="flex-1 rounded-xl bg-purple-500 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 hover:bg-purple-400"
                                    >
                                        Set as Paid
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step: Card Form */}
                        {step === "card" && (
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-slate-400">Card Number</label>
                                    <input type="text" placeholder="xxxx xxxx xxxx xxxx" className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-50 focus:border-purple-500 outline-none transition-colors" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-slate-400">Expiry (MM/YY)</label>
                                        <input type="text" placeholder="12/28" className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-50 focus:border-purple-500 outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-slate-400">CVV</label>
                                        <input type="password" placeholder="***" className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-50 focus:border-purple-500 outline-none transition-colors" />
                                    </div>
                                </div>

                                <div className="flex w-full gap-3 pt-2">
                                    <button
                                        onClick={() => setStep("selection")}
                                        className="flex-1 rounded-xl border border-slate-800 py-3 text-sm font-semibold text-slate-400 hover:bg-slate-800"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handlePayment}
                                        className="flex-1 rounded-xl bg-purple-500 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 hover:bg-purple-400"
                                    >
                                        Pay ₹{coursePrice}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step: Processing */}
                        {step === "processing" && (
                            <div className="flex flex-col items-center py-10 text-center">
                                <div className="relative h-20 w-20 mb-6">
                                    <div className="absolute inset-0 rounded-full border-4 border-purple-500/20" />
                                    <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 animate-spin" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-50 mb-2">Processing Payment</h3>
                                <p className="text-sm text-slate-400">Please do not close the window or refresh the page.</p>
                            </div>
                        )}

                        {/* Step: Success */}
                        {step === "success" && (
                            <div className="flex flex-col items-center py-10 text-center animate-in fade-in zoom-in duration-300">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40">
                                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-50 mb-2">Payment Successful!</h3>
                                <p className="text-sm text-slate-400 max-w-[280px]">You are now enrolled. Redirecting to your course library on YouTube...</p>

                                <div className="mt-8 flex items-center gap-2 text-xs text-purple-400 font-medium">
                                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
                                    Generating secure link
                                </div>
                            </div>
                        )}

                        <p className="mt-8 text-center text-[10px] text-slate-600 uppercase tracking-widest font-bold">
                            Secure Sandbox Environment
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
