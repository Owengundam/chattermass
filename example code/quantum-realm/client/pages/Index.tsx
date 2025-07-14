import React from "react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-chat-blue font-['Space_Grotesk'] flex flex-col items-center py-8 gap-12 px-4">
      {/* Hero Section with Image and Logo */}
      <div className="w-full max-w-4xl">
        <div className="relative bg-chat-blue border border-black">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4210419cd098e7b740fa5de80cdb289a958e243?width=2212"
            alt="chatMASS Architectural Design Visualization"
            className="w-full h-auto aspect-[553/211] border border-black"
          />
        </div>
      </div>

      {/* Revolutionary AI-Driven Design Section */}
      <section className="w-full max-w-4xl bg-chat-blue border border-black p-5">
        <div className="border-b border-black pb-2 mb-4">
          <h2 className="text-lg font-medium text-black">
            Revolutionary AI-Driven Design
          </h2>
        </div>
        <div className="border-l-[3px] border-black pl-6 py-5">
          <div className="space-y-1 text-chat-text text-sm leading-relaxed">
            <p>
              ChatterMass is a revolutionary AI-driven architectural design tool
              that combines conversational AI with Unity-based ML-Agents for
            </p>
            <p>
              spatial optimization. The platform enables architects to use
              natural language commands to manipulate and optimize architectural
            </p>
            <p>
              massing, fundamentally changing how buildings are designed and
              iterated. With MVRDV expressing interest in both the technology
            </p>
            <p>
              and the developer, ChatterMass represents a significant commercial
              opportunity in the computational design space, positioned to
            </p>
            <p>revolutionize the industry with advanced AI capabilities.</p>
          </div>
        </div>
      </section>

      {/* Core Functionalities Section */}
      <section className="w-full max-w-4xl bg-chat-blue border border-black p-5">
        <div className="border-b border-black pb-2 mb-6">
          <h2 className="text-lg font-medium text-black">
            Core Functionalities
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-chat-green border border-black p-2.5 h-80 flex flex-col justify-end">
            <div className="bg-chat-gray border border-black flex-1"></div>
          </div>
          <div className="bg-chat-red border border-black p-2.5 h-80 flex flex-col justify-end">
            <div className="bg-chat-gray border border-black flex-1"></div>
          </div>
          <div className="bg-chat-orange border border-black p-2.5 h-80 flex flex-col justify-end">
            <div className="bg-chat-gray border border-black flex-1"></div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="w-full max-w-4xl bg-chat-blue border border-black p-5">
        <div className="border-b border-black pb-2 mb-4">
          <h2 className="text-lg font-medium text-black">Live Demo</h2>
        </div>
        <p className="text-chat-text text-sm leading-relaxed mb-6">
          Experience chatterMASS in action: conversational AI commanding Unity
          ML-Agents for real-time architectural massing optimization.
        </p>
        <div className="bg-chat-gray border border-black h-[37rem] w-full aspect-[1062/597]"></div>
      </section>

      {/* Three Column Section: Technical Foundation, Market Position, Why Different */}
      <section className="w-full max-w-4xl bg-chat-blue border border-black p-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Technical Foundation */}
          <div className="bg-chat-green border border-black p-5 flex flex-col">
            <div className="border-b border-black pb-2 mb-6">
              <h3 className="text-lg font-medium text-black">
                Technical Foundation
              </h3>
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  Unity-based 3D visualization
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  ML-Agents reinforcement learning
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  Custom MCP conversational control
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  JSON-driven procedural generation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  Multi-modal evaluation systems
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  RenderTexture popup inspection
                </span>
              </div>
            </div>
          </div>

          {/* Market Position */}
          <div className="bg-chat-red border border-black p-5 flex flex-col">
            <div className="border-b border-black pb-2 mb-4">
              <h3 className="text-lg font-medium text-black">
                Market Position
              </h3>
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  Industry-leading AI integration
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  MVRDV partnership interest
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  Commercial scalability focus
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  Design workflow integration
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  Real-time optimization focus
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  Computational design innovation
                </span>
              </div>
            </div>
          </div>

          {/* Why This Is Different */}
          <div className="bg-chat-orange border border-black p-5 flex flex-col">
            <div className="border-b border-black pb-2 mb-4">
              <h3 className="text-lg font-medium text-black">
                Why this is different
              </h3>
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  First conversational AI massing tool
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  Real-time optimization capabilities
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  Unity ML-Agents integration
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  Natural language design commands
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-sm">▹</span>
                <span className="text-chat-text text-sm leading-relaxed">
                  Workflow integration ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="w-full max-w-4xl bg-chat-blue border border-black p-5">
        <div className="border-b border-black pb-2 mb-4">
          <h2 className="text-lg font-medium text-black">Contact</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-chat-text text-sm">Inquiries:</span>
            <a
              href="mailto:owewhm@gmail.com"
              className="text-black text-sm font-bold hover:underline"
            >
              owewhm@gmail.com
            </a>
          </div>
          <p className="text-chat-text text-sm leading-relaxed">
            Ready to transform your architectural design process with
            conversational AI
          </p>
          <p className="text-chat-text text-sm">
            © 2025 chatterMASS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
