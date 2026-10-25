import React, { useState, useEffect } from 'react'
import { 
  MapPin, 
  Search, 
  ShieldCheck, 
  CreditCard, 
  Camera, 
  Clock, 
  CheckCircle2, 
  RotateCcw, 
  Navigation, 
  Car, 
  FastForward,
  ChevronRight,
  Info
} from 'lucide-react'

const MOCK_SPACES = [
  {
    id: 1,
    title: "Andheri West (Near Azad Nagar Metro)",
    approxDistance: "approx. 400 m",
    rate: 40,
    type: "Covered Stilt",
    size: "Sedan / Hatchback / SUV",
    exactAddress: "B-102, Sagar Heights, Off Veera Desai Road, Andheri West, Mumbai 400053",
    slotCode: "Slot #B-14",
    instructions: "Inform security guard: ParkShare guest for Flat B-102."
  },
  {
    id: 2,
    title: "Lokhandwala Complex (Near Market)",
    approxDistance: "approx. 700 m",
    rate: 50,
    type: "Gated Compound",
    size: "Compact / Sedan",
    exactAddress: "Bungalow 18, Sunset Boulevard, Lokhandwala Complex, Andheri West, Mumbai 400053",
    slotCode: "Driveway Spot 1",
    instructions: "Driveway gate unlocked from 9 AM to 7 PM. Park against left boundary."
  },
  {
    id: 3,
    title: "Versova (Near Metro Station)",
    approxDistance: "approx. 1.1 km",
    rate: 30,
    type: "Open Society Slot",
    size: "All Vehicle Types",
    exactAddress: "Sea Breeze CHS, Yari Road, Versova, Andheri West, Mumbai 400061",
    slotCode: "Visitor Bay #3",
    instructions: "Collect visitor tag at gate. Slot is marked with teal ParkShare decal."
  }
]

