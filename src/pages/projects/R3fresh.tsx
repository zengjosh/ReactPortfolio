import React, { useEffect } from 'react';

const R3fresh: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">
          <a
            href="https://r3fresh.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            r3fresh
          </a>{" "}
          <span className="text-2xl text-gray-600">2025</span>
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none text-gray-700">

            <p className="mb-6">
            Modern AI agents are powerful but opaque. When an autonomous loop fails, developers often lack the reasoning traces or tool-call logs needed to debug the root cause. I built{" "}
              <a
                href="https://r3fresh.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                r3fresh
              </a>{" "}
              to transform these "black box" executions into transparent, traceable workflows, capturing real-time metrics on reasoning steps, tool usage, and policy enforcement.
            </p>

            <p className="mb-6">
              To minimize developer friction, I published a{" "}
              <a
                href="https://pypi.org/project/r3fresh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                PyPI 
              </a>{" "}
              Python SDK that provides "drop-in" instrumentation. Using FastAPI on Railway, the backend ingests telemetry for prompt construction, token usage, and error states. To ensure observability didn't degrade agent performance, I engineered the SDK to be entirely non-blocking, offloading event transmission to background threads.
            </p>

            <p className="mb-6">
            Telemetry is inherently noisy. Initial testing showed that per-event writes to PostgreSQL created significant WAL (Write-Ahead Log) contention. I re-architected the ingestion layer with an asyncio materialization worker that batches 100+ events per transaction. This optimization reduced database contention and improved query latency by 80%, making time-series analytics, like hourly token trends, near-instant.
            </p>

            <p className="mb-6">
              Observability is only valuable if it is actionable. The frontend, built with Next.js and Ant Design, presents structured dashboards for run traces, error clustering, and usage metrics. However, raw JSON logs are often difficult to interpret. To bridge this gap, I integrated a Gemini-powered assistant directly into the dashboard. Rather than simply summarizing logs, the assistant translates structured telemetry into human-readable debugging advice and integration guidance. It can detect recurring failure patterns, explain abnormal latency spikes, and suggest configuration adjustments. By combining structured event data with language model reasoning, the system turns raw telemetry into practical insight.
            </p>

            <p>
            To move beyond a prototype, I integrated Supabase Auth for multi-tenant security and Stripe for usage-based billing. I mapped technical constraints (log retention and ingestion quotas) to subscription tiers, ensuring the system architecture directly supports the business logic. The result is a full-cycle ecosystem that gives developers the operational confidence to deploy agents at scale.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default R3fresh;