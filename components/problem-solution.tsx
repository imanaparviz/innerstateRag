import { ArrowRight, Database, Layers, MessageSquare } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Is Your Valuable Data Locked Away?</h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">The Problem</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-1 text-red-500 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" x2="9" y1="9" y2="15" />
                      <line x1="9" x2="15" y1="9" y2="15" />
                    </svg>
                  </div>
                  <p className="text-slate-700">
                    Finding specific information within vast company databases is time-consuming and requires technical
                    expertise.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-1 text-red-500 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" x2="9" y1="9" y2="15" />
                      <line x1="9" x2="15" y1="9" y2="15" />
                    </svg>
                  </div>
                  <p className="text-slate-700">
                    Standard AI models don't understand the unique context of your business data.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-1 text-red-500 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" x2="9" y1="9" y2="15" />
                      <line x1="9" x2="15" y1="9" y2="15" />
                    </svg>
                  </div>
                  <p className="text-slate-700">
                    Untapped potential for insights, efficiency gains, and better decision-making remains hidden in your
                    data silos.
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex items-center">
              <div className="h-px bg-slate-200 flex-1"></div>
              <ArrowRight className="mx-4 text-cyan-500" size={24} />
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Our Solution</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-1 text-emerald-500 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <p className="text-slate-700">
                    We connect your unique data sources (databases, documents, etc.) directly to state-of-the-art LLMs.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-1 text-emerald-500 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <p className="text-slate-700">
                    Ask questions in plain English and receive accurate, context-aware answers drawn exclusively from
                    your proprietary information.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="h-6 w-6 mt-1 text-emerald-500 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <p className="text-slate-700">
                    Empower your teams with instant access to knowledge, streamline workflows, and make data-driven
                    decisions faster.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl opacity-70 transform rotate-3"></div>
            <div className="relative bg-white shadow-lg rounded-xl p-6 border border-slate-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-lg p-4 text-white flex items-center justify-center">
                  <Database className="h-12 w-12" />
                </div>
                <div className="flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#0ea5e9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="col-span-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-4 text-white flex items-center justify-center">
                  <Layers className="h-12 w-12 mr-3" />
                  <span className="text-xl font-semibold">RAG System</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#0ea5e9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="bg-slate-100 rounded-lg p-4 flex items-center justify-center">
                  <MessageSquare className="h-12 w-12 text-slate-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