export default function PhoneDemo() {
  // Demo screens: 1: search, 2: booking, 3: reveal, 4: arrival, 5: timer, 6: leaving, 7: invoice
  const [screen, setScreen] = useState(1)
  const [selectedSpace, setSelectedSpace] = useState(MOCK_SPACES[0])
  const [arrivalPhotoTaken, setArrivalPhotoTaken] = useState(false)
  const [departurePhotoTaken, setDeparturePhotoTaken] = useState(false)
  const [elapsedMinutes, setElapsedMinutes] = useState(12)
  const [sessionSeconds, setSessionSeconds] = useState(0)
  const [arrivalTimestamp, setArrivalTimestamp] = useState("")
  const [departureTimestamp, setDepartureTimestamp] = useState("")
  const [systemClock, setSystemClock] = useState("")

  // Update clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setSystemClock(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Timer simulation during screen 5
  useEffect(() => {
    let interval = null
    if (screen === 5) {
      interval = setInterval(() => {
        setSessionSeconds(prev => {
          if (prev + 1 >= 60) {
            setElapsedMinutes(m => m + 1)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [screen])

  const handleSelectSpace = (space) => {
    setSelectedSpace(space)
    setScreen(2)
  }

  const handlePayDeposit = () => {
    setScreen(3)
  }

  const handleStartArrival = () => {
    setArrivalTimestamp(new Date().toLocaleTimeString())
    setArrivalPhotoTaken(false)
    setScreen(4)
  }

  const handleTakeArrivalPhoto = () => {
    setArrivalPhotoTaken(true)
  }

  const handleConfirmArrival = () => {
    setElapsedMinutes(5)
    setSessionSeconds(0)
    setScreen(5)
  }

  const handleFastForward = () => {
    setElapsedMinutes(prev => prev + 60)
  }

  const handleStartLeaving = () => {
    setDepartureTimestamp(new Date().toLocaleTimeString())
    setDeparturePhotoTaken(false)
    setScreen(6)
  }

  const handleTakeDeparturePhoto = () => {
    setDeparturePhotoTaken(true)
  }

  const handleGenerateBill = () => {
    setScreen(7)
  }

  const handleRestart = () => {
    setScreen(1)
    setSelectedSpace(MOCK_SPACES[0])
    setArrivalPhotoTaken(false)
    setDeparturePhotoTaken(false)
    setElapsedMinutes(12)
    setSessionSeconds(0)
  }

  // Calculations
  const hoursFraction = Math.max(0.25, (elapsedMinutes + sessionSeconds / 60) / 60)
  const hourlyRate = selectedSpace.rate
  const baseParkingFee = Math.round(hoursFraction * hourlyRate)
  const platformFee = Math.round(baseParkingFee * 0.15)
  const depositRefund = 300
  const netDue = baseParkingFee + platformFee

  return (
    <div className="flex flex-col items-center">
      {/* Phone container */}
      <div className="relative w-full max-w-[360px] sm:max-w-[390px] h-[720px] bg-slate-900 rounded-[48px] p-3 shadow-2xl border-4 border-slate-700/80 ring-1 ring-slate-800 flex flex-col">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" />
        </div>

        {/* Inner Phone Screen */}
        <div className="w-full h-full bg-surface rounded-[38px] overflow-hidden flex flex-col relative border border-slate-200">
          
          {/* Status Bar */}
          <div className="pt-3 px-6 pb-2 flex justify-between items-center text-xs font-semibold text-slate-800 bg-white/90 backdrop-blur z-20">
            <span>{systemClock || "09:41"}</span>
            <div className="flex items-center gap-1.5 text-slate-700">
              <span className="text-[10px]">5G</span>
              <div className="w-5 h-2.5 border border-slate-700 rounded-sm p-0.5 flex items-center">
                <div className="w-3 h-full bg-slate-800 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* Prototype Demo Banner */}
          <div className="bg-navy text-white text-[11px] font-medium py-1 px-3 text-center flex items-center justify-between shadow-sm z-10">
            <span className="flex items-center gap-1 font-semibold text-teal-light">
              <Info className="w-3.5 h-3.5" /> PROTOTYPE DEMO
            </span>
            <span className="text-[10px] text-slate-300">Step {screen} of 7</span>
          </div>

          {/* Screen Content Body */}
          <div className="flex-1 overflow-y-auto p-4 text-left">
            
            {/* SCREEN 1: Search Results List */}
            {screen === 1 && (
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-2.5 shadow-sm border border-slate-200 flex items-center gap-2">
                  <Search className="w-4 h-4 text-teal" />
                  <input 
                    type="text" 
                    readOnly 
                    value="Andheri West, Mumbai" 
                    className="text-xs font-semibold text-navy w-full bg-transparent outline-none cursor-default"
                  />
                  <span className="text-[10px] bg-teal-bg text-teal font-bold px-2 py-0.5 rounded">
                    3 Spots
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-muted flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-teal" />
                  <span>Showing approximate distances only</span>
                </div>

                <div className="space-y-2.5">
                  {MOCK_SPACES.map(space => (
                    <div 
                      key={space.id}
                      onClick={() => handleSelectSpace(space)}
                      className="bg-white rounded-xl p-3 border border-slate-200 hover:border-teal hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xs font-bold text-navy group-hover:text-teal transition-colors">
                            {space.title}
                          </h4>
                          <span className="text-[11px] text-teal font-semibold">
                            {space.approxDistance}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-extrabold text-navy">₹{space.rate}</span>
                          <span className="text-[10px] text-muted">/hr</span>
                        </div>
                      </div>

                      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-muted">
                        <span className="bg-slate-100 px-2 py-0.5 rounded">{space.type}</span>
                        <span className="text-teal font-semibold flex items-center gap-0.5">
                          Select Spot <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-teal-bg/60 rounded-xl p-3 border border-teal/20 text-[11px] text-slate-700 leading-snug">
                  <strong className="text-teal font-bold">Privacy Guarantee:</strong> Exact addresses and slot access codes are strictly hidden until booking deposit is authorized.
                </div>
              </div>
            )}

            {/* SCREEN 2: Booking Screen & Deposit */}
            {screen === 2 && (
              <div className="space-y-3.5">
                <button 
                  onClick={() => setScreen(1)}
                  className="text-xs text-muted hover:text-navy font-semibold flex items-center gap-1"
                >
                  ← Back to search
                </button>

                <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal bg-teal-bg px-2 py-0.5 rounded">
                    Selected Parking Space
                  </span>
                  <h3 className="text-sm font-bold text-navy mt-1.5">{selectedSpace.title}</h3>
                  <p className="text-xs text-muted mt-0.5">{selectedSpace.approxDistance} · {selectedSpace.type}</p>
                  <p className="text-xs font-semibold text-slate-700 mt-1">Vehicle size: {selectedSpace.size}</p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs text-muted">Rate</span>
                    <span className="text-sm font-bold text-navy">₹{selectedSpace.rate}/hour</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-teal flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-navy">Refundable Security Deposit</h4>
                      <p className="text-[10px] text-muted">Escrow hold · Released after parking</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-xs text-slate-700 font-medium">Deposit Amount</span>
                    <span className="text-base font-extrabold text-navy">₹300.00</span>
                  </div>
                  <p className="text-[10px] text-muted leading-tight">
                    *This amount is NOT a charge. It is held safely to guarantee mutual accountability and returned upon departure.
                  </p>
                </div>

                <button
                  onClick={handlePayDeposit}
                  className="w-full py-3 px-4 bg-teal hover:bg-teal-dark text-white rounded-xl font-bold text-xs shadow-md shadow-teal/20 flex items-center justify-center gap-2 transition-colors"
                >
                  <CreditCard className="w-4 h-4" />
                  Pay ₹300 Refundable Deposit
                </button>
              </div>
            )}

            {/* SCREEN 3: Success & Reveal */}
            {screen === 3 && (
              <div className="space-y-3 text-center">
                <div className="w-12 h-12 bg-teal-bg text-teal rounded-full mx-auto flex items-center justify-center border-2 border-teal/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-navy">Deposit Held Successfully!</h3>
                  <p className="text-xs text-muted">Exact location has been unlocked for your arrival</p>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm text-left space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-teal uppercase">Exact Address</span>
                      <p className="text-xs font-bold text-navy">{selectedSpace.exactAddress}</p>
                      <p className="text-xs text-slate-700 font-semibold mt-1">
                        Designated Bay: <span className="text-teal">{selectedSpace.slotCode}</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-[11px] text-slate-600">
                    <strong className="text-slate-800">Host Instructions:</strong> {selectedSpace.instructions}
                  </div>
                </div>

                {/* Fake Map Placeholder */}
                <div className="h-32 bg-slate-200 rounded-xl relative overflow-hidden border border-slate-300 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#12294A_1px,transparent_1px)] [background-size:12px_12px]" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-teal text-white flex items-center justify-center shadow-lg animate-bounce">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold bg-navy text-white px-2 py-0.5 rounded shadow mt-1">
                      {selectedSpace.slotCode}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleStartArrival}
                  className="w-full py-2.5 px-4 bg-navy hover:bg-navy-light text-white rounded-xl font-bold text-xs shadow flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Proceed to "I Have Arrived"
                </button>
              </div>
            )}

            {/* SCREEN 4: I Have Arrived & Verification */}
            {screen === 4 && (
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-navy">Arrival Verification</h3>
                  <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                    Booking #PS-8921
                  </span>
                </div>

                <p className="text-xs text-muted">
                  Park in designated slot <strong>{selectedSpace.slotCode}</strong> and log arrival proof.
                </p>

                {/* Simulated Camera Capture Card */}
                <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm">
                  {!arrivalPhotoTaken ? (
                    <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center">
                      <Camera className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-xs font-medium text-slate-700">Simulate vehicle photo capture</p>
                      <p className="text-[10px] text-muted mb-3">Logs live photo + GPS + time proof</p>
                      <button
                        onClick={handleTakeArrivalPhoto}
                        className="py-1.5 px-3 bg-teal text-white rounded-lg text-xs font-bold shadow hover:bg-teal-dark transition-colors inline-flex items-center gap-1"
                      >
                        <Camera className="w-3.5 h-3.5" /> Capture Live Photo
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      <div className="h-28 bg-slate-800 rounded-lg relative overflow-hidden flex items-center justify-center text-white">
                        <Car className="w-12 h-12 text-slate-400" />
                        <div className="absolute bottom-1.5 left-2 bg-black/70 backdrop-blur px-2 py-0.5 rounded text-[9px] font-mono text-emerald-400">
                          ● LIVE CAPTURE OK
                        </div>
                      </div>

                      <div className="bg-slate-50 p-2 rounded-lg text-[10px] space-y-1 font-mono text-slate-600 border border-slate-100">
                        <div><strong>GPS:</strong> 19.1254° N, 72.8273° E (Andheri West)</div>
                        <div><strong>Time:</strong> {arrivalTimestamp || "10:15:32 AM"}</div>
                        <div><strong>Spot:</strong> {selectedSpace.slotCode} (Matched)</div>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Proof recorded & verified
                      </div>
                    </div>
                  )}
                </div>

                <button
                  disabled={!arrivalPhotoTaken}
                  onClick={handleConfirmArrival}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs shadow flex items-center justify-center gap-2 transition-all ${
                    arrivalPhotoTaken 
                      ? 'bg-teal hover:bg-teal-dark text-white cursor-pointer' 
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  Start Parking Session
                </button>
              </div>
            )}

            {/* SCREEN 5: Running Timer & Charge */}
            {screen === 5 && (
              <div className="space-y-4 text-center">
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-teal bg-teal-bg px-2.5 py-0.5 rounded-full">
                    Session In Progress
                  </span>

                  {/* Timer display */}
                  <div className="my-3">
                    <div className="text-3xl font-extrabold text-navy font-mono tracking-tight">
                      {String(Math.floor(elapsedMinutes / 60)).padStart(2, '0')}:
                      {String(elapsedMinutes % 60).padStart(2, '0')}:
                      {String(sessionSeconds).padStart(2, '0')}
                    </div>
                    <span className="text-[10px] text-muted">Hrs : Mins : Secs</span>
                  </div>

                  {/* Running charge */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center text-left">
                    <div>
                      <span className="text-[10px] text-muted block">Running Meter</span>
                      <span className="text-xs font-semibold text-navy">Rate: ₹{selectedSpace.rate}/hr</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-teal">₹{baseParkingFee}</span>
                      <span className="text-[10px] text-muted block">+ platform fee</span>
                    </div>
                  </div>
                </div>

                {/* Fast-forward button for demo evaluation */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-amber-800 block">Evaluator Shortcut</span>
                    <span className="text-[9px] text-amber-700">Fast-forward timer by 1 hour</span>
                  </div>
                  <button
                    onClick={handleFastForward}
                    className="py-1 px-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-[10px] font-bold flex items-center gap-1 transition-colors"
                  >
                    <FastForward className="w-3 h-3" /> +1 Hour
                  </button>
                </div>

                <button
                  onClick={handleStartLeaving}
                  className="w-full py-3 px-4 bg-navy hover:bg-navy-light text-white rounded-xl font-bold text-xs shadow flex items-center justify-center gap-2 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Tap "I Am Leaving"
                </button>
              </div>
            )}

            {/* SCREEN 6: I Am Leaving & Departure Proof */}
            {screen === 6 && (
              <div className="space-y-3 text-left">
                <h3 className="text-sm font-bold text-navy">Departure Verification</h3>
                <p className="text-xs text-muted">
                  Please capture departure proof to confirm slot is vacated and unlock full deposit refund.
                </p>

                <div className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-sm">
                  {!departurePhotoTaken ? (
                    <div className="border-2 border-dashed border-slate-200 rounded-lg p-5 text-center">
                      <Camera className="w-7 h-7 text-slate-400 mx-auto mb-2" />
                      <p className="text-xs font-medium text-slate-700">Capture Vacated Slot Photo</p>
                      <button
                        onClick={handleTakeDeparturePhoto}
                        className="mt-3 py-1.5 px-3 bg-teal text-white rounded-lg text-xs font-bold shadow hover:bg-teal-dark transition-colors inline-flex items-center gap-1"
                      >
                        <Camera className="w-3.5 h-3.5" /> Confirm Departure
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="h-24 bg-slate-800 rounded-lg relative overflow-hidden flex items-center justify-center text-white">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                        <div className="absolute bottom-1.5 left-2 bg-black/70 backdrop-blur px-2 py-0.5 rounded text-[9px] font-mono text-emerald-400">
                          ● VACATED & CLEAN
                        </div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded text-[10px] font-mono text-slate-600">
                        Departure Time: {departureTimestamp || "11:30:15 AM"}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  disabled={!departurePhotoTaken}
                  onClick={handleGenerateBill}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs shadow flex items-center justify-center gap-1.5 transition-all ${
                    departurePhotoTaken
                      ? 'bg-teal hover:bg-teal-dark text-white cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Generate Final Settlement Invoice
                </button>
              </div>
            )}

            {/* SCREEN 7: Final Bill & Summary */}
            {screen === 7 && (
              <div className="space-y-3 text-left">
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
                  <div className="text-center pb-2 border-b border-slate-100">
                    <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Completed Session
                    </span>
                    <h3 className="text-sm font-bold text-navy mt-1">Settlement Receipt</h3>
                    <p className="text-[10px] text-muted">Booking #PS-8921 · {selectedSpace.slotCode}</p>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted">Total Duration</span>
                      <span className="font-semibold text-navy">
                        {Math.floor(elapsedMinutes / 60)}h {elapsedMinutes % 60}m
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Hourly Rate</span>
                      <span className="font-semibold text-navy">₹{selectedSpace.rate}/hr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Actual Parking Fee</span>
                      <span className="font-semibold text-navy">₹{baseParkingFee}.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Platform Fee (15%)</span>
                      <span className="font-semibold text-navy">₹{platformFee}.00</span>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex justify-between font-bold text-navy">
                      <span>Total Parking Due</span>
                      <span>₹{netDue}.00</span>
                    </div>

                    <div className="pt-2 border-t border-dashed border-slate-200 text-emerald-600 flex justify-between font-semibold">
                      <span>Security Deposit Refund</span>
                      <span>+₹{depositRefund}.00</span>
                    </div>
                  </div>

                  <div className="bg-teal-bg p-2.5 rounded-xl border border-teal/20 text-center">
                    <span className="text-[10px] text-teal-dark font-medium block">
                      Deposit safely refunded to original UPI ID
                    </span>
                    <span className="text-xs font-bold text-navy">
                      Net Debited for Duration: ₹{netDue}.00
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleRestart}
                  className="w-full py-2.5 px-4 bg-navy hover:bg-navy-light text-white rounded-xl font-bold text-xs shadow flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Restart Demo
                </button>
              </div>
            )}

          </div>

          {/* Phone Bottom Home Bar */}
          <div className="pb-2 pt-1 flex justify-center bg-white/90">
            <div className="w-32 h-1 bg-slate-300 rounded-full" />
          </div>

        </div>
      </div>
      <p className="mt-3 text-xs text-muted">
        Interactive prototype simulator running on pure client-side state.
      </p>
    </div>
  )
}
