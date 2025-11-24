'use client'

import { Property } from '@/types'
import { useState } from 'react'

interface BookingCardProps {
  property: Property;
}

export default function BookingCard({ property }: BookingCardProps) {
  const { metadata } = property;
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  const nights = calculateNights();
  const subtotal = nights * metadata.price_per_night;
  const serviceFee = subtotal * 0.14; // 14% service fee
  const total = subtotal + serviceFee;

  return (
    <div className="border border-gray-300 rounded-xl p-6 shadow-xl">
      {/* Price & Rating */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-2xl font-semibold">${metadata.price_per_night}</span>
          <span className="text-gray-600"> night</span>
        </div>
        {metadata.rating && (
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold">{metadata.rating}</span>
          </div>
        )}
      </div>

      {/* Booking Form */}
      <div className="border border-gray-300 rounded-lg mb-4">
        <div className="grid grid-cols-2 border-b border-gray-300">
          <div className="p-3 border-r border-gray-300">
            <label className="text-xs font-semibold block mb-1">CHECK-IN</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-sm border-none outline-none"
            />
          </div>
          <div className="p-3">
            <label className="text-xs font-semibold block mb-1">CHECKOUT</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-sm border-none outline-none"
            />
          </div>
        </div>
        <div className="p-3">
          <label className="text-xs font-semibold block mb-1">GUESTS</label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full text-sm border-none outline-none"
          >
            {Array.from({ length: metadata.max_guests }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} guest{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reserve Button */}
      <button className="w-full btn-primary mb-4">
        Reserve
      </button>

      <p className="text-center text-sm text-gray-600 mb-4">
        You won't be charged yet
      </p>

      {/* Price Breakdown */}
      {nights > 0 && (
        <div className="space-y-3 pt-4 border-t border-gray-300">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 underline">
              ${metadata.price_per_night} x {nights} night{nights > 1 ? 's' : ''}
            </span>
            <span className="text-gray-700">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 underline">Service fee</span>
            <span className="text-gray-700">${serviceFee.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-gray-300">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  )
}