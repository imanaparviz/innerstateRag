import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap, Database } from "lucide-react";

export function MarketStats() {
  return (
    <section className="w-full py-12 md:py-16 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            RAG Market Growth & Impact
          </h2>
          <p className="text-gray-500 mt-2">
            The Retrieval Augmented Generation market is experiencing explosive
            growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-600">
                44.7%
              </h3>
              <p className="text-sm text-gray-500 mt-1">CAGR Market Growth</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
                50%
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Reduction in AI Hallucinations
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-600">
                85%
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Knowledge Utilization Increase
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
                3.5x
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                ROI on RAG Implementation
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
